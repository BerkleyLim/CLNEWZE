import React from "react";
import { Routes, Route } from "react-router-dom";

import MypageInfo from "../user/UserInformation";
import AdminTeacher from "../admin/teacher";
import AdminPracticeRoom from "../admin/practiceroom";
import AdminSheetMusic from "../admin/sheetmusic";
import AdminDashboard from "../admin/dashboard";
import SubScriptIndex from "../subscript/SubScriptComponent";
import MyCareer from "../career/CareerComponent";
import MyPageTeacherPage from "../../../pages/mypage/teacher/MyPageTeacherPage";
import MyPagePerformancePage from "../../../pages/mypage/performance/MyPagePerformancePage";

const MyPageRouter = () => {
  return (
    <Routes>
      <Route path="/mypage/*" element={<MypageInfo />} />
      <Route path="/mypage/career" element={<MyCareer />} />
      <Route path="/mypage/teacher" element={<MyPageTeacherPage />} />
      <Route path="/mypage/subscript" element={<SubScriptIndex />} />
      <Route path="/mypage/performance/info" element={<MyPagePerformancePage />} />
      <Route path="/mypage/admin/teacher" element={<AdminTeacher />} />
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
