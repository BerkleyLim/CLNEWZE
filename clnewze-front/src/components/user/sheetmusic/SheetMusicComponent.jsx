import React from 'react';
import styles from "../../../scss/user/sheetmusic/sheetmusic.module.scss";
import SheetMusicMenuComponent from "./menu/SheetMusicMenuComponent";
import SheetMusicListComponent from "./contents/SheetMusicListComponent";
import SheetMusicViewComponent from "./contents/SheetMusicViewComponent";
import SheetMusicPagingNationComponent from "./contents/SheetMusicPagingNationComponent";

const SheetMusicComponent = () => {
  return (
    <div className={`${styles?.contain}`}>
      {/* 악보 메뉴 선택 항목 */}
      <SheetMusicMenuComponent/>

      <div>
        {/* 악보 리스트 */}
        <SheetMusicListComponent/>

        {/* 악보 모달 상세 출력 */}
        <SheetMusicViewComponent/>

        {/* 악보 페이지네이션 추가 */}
        <SheetMusicPagingNationComponent/>
      </div>
    </div>
  );
}

export default SheetMusicComponent;