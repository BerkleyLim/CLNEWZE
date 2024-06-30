import React from "react";
import MyPageMobileHeaderComponent from "../../components/mypage/common/header/MyPageMobileHeaderComponent";
import { Outlet } from "react-router-dom";

const MyPageMobilePage = () => {
  return (
    <div>
      {/* 헤더 표시 */}
      <MyPageMobileHeaderComponent />
      {/* 마이페이지 카테고리 */}
      <div className="p-4 bg-white rounded">
        <Outlet />
      </div>
    </div>
  );
};

export default MyPageMobilePage;
