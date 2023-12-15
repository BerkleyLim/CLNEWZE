import React from "react";
import UserLoginForm from "./login/UserLoginForm";
import styles from "./user.module.scss"

const UserInfomation = () => {
  return (
    <div className={`m-5`} style={{textAlign: "left"}}>
      <h1>회원 정보</h1>
      <br/><br/>
      <div className={`${styles?.componentCenterAlign}`}>
        <UserLoginForm />
      </div>
    </div>
  );
};

export default UserInfomation;
