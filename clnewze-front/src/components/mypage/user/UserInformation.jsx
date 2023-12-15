import React, { useState } from "react";
import UserLoginForm from "./login/UserLoginForm";
import styles from "./user.module.scss";

const UserInfomation = () => {
  // state 부
  const [isView, setIsView] = useState(false); // true : 보여줌, false : 로그인 상태 유지
  return (
    <div className={`m-5`} style={{ textAlign: "left" }}>
      <h1>회원 정보</h1>
      <br />
      <br />
      {isView ? (
        <div>보유줌</div>
      ) : (
        <div className={`${styles?.componentCenterAlign}`}>
          <UserLoginForm setIsView={setIsView}/>
        </div>
      )}
    </div>
  );
};

export default UserInfomation;
