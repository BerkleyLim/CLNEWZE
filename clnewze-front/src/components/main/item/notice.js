import React from "react";
import { Col, Table } from "reactstrap";
import styles from "../main.module.scss";

const MainNotice = () => {
  return (
    <Col className={`${styles?.mainNotice}`}>
      <div className={`${styles?.mainCommonHeader}`}>
        <h1>공지사항</h1>
        <p>&gt; 더보기</p>
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
            <td>뮤직스타일 이용안내</td>
          </tr>
          <tr>
            <td>2</td>
            <td>경고 및 제재사항</td>
          </tr>
          <tr></tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default MainNotice;
