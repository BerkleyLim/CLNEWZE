import React, { useEffect, useState } from "react";
// import { Navbar } from "reactstrap";

import SheetMusicMenuComponent from "../../components/sheetmusic/menu/SheetMusicMenuComponent";
import SheetMusicListComponent from "../../components/sheetmusic/contents/SheetMusicListComponent";
import SheetMusicViewComponent from "../../components/sheetmusic/contents/SheetMusicViewComponent";
import SheetMusicPagingNationComponent from "../../components/sheetmusic/contents/SheetMusicPagingNationComponent";
import styles from "../../scss/sheetmusic/sheetmusic.module.scss";


const SheetMusicPage = (props) => {
  return (
    <div>
      <div className={`${styles?.contain}`}>
        {/* 선생님 메뉴 선택 항목 */}
        <SheetMusicMenuComponent />

        <div>
          {/* 선생님 리스트 */}
          <SheetMusicListComponent />

          {/* 선생님 모달 상세 출력 */}
          <SheetMusicViewComponent />

          {/* 선생님 페이지네이션 추가 */}
          <SheetMusicPagingNationComponent />
        </div>
      </div>
    </div>
  );
};

export default SheetMusicPage;
