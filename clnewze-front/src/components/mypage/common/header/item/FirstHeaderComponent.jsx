import React, {useState} from "react";
import {AppBar, Box, Button, IconButton, Menu, Toolbar,} from "@mui/material";
import {Menu as MenuIcon, Notifications as NotificationsIcon} from "@mui/icons-material";
import UserContainer from "../../../../../hooks/UserContainer";
import {useRecoilValue} from "recoil";
import {userState} from "../../../../../recoil/state/userState";
import CommonContainer from "../../../../../hooks/CommonContainer";
import LoginPage from "../../../../../pages/common/login/LoginPage";
import menuData from "../../../../../data/my/page/myPageMenu.json";
import HeaderDropdownMenuComponent from "./HeaderDropdownMenuComponent";
import {useNavigate} from "react-router-dom";

const FirstHeaderComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const user = useRecoilValue(userState);
  const {toggleIsLoginOpen} = CommonContainer();
  const {handlerLogout} = UserContainer();

  const navigate = useNavigate();

  const onClickLogin = () => {
    toggleIsLoginOpen();
  };

  const onClickLogout = () => {
    handlerLogout();
  };

  return (
    <AppBar position="static" style={{backgroundColor: "#FFF3D4"}}>
      <Toolbar className="flex justify-between">
        <img src={'/logo.png'} alt={'logo'} width={'50px'} className={`cursor-pointer`} onClick={() => navigate('/')}/>

        <Box className="flex items-center space-x-4">
          <Button onClick={user?.uno > -1 ? onClickLogout : onClickLogin}>
            {user?.uno > -1 ? '로그아웃' : '로그인'}
          </Button>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon/>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <HeaderDropdownMenuComponent menuData={menuData?.userInfo} title={"회원 정보"}/>
            <HeaderDropdownMenuComponent menuData={menuData?.uploadInfo} title={"업로드 정보"}/>
            <HeaderDropdownMenuComponent menuData={menuData?.salesInfo} title={"매출 정보"}/>
            {user?.id === 'admin' && (
              <HeaderDropdownMenuComponent menuData={menuData?.adminMenu} title={"관리자 정보"}/>
            )}
          </Menu>
        </Box>
      </Toolbar>
      <LoginPage/>
    </AppBar>
  );
};

export default FirstHeaderComponent;
