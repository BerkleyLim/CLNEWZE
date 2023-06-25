import React, { useState } from "react";

import styles from "./mypage.module.scss";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const MypageHeader = () => {
  const [isModal, setIsModal] = useState(false);

  const subscriptModalToggle = () => setIsModal(!isModal);

  const subscriptViewModal = () => {
    setIsModal(!isModal);
  }

  return (
    <div className={`${styles?.MypageHeader}`}>
      {/* <!-- 사진 --> */}
      <img
        className={`${styles?.mypageBanner}`}
        src="/image/file/mypage/defalut-my-profile.png"
      />

      {/* <!-- 마이페이지 정보 (커버랑 같이 겹치기) --> */}
      <div className={`${styles?.profileInformation}`}>
        <div className={`${styles?.profileImg}`}>
          <img
            src="/image/file/mypage/defalut-my-profile.png"
            className={`${styles?.imgSize}`}
          />
        </div>
        <div className={`${styles?.profileComponent1}`}>
          <div className={`${styles?.profileName}`}>홍길동</div>
          <div className={`${styles?.profileIntroduction}`}>
            홍길동님의 마이페이지 입니다
          </div>
        </div>
        <div className={`${styles?.profileComponent2}`}>
          <div className="">
            <Button>충전하기</Button>
            <Button onClick={() => subscriptViewModal()}>구독하기</Button>
          </div>
          <div className={`${styles?.profileReturn}`}>환전 포인트 : 100000 p</div>
          <div className={`${styles?.profileCache}`}>보유 캐쉬 : 100000 p</div>
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
