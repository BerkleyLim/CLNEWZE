import React, { useEffect, useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "../../scss/main/main.module.scss";

import { useRecoilState } from "recoil";
import { sheetMusicState } from "../../recoil/state/sheetMusicState";
import CustomHorizonScroll from "./item/CustomHorizonScroll";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import PracticeRoomService from "../../service/PracticeRoomService";

const MainSheetMusicComponent = () => {
  const navigate = useNavigate();
  const { practiceRoomSelectList } = PracticeRoomService();
  const [sheetMusic, setSheetMusic] = useRecoilState(sheetMusicState);

  // 장르 설정 할때 마다
  useEffect(() => {
    const fetchData = async () => {
      const data = await practiceRoomSelectList(null, 0, 10);

      // error 나면 null 값 표시
      if (!!data) {
        setSheetMusic(data);
      }
    };

    fetchData();
  }, []);

  // 가로 스크롤용 component 추가
  const SheetMusicComponent = ({data}) => {
    return (
      <Row className={`${styles?.bootstrapRowAndColCenter}`}>
        <Col className={`${styles?.bootstrapRowAndColCenter} mb-5`}>
          <Card
            style={{
              width: "18rem",
            }}
            className={`${styles?.bootstrapRowAndColCenter}`}
          >
            <img
              alt="Card"
              className={`${styles?.imgCard}`}
              src={data?.img}
            />
            {/* 조회수 : {data?.viewNumber} */}
            <CardBody>
            <CardTitle className={`${styles?.commonEllipsisTitle}`} tag="h5">{data?.title}</CardTitle>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 성함 : {data?.name}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 위치 : {data?.place}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 연습실 정보 : {data?.categories}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 대여 가격 : {data?.price}</CardText>
            </CardBody>
            <CardFooter>{data?.upLoadDate}</CardFooter>
          </Card>
        </Col>
      </Row>
    );
  };

  return (
    <div>
      {/* 참조 : https://velog.io/@071yoon/React-Horizontal-Scroll-%EA%B5%AC%ED%98%84 */}
      <div className={`${styles?.mainCommonHeader}`}>
        <h1>악보</h1>
        <p onClick={() => navigate("/sheetmusic")}>
          <ChevronRight /> 더보기
        </p>
      </div>
      <CustomHorizonScroll data={sheetMusic} Component={SheetMusicComponent} />
    </div>
  );
};

export default MainSheetMusicComponent;
