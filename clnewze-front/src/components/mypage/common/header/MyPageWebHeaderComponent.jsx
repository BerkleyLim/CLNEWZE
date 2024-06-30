import React from "react";
import { AppBar, Box, Toolbar, Typography, Avatar } from "@mui/material";
import { useRecoilValue } from "recoil";
import { myPageHeaderSubScriptModalIsOpenState } from "../../../../recoil/state/myPageHeaderState";
import { anotherUserState } from "../../../../recoil/state/userState";
import FirstHeaderComponent from "./item/FirstHeaderComponent";
import HeaderTwoRightComponent from "./item/HeaderTwoRightComponent";
import SubScriptModalComponent from "./item/SubScriptModalComponent";
import { PersonCircle } from "react-bootstrap-icons";

const MyPageWebHeaderComponent = () => {
  const isSubScriptModal = useRecoilValue(myPageHeaderSubScriptModalIsOpenState);
  const anotherUser = useRecoilValue(anotherUserState);

  return (
    <Box className="bg-[#FFF3D4] w-full mb-5">
      <FirstHeaderComponent />
      <AppBar position="static" className="bg-transparent shadow-none mx-auto max-w-[1200px]">
        <Toolbar className="flex items-center justify-between">
          <Box className="flex items-center space-x-4 flex-grow-0">
            <Avatar className="bg-white w-15 h-15">
              <PersonCircle className="text-gray-500" size={60} />
            </Avatar>
            <Box>
              <Typography variant="h6">{anotherUser?.userName}</Typography>
              <Typography variant="body1">소개 : {anotherUser?.userName} 님의 페이지 입니다.</Typography>
            </Box>
          </Box>
          <Box className="w-1/4">
            <HeaderTwoRightComponent />
          </Box>
        </Toolbar>
      </AppBar>
      {isSubScriptModal && <SubScriptModalComponent />}
    </Box>
  );
};

export default MyPageWebHeaderComponent;
