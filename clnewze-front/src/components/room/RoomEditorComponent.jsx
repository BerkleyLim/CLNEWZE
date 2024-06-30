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
import ImageIcon from '@mui/icons-material/Image'; // 이미지 아이콘을 사용합니다.
import { useRecoilState, useRecoilValue } from "recoil";
import {
  roomIsEditorModeState,
  roomModalDataState,
  roomModalIsEditorOpenState,
  roomImageFileState,
  roomImagePreviewState
} from "../../recoil/state/roomState";
import RoomContainer from "../../hooks/RoomContainer";
import { userState } from "../../recoil/state/userState";

const RoomEditorComponent = () => {
  const { handleModalClose, useQueryRoomsGenreList, handleRoomCreateForm, handleRoomUpdateForm } = RoomContainer();

  const user = useRecoilValue(userState);

  const [modalData, setModalData] = useRecoilState(roomModalDataState);
  const isModal = useRecoilValue(roomModalIsEditorOpenState);

  const { data: CategoriesList } = useQueryRoomsGenreList();

  // 미리보기용
  const [imagePreview, setImagePreview] = useRecoilState(roomImagePreviewState);

  // 이미지 원본 파일
  const [imageFile, setImageFile] = useRecoilState(roomImageFileState);

  // 아래는 추가 모드인가, 수정 모드인가 구분자 짓기용
  // 값이 true = 수정 모드, false = 추가 모드
  const isEditorMode = useRecoilValue(roomIsEditorModeState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData({
      ...modalData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 추가 or 수정 이벤트 용 (save or update 버튼 클릭 시)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    let roomDTO = {
      modalData,
      uno: user?.uno
    };
    formData.append("file", imageFile);
    formData.append("roomDTO", new Blob([JSON.stringify(roomDTO)], { type: "application/json" }));


    if (isEditorMode) {
      handleRoomUpdateForm(formData);
    } else {
      handleRoomCreateForm(formData);
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
            <Typography variant="h6">{modalData ? "Edit Room" : "Add Room"}</Typography>
            <IconButton onClick={handleModalClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <IconButton component="label">
              <ImageIcon />
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
            </IconButton>
            {imagePreview && (
              <img src={imagePreview} alt="Image Preview" style={{ width: '150px', height: '150px', objectFit: 'cover', marginLeft: '16px' }} />
            )}
          </Box>
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
              label="place"
              name="place"
              value={modalData.categories}
              onChange={handleChange}
              inputProps={{ id: 'genre-select' }}
            >
              {CategoriesList?.data.map((data, index) => (
                <MenuItem key={index} value={data?.categories}>{data?.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Name"
            name="userName"
            value={modalData.userName}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={modalData.phone}
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

export default RoomEditorComponent;
