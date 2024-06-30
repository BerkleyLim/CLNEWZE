import React from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Typography,} from "@mui/material";
import {Notifications as BellIcon, Person as PersonIcon} from "@mui/icons-material";
import {useRecoilValue} from "recoil";
import {userState} from "../../../../../recoil/state/userState";
import CommonContainer from "../../../../../hooks/CommonContainer";
import headerData from "../../../../../data/header/headerData.json";

const WebHeaderComponent = () => {
  const {toggleIsLoginOpen, moveNavPage, moveHrefPage} = CommonContainer();
  const user = useRecoilValue(userState);

  const userMenu = () => {
    if (user.isLogin) {
      moveHrefPage("/mypage/" + user?.id);
    } else {
      toggleIsLoginOpen();
    }
  };

  const moveHeader = (category, isView) => {
    if (isView) {
      moveNavPage(category);
    } else {
      alert("빠른 시일 내에 개발하여 서비스 제공하겠습니다.");
    }
  };

  return (
    <Box className="w-full min-h-[10vh] bg-[#FFF3D4] z-[1000]">
      <Box className="flex justify-center items-center max-w-[1200px] mx-auto">
        <Box className="w-1/12">
          <a href="/">
            <img src="/logo.png" alt="" width={'100px'}/>
          </a>
        </Box>
        <Box className="w-11/12">
          <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
            <Toolbar className="flex justify-end">
              <Box className="flex items-center space-x-6"> {/* 간격을 넓게 조정 */}
                <Button
                  color="inherit"
                  onClick={() => userMenu()}
                  className="flex items-center text-[#7F3300] hover:text-[#5A2D00] bg-transparent px-4 py-2 rounded-md transition-all duration-300"
                  sx={{
                    '& .MuiTypography-root': {
                      color: '#7F3300',
                      '&:hover': {
                        color: '#5A2D00', // 호버 시 텍스트 색상 변경
                      },
                    },
                    '&:hover': {
                      backgroundColor: '#FFE4B5', // 호버 시 배경 색상 추가
                    },
                  }}
                >
                  <PersonIcon className="mr-2" /> {/* 아이콘과 텍스트 사이의 간격 조정 */}
                  <Typography variant="body1">
                    {user?.isLogin ? ` ${user.userName}` : " 로그인"}
                  </Typography>
                </Button>
                <IconButton
                  color="inherit"
                  className="text-[#7F3300] hover:text-[#5A2D00] bg-transparent p-2 rounded-full transition-all duration-300"
                  sx={{
                    '&:hover': {
                      backgroundColor: '#FFE4B5', // 호버 시 배경 색상 추가
                    },
                  }}
                >
                  <BellIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <AppBar position="static" color="transparent" sx={{boxShadow: "none"}}>
            <Toolbar className="flex justify-between">
              {headerData?.map((data, index) => (
                <Button
                  key={index}
                  onClick={() => moveHeader(data?.category, data?.isView)}
                  sx={{mx: 2, fontSize: '1rem', color: '#1E3A8A', '&:hover': {color: '#1E40AF'}}}
                >
                  {data?.menuName}
                </Button>
              ))}
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
      {/*<LoginPage />*/}
    </Box>
  );
};

export default WebHeaderComponent;
