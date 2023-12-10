import React, { useEffect, useState } from "react";
// import { Navbar } from "reactstrap";

import Menu from "./contents/menu/SheetMusicMenuIndex";
import SheetMusicListComponent from "./contents/board/SheetMusicListComponent";
import SheetMusicViewComponent from "./contents/board/SheetMusicViewComponent";
import Paging from "./contents/board/paging";
import styles from "./sheetmusic.module.scss";


const SheetMusics = (props) => {
  return (
    <div>
      <div className={`${styles?.contain}`}>
        <Menu />

        <div>
          <SheetMusicListComponent />

          {/* 모달 상세 출력 */}
          <SheetMusicViewComponent />

          <Paging />
          {/* <Paging
            limit={limit}
            page={page}
            // totalPosts={boards?.length}
            totalPosts={pagingCount}
            setPage={setPage}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SheetMusics;
