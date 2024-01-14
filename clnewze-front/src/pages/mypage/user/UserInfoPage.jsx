import React, { useState } from "react";
import UserLoginForm from "../../../components/mypage/user/login/UserLoginForm";
import styles from "../../../scss/mypage/user/info/user.module.scss";
import UserInfoComponent from "../../../components/mypage/user/info/UserInfoComponent";

const UserInfoPage = () => {
  // state 부
  // const [isView, setIsView] = useState(false); // true : 보여줌, false : 로그인 상태 유지
  const [isView, setIsView] = useState(true); // true : 보여줌, false : 로그인 상태 유지
  return (
    <div className={`m-5`} style={{ textAlign: "left" }}>
      <h1>회원 정보</h1>
      <br />
      <br />
      {isView ? (
        <UserInfoComponent />
      ) : (
        <div className={`${styles?.componentCenterAlign}`}>
          <UserLoginForm setIsView={setIsView}/>
        </div>
      )}
    </div>
  );
};

export default UserInfoPage;
