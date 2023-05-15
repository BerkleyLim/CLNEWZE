import React from "react";
import { Nav, Navbar } from "reactstrap";

const BoardForm = ({information}) => {
  return (
    <div className="boardDetail">
      <h5 className="DetailTitle">
        {information?.artist} - {information?.title}
      </h5>
      <div style={{fontSize:"9px", color: "#555", float:"right"}}>
        조회수 : {information?.view}{" "}
      </div>
      <Nav className="common-content-detail-container">
        <img src="{{img}}" className="album" />
        <div className="detail-container">
          <div className="">장르 : {information?.genre}</div>
          <div className="">발매날짜 : {information?.releaseDate}년</div>
          <div className="">앨범명 : {information?.albumName}</div>
          <div className="">음원 듣기 : {information?.musicLink}</div>
        </div>
      </Nav>

      <h3>상세정보</h3>

      {/* <!-- 내용 작성 --> */}
      <div style={{height:"80%"}}>{information?.content}</div>

      {/* <!-- 여기는 하단에 놓는다 --> */}
      <Navbar className="information-button-event">
        <div>이전 상세목록</div>
        <div>곡 정보 더보기</div>
        <div>다음 상세목록</div>
      </Navbar>
    </div>
  );
};

export default BoardForm;
