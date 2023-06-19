import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import styles from "../../sheetmusic.module.scss";

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
          <CardHeader className={`${styles?.boardTitle}`}>
            {board?.artist} - {board?.title}
          </CardHeader>
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
                  <Row style={{ verticalAlign: "bottom" }}>
                    <h5 className="card-title col-md-4 align-self-center">
                      장르 : {board?.genre}
                    </h5>
                    <div className="display col-md-8 align-self-center justify-content-end">
                      조회수 : {board?.viewNumber}
                    </div>
                  </Row>
                  <Row className="card-text">
                    <Col md={1} />● 발매날짜 : {board?.releaseDate} 년
                  </Row>
                  <Row className="card-text">
                    <Col md={1} />● 앨범명 : {board?.albumName}
                  </Row>
                  <Row className="card-text">
                    <Col md={1} />● 상세정보 : {board?.contents}
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
