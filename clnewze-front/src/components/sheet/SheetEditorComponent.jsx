import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useRecoilState, useRecoilValue } from "recoil";
import {
  sheetIsEditorModeState,
  sheetModalDataState,
  sheetModalIsEditorOpenState,
  sheetPdfFileState,
  sheetPdfPreviewState
} from "../../recoil/state/sheetState";
import SheetContainer from "../../hooks/SheetContainer";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.entry";
import {userState} from "../../recoil/state/userState";

// PDF.js worker 설정
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const SheetEditorComponent = () => {
  const { handleModalClose, useQuerySheetsGenreList, handleSheetCreateForm, handleSheetUpdateForm } = SheetContainer();

  const user = useRecoilValue(userState);

  const [modalData, setModalData] = useRecoilState(sheetModalDataState);
  const isModal = useRecoilValue(sheetModalIsEditorOpenState);

  const { data: GenreList } = useQuerySheetsGenreList();

  // 미리보기용
  const [pdfPreview, setPdfPreview] = useRecoilState(sheetPdfPreviewState);

  // pdf 원본 파일
  const [pdfFile, setPdfFile] = useRecoilState(sheetPdfFileState);

  // 아래는 추가 모드인가, 수정 모드인가 구분자 짓기용
  // 값이 true = 수정 모드, false = 추가 모드
  const isEditorMode = useRecoilValue(sheetIsEditorModeState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData({
      ...modalData,
      [name]: value,
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setPdfFile(file);

    if (file && file.type === 'application/pdf') {
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        const pdfData = new Uint8Array(fileReader.result);
        const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport: viewport }).promise;
        setPdfPreview(canvas.toDataURL());
      };
      fileReader.readAsArrayBuffer(file);
    }
  };

  // 추가 or 수정 이벤트 용 (save or update 버튼 클릭 시)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("file", pdfFile);
    // formData.append("sheetDTO", JSON.stringify(sheetDTO)); // Serialize modalData to JSON string

    let sheetDTO = {
      modalData,
      uno: user?.uno
    }
    formData.append("file", pdfFile);
    formData.append("sheetDTO", new Blob([JSON.stringify(sheetDTO)], { type: "application/json" }));


    console.log(JSON.stringify(modalData));

    if (isEditorMode) {
      handleSheetUpdateForm(formData);
    } else {
      handleSheetCreateForm(formData);
    }
    handleModalClose();
  };

  return (
    <Modal open={isModal} onClose={handleModalClose}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 3, width: '100%', maxWidth: 600, overflowY: 'auto' }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">{modalData ? "Edit Artist" : "Add Artist"}</Typography>
            <IconButton onClick={handleModalClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <IconButton component="label">
              <PictureAsPdfIcon />
              <input
                type="file"
                accept="application/pdf"
                hidden
                onChange={handleFileChange}
              />
            </IconButton>
            {pdfPreview && (
              <img src={pdfPreview} alt="PDF Preview" style={{ width: '150px', height: '150px', objectFit: 'cover', marginLeft: '16px' }} />
            )}
          </Box>
          <TextField
            label="Artist"
            name="artist"
            value={modalData.artist}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <TextField
            label="Title"
            name="title"
            value={modalData.title}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel shrink htmlFor="genre-select">Genre</InputLabel>
            <Select
              label="Genre"
              name="genre"
              value={modalData.genre}
              onChange={handleChange}
              inputProps={{ id: 'genre-select' }}
            >
              {GenreList?.data.map((data, index) => (
                <MenuItem key={index} value={data?.category}>{data?.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Release Date"
            name="releaseDate"
            value={modalData.releaseDate}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <TextField
            label="Album Name"
            name="albumName"
            value={modalData.albumName}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <TextField
            label="Music Link"
            name="musicLink"
            value={modalData.musicLink}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <TextField
            label="Contents"
            name="contents"
            value={modalData.contents}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button type="submit" variant="contained" color="primary">
              {
                isEditorMode ?
                  'Update'
                  :
                  'Save'
              }
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SheetEditorComponent;
