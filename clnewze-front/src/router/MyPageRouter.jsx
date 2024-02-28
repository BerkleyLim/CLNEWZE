import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../components/mypage/admin/dashboard";
import SubScriptIndex from "../components/mypage/subscript/SubScriptComponent";
import MyCareer from "../components/mypage/career/CareerComponent";
import MyPageTeacherPage from "../pages/mypage/teacher/MyPageTeacherPage";
import MyPagePerformancePage from "../pages/mypage/performance/MyPagePerformancePage";
import UserListPage from "../pages/mypage/admin/UserListPage";
import UserInfoPage from "../pages/mypage/user/UserInfoPage";
import AdminTeacherPage from "../pages/mypage/admin/AdminTeacherPage";
import MyPageSheetMusicPage from "../pages/mypage/sheetmusic/MyPageSheetMusicPage";

const MyPageRouter = () => {
  return (
    <Routes>
      <Route path="/mypage/:id/*" element={<UserInfoPage />} />
      <Route path="/mypage/:id/career" element={<MyCareer />} />
      <Route path="/mypage/:id/teacher" element={<MyPageTeacherPage />} />
      <Route path="/mypage/:id/subscript" element={<SubScriptIndex />} />
      <Route path="/mypage/:id/performance/info" element={<MyPagePerformancePage />} />
      <Route path="/mypage/:id/sheetmusic/info" element={<MyPageSheetMusicPage />} />
      <Route path="/admin/admin/user/list" element={<UserListPage />} />
      <Route path="/admin/admin/teacher" element={<AdminTeacherPage />} />
      <Route path="/admin/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default MyPageRouter;
