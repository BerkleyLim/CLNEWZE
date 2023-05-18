import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const BoardIndex = ({ boards, onClickView }) => {
  return (
    <>
      {boards?.map((board, index) => (
        <Card
          key={index}
          mb={3}
          className="autor_wrap"
          onClick={() => onClickView(board)}
        >
          <CardHeader className="board-title">{board?.title}</CardHeader>
          <CardBody>
            <Card mb={3} className="content">
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
                  {/* <Row style={{ verticalAlign: "bottom" }}>
                    <h5 className="card-title col-md-4 align-self-center">
                      장르 : {board?.genre}
                    </h5>
                    <div className="display col-md-8 align-self-center justify-content-end">
                      조회수 : {board?.viewNumber}
                    </div>
                  </Row> */}
                  <Row className="card-text">
                    <Col md={1} />● 성함 : {board?.name}
                  </Row>
                  <Row className="card-text">
                    <Col md={1} />● 전공 : {board?.major}
                  </Row>
                  <Row className="card-text">
                    <Col md={1} />● 위치 : {board?.place}
                  </Row>
                  {/* <Row className="card-text">
                    <Col md={1} />● 상세정보 : {board?.contents}
                  </Row> */}

                  {/* <p class="card-text">
                              ● 성함 : {board?.name} <br />
                              ● 위치 : {board?.place} <br />
                              ● 문의 번호 : {board?.phone}<br />
                              ● 대여가격 : {board?.price}
                              ● 상세정보 : {board?.content}
                            </p>
                            <p class="card-text">
                              <small class="text-muted">{board?.updateDate}</small>
                            </p> */}
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
