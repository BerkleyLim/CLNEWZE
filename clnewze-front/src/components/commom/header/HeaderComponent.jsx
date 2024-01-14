import React, { useEffect, useState } from "react";
import styles from "../../../scss/main/common/header.module.scss";
import WebHeaderComponent from "./view/Web/WebHeaderComponent";
import MobileHeaderComponent from "./view/Mobile/MobileHeaderComponent";

const HeaderComponent = () => {
  // 반응형 웹앱을 위한 state 변수
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // 반응형 웹 적용
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  }, [innerWidth]);

  // console.log(styles)
  return (
    // < !--헤더 작성: 맴버, 소개, 곡목록, 악보, 커뮤니티, 다국어기능, 검색-- >
    <div className={`${innerWidth >= 860 ? styles?.webHeader : styles?.mobileHeader}`}>
        {/* 여기는 픽셀의 따라 view 출력 달라짐, Web 모드, Mobile 모드 */}
        {innerWidth >= 860 ? (
          <WebHeaderComponent />
        ) : (
          <MobileHeaderComponent />
        )}
    </div>
  );
};

export default HeaderComponent;
