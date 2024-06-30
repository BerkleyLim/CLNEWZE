import {RouterProvider} from "react-router-dom";
import router from "./router/router";

const App = () => {

  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/>
      {/*<BrowserRouter>*/}
      {/*  {*/}
      {/*    user?.isLogin ?*/}
      {/*      // 로그인 했으면 메인으로 바로 진입*/}
      {/*      <MainPage/>*/}
      {/*      :*/}
      {/*      // 로그인이 안되어 있으면 로그인 화면 뜨게 함*/}
      {/*      <LoginComponentRouter/>*/}
      {/*  }*/}
      {/*</BrowserRouter>*/}
    </div>
  );
}

export default App;