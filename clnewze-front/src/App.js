import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import Header from "./components/commom/header/HeaderComponent";
import Footer from "./components/commom/footer/FooterComponent";

import Introduction from "./components/introduction/index";
import Blog from "./components/blog/index";

import MypageHeader from "./components/mypage/header/HeaderIndex";
import TeacherPage from "./pages/teacher/TeacherPage";
import SheetMusicPage from "./pages/sheetmusic/SheetMusicPage";
import PracticeRoomPage from "./pages/practiceroom/PracticeRoomPage";
import PerformancePage from "./pages/performance/PerformancePage";
import MyPage from "./pages/mypage/MyPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* 경로의 따라 view 기본 셋팅 조정 */}
        {!window.location.href.includes("/mypage") ? (
          <>
            <Header />
            <div className="container">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/performance" element={<PerformancePage />} />
                <Route
                  path="/practiceRoom/:pageNo"
                  element={<PracticeRoomPage />}
                />
                <Route path="/sheetmusic/:pageNo" element={<SheetMusicPage />} />
                <Route path="/teacher/:pageNo" element={<TeacherPage />} />
                <Route path="/blog/:pageNo" element={<Blog />} />
              </Routes>
            </div>
            <Footer />
          </>
        ) : (
          // <>
          //   <MypageHeader />
          //   <div className="mypage-container">
          //     <MyPage />
          //   </div>
          // </>
          <MyPage />
        )}
      </Router>
    </div>
  );
}

export default App;
