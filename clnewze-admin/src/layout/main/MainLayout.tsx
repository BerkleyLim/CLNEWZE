import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MainMenuComponent from "../../components/main/menu/MainMenuComponent";
import MainHeaderComponent from "../../components/main/header/MainHeaderComponent";

const MainLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (pathname === '/' || pathname === '/admin-server/') {
      if (!user?.isLogin) {
        navigate('/admin-server/login');
      }
    }
  }, [pathname, navigate, user]);

  return (
    <div className="min-h-screen w-full mx-auto flex flex-wrap">
      <MainHeaderComponent />
      <div className="flex flex-wrap w-full">
        <MainMenuComponent />
        <div className="flex-grow p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
