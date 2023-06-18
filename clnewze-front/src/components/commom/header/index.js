import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import {
  Button,
  Modal,
  Nav,
  Navbar,
} from "reactstrap";

import SelectMenuIndex from "./dropdown/selectMemu/index";
import SelectLanguageIndex from "./dropdown/language/index";
import LoginForm from "../../login/index";
import { useSelector } from "react-redux";
import { Alarm, PersonCircle } from "react-bootstrap-icons";

const HeaderComponent = (props) => {
  let navigate = useNavigate();
  const [loginIsModal, setLoginIsModal] = useState(false);
  const toggle = () => setLoginIsModal(!loginIsModal);
  const user = useSelector(state => state.user);

  const movePage = (link) => {
    navigate(link);
  };

  const userMenu = () => {
    if (user.isLogin) {
      window.location.href = "/mypage";
    } else {
      toggle();
    }
  }

  // console.log(styles)
  return (
    // < !--헤더 작성: 맴버, 소개, 곡목록, 악보, 커뮤니티, 다국어기능, 검색-- >
    // <div className="header">
    <div className={`${styles?.header}`}>
      <Modal isOpen={loginIsModal} toggle={toggle} centered={true} >
        <LoginForm setLoginIsModal={setLoginIsModal} />
      </Modal>
      <Navbar className={`${styles?.hdContent1}`}>
        <div className={`${styles?.header_logo}`}>
          <a href="/">
            로고(추가예정)
            <img src="" />
          </a>
        </div>
        <SelectMenuIndex />
        {/* <SelectMenuDropDown /> */}

        {/* <!-- 여기는 그냥 100px의 여백 두기 --> */}
        <div style={{ display: "flex", width: "100px" }}></div>

        <SelectLanguageIndex />

        <i className="fas fa-list header-icon"></i>

        <div className={`${styles?.header_mymenu}`}>
          <Button size="lg" onClick={userMenu}>
            <span className={`${styles?.headerNickname}`}>
              <PersonCircle/>
            </span>
            <span className={`${styles?.headerNickname}`}>
              {
                user?.isLogin?
                user.userNm :
                "로그인"
              }
            </span>
          </Button>
          <Button size="lg"><Alarm/></Button>
        </div>
      </Navbar>

      <Navbar className={`${styles?.hdContent2}`}>
        <button type="button" onClick={() => movePage("introduction")}>
          {" "}
          소개
        </button>
        <button type="button" onClick={() => movePage("sheetmusic")}>
          악보
        </button>
        <button type="button" onClick={() => movePage("teacher")}>
          레스너찾기
        </button>
        <button type="button" onClick={() => movePage("practiceRoom")}>
          연습실정보
        </button>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
