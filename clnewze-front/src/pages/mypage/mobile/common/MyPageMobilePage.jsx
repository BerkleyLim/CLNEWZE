import React from "react";

import styles from "../../../../scss/mypage/commom/mypage.main.module.scss";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";

import MyPageRouter from "../../../../router/MyPageRouter";
import MyPageMobileHeaderComponent from "../../../../components/mypage/common/header/MyPageMobileHeaderComponent";

const MyPageMobilePage = () => {
  return (
    <div>
      {/* 헤더 표시 */}
      <MyPageMobileHeaderComponent />
      {/* <!-- 마이페이지 카테고리 --> */}
      <div className={`${styles?.MyPageWebComponent}`}>
        {/* 함수 써서 출력한다. */}
        <MyPageRouter />
      </div>
    </div>
  );
};

export default MyPageMobilePage;
