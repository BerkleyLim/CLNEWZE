import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import styles from "../../../../scss/sheetmusic/sheetmusic.module.scss";
import SheetMusicContainer from "../../../../hooks/SheetMusicContainer";

const MyPageSheetMusicListComponent = () => {

  const {sheetMusics, onClickView} = SheetMusicContainer();

  return (
    <Row className={`${styles?.bootstrapRowAndColCenter}`}>
      {sheetMusics?.map((sheetMusic, index) => (
        <Col key={index} className={`${styles?.bootstrapRowAndColCenter} mb-5`}>
          <Card
            style={{
              width: "18rem",
            }}
            onClick={() => onClickView(sheetMusic, index)}
            className={`${styles?.bootstrapRowAndColCenter}`}
          >
            <img alt="Card" className={`${styles?.teacherCard}`} src={sheetMusic?.img} />
            {/* 조회수 : {sheetMusic?.viewNumber} */}
            <CardBody>
              <CardTitle className={`${styles?.commonEllipsisTitle}`} tag="h5">{sheetMusic?.artist} - {sheetMusic?.title}</CardTitle>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 장르 : {sheetMusic?.genre}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 조회수 : {sheetMusic?.viewNumber}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 발매날짜 : {sheetMusic?.releaseDate} 년</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 앨범명 : {sheetMusic?.albumName}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 상세정보 : {sheetMusic?.contents}</CardText>
            </CardBody>
            <CardFooter>{sheetMusic?.upLoadDate}</CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MyPageSheetMusicListComponent;
