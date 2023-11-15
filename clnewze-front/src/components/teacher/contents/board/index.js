import React, { useState } from "react";
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
import styles from "../../teacher.module.scss";
import TeacherContainer from "../../../../hooks/TeacherContainer";

const BoardIndex = () => {

  const {boards, onClickView} = TeacherContainer();

  return (
    <Row className={`${styles?.bootstrapRowAndColCenter} `}>
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
              <CardTitle className={`${styles?.commonEllipsisTitle}`} tag="h5">{board?.title}</CardTitle>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 성함 : {board?.name}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 전공 : {board?.major}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 위치 : {board?.place}</CardText>
            </CardBody>
            <CardFooter>{board?.upLoadDate}</CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BoardIndex;
