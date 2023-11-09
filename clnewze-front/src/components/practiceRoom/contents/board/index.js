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
import styles from "../../practiceRoom.module.scss";

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
            <img alt="Card" className={`${styles?.practiceRoomCard}`} src={board?.img} />
            {/* 조회수 : {board?.viewNumber} */}
            <CardBody>
              <CardTitle className={`${styles?.commonEllipsisTitle}`} tag="h5">{board?.title}</CardTitle>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 성함 : {board?.name}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 위치 : {board?.place}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 연습실 정보 : {board?.categories}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 대여 가격 : {board?.price}</CardText>
            </CardBody>
            <CardFooter>{board?.upLoadDate}</CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BoardIndex;
