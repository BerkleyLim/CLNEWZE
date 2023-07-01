import React from "react";
import {
  Navbar,
} from "reactstrap";

import styles from "../practiceRoom.module.scss";

const TitleIndex = () => {
  return (
    <div className={`${styles?.title}`}>
      <Navbar className={`${styles?.titleArea}`}>
        <h1>연습실정보</h1>
      </Navbar>
    </div>
  );
};

export default TitleIndex;
