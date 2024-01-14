import React from "react";
import { Col, Row } from "reactstrap";

import MainNoticeComponent from "./item/MainNoticeComponent";
import MainQnaComponent from "./item/MainQnaComponent";
import MainSheetMusicComponent from "./item/MainSheetMusicComponent";
import MainTeacherComponent from "./item/MainTeacherComponent";
import MainPracticeRoomComponent from "./item/MainPracticeRoomComponent";

const MainComponent = () => {
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

export default MainComponent;
