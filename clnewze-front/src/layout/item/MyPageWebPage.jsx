import React from "react";
import MyPageMenuComponent from "../../components/mypage/common/menu/MyPageMenuComponent";
import MyPageWebHeaderComponent from "../../components/mypage/common/header/MyPageWebHeaderComponent";
import { Outlet } from "react-router-dom";

const MyPageWebPage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* 헤더 표시 */}
      <MyPageWebHeaderComponent />
      {/* 마이페이지 카테고리 */}
      <div className="w-full flex">
        <div className="flex-none p-2">
          <div className="w-[200px]">
            <MyPageMenuComponent />
          </div>
        </div>
        {/* 영역 출력 */}
        <div className="flex-grow p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MyPageWebPage;
