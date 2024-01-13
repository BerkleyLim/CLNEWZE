import React from "react";

import styles from "../../../../scss/mypage/commom/mypage.main.module.scss";
import { Col, Row } from "reactstrap";

import MyPageRouter from "../../../../router/MyPageRouter";
import MyPageMenuComponent from "../../../../components/mypage/common/menu/MyPageMenuComponent";
import MyPageWebHeaderComponent from "../../../../components/mypage/common/header/MyPageWebHeaderComponent";

const MyPageWebPage = () => {
  return (
    <div>
      {/* 헤더 표시 */}
      <MyPageWebHeaderComponent />
      {/* <!-- 마이페이지 카테고리 --> */}
      <Row className={`${styles?.myPageContainer}`}>
        <Col md={2} className={`${styles?.myPageMenuContainer} p-4`}>
          <MyPageMenuComponent />
        </Col>
        {/* 영역 출력 */}
        <Col md={10} className={`${styles?.MyPageWebComponent}`}>
          {/* 함수 써서 출력한다. */}
          <MyPageRouter />
        </Col>
      </Row>
    </div>
  );
};

export default MyPageWebPage;
