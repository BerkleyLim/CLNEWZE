import React from "react";
import { AppBar, Box, Toolbar, Typography, Avatar } from "@mui/material";
import { useRecoilValue } from "recoil";
import { anotherUserState } from "../../../../recoil/state/userState";
import FirstHeaderComponent from "./item/FirstHeaderComponent";
import { PersonCircle } from "react-bootstrap-icons";

const MyPageMobileHeaderComponent = () => {
  const anotherUser = useRecoilValue(anotherUserState);

  return (
    <Box className="bg-[#FFF3D4] w-full">
      <FirstHeaderComponent />
      <AppBar position="static" className="bg-transparent shadow-none">
        <Toolbar>
          <Box className="flex items-center space-x-4">
            <Avatar className="bg-white w-10 h-10">
              <PersonCircle className="text-gray-500" size={40} />
            </Avatar>
            <Box>
              <Typography variant="h6">{anotherUser?.id}</Typography>
              <Typography variant="body1">소개 : {anotherUser?.id} 님의 페이지 입니다.</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyPageMobileHeaderComponent;
