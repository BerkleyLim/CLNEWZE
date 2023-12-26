import React from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import MyPageHeaderContainer from "../../../../../hooks/MyPageHeaderContainer";
import { useRecoilValue } from "recoil";
import { myPageHeaderSubScriptModalIsOpenState } from "../../../../../recoil/state/myPageHeaderState";

const SubScriptModalComponet = () => {
  const isModal = useRecoilValue(myPageHeaderSubScriptModalIsOpenState);
  const { subscriptModalToggle } = MyPageHeaderContainer();

  return (
    <Modal isOpen={isModal} toggle={subscriptModalToggle} centered={true}>
      <ModalHeader toggle={subscriptModalToggle}>
        홍길동 님을 구독하시겠습니까?
      </ModalHeader>
      <ModalBody>
        <Card>
          <CardTitle>
            다음은 회원님이 지정한 등급의 대한 구독 레벨을 수행할 수 있습니다.
          </CardTitle>
          <CardText>
            <Row>1. VVIP 등급 : 월 100,000 원</Row>
            <Row>2. VIP 등급 : 월 50,000 원</Row>
            <Row>3. Senior 등급 : 월 30,000 원</Row>
            <Row>4. Middle 등급 : 월 10,000 원</Row>
            <Row>5. Junior 등급 : 월 3,000 원</Row>
          </CardText>
        </Card>
        <Button color="primary">구독하기</Button>{" "}
        <Button color="secondary">취소하기</Button>
      </ModalBody>
      <ModalFooter>CLNEWZE musician by CleanDev.Inc</ModalFooter>
    </Modal>
  );
};

export default SubScriptModalComponet;
