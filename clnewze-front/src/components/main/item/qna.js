import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Col, Table } from "reactstrap";
import styles from "../main.module.scss";

const MainQna = () => {
  return (
    <Col className={`${styles?.mainNotice}`}>
      <div className={`${styles?.mainCommonHeader}`}>
        <h1>QnA</h1>
        <p>
          <ChevronRight /> 더보기
        </p>
      </div>
      <Table className="table-hover">
        <thead>
          <th>번호</th>
          <th>제목</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>영상 올리는 방법이 궁금해여</td>
          </tr>
          <tr>
            <td>2</td>
            <td>마이페이지 기능은 무엇인가요?</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default MainQna;
