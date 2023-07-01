import React from "react";
import { Navbar } from "reactstrap";
import styles from "../sheetmusic.module.scss";

const TitleIndex = ({ genreList }) => {
  return (
    <div className={`${styles?.title}`}>
      <Navbar className={`${styles?.titleArea}`}>
        <h1>악보모음</h1>
      </Navbar>
      <Navbar className={`${styles?.items_wrap}`}>
        <button type="button" onClick={() => genreList(null)}>
          전체
        </button>
        <button type="button" onClick={() => genreList("classic")}>
          클래식
        </button>
        <button type="button" onClick={() => genreList("newage")}>
          뉴에이지
        </button>
        <button type="button" onClick={() => genreList("jazz")}>
          재즈
        </button>
        <button type="button" onClick={() => genreList("kpop")}>
          가요
        </button>
        <button type="button" onClick={() => genreList("pop")}>
          팝
        </button>
        <button type="button" onClick={() => genreList("ost")}>
          OST
        </button>
        <button type="button" onClick={() => genreList("etc")}>
          기타장르
        </button>
      </Navbar>
    </div>
  );
};

export default TitleIndex;
