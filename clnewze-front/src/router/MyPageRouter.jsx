import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminTeacher from "../components/mypage/admin/teacher";
import AdminPracticeRoom from "../components/mypage/admin/practiceroom";
import AdminSheetMusic from "../components/mypage/admin/sheetmusic";
import AdminDashboard from "../components/mypage/admin/dashboard";
import SubScriptIndex from "../components/mypage/subscript/SubScriptComponent";
import MyCareer from "../components/mypage/career/CareerComponent";
import MyPageTeacherPage from "../pages/mypage/teacher/MyPageTeacherPage";
import MyPagePerformancePage from "../pages/mypage/performance/MyPagePerformancePage";
import UserListPage from "../pages/mypage/admin/UserListPage";
import UserInfoPage from "../pages/mypage/user/UserInfoPage";

const MyPageRouter = () => {
  return (
    <Routes>
      <Route path="/mypage/:id/*" element={<UserInfoPage />} />
      <Route path="/mypage/:id/career" element={<MyCareer />} />
      <Route path="/mypage/:id/teacher" element={<MyPageTeacherPage />} />
      <Route path="/mypage/:id/subscript" element={<SubScriptIndex />} />
      <Route path="/mypage/:id/performance/info" element={<MyPagePerformancePage />} />
      <Route path="/mypage/:id/admin/teacher" element={<AdminTeacher />} />
      <Route
        path="/mypage/admin/user/list"
        element={<UserListPage />}
      />
      <Route
        path="/mypage/admin/practiceroom"
        element={<AdminPracticeRoom />}
      />
      <Route path="/mypage/admin/sheetmusic" element={<AdminSheetMusic />} />
      <Route path="/mypage/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default MyPageRouter;
