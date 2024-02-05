import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MyPage from "./pages/mypage/MyPage";
import MainPage from "./pages/main/MainPage";
import SignOnPage from "./pages/signon/SignOnPage";

function App() {
  return (
    // <div className="App">
    <div>
      <Router>
        {/* 경로의 따라 view 기본 셋팅 조정 */}
        {/* mypage/admin , main, 로그인/회원가입정보 */}

        {
          window.location.href.includes("/signon") ?
          <SignOnPage /> :
            !window.location.href.includes("/mypage") && !window.location.href.includes("/admin") ? (
              <MainPage />
            ) : (
              <MyPage />
            )
        }

      </Router>
    </div>
  );
}

export default App;
