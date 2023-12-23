import React from "react";
import { Col, Row } from "reactstrap";

import MainNoticeComponent from "../../components/main/MainNoticeComponent";
import MainQnaComponent from "../../components/main/MainQnaComponent";
import MainSheetMusicComponent from "../../components/main/MainSheetMusicComponent";
import MainTeacherComponent from "../../components/main/MainTeacherComponent";
import MainPracticeRoomComponent from "../../components/main/MainPracticeRoomComponent";

const MainPage = () => {
  return (
    <div>
      {/* <!-- 오늘의 소식 --> */}
      {/* <MainTodayComponent /> */}

      <br />
      <br />
      <br />
      {/* <!-- 공지사항 및 QnA, 커뮤니티 --> */}
      <Row>
        <Col>
          <MainNoticeComponent />
        </Col>

        <Col>
          <MainQnaComponent />
        </Col>

        {/* <MainCommunityComponent /> */}
      </Row>

      <br />
      <br />
      <br />
      {/* <!-- 악보 --> */}
      <MainSheetMusicComponent />
      
      <br />
      <br />
      <br />
      {/* <!-- 레스너 찾기 --> */}
      <MainTeacherComponent />
      <br />
      <br />
      <br />
      {/* <!-- 연습실 정보 --> */}
      <MainPracticeRoomComponent />

      <br />
      <br />
      <br />
    </div>
  );
};

export default MainPage;
