import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainView from "./components/main/index";
import Header from "./components/commom/header/index";
import Footer from "./components/commom/footer/index";

import Introduction from "./components/introduction/index";
import Performance from "./components/performance/index";
import PracticeRoom from "./components/practiceRoom/index";
import SheetMusic from "./components/sheetmusic/index";
import Teacher from "./components/teacher/index";
import Blog from "./components/blog/index";

import MypageHeader from "./components/mypage/header";
import Mypage from "./components/mypage/index";

function App() {
  return (
    <div className="App">
      <Router>
        {!window.location.href.includes("/mypage") ? (
          <Header />
        ) : (
          <MypageHeader />
        )}

        {!window.location.href.includes("/mypage") ? (
          <div className="container">
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/introduction/:pageNo" element={<Introduction />} />
              <Route path="/performance/:pageNo" element={<Performance />} />
              <Route path="/practiceRoom/:pageNo" element={<PracticeRoom />} />
              <Route path="/sheetmusic/:pageNo" element={<SheetMusic />} />
              <Route path="/teacher/:pageNo" element={<Teacher />} />
              <Route path="/blog/:pageNo" element={<Blog />} />
            </Routes>
          </div>
        ) : (
          <div className="mypage-container">
            <Mypage />
          </div>
        )}
        {!window.location.href.includes("/mypage") && <Footer />}
      </Router>
    </div>
  );
}

export default App;
