import React from "react";
import styles from "../../css/login/login.module.scss";
import LoginComponent from "../../components/login/LoginComponent";

const LoginPage = () => {
  return (
    <div className={`${styles?.loginContainer}`}>
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
