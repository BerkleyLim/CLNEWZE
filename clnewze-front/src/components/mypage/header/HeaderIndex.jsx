import React, { useEffect, useState } from "react";
import MyPageWebHeader from "./web/MyPageWebHeader";
import MyPageMobileHeader from "./mobile/MyPageMobileHeader";

const HeaderIndex = () => {
  // 반응형 웹앱을 위한 state 변수
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // 반응형 웹 적용
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  }, [innerWidth]);

  return (<div>{innerWidth >= 860 ? <MyPageWebHeader /> : <MyPageMobileHeader /> }</div>);
};

export default HeaderIndex;
