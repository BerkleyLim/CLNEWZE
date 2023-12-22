import React from "react";

import TeacherMenuComponent from "../../components/teacher/menu/TeacherMenuComponent";
import TeacherListComponent from "../../components/teacher/contents/TeacherListComponent";
import TeacherViewComponent from "../../components/teacher/contents/TeacherViewComponent";
import styles from "../../scss/teacher/teacher.module.scss";
import TeacherPagingNationComponent from "../../components/teacher/contents/TeacherPagingNationComponent";

const TeacherPage = (props) => {

  return (
    <div>
      <div className={`${styles?.contain}`}>
        {/* 선생님 메뉴 선택 항목 */}
        <TeacherMenuComponent />

        <div>
          {/* 선생님 리스트 */}
          <TeacherListComponent />

          {/* 선생님 모달 상세 출력 */}
          <TeacherViewComponent />

          {/* 선생님 페이지네이션 추가 */}
          <TeacherPagingNationComponent />
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
