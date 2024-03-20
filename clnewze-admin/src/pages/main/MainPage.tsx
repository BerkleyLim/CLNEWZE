import React from "react";
import styles from "../../css/main/main.module.scss";
import MainMenuComponent from "../../components/main/menu/MainMenuComponent";
import MainHeaderComponent from "../../components/main/header/MainHeaderComponent";
import MainComponentRouter from "../../router/MainComponentRouter";

const MainPage = () => {
  return (
    <div className={`${styles?.mainContainer}`}>
      {/* MenuComponent 안에 메뉴에서 router component 사용 시 Router 안에 감싸줘야함 */}
        {/* 메인 메뉴 컴포넌트 영역 */}
        <MainMenuComponent />

        <div className={`${styles?.mainComponents}`}>
          {/* 오른쪽 컴포넌트에서 header 부분 표시 */}
          <MainHeaderComponent />

          {/* 여기는 라우터 컴포넌트를 위한 설정 */}
          <div className={`p-5`}>
            <MainComponentRouter />
            {/* <Routes>
              <Route path="/" element={<RegisterManagementPage />}></Route>
              <Route
                path="/register"
                element={<RegisterManagementPage />}
              ></Route>
            </Routes> */}
          </div>
        </div>
    </div>
  );
};

export default MainPage;
