import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Col, Table } from "reactstrap";

const MainCommunity = () => {
  return (
    <Col className="main-QnA">
      <div className="main-common-header">
        <h1>커뮤니티</h1>
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
            <td>안녕하세요?</td>
          </tr>
          <tr>
            <td>2</td>
            <td>만나서 반가워요</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default MainCommunity;
