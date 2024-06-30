import React from "react";
import UserContainer from "../../../hooks/UserContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const MainHeaderComponent = () => {
  // react custom hook 불려오기
  const { logout } = UserContainer();

  // 전역 redux 값 불려오기
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="min-h-[10vh] flex flex-col items-end justify-center w-full text-lg border-b-8 border-custom-yellow">
      <div className="flex flex-row py-8 w-full">
        <div className="px-10" style={{ width: '300px' }}>
          최근 IP 주소 :
          <span className="text-blue-500">{user?.userName}</span>
        </div>
        <div className="px-10" style={{ width: '300px' }}>
          최근 접속일 :
          <span className="text-blue-500">{user?.userName}</span>
        </div>
        <div className="px-10" style={{ width: '300px' }}>
          <span className="text-blue-500">{user?.userName}</span>님 환영합니다.
        </div>
        <div
          className="px-20 cursor-pointer"
          style={{ border: "none", background: "none" }}
          onClick={() => logout()}
        >
          로그아웃
        </div>
      </div>
    </div>
  );
};

export default MainHeaderComponent;
