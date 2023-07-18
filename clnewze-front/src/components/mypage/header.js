import React, { useState } from "react";

import styles from "./mypage.module.scss";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const MypageHeader = () => {
  const [isModal, setIsModal] = useState(false);

  const subscriptModalToggle = () => setIsModal(!isModal);

  const subscriptViewModal = () => {
    setIsModal(!isModal);
  };

  console.log(styles);

  return (
    <div className={`${styles?.mypageHeader}`}>
      {/* <!-- 사진 --> */}
      <img
        className={`${styles?.mypageBanner}`}
        src="/image/file/mypage/defalut-my-profile.png"
      />

      {/* <!-- 마이페이지 정보 (커버랑 같이 겹치기) --> */}
      <Row className={`${styles?.profileHeader} d-flex`}>
        <Col xl={3}>
          <div className={`${styles?.profileImg}`}>
            <img
              src="/image/file/mypage/defalut-my-profile.png"
              className={`${styles?.imgSize}`}
            />
          </div>
        </Col>
        <Col xl={6} className="mt-3">
          <Row>
            <h3 style={{ textAlign: "left" }}>홍길동</h3>
          </Row>
          <Row style={{ fontSize: "20px" }} className="mt-1">
            소개 : 홍길동 님의 페이지 입니다..
          </Row>
        </Col>
        <Col xl={3}>
          <Row>
            <Col className="mt-3">
              <Button color="warning" style={{width:"100%"}} size={"lg"}>
                충전
              </Button>
            </Col>
            <Col className="mt-3">
              <Button
                size={"lg"}
                style={{width:"100%"}}
                color="info"
                onClick={() => subscriptViewModal()}
              >
                구독
                {/* <br/>(본인일경우 구독조회) */}
              </Button>
            </Col>
          </Row>
          <Row className="m-1 mt-3">
            <Col
              style={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "18px",
                float: "left"
              }}
            >
              환전 포인트 : 
            </Col>
            <Col
              style={{
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "18px",
                float: "right"
              }}
            >100,000 p</Col>
          </Row>
          <Row className="m-1">
            <Col
              style={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "18px",
                float: "left"
              }}
            >
              보유 캐쉬 : 
            </Col>
            <Col
              style={{
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "18px",
                float: "right"
              }}
            >100,000 p</Col>
          </Row>
        </Col>
      </Row>
      {isModal && (
        <Modal isOpen={isModal} toggle={subscriptModalToggle} centered={true}>
          <ModalHeader toggle={subscriptModalToggle}>
            홍길동 님을 구독하시겠습니까?
          </ModalHeader>
          <ModalBody>
            <Card>
              <CardTitle>다음은 회원님이 지정한 등급의 대한 구독 레벨을 수행할 수 있습니다.</CardTitle>
              <CardText>
                <Row>
                  1. VVIP 등급 : 월 100,000 원
                </Row>
                <Row>
                  2. VIP 등급 : 월 50,000 원
                </Row>
                <Row>
                  3. Senior 등급 : 월 30,000 원
                </Row>
                <Row>
                  4. Middle 등급 : 월 10,000 원
                </Row>
                <Row>
                  5. Junior 등급 : 월 3,000 원
                </Row>
              </CardText>
            </Card>

            <Button color="primary">구독하기</Button>{" "}
            <Button color="secondary">취소하기</Button>
          </ModalBody>
          <ModalFooter>CLNEWZE musician by CleanDev.Inc</ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export default MypageHeader;
