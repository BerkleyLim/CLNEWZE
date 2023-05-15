import React from "react";
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
          <CardHeader className="board-title">
            {board?.artist} - {board?.title}
          </CardHeader>
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
                  <div className="">
                    <Row style={{ verticalAlign: "bottom" }}>
                      <h5 className="card-title col-md-8 align-self-center">
                        장르 : {board?.genre}
                      </h5>
                      <div className="display col align-self-center justify-content-end">
                        조회수 : {board?.viewNumber}
                      </div>
                    </Row>

                    <p className="card-text">
                      ● 발매날짜 : {board?.releaseDate} 년 <br />● 앨범명 :{" "}
                      {board?.albumName} <br />● 상세정보 : {board?.contents}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">{board?.upLoadDate}</small>
                    </p>
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
