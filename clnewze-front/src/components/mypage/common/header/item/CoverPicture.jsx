import React from "react";
import styles from "../../../mypage.module.scss";

// 커버 사진
const CoverPicture = () => {
  return (
    <>
      {/* <!-- 커버 사진 --> */}
      <img
        className={`${styles?.mypageBanner}`}
        src="/image/file/mypage/defalut-my-profile.png"
        alt=""
      />
    </>
  );
};

export default CoverPicture;
