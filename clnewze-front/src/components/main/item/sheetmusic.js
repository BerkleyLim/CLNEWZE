import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "../main.module.scss";

const MainSheetMusic = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles?.mainCommonHeader}`}>
        <h1>악보</h1>
        <p onClick={() => navigate("/information")}>
          <ChevronRight /> 더보기
        </p>
      </div>
      <nav
        className={`nav justify-content-center ${styles?.eventMainContainer}`}
      >
        <div className={`${styles?.eventIconPrev}`}>
          <ChevronLeft />
        </div>
        <div className={`${styles?.eventMainBoardCardContainer}`}>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
          <button type="button" className={`${styles?.commonMainCard}`}>
            1
          </button>
        </div>
        <div className={`${styles?.eventIconNext}`}>
          <ChevronRight />
        </div>
      </nav>
    </>
  );
};

export default MainSheetMusic;
