import React from "react";

import HeaderComponent from "../../components/commom/header/HeaderComponent";
import Footer from "../../components/commom/footer/FooterComponent";
import MainRouter from "../../router/MainRouter";

const MainPage = () => {
  return (
    <div className="App">
      <HeaderComponent />
        <div className="container">
          {/* 아래는 라우터 컴포넌트 */}
          <MainRouter />
        </div>
      <Footer />
    </div>
  );
};

export default MainPage;
