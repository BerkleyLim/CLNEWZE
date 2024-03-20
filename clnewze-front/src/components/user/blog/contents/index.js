import React from "react";
import { Badge, Card, CardBody, CardText, CardTitle, Row } from "reactstrap";
import styles from "../../../../scss/user/blog/blog.module.scss";

const BlogTableIndex = ({ blogData }) => {
  const BadgeColor = ["primary", "secondary", "success", "danger", "info"];

  return (
    <div>
      {blogData?.map((blog, index) => (
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
                {blog?.tag?.map((t, tIndex) => (
                  <Badge
                    key={tIndex}
                    color={`${BadgeColor[tIndex % 5]}`}
                    pill={true}
                    className={`m-2 ${styles?.blogBadgeTag}`}
                  >
                    {"# " + t}
                  </Badge>
                ))}
              </CardText>
            </CardBody>
          </Card>
        </Row>
      ))}

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

export default BlogTableIndex;
