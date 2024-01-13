import React from "react";

import styles from "../../../../scss/mypage/mypage.module.scss";
import { Navbar, Row } from "reactstrap";
import FirstHeaderComponent from "./item/FirstHeaderComponent";

const MyPageMobileHeaderComponent = () => {
  return (
    <div className={`${styles?.myPageHeader}`}>
      {/* 메뉴바 - 첫번째 헤더 부분, web과 비슷함 */}
      <FirstHeaderComponent />

      {/* <!-- 마이페이지 정보 (커버랑 같이 겹치기) --> */}
      <Navbar className={`${styles?.profileHeader}`}>
        <div style={{width:"20%"}}>
          <div className={`${styles?.profileImg}`}>
            <img
              src="/image/file/myPage/defalut-my-profile.png"
              alt="my-profile"
              className={`${styles?.imgSize}`}
            />
          </div>
        </div>
        <div style={{width:"50%"}}>
          <Row>
            <h3 style={{ textAlign: "left" }}>홍길동</h3>
          </Row>
          <Row style={{ fontSize: "20px" }} className="mt-1">
            소개 : 홍길동 님의 페이지 입니다..
          </Row>
        </div>
      </Navbar>
    </div>
  );
};

export default MyPageMobileHeaderComponent;
