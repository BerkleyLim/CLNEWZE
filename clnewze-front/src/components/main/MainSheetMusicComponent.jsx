import React, { useEffect, useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "../../scss/main/main.module.scss";

import SheetMusicService from "../../service/SheetMusicService";
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

const MainSheetMusicComponent = () => {
  const navigate = useNavigate();
  const { sheetMusicSelectList } = SheetMusicService();
  const [sheetMusic, setSheetMusic] = useRecoilState(sheetMusicState);

  // 장르 설정 할때 마다
  useEffect(() => {
    const fetchData = async () => {
      const data = await sheetMusicSelectList(null, 0, 10);

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
      // <Row className={`${styles?.bootstrapRowAndColCenter}`}>
      //   <Col className={`${styles?.bootstrapRowAndColCenter} mb-5`}>
          <Card
            style={{
              width: "18rem",
            }}
            // className={`${styles?.bootstrapRowAndColCenter}`}
          >
            <img
              alt="Card"
              className={`${styles?.imgCard}`}
              src={data?.img}
            />
            {/* 조회수 : {data?.viewNumber} */}
            <CardBody>
              <CardTitle className={`${styles?.commonEllipsisTitle}`} tag="h5">
                {data?.artist} - {data?.title}
              </CardTitle>
              <CardText className={`${styles?.commonEllipsisContent}`}>
                ● 장르 : {data?.genre}
              </CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>
                ● 조회수 : {data?.viewNumber}
              </CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>
                ● 발매날짜 : {data?.releaseDate} 년
              </CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>
                ● 앨범명 : {data?.albumName}
              </CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>
                ● 상세정보 : {data?.contents}
              </CardText>
            </CardBody>
            <CardFooter>{data?.upLoadDate}</CardFooter>
          </Card>
      //   </Col>
      // </Row>
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
      <CustomHorizonScroll data={sheetMusic} SelectParentsComponent={SheetMusicComponent} />
    </div>
  );
};

export default MainSheetMusicComponent;
