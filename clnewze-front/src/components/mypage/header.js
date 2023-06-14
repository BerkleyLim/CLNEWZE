import React, { useState } from "react";

import "./mypage.scss";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const MypageHeader = () => {

  const [profileImg, setProfileImg] = useState("/image/file/mypage/defalut-my-profile.png");
  // /**
  //  * profile 업로드용 메서드
  //  */
  // const profileUpload = () => {};

  const [isModal, setIsModal] = useState(false);
  const modalToggle = () => setIsModal(!isModal);

  /* 구독하기 */
  const subscriptOnClick = () => {
    setIsModal(!isModal)
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
            src={profileImg}
            className="img-size"
          />
        </div>
        <Input type="file" style={{ width: "80px", height: "50px" }} />
        <div className="profile-component1">
          <div className="profile-name">홍길동</div>
          <div className="profile-introduction">
            홍길동님의 마이페이지 입니다
          </div>
        </div>
        <div className="profile-component2">
          <div className="">
            <Button>충전하기</Button>
            <Button onClick={() => subscriptOnClick()}>구독하기</Button>
          </div>
          <div className="profile-return">환전 포인트 : 100000 p</div>
          <div className="profile-cache">보유 캐쉬 : 100000 p</div>
        </div>
      </div>

      {isModal && 
         <Modal isOpen={isModal} toggle={modalToggle} centered={true}>
         <ModalHeader toggle={modalToggle}>Clnewze</ModalHeader>
         <ModalBody>
           <h1>구독하시겠습니까?</h1>

           <Button>Yes</Button>
           <Button>No</Button>
         </ModalBody>
         <ModalFooter>
            CLNEWZE musicion by clean.Dev
         </ModalFooter>
       </Modal>
      }
    </div>
  );
};

export default MypageHeader;
