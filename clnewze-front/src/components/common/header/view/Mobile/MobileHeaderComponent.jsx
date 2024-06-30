import React, { useState } from "react";
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon, Notifications as BellIcon } from "@mui/icons-material";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../../recoil/state/userState";
import CommonContainer from "../../../../../hooks/CommonContainer";
import headerData from '../../../../../data/header/headerData.json';

const MobileHeaderComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useRecoilValue(userState);
  const { toggleIsLoginOpen, moveNavPage, moveHrefPage } = CommonContainer();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userMenu = () => {
    handleClose();
    if (user.isLogin) {
      moveHrefPage("/mypage/" + user?.id);
    } else {
      toggleIsLoginOpen();
    }
  };

  const moveHeader = (category, isView) => {
    handleClose();
    if (isView) {
      moveNavPage(category);
    } else {
      alert('빠른 시일 내에 개발하여 서비스 제공하겠습니다.');
    }
  };

  return (
    <Box className="w-full min-h-[5vh] bg-[#FFF3D4] text-[#7F3300] z-[1000]">
      <Box position="static" className="bg-[#FFF3D4] shadow-none">
        <Toolbar className="flex justify-between">
          <Box className="w-5%">
            <a href="/">
              <img src="/logo.png" alt="" width={'50px'} />
            </a>
          </Box>
          <Box className="flex items-center space-x-4">
            <IconButton color="inherit">
              <BellIcon className="text-[#7F3300]" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <MenuIcon className="text-[#7F3300]" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={userMenu}>
                {user?.isLogin ? ` ${user.userName}` : "로그인"}
              </MenuItem>
              {headerData?.map((data, index) => (
                <MenuItem
                  key={index}
                  onClick={() => moveHeader(data?.category, data?.isView)}
                >
                  {data?.menuName}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </Box>
  );
};

export default MobileHeaderComponent;
