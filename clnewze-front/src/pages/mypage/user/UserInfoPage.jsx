import React, { useState } from "react";
import UserLoginForm from "../../../components/mypage/user/login/UserLoginForm";
import UserInfoComponent from "../../../components/mypage/user/info/UserInfoComponent";
import { useRecoilValue } from "recoil";
import { innerWidthState } from "../../../recoil/state/commonState";

const UserInfoPage = () => {
  // state 부
  const [isView, setIsView] = useState(false); // true : 보여줌, false : 로그인 상태 유지
  const innerWidth = useRecoilValue(innerWidthState);
  return (
    <div
      className={`py-2`}
    >
      <h4 className="text-left mb-4 font-bold text-3xl">회원 정보</h4>
      <br/>
      <br/>
      {isView ? (
        <UserInfoComponent/>
      ) : (
        <div className="flex justify-center">
          <UserLoginForm setIsView={setIsView}/>
        </div>
      )}
    </div>
  );
};

export default UserInfoPage;
