import React from "react";

import styles from "../../scss/practiceroom/practiceRoom.module.scss";
import PracticeRoomMenuComponent from "../../components/practiceRoom/menu/PracticeRoomMenuComponent";
import PracticeRoomListComponent from "../../components/practiceRoom/contents/PracticeRoomListComponent";
import PracticeRoomViewComponent from "../../components/practiceRoom/contents/PracticeRoomViewComponent";
import PracticeRoomPagingNationComponent from "../../components/practiceRoom/contents/PracticeRoomPagingNationComponent";

const PracticeRoomPage = (props) => {

  return (
    <div>
      <div className={`${styles?.contain}`}>
        {/* 악보 메뉴 선택 항목 */}
        <PracticeRoomMenuComponent />

        <div>
          {/* 악보 리스트 */}
          <PracticeRoomListComponent />

          {/* 악보 모달 상세 출력 */}
          <PracticeRoomViewComponent />

          {/* 악보 페이지네이션 추가 */}
          <PracticeRoomPagingNationComponent />
        </div>
      </div>
    </div>
  );
};

export default PracticeRoomPage;
