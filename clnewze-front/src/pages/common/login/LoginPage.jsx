import React from "react";
import SignInComponent from "../../../components/common/login/SignInComponent";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useRecoilValue } from "recoil";
import { isLoginOpenState } from "../../../recoil/state/commonState";
import CommonContainer from "../../../hooks/CommonContainer";

const LoginPage = () => {
  const { toggleIsLoginOpen } = CommonContainer();
  const isLoginOpen = useRecoilValue(isLoginOpenState);

  return (
    <Modal open={isLoginOpen} onClose={toggleIsLoginOpen} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box className="p-4 bg-white rounded shadow-lg w-full max-w-lg mx-auto">
        <Box className="flex justify-between items-center mb-4">
          <Typography variant="h6">Clnewze 로그인</Typography>
          <IconButton onClick={toggleIsLoginOpen}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className="w-full">
          <SignInComponent />
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginPage;
