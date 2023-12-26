import React from "react";

import styles from "../../mypage.module.scss";
import {
  Button,
  Col,
  Nav,
  Navbar,
  Row,
} from "reactstrap";
import CoverPicture from "./item/CoverPicture";
import HeaderTwoRightComponent from "./item/HeaderTwoRightComponent";
import SubScriptModalComponet from "./item/SubScriptModalComponet";
import { useRecoilValue } from "recoil";
import { myPageHeaderSubScriptModalIsOpenState } from "../../../../recoil/state/myPageHeaderState";
import { CardList } from "react-bootstrap-icons";

const MyPageMobileHeader = () => {
  const isSubScriptModal = useRecoilValue(myPageHeaderSubScriptModalIsOpenState)

  return (
    <div className={`${styles?.mypageMobileHeader}`}>
      <Navbar>
        <Nav>로고추가</Nav>
        <Nav>
          <Button>
            <CardList />
          </Button>
        </Nav>
      </Navbar>
      {/* <!-- 커버 사진 --> */}
      <CoverPicture />

      {/* <!-- 마이페이지 정보 (커버랑 같이 겹치기) --> */}
      <Row className={`${styles?.profileMobileHeader} d-flex`}>
        <Col x={0}>
          <div className={`${styles?.profileMobileImg}`}>
            <img
              src="/image/file/mypage/defalut-my-profile.png"
              alt="my-profile"
              className={`${styles?.imgSize}`}
            />
          </div>
        </Col>
        <Col x={0} className="mt-3">
          <Row>
            <h3 style={{ textAlign: "left" }}>홍길동</h3>
          </Row>
          <Row style={{ fontSize: "20px" }} className="mt-1">
            소개 : 홍길동 님의 페이지 입니다..
          </Row>
        </Col>
      </Row>
        {/* <Col sm={4}> */}
          <HeaderTwoRightComponent />
        {/* </Col> */}

      {isSubScriptModal && (
        <SubScriptModalComponet />
      )}
    </div>
  );
};

export default MyPageMobileHeader;
