import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MyPage from "./pages/mypage/MyPage";
import MainPage from "./pages/main/MainPage";

function App() {
  return (
    // <div className="App">
    <div>
      <Router>
        {/* 경로의 따라 view 기본 셋팅 조정 */}
        {!window.location.href.includes("/mypage") || !window.location.href.includes("/admin") ? (
          <MainPage />
        ) : (
          <MyPage />
        )}
      </Router>
    </div>
  );
}

export default App;
