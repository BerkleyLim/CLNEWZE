import React from "react";

import styles from "../../../../scss/mypage/commom/mypage.main.module.scss";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";

import MyPageRouter from "../../../../components/mypage/router/MyPageRouter";
import MyPageMenuComponent from "../../../../components/mypage/common/menu/MyPageMenuComponent";
import MyPageWebHeaderComponent from "../../../../components/mypage/common/header/MyPageWebHeaderComponent";

const MyPageWebPage = () => {
  return (
    <div>
      {/* 헤더 표시 */}
      <MyPageWebHeaderComponent />
      {/* <!-- 마이페이지 카테고리 --> */}
      <Row className={`${styles?.mypageContainer}`}>
        <Col md={2} className={`${styles?.mypageMenuContainer} p-3`}>
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
