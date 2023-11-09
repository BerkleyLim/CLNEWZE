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
import styles from "../../sheetmusic.module.scss";

const BoardIndex = ({ boards, onClickView }) => {
  return (
    <Row className={`${styles?.bootstrapRowAndColCenter}`}>
      {boards?.map((board, index) => (
        <Col key={index} className={`${styles?.bootstrapRowAndColCenter} mb-5`}>
          <Card
            style={{
              width: "18rem",
            }}
            onClick={() => onClickView(board)}
            className={`${styles?.bootstrapRowAndColCenter}`}
          >
            <img alt="Card" className={`${styles?.teacherCard}`} src={board?.img} />
            {/* 조회수 : {board?.viewNumber} */}
            <CardBody>
              <CardTitle className={`${styles?.commonEllipsisTitle}`} tag="h5">{board?.artist} - {board?.title}</CardTitle>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 장르 : {board?.genre}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 조회수 : {board?.viewNumber}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 발매날짜 : {board?.releaseDate} 년</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 앨범명 : {board?.albumName}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 상세정보 : {board?.contents}</CardText>
            </CardBody>
            <CardFooter>{board?.upLoadDate}</CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BoardIndex;
