import React from "react";

import Menu from "./contents/menu/TeacherMenuIndex";
import TeacherListComponent from "./contents/board/TeacherListComponent";
import TeacherViewComponent from "./contents/board/TeacherViewComponent";
import Paging from "./contents/board/paging";
import styles from "./teacher.module.scss";

const Teachers = (props) => {

  return (
    <div>
      <div className={`${styles?.contain}`}>
        <Menu />

        <div>
          <TeacherListComponent />

          {/* 모달 상세 출력 */}
          <TeacherViewComponent />

          <Paging />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
