import React from "react";
import { Col, Table } from "reactstrap";
import styles from "../../scss/main/main.module.scss";

const MainNoticeComponent = () => {
  return (
    <Col className={`${styles?.mainNotice}`}>
      <div className={`${styles?.mainCommonHeader}`}>
        <h1>공지사항</h1>
        <p>&gt; 더보기</p>
      </div>
      <Table className="table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>clnewze 이용안내</td>
          </tr>
          <tr>
            <td>2</td>
            <td>경고 및 제재사항</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default MainNoticeComponent;
