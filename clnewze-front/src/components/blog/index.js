import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import styles from "./blog.module.scss";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const CommunityIndex = () => {
  return (
    <div>
      <h2>커뮤니티</h2>
      <div>이 게시글은 음악 전문가들을 위한 커뮤니티 컨텐츠로 개발 예정입니다.</div>
      <div>현재 좋은 아이디어를 가지고 계시면 언제든지 피드백 환영합니다.</div>
      <div>이메일 문의 : berkleylim16@gmail.com.</div>
      <div>오픈채팅 : https://open.kakao.com/me/clnewze</div>
      <Row className={"d-flex"}>
        <Col xl={2} className="align-self-center">
          <Button>
            <ChevronLeft />
          </Button>
        </Col>
        <Col xl={8} className="align-self-center">
          <Row> 
            <Col xl={4} className="mb-3 mt-3">
              <Card className={`${styles?.blogCard}`}>
                <img alt="Card" className={`${styles?.teacherCard}`} src="/image/file/teacher/별.png" />
                <CardBody className={`${styles?.blogCardBody}`}>
                <CardTitle className={`${styles?.blogCardTitle}`}>
                  제목 : 사랑하는 사람에게 들려주는 이야기
                </CardTitle>
                  <div>내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} className="mb-3 mt-3">
              <Card className={`${styles?.blogCard}`}>
                <img alt="Card" className={`${styles?.teacherCard}`} src="/image/file/teacher/별.png" />
                <CardBody className={`${styles?.blogCardBody}`}>
                <CardTitle className={`${styles?.blogCardTitle}`}>
                  제목 : 사랑하는 사람에게 들려주는 이야기
                </CardTitle>
                  <div>내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} className="mb-3 mt-3">
              <Card className={`${styles?.blogCard}`}>
                <img alt="Card" className={`${styles?.teacherCard}`} src="/image/file/teacher/별.png" />
                <CardBody className={`${styles?.blogCardBody}`}>
                <CardTitle className={`${styles?.blogCardTitle}`}>
                  제목 : 사랑하는 사람에게 들려주는 이야기
                </CardTitle>
                  <div>내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={2} className="align-self-center">
          <Button>
            <ChevronRight />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CommunityIndex;
