import React from "react";
import { Modal, Nav, Navbar } from "reactstrap";
import styles from "../../../../scss/user/practiceroom/practiceRoom.module.scss";
import PracticeRoomContainer from "../../../../hooks/PracticeRoomContainer";
import { useRecoilValue } from "recoil";
import { practiceRoomModalDataState, practiceRoomModalIsOpenState } from "../../../../recoil/state/practiceRoomState";

const PracticeRoomViewComponent = () => {
  const { toggleModal } = PracticeRoomContainer();
  const modalData = useRecoilValue(practiceRoomModalDataState);

  const isModal = useRecoilValue(practiceRoomModalIsOpenState);
  return (
    <Modal isOpen={isModal} toggle={toggleModal} centered={true} size="xl">
      <div className={`${styles?.practiceRoomDetail}`}>
        <h3>상세정보</h3>
        <h5 className={`${styles?.practiceRoomDetailTitle}`}>{modalData?.title}</h5>
        <Nav className={`${styles?.commonContentDetailContainer}`}>
          <img src={modalData?.img} alt="" className={`${styles?.album}`} />
          <div className={`${styles?.detailContainer}`}>
            <div className="">성함 : {modalData?.userName}</div>
            <div className="">위치 : {modalData?.place}</div>
            <div className="">문의 번호 : {modalData?.phone}</div>
          </div>
        </Nav>

        <div style={{ paddingTop: "100px", minHeight: "80%" }}>
          {modalData?.contents}
        </div>

        <Navbar className={`${styles?.practiceRoomButtonEvent}`}>
          <div>이전 상세목록</div>
          <div>곡 정보 더보기</div>
          <div>다음 상세목록</div>
        </Navbar>
      </div>
    </Modal>
  );
};

export default PracticeRoomViewComponent;
