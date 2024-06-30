import React, {useEffect} from 'react';
import HeaderComponent from "../components/common/header/HeaderComponent";
import Footer from "../components/common/footer/FooterComponent";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import LoginPage from "../pages/common/login/LoginPage";

const UserRouterLayout = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === '/') {
      navigate('/main')
    }
  }, []);


  return (
    <div className="App">
      <HeaderComponent/>
      <div className="container">
        {/* 아래는 라우터 컴포넌트 */}
        <Outlet/>
      </div>
      <Footer/>

      {/* 모달 영역*/}
      <LoginPage/>
    </div>
  );
}

export default UserRouterLayout;
