import React, { useEffect, useState } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Row,
} from "reactstrap";
import styles from "./blog.module.scss";
import URI from "../util/URI";

const BlogIndex = () => {
  const [blogData, setBlogData] = useState();

  const BadgeColor = ['primary', 'secondary', 'success', 'danger', 'info'];

  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT +
        "/api/blog/selectList"
    )
      .then((res) => setBlogData(res.data.data))
      .catch((e) => console.error(e));
  }, [])

  console.log(blogData)

  return (
    <div>
      <h2 style={{ textAlign: "left" }}>블로그</h2>
      <div>
        이 게시글은 음악 전문가들을 위한 커뮤니티 컨텐츠로 개발 예정입니다.
      </div>
      <div>현재 좋은 아이디어를 가지고 계시면 언제든지 피드백 환영합니다.</div>
      <div>이메일 문의 : berkleylim16@gmail.com.</div>
      <div>오픈채팅 : https://open.kakao.com/me/clnewzedeveloper</div>
      {
        blogData?.map((blog, index) => 
          <Row key={index} className={"d-flex mb-3 mt-3"}>
            <Card className={`${styles?.blogCard}`}>
              <CardBody className={`${styles?.blogCardBody}`}>
                <CardTitle className={`${styles?.blogCardTitle}`}>
                  제목 : {blog?.title}
                </CardTitle>
                <CardText className={`${styles?.blogCardText}`}>
                  내용 : {blog?.contents}
                </CardText>
                <CardText>
                  {
                    blog?.tag?.map((t,tIndex) => 
                      <Badge
                        key={tIndex}
                        color={`${BadgeColor[tIndex%5]}`}
                        pill={true}
                        className={`m-2 ${styles?.blogBadgeTag}`}
                      >
                        {"# " + t}
                      </Badge>
                    )
                  }
                </CardText>
              </CardBody>
            </Card>
          </Row>
        )
      }
      {/* <Row className={"d-flex mb-3 mt-3"}>
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
      </Row> */}
    </div>
  );
};

export default BlogIndex;
