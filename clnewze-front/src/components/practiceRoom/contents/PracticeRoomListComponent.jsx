import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import styles from "../../../scss/practiceroom/practiceRoom.module.scss";
import PracticeRoomContainer from "../../../hooks/PracticeRoomContainer";

const PracticeRoomListComponent = () => {
  const {practiceRooms, onClickView} = PracticeRoomContainer();

  return (
    <Row className={`${styles?.bootstrapRowAndColCenter}`}>
      {practiceRooms?.map((practiceRoom, index) => (
        <Col key={index} className={`${styles?.bootstrapRowAndColCenter} mb-5`}>
          <Card
            style={{
              width: "18rem",
            }}
            onClick={() => onClickView(practiceRoom, index)}
            className={`${styles?.bootstrapRowAndColCenter}`}
          >
            <img alt="Card" className={`${styles?.practiceRoomCard}`} src={practiceRoom?.img} />
            {/* 조회수 : {practiceRoom?.viewNumber} */}
            <CardBody>
              <CardTitle className={`${styles?.commonEllipsisTitle}`} tag="h5">{practiceRoom?.title}</CardTitle>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 성함 : {practiceRoom?.name}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 위치 : {practiceRoom?.place}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 연습실 정보 : {practiceRoom?.categories}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 대여 가격 : {practiceRoom?.price}</CardText>
            </CardBody>
            <CardFooter>{practiceRoom?.upLoadDate}</CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PracticeRoomListComponent;
