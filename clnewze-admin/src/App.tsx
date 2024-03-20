import MainPage from "./pages/main/MainPage";
import { BrowserRouter } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "./redux/state/userState";
import LoginComponentRouter from "./router/LoginComponentRouter";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";

const App = () => {
  // 로그인과 메뉴 퍼블리싱 작업 한 것 확인을 위해 임시로 추가
  // const [user, setUser] = useRecoilState(userState);
  const user = useSelector((state: RootState) => state.user)

  console.log(user)
  // 로그인 버튼 클릭시 메인으로 진입, 새로고침시 다시 로그인으로 돌아감
  // const handlerLogin = () => {
  //   setUser({
  //     ...user,
  //     isLogin:true
  //   })
  //   window.location.href = "/"
  // }

  return (
    <div className="App">
      <BrowserRouter>
      {
        user?.isLogin? 
        // 로그인 했으면 메인으로 바로 진입
          <MainPage />
        :
        // 로그인이 안되어 있으면 로그인 화면 뜨게 함
          <LoginComponentRouter />
            // <Routes>
            //   <Route path="/" element={<LoginPage />}/>
            //   <Route path="/login" element={<LoginPage />}/>
            // </Routes>
      }
      </BrowserRouter>
    </div>
  );
}

export default App;