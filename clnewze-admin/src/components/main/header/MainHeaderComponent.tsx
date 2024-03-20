import React from "react";
import styles from "../../../css/main/main.module.scss";
import { Col, Row } from "reactstrap";
import { useRecoilValue } from "recoil";
import { userState } from "../../../redux/state/userState";
import UserContainer from "../../../hooks/UserContainer";

const MainHeaderComponent = () => {
  // react custom hook 불려오기
  const {logout} = UserContainer();

  // 전역 redux 값 불려오기
  const user = useRecoilValue(userState);
  

  return (
    <div className={`${styles?.mainComponentHeader}`}>
      <div className={`flex flex-row py-8 w-100`}>
        <div className={`px-10 `} style={{width: '300px'}}>
          최근 IP 주소 :
          <span style={{color: "blue"}}>{user?.userName}</span>
        </div>
        <div className={`px-10 `} style={{width: '300px'}}>
          최근 접속일 :
          <span style={{color: "blue"}}>{user?.userName}</span>
        </div>
        <div className={`px-10 `} style={{width: '300px'}}>
          <span style={{color: "blue"}}>{user?.userName}</span>님 환영합니다.
        </div>
        <div
            className={`px-20 cursor-pointer`}
            style={{border: "none", background: "none"}}
            onClick={() => logout()}
        >
          로그아웃
        </div>
      </div>
      {/*<Row>*/}
      {/*  <Col className={`${styles?.mainComponentHeaderNav}`}>*/}
      {/*    <strong>관리자정보</strong>*/}
      {/*  </Col>*/}
      {/*  <Col className={`${styles?.mainComponentHeaderNav}`}>*/}
       {/*    <span style={{ color: "blue" }}>{user?.userName}</span>님*/}
       {/*  </Col>*/}
       {/*  <Col*/}
       {/*    className={`${styles?.mainComponentHeaderNav}`}*/}
       {/*    tag={`button`}*/}
       {/*    style={{ border: "none", background: "none" }}*/}
       {/*    onClick={() => logout()}*/}
       {/*  >*/}
       {/*    로그아웃*/}
       {/*  </Col>*/}
       {/*</Row>*/}
    </div>
  );
};

export default MainHeaderComponent;
