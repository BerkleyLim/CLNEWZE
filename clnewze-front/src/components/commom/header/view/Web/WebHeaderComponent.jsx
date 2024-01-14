import React, { useState } from "react";
import styles from "../../../../../scss/main/common/header.module.scss";
import {
  Button,
  Navbar,
} from "reactstrap";

import { Alarm, PersonCircle } from "react-bootstrap-icons";

import headerData from "../../sampledata/data.json";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../../recoil/state/userState";
import CommonContaier from "../../../../../hooks/CommonContainer";
import LoginPage from "../../../../../pages/login/LoginPage";

const WebHeaderComponent = () => {
  const {toggleIsLoginOpen} = CommonContaier();

  const user = useRecoilValue(userState);

  // 커스텀 훅 정의
  const { moveNavPage, moveHrefPage } = CommonContaier();

  const userMenu = () => {
    if (user.isLogin) {
      moveHrefPage("/mypage/"+user?.id);
    } else {
      toggleIsLoginOpen();
    }
  };

  return (
    <>
    {/* 헤더1 */}
      <Navbar className={`${styles?.hdContent1}`}>
        <div className={`${styles?.header_logo}`}>
          <a href="/">
            로고(추가예정)
            <img src="" alt="" />
          </a>
        </div>

        {/* 검색 박스 기능도 숨기기 */}
        {/* <SelectMenuIndex /> */}
        {/* <!-- 여기는 그냥 100px의 여백 두기 --> */}
        <div style={{ display: "flex", width: "100px" }}></div>

        {/* 언어 선택 임시로 숨김 */}
        {/* <SelectLanguageIndex /> */}

        <i className="fas fa-list header-icon"></i>

        <div className={`${styles?.header_mymenu}`}>
          <Button color="blank" size="lg" onClick={userMenu}>
            <span className={`${styles?.headerNickname}`}>
              <PersonCircle />
            </span>
            <span className={`${styles?.headerNickname}`}>
              {user?.isLogin ? ` ${user.userName}` : " 로그인"}
            </span>
          </Button>
          <Button color="blank" size="lg">
            <Alarm />
          </Button>
        </div>
      </Navbar>
      {/* 헤더2 */}
      <Navbar className={`${styles?.hdContent2}`}>
        {headerData?.map((data, index) => (
          <button
            key={index}
            type="button"
            onClick={() => moveNavPage(data?.category)}
          >
            {data?.menuName}
          </button>
        ))}
      </Navbar>

      {/* 로그인 모달 출력 */}
      <LoginPage />
    </>
  );
};

export default WebHeaderComponent;
