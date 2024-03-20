import React, {useEffect} from 'react';
import HeaderComponent from "../components/commom/header/HeaderComponent";
import Footer from "../components/commom/footer/FooterComponent";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

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
    </div>
  );
}

export default UserRouterLayout;