import React from "react";
import { Modal, Nav, Navbar } from "reactstrap";
import styles from "../../../../scss/user/sheetmusic/sheetmusic.module.scss";
import SheetMusicContainer from "../../../../hooks/SheetMusicContainer";
import { useRecoilValue } from "recoil";
import { sheetMusicModalDataState, sheetMusicModalIsOpenState } from "../../../../recoil/state/sheetMusicState";

const SheetMusicViewComponent = () => {
  const { toggleModal } = SheetMusicContainer();
  const modalData = useRecoilValue(sheetMusicModalDataState);

  const isModal = useRecoilValue(sheetMusicModalIsOpenState);
  return (
    <Modal isOpen={isModal} toggle={toggleModal} centered={true} size="xl">
      <div className={`${styles?.sheetMusicDetail}`}>
        <h5 className={`${styles?.sheetMusicDetailTitle}`}>
          {modalData?.artist} - {modalData?.title}
        </h5>
        {/* <h3>상세정보</h3> */}
        <h3>곡 정보</h3>
        <div style={{ fontSize: "9px", color: "#555", float: "right" }}>
          조회수 : {modalData?.viewNumber}{" "}
        </div>
        <Nav className={`${styles?.commonContentDetailContainer}`}>
          <img src={modalData?.img} alt="" className={`${styles?.album}`} />
          <div className="detail-container">
            <div className="">장르 : {modalData?.genre}</div>
            <div className="">발매날짜 : {modalData?.releaseDate}년</div>
            <div className="">앨범명 : {modalData?.albumName}</div>
            <div className="">음원 듣기 : {modalData?.musicLink}</div>
          </div>
        </Nav>

        <div style={{ paddingTop: "100px", minHeight: "80%" }}>
          {modalData?.contents}
        </div>

        <Navbar className={`${styles?.sheetMusicButtonEvent}`}>
          <div>이전 상세목록</div>
          <div>곡 정보 더보기</div>
          <div>다음 상세목록</div>
        </Navbar>
      </div>
    </Modal>
  );
};

export default SheetMusicViewComponent;
