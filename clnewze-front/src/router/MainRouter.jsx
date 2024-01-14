import React from "react";

import { Routes, Route } from "react-router-dom";
import MainPage from "../components/main/MainComponent";
import Header from "../components/commom/header/HeaderComponent";
import Footer from "../components/commom/footer/FooterComponent";

import Introduction from "../components/introduction/index";
import Blog from "../components/blog/index";

import TeacherPage from "../pages/teacher/TeacherPage";
import SheetMusicPage from "../pages/sheetmusic/SheetMusicPage";
import PracticeRoomPage from "../pages/practiceroom/PracticeRoomPage";
import PerformancePage from "../pages/performance/PerformancePage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/performance" element={<PerformancePage />} />
      <Route path="/practiceRoom/:pageNo" element={<PracticeRoomPage />} />
      <Route path="/sheetmusic/:pageNo" element={<SheetMusicPage />} />
      <Route path="/teacher/:pageNo" element={<TeacherPage />} />
      <Route path="/blog/:pageNo" element={<Blog />} />
    </Routes>
  );
};

export default MainRouter;
