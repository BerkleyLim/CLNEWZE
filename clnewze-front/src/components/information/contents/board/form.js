import React from "react";
import { Nav, Navbar } from "reactstrap";

const InformationForm = ({information}) => {
  return (
    <div className="informationDetail">
      <h5 className="informationDetailTitle">
        {information?.artist} - {information?.title}
      </h5>
      <h3>상세정보</h3>
      <div style={{fontSize:"9px", color: "#555", float:"right"}}>
        조회수 : {information?.viewNumber}{" "}
      </div>
      <Nav className="common-content-detail-container">
        <img src={information?.img} className="album" />
        <div className="detail-container">
          <div className="">장르 : {information?.genre}</div>
          <div className="">발매날짜 : {information?.releaseDate}년</div>
          <div className="">앨범명 : {information?.albumName}</div>
          <div className="">음원 듣기 : {information?.musicLink}</div>
        </div>
      </Nav>


      {/* <!-- 내용 작성 --> */}
      <div style={{paddingTop: "100px",  minHeight:"80%"}}>{information?.contents}</div>

      {/* <!-- 여기는 하단에 놓는다 --> */}
      <Navbar className="information-button-event">
        <div>이전 상세목록</div>
        <div>곡 정보 더보기</div>
        <div>다음 상세목록</div>
      </Navbar>
    </div>
  );
};

export default InformationForm;
