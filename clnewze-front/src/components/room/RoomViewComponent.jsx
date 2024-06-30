import React from "react";
import {Box, IconButton, Modal, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RoomContainer from "../../hooks/RoomContainer";
import {useRecoilValue} from "recoil";
import {roomModalDataState, roomModalIsViewOpenState} from "../../recoil/state/roomState";
import {userState} from "../../recoil/state/userState";

const RoomViewComponent = () => {
  const {handleModalClose, handleModalOpen, handleRoomDeleteForm} = RoomContainer();
  const modalData = useRecoilValue(roomModalDataState);
  const isModal = useRecoilValue(roomModalIsViewOpenState);

  // 수정 권한을 위해 user 정의
  const user = useRecoilValue(userState);

  return (
    <Modal open={isModal} onClose={handleModalClose}>
      <Box className="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto my-20 overflow-auto max-h-[90vh]">
        <Box className="flex justify-between items-center mb-4">
          <Typography variant="h5" className="text-2xl font-bold bg-gray-200 p-4 rounded-lg w-full mb-4">
            {modalData?.title}
          </Typography>
          <IconButton onClick={handleModalClose}>
            <CloseIcon/>
          </IconButton>
        </Box>
        <Box className="flex justify-between items-center mb-4">
          <Box className="flex items-center">
            <Typography variant="h6" className="text-xl font-semibold">곡 정보</Typography>
            {
              user?.uno === modalData?.uno &&
              <>
                <IconButton color="primary" onClick={() => handleModalOpen(modalData, 'editor')}>
                  <EditIcon/>
                </IconButton>
                <IconButton color="secondary" onClick={() => handleRoomDeleteForm(modalData?.sno)}>
                  <DeleteIcon/>
                </IconButton>
              </>
            }
          </Box>
          {/*<Typography className="text-sm text-gray-500">조회수 : {modalData?.viewNumber}</Typography>*/}
        </Box>
        <Box className="flex items-start mt-4">
          <img src={modalData?.img} alt="" className="w-48 h-48 object-contain border rounded-lg shadow-sm"/>
          <Box className="ml-4">
            <Typography className="mb-1"><strong>성함</strong> : {modalData?.userName}</Typography>
            <Typography className="mb-1"><strong>위치</strong> : {modalData?.place}</Typography>
            <Typography className="mb-1"><strong>문의 번호</strong> : {modalData?.phone}</Typography>
          </Box>
        </Box>
        <Box className="mt-6">
          <Typography variant="h6" className="text-xl font-semibold mb-2">상세정보</Typography>
          <Box className="bg-gray-100 p-4 rounded-lg shadow-inner max-h-[40vh] overflow-y-auto">
            <Typography>{modalData?.contents}</Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default RoomViewComponent;
