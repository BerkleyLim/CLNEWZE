import React from "react";
import { Row } from "reactstrap";
import "./main.scss";

import MainBanner from "./item/banner";
import MainTodayIssue from "./item/today";
import MainNotice from "./item/notice";
import MainQna from "./item/qna";
import MainCommunity from "./item/community";
import MainSheetMusic from "./item/sheetmusic";
import MainTeacher from "./item/teacher";
import MainPracticeRoom from "./item/practceroom";

const Main = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      {/* <!-- 이미지 메인 - banner --> */}
      <MainBanner />
      <br />
      <br />
      <br />
      {/* <!-- 오늘의 소식 --> */}
      <MainTodayIssue />

      <br />
      <br />
      <br />
      {/* <!-- 공지사항 및 QnA --> */}
      <Row>
        <MainNotice />

        <MainQna />

        <MainCommunity />
      </Row>

      <br />
      <br />
      <br />
      {/* <!-- 악보 --> */}
      <MainSheetMusic />
      
      <br />
      <br />
      <br />
      {/* <!-- 레스너 찾기 --> */}
      <MainTeacher />
      <br />
      <br />
      <br />
      {/* <!-- 연습실 정보 --> */}
      <MainPracticeRoom />

      <br />
      <br />
      <br />
    </div>
  );
};

export default Main;
