import React from "react";

import Menu from "./contents/menu/PracticeRoomMenuIndex";
import PracticeRoomListComponent from "./contents/board/PracticeRoomListComponent";
import PracticeRoomViewComponent from "./contents/board/PracticeRoomViewComponent";
import Paging from "./contents/board/paging";
import styles from "./practiceRoom.module.scss";

const PracticeRoom = (props) => {

  return (
    <div>
      <div className={`${styles?.contain}`}>
        <Menu />

        <div>
          <PracticeRoomListComponent />

          {/* 모달 상세 출력 */}
          <PracticeRoomViewComponent />

          <Paging />
        </div>
      </div>
    </div>
  );
};

export default PracticeRoom;
