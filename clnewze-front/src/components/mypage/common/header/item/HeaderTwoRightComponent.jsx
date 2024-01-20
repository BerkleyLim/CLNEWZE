import React from "react";
import { Button, Col, Row } from "reactstrap";
// import MyPageHeaderContainer from "../../../../../hooks/MyPageHeaderContainer";

const HeaderTwoRightComponent = () => {
  // const { subscriptModalToggle } = MyPageHeaderContainer();

  const toggleOnDisplay = () => {
    alert("이 기능은 개발 중입니다. 빠른 시일 내에 개발하겠습니다.");
  }

  return (
    <div className={"mt-4"}>
      <Row>
        <Col className="mt-3">
          <Button color="warning" style={{ width: "100%" }} size={"lg"} onClick={toggleOnDisplay}>
            충전
          </Button>
        </Col>
        <Col className="mt-3">
          <Button
            size={"lg"}
            style={{ width: "100%" }}
            color="info"
            onClick={() => 
              toggleOnDisplay()
              // subscriptModalToggle()
            }
          >
            구독
            {/* <br/>(본인일경우 구독조회) */}
          </Button>
        </Col>
      </Row>
      <Row className="m-1 mt-3">
        <Col
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "18px",
            float: "left",
          }}
        >
          환전 포인트 :
        </Col>
        <Col
          style={{
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "18px",
            float: "right",
          }}
        >
          100,000 p
        </Col>
      </Row>
      <Row className="m-1">
        <Col
          style={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "18px",
            float: "left",
          }}
        >
          보유 캐쉬 :
        </Col>
        <Col
          style={{
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "18px",
            float: "right",
          }}
        >
          100,000 p
        </Col>
      </Row>
    </div>
  );
};

export default HeaderTwoRightComponent;
