import React from "react";
import styles from "../../../css/main/main.module.scss";
import { Col, Row } from "reactstrap";
import { useRecoilValue } from "recoil";
import { userState } from "../../../state/userState";
import UserContainer from "../../../hooks/UserContainer";

const MainHeaderComponent = () => {
  // react custom hook 불려오기
  const {logout} = UserContainer();

  // 전역 state 값 불려오기
  const user = useRecoilValue(userState);
  

  return (
    <div className={`${styles?.mainComponentHeader}`}>
      <Row>
        <Col className={`${styles?.mainComponentHeaderNav}`}>
          <strong>관리자정보</strong>
        </Col>
        <Col className={`${styles?.mainComponentHeaderNav}`}>
          <span style={{ color: "blue" }}>{user?.userName}</span>님
        </Col>
        <Col
          className={`${styles?.mainComponentHeaderNav}`}
          tag={`button`}
          style={{ border: "none", background: "none" }}
          onClick={() => logout()}
        >
          로그아웃
        </Col>
      </Row>
    </div>
  );
};

export default MainHeaderComponent;
