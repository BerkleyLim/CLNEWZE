import React from "react";
import { Nav, Navbar } from "reactstrap";
import styles from "../../sheetmusic.module.scss";

const SheetMusicForm = ({ sheetMusic }) => {
  return (
    <div className={`${styles?.sheetMusicDetail}`}>
      <h5 className={`${styles?.sheetMusicDetailTitle}`}>
        {sheetMusic?.artist} - {sheetMusic?.title}
      </h5>
      {/* <h3>상세정보</h3> */}
      <h3>곡 정보</h3>
      <div style={{ fontSize: "9px", color: "#555", float: "right" }}>
        조회수 : {sheetMusic?.viewNumber}{" "}
      </div>
      <Nav className={`${styles?.commoncontentDetailContainer}`}>
        <img src={sheetMusic?.img} className={`${styles?.album}`} />
        <div className="detail-container">
          <div className="">장르 : {sheetMusic?.genre}</div>
          <div className="">발매날짜 : {sheetMusic?.releaseDate}년</div>
          <div className="">앨범명 : {sheetMusic?.albumName}</div>
          <div className="">음원 듣기 : {sheetMusic?.musicLink}</div>
        </div>
      </Nav>

      <div style={{ paddingTop: "100px", minHeight: "80%" }}>
        {sheetMusic?.contents}
      </div>

      <Navbar className={`${styles?.sheetMusicButtonEvent}`}>
        <div>이전 상세목록</div>
        <div>곡 정보 더보기</div>
        <div>다음 상세목록</div>
      </Navbar>
    </div>
  );
};

export default SheetMusicForm;
