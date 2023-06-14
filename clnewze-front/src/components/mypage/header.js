import React, { useState } from "react";

import "./mypage.scss";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const MypageHeader = () => {
  const [isModal, setIsModal] = useState(false);

  const subscriptModalToggle = () => setIsModal(!isModal);

  const subscriptViewModal = () => {
    setIsModal(!isModal);
  }

  return (
    <div className="mypage-header">
      {/* <!-- 사진 --> */}
      <img
        className="mypage-banner"
        src="/image/file/mypage/defalut-my-profile.png"
      />

      {/* <!-- 마이페이지 정보 (커버랑 같이 겹치기) --> */}
      <div className="profile-information">
        <div className="profile-img">
          <img
            src="/image/file/mypage/defalut-my-profile.png"
            className="img-size"
          />
        </div>
        <div className="profile-component1">
          <div className="profile-name">홍길동</div>
          <div className="profile-introduction">
            홍길동님의 마이페이지 입니다
          </div>
        </div>
        <div className="profile-component2">
          <div className="">
            <Button>충전하기</Button>
            <Button onClick={() => subscriptViewModal()}>구독하기</Button>
          </div>
          <div className="profile-return">환전 포인트 : 100000 p</div>
          <div className="profile-cache">보유 캐쉬 : 100000 p</div>
        </div>
      </div>
      {isModal &&
        <Modal isOpen={isModal} toggle={subscriptModalToggle} centered={true}>
        <ModalHeader toggle={subscriptModalToggle}>구독하시겠습니까?</ModalHeader>
        <ModalBody>
          <Button color="primary">
            구독하기
          </Button>{' '}
          <Button color="secondary">
            취소하기
          </Button>
        </ModalBody>
        <ModalFooter>
          CLNEWZE musician by CleanDev.Inc
        </ModalFooter>
      </Modal>
      }
    </div>
  );
};

export default MypageHeader;
