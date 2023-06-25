import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import styles from "../../teacher.module.scss";

const BoardIndex = ({ boards, onClickView }) => {
  return (
    <Row className={`${styles?.bootstrapRowAndColCenter}`}>
      {boards?.map((board, index) => (
        <Col key={index} className={`${styles?.bootstrapRowAndColCenter}`}>
          <Card
            style={{
              width: "18rem",
            }}
            onClick={() => onClickView(board)}
            className={`${styles?.bootstrapRowAndColCenter}`}
          >
            <img alt="Card" className={`${styles?.teacherCard}`} src={board?.img} />
            {/* 조회수 : {board?.viewNumber} */}
            <CardBody>
              <CardTitle className={`${styles?.commonEllipsisTitle}`} tag="h5">{board?.title}</CardTitle>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 성함 : {board?.name}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 전공 : {board?.major}</CardText>
              <CardText className={`${styles?.commonEllipsisContent}`}>● 위치 : {board?.place}</CardText>
            </CardBody>
            <CardFooter>{board?.upLoadDate}</CardFooter>
          </Card>
        </Col>
        // <Card
        //   key={index}
        //   mb={3}
        //   className={`${styles?.autor_wrap}`}
        //   onClick={() => onClickView(board)}
        // >
        //   <CardHeader className={`${styles?.boardTitle}`}>{board?.title}</CardHeader>
        //   <CardBody>
        //     <Card mb={3} className="content">
        //       <Row className="no-gutters">
        //         <Col md={1}>
        //           <img
        //             src={board?.img}
        //             className="card-img"
        //             alt="..."
        //             style={{ width: "150px", height: "150px" }}
        //           />
        //         </Col>
        //         <Col md={11}>
        //           {/* <Row style={{ verticalAlign: "bottom" }}>
        //             <h5 className="card-title col-md-4 align-self-center">
        //               장르 : {board?.genre}
        //             </h5>
        //             <div className="display col-md-8 align-self-center justify-content-end">
        //               조회수 : {board?.viewNumber}
        //             </div>
        //           </Row> */}
        //           <Row className="card-text">
        //             <Col md={1} />● 성함 : {board?.name}
        //           </Row>
        //           <Row className="card-text">
        //             <Col md={1} />● 전공 : {board?.major}
        //           </Row>
        //           <Row className="card-text">
        //             <Col md={1} />● 위치 : {board?.place}
        //           </Row>
        //           {/* <Row className="card-text">
        //             <Col md={1} />● 상세정보 : {board?.contents}
        //           </Row> */}

        //           <div className="card-text">
        //             <small className={`${styles?.textMuted}`}>{board?.upLoadDate}</small>
        //           </div>
        //         </Col>
        //       </Row>
        //     </Card>
        //   </CardBody>
        // </Card>
      ))}
    </Row>
  );
};

export default BoardIndex;
