import React, { useRef } from "react";
import { Modal, Nav, Navbar } from "reactstrap";
import styles from "../../teacher.module.scss";
import TeacherContainer from "../../../../hooks/TeacherContainer";

const TeacherViewComponent = () => {
  const {isModal, toggleModal, modalData} = TeacherContainer();

  return (
    <Modal isOpen={isModal} toggle={toggleModal} centered={true} size="xl">
      <div className={`${styles?.teacherDetail}`}>
        <h3>상세정보</h3>
        <h5 className={`${styles?.teacherDetailTitle}`}>{modalData?.title}</h5>
        <Nav className={`${styles?.commonCententDetailContainer}`}>
          <img src={modalData?.img} className="album" alt="" />
          <div className={`${styles?.detailContainer}`}>
            <div className="">성함 : {modalData?.username}</div>
            <div className="">위치 : {modalData?.address}</div>
            {/* <div className="">문의 번호 : {modalData?.phone}</div> */}
          </div>
        </Nav>

        {/* <!-- 내용 작성 --> */}
        <div style={{ paddingTop: "100px", minHeight: "80%" }}>
          {modalData?.contents}
        </div>

        {/* <!-- 여기는 하단에 놓는다 --> */}
        <Navbar className={`${styles?.teacherButtonEvent}`}>
          <div>이전 상세목록</div>
          <div>곡 정보 더보기</div>
          <div>다음 상세목록</div>
        </Navbar>
      </div>
    </Modal>
  );
};

export default TeacherViewComponent;
