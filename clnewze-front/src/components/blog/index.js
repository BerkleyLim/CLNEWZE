import React from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import styles from "./blog.module.scss";
// import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const BlogIndex = () => {
  return (
    <div>
      <h2 style={{ textAlign: "left" }}>블로그</h2>
      <div>
        이 게시글은 음악 전문가들을 위한 커뮤니티 컨텐츠로 개발 예정입니다.
      </div>
      <div>현재 좋은 아이디어를 가지고 계시면 언제든지 피드백 환영합니다.</div>
      <div>이메일 문의 : berkleylim16@gmail.com.</div>
      <div>오픈채팅 : https://open.kakao.com/me/clnewzedeveloper</div>
      <Row className={"d-flex mb-3 mt-3"}>
        {/* <Col className="mb-3 mt-3"> */}
        <Card className={`${styles?.blogCard}`}>
          <CardBody className={`${styles?.blogCardBody}`}>
            <CardTitle className={`${styles?.blogCardTitle}`}>
              제목 : 사랑하는 사람에게 들려주는 이야기
            </CardTitle>
            <CardText className={`${styles?.blogCardText}`}>
              내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는
              노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한
              사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는
              사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를
              들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을
              주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는
              사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고
              싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해
              시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게
              달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다.
            </CardText>
            <CardText>
              <Badge
                color="primary"
                pill={true}
                className={`m-2 ${styles?.blogBadgeTag}`}
              >
                {"# 태그1"}
              </Badge>
              <Badge
                color="secondary"
                pill={true}
                className={`m-2 ${styles?.blogBadgeTag}`}
              >
                {"# 태그2"}
              </Badge>
              <Badge
                color="success"
                pill={true}
                className={`m-2 ${styles?.blogBadgeTag}`}
              >
                {"# 태그3"}
              </Badge>
              <Badge
                color="danger"
                pill={true}
                className={`m-2 ${styles?.blogBadgeTag}`}
              >
                {"# 태그4"}
              </Badge>
              <Badge
                color="info"
                pill={true}
                className={`m-2 ${styles?.blogBadgeTag}`}
              >
                {"# 태그5"}
              </Badge>
            </CardText>
          </CardBody>
        </Card>
        {/* </Col> */}
      </Row>
    </div>
  );
};

export default BlogIndex;
