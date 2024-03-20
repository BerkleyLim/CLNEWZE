import React from "react";
import {Col, Input, Label, Row} from "reactstrap";
import {useRecoilValue} from "recoil";
import {userState} from "../../../../recoil/state/userState";
import styles from "../../../../scss/mypage/commom/mypage.common.module.scss"

const SubScriptComponent = () => {
  const user = useRecoilValue(userState);

  return (
    <div className={`${styles?.myPageWebContainer}`}>
      <h1>구독자 관리</h1>
      <h2>구독 등급 관리</h2>
      다음은 {user?.userNm} 님이 지정한 등급의 대한 구독 레벨을 수행할 수 있습니다.
      <Row className="mb-3">
        <Col sm={2} className={`col-form-label`}>
          <Label for="classify-1">1. VVIP 등급 : </Label>
        </Col>
        <Col sm={10}>
          <Input type="text" readOnly className="form-control-plaintext" value={`월 100,000 원`}/>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={2} className={`col-form-label`}>
          <Label for="classify-2">2. VIP 등급 : </Label>
        </Col>
        <Col sm={10}>
          <Input type="text" readOnly className="form-control-plaintext" value={`월 50,000 원`}/>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={2} className={`col-form-label`}>
          <Label for="classify-3">3. Senior 등급 : </Label>
        </Col>
        <Col sm={10}>
          <Input type="text" readOnly className="form-control-plaintext" value={`월 30,000 원`}/>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={2} className={`col-form-label`}>
          <Label for="classify-4">4. Middle 등급 : </Label>
        </Col>
        <Col sm={10}>
          <Input type="text" readOnly className="form-control-plaintext" value={`월 10,000 원`}/>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={2} className={`col-form-label`}>
          <Label for="classify-4">5. Junior 등급 : </Label>
        </Col>
        <Col sm={10}>
          <Input type="text" readOnly className="form-control-plaintext" value={`월 3,000 원`}/>
        </Col>
      </Row>
      <br/>
      <h2>구독 리스트</h2>
      <div>index</div>
      <div>구독회원이미지</div>
      <div>구독회원닉네임</div>
      <div>구독기간(시작~종료)</div>
      <div></div>
    </div>
  );
};

export default SubScriptComponent;
