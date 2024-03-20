import React, { useEffect, useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "../../../../scss/common/main/main.module.scss";

import { useRecoilState } from "recoil";
import { teacherState } from "../../../../recoil/state/teacherState";
import CustomHorizonScroll from "./slice/CustomHorizonScroll";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import TeacherService from "../../../../service/TeacherService";

const MainTeacherComponent = () => {
  const navigate = useNavigate();
  const { teacherSelectList } = TeacherService();
  const [teacher, setTeacher] = useRecoilState(teacherState);

  // 장르 설정 할때 마다
  useEffect(() => {
    const fetchData = async () => {
      const data = await teacherSelectList(null, 0, 10);

      // error 나면 null 값 표시
      if (!!data) {
        setTeacher(data);
      }
    };

    fetchData();
  }, []);

  // 가로 스크롤용 component 추가
  const TeacherComponent = ({data}) => {
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
            <CardTitle className={`${styles?.commonEllipsisTitle}`} tag="h5">{data?.title}</CardTitle>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 성함 : {data?.userName}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 위치 : {data?.place}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 전공 : {data?.major}</CardText>
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
        <h1>선생님 찾기</h1>
        <p onClick={() => navigate("/teacher")}>
          <ChevronRight /> 더보기
        </p>
      </div>
      <CustomHorizonScroll data={teacher} SelectParentsComponent={TeacherComponent} />
    </div>
  );
};

export default MainTeacherComponent;
