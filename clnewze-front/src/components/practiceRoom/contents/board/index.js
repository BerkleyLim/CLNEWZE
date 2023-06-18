import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import styles from "../../practiceRoom.module.scss";

const BoardIndex = ({ boards, onClickView }) => {
  return (
    <>
      {boards?.map((board, index) => (
        <Card
          key={index}
          mb={3}
          className={`${styles?.autor_wrap}`}
          onClick={() => onClickView(board)}
        >
          <CardHeader className="board-title">{board?.title}</CardHeader>
          <CardBody>
            <Card mb={3} className={`${styles?.content}`}>
              <Row className="no-gutters">
                <Col md={1}>
                  <img
                    src={board?.img}
                    className="card-img"
                    alt="..."
                    style={{ width: "150px", height: "150px" }}
                  />
                </Col>
                <Col md={11}>
                  <Row className="card-text">
                    <Col md={1} />● 성함 : {board?.name}
                  </Row>
                  <Row className="card-text">
                    <Col md={1} />● 위치 : {board?.place}
                  </Row>
                  {/* <Row className="card-text">
                    <Col md={1} />● 예약 번호 : {board?.contents}
                  </Row> */}
                  <Row className="card-text">
                    <Col md={1} />● 연습실 정보 : {board?.categories}
                  </Row>
                  <Row className="card-text">
                    <Col md={1} />● 대여 가격 : {board?.price}
                  </Row>

                  <div className="card-text">
                    <small className="text-muted">{board?.upLoadDate}</small>
                  </div>
                </Col>
              </Row>
            </Card>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default BoardIndex;
