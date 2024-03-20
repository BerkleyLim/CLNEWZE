import React from 'react';
import styles from "../../../scss/user/practiceroom/practiceRoom.module.scss";
import PracticeRoomMenuComponent from "./menu/PracticeRoomMenuComponent";
import PracticeRoomListComponent from "./contents/PracticeRoomListComponent";
import PracticeRoomViewComponent from "./contents/PracticeRoomViewComponent";
import PracticeRoomPagingNationComponent from "./contents/PracticeRoomPagingNationComponent";

const PracticeRoomComponent = () => {
  return (
    <div className={`${styles?.contain}`}>
      {/* 악보 메뉴 선택 항목 */}
      <PracticeRoomMenuComponent/>

      <div>
        {/* 악보 리스트 */}
        <PracticeRoomListComponent/>

        {/* 악보 모달 상세 출력 */}
        <PracticeRoomViewComponent/>

        {/* 악보 페이지네이션 추가 */}
        <PracticeRoomPagingNationComponent/>
      </div>
    </div>
  );
}

export default PracticeRoomComponent;