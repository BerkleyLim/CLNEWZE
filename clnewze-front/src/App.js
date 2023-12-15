import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainView from "./components/main/index";
import Header from "./components/commom/header/HeaderComponent";
import Footer from "./components/commom/footer/FooterComponent";

import Introduction from "./components/introduction/index";
import Performance from "./components/performance/index";
import PracticeRoom from "./components/practiceRoom/PracticeRoomComponent";
import SheetMusic from "./components/sheetmusic/SheetMusicComponent";
import Teacher from "./components/teacher/TeachersComponent";
import Blog from "./components/blog/index";

import MypageHeader from "./components/mypage/header/web/MyPageHeader";
import Mypage from "./components/mypage/MyPageComponent";

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
                <Route path="/" element={<MainView />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/performance" element={<Performance />} />
                <Route
                  path="/practiceRoom/:pageNo"
                  element={<PracticeRoom />}
                />
                <Route path="/sheetmusic/:pageNo" element={<SheetMusic />} />
                <Route path="/teacher/:pageNo" element={<Teacher />} />
                <Route path="/blog/:pageNo" element={<Blog />} />
              </Routes>
            </div>
            <Footer />
          </>
        ) : (
          <>
            <MypageHeader />
            <div className="mypage-container">
              <Mypage />
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
