import React from "react";
import { Routes, Route } from "react-router-dom";

import MypageInfo from "../components/mypage/user/UserInformation";
import AdminTeacher from "../components/mypage/admin/teacher";
import AdminPracticeRoom from "../components/mypage/admin/practiceroom";
import AdminSheetMusic from "../components/mypage/admin/sheetmusic";
import AdminDashboard from "../components/mypage/admin/dashboard";
import SubScriptIndex from "../components/mypage/subscript/SubScriptComponent";
import MyCareer from "../components/mypage/career/CareerComponent";
import MyPageTeacherPage from "../pages/mypage/teacher/MyPageTeacherPage";
import MyPagePerformancePage from "../pages/mypage/performance/MyPagePerformancePage";

const MyPageRouter = () => {
  return (
    <Routes>
      <Route path="/mypage/:id/*" element={<MypageInfo />} />
      <Route path="/mypage/:id/career" element={<MyCareer />} />
      <Route path="/mypage/:id/teacher" element={<MyPageTeacherPage />} />
      <Route path="/mypage/:id/subscript" element={<SubScriptIndex />} />
      <Route path="/mypage/:id/performance/info" element={<MyPagePerformancePage />} />
      <Route path="/mypage/:id/admin/teacher" element={<AdminTeacher />} />
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
