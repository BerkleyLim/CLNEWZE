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
import styles from "../../../scss/teacher/teacher.module.scss";
import TeacherContainer from "../../../hooks/TeacherContainer";

const TeacherListComponent = () => {

  const {teachers, onClickView} = TeacherContainer();

  return (
    <Row className={`${styles?.bootstrapRowAndColCenter} `}>
      {teachers?.map((teacher, index) => (
        <Col key={index} className={`${styles?.bootstrapRowAndColCenter} mb-5`}>
          <Card
            style={{
              width: "18rem",
            }}
            onClick={() => onClickView(teacher, index)}
            className={`${styles?.bootstrapRowAndColCenter}`}
          >
            <img alt="Card" className={`${styles?.teacherCard}`} src={teacher?.img} />
            {/* 조회수 : {teacher?.viewNumber} */}
            <CardBody>
              <CardTitle className={`${styles?.commonEllipsisTitle}`} tag="h5">{teacher?.title}</CardTitle>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 성함 : {teacher?.name}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 전공 : {teacher?.major}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 위치 : {teacher?.place}</CardText>
            </CardBody>
            <CardFooter>{teacher?.upLoadDate}</CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TeacherListComponent;
