import React, {useEffect} from 'react';
import styles from "../../css/login/login.module.scss";
import LoginComponent from "../../components/login/LoginComponent";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const LoginLayout = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation();

  // 로그인과 메뉴 퍼블리싱 작업 한 것 확인을 위해 임시로 추가
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (pathname === '/' || pathname === '/admin-server/') {
      // 여기는 리다리렉션
      // 여기는 리다리렉션
      if(user?.isLogin) {
        navigate('/admin-server/main')
      }
    }

  },[])
  return (
    <div className={`${styles?.loginContainer}`}>
      <LoginComponent/>
    </div>
  );
}

export default LoginLayout;
