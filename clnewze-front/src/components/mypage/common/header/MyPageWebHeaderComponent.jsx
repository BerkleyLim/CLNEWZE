import React from "react";

import styles from "../../mypage.module.scss";
import {
  Col,
  Row,
} from "reactstrap";
import CoverPicture from "./item/CoverPicture";
import HeaderTwoRightComponent from "./item/HeaderTwoRightComponent";
import SubScriptModalComponet from "./item/SubScriptModalComponet";
import { useRecoilValue } from "recoil";
import { myPageHeaderSubScriptModalIsOpenState } from "../../../../recoil/state/myPageHeaderState";

const MyPageWebHeaderComponent = () => {
  const isSubScriptModal = useRecoilValue(myPageHeaderSubScriptModalIsOpenState)

  return (
    <div className={`${styles?.mypageHeader}`}>
      {/* <!-- 커버 사진 --> */}
      <CoverPicture />

      {/* <!-- 마이페이지 정보 (커버랑 같이 겹치기) --> */}
      <Row className={`${styles?.profileHeader} d-flex`}>
        <Col sm={3}>
          <div className={`${styles?.profileImg}`}>
            <img
              src="/image/file/mypage/defalut-my-profile.png"
              alt="my-profile"
              className={`${styles?.imgSize}`}
            />
          </div>
        </Col>
        <Col sm={5} className="mt-3">
          <Row>
            <h3 style={{ textAlign: "left" }}>홍길동</h3>
          </Row>
          <Row style={{ fontSize: "20px" }} className="mt-1">
            소개 : 홍길동 님의 페이지 입니다..
          </Row>
        </Col>
        <Col sm={4}>
          <HeaderTwoRightComponent />
        </Col>
      </Row>

      {isSubScriptModal && (
        <SubScriptModalComponet />
      )}
    </div>
  );
};

export default MyPageWebHeaderComponent;
