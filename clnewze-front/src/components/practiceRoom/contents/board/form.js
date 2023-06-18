import React from "react";
import { Nav, Navbar } from "reactstrap";
import styles from "../../practiceRoom.module.scss";

const BoardForm = ({ practiceRoom }) => {
  return (
    <div className={`${styles?.practiceRoomDetail}`}>
      <h3>상세정보</h3>
      <h5 className={`${styles?.practiceRoomDetailTitle}`}>{practiceRoom?.title}</h5>
      {/* <div style={{fontSize:"9px", color: "#555", float:"right"}}>
        조회수 : {information.view}{" "}
      </div> */}
      <Nav className={`${styles?.commonContentDetailContainer}`}>
        <img src={practiceRoom?.img} className={`${styles?.album}`} />
        <div className={`${styles?.detailContainer}`}>
          <div className="">성함 : {practiceRoom?.username}</div>
          <div className="">위치 : {practiceRoom?.place}</div>
          <div className="">문의 번호 : {practiceRoom?.phone}</div>
        </div>
      </Nav>

      <div style={{ paddingTop: "100px", minHeight: "80%" }}>
        {practiceRoom?.contents}
      </div>

      <Navbar className={`${styles?.practiceRoomButtonEvent}`}>
        <div>이전 상세목록</div>
        <div>곡 정보 더보기</div>
        <div>다음 상세목록</div>
      </Navbar>
    </div>
  );
};

export default BoardForm;
