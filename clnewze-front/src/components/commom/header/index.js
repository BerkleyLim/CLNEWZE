import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Modal, Navbar } from "reactstrap";

import SelectMenuIndex from "./dropdown/selectMemu/index";
import SelectLanguageIndex from "./dropdown/language/index";
import LoginForm from "../../login/index";
import { Alarm, CardList, PersonCircle } from "react-bootstrap-icons";

import headerData from "./sampledata/data.json"
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/state/user";

const HeaderComponent = (props) => {
  let navigate = useNavigate();
  const [loginIsModal, setLoginIsModal] = useState(false);
  const [mobileIsDropDown, setMobileIsDropDown] = useState(false);
  const modalToggle = () => setLoginIsModal(!loginIsModal);
  const mobileIsDropDownToggle = () => setMobileIsDropDown(!mobileIsDropDown);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const user = useRecoilValue(userState);

  console.log(user)

  const movePage = (link) => {
    navigate(link);
  };

  const userMenu = () => {
    if (user.isLogin) {
      window.location.href = "/mypage";
    } else {
      modalToggle();
    }
  };

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
    <div className={`${styles?.header}`}>
      <Modal isOpen={loginIsModal} toggle={modalToggle} centered={true}>
        <LoginForm setLoginIsModal={setLoginIsModal} />
      </Modal>
      <Navbar className={`${styles?.hdContent1}`}>
        <div className={`${styles?.header_logo}`}>
          <a href="/">
            로고(추가예정)
            <img src="" alt="" />
          </a>
        </div>
        {innerWidth >= 860 ? (
          <>
            <SelectMenuIndex />
            {/* <!-- 여기는 그냥 100px의 여백 두기 --> */}
            <div style={{ display: "flex", width: "100px" }}></div>

            <SelectLanguageIndex />

            <i className="fas fa-list header-icon"></i>

            <div className={`${styles?.header_mymenu}`}>
              <Button color="blank" size="lg" onClick={userMenu}>
                <span className={`${styles?.headerNickname}`}>
                  <PersonCircle />
                </span>
                <span className={`${styles?.headerNickname}`}>
                  {user?.isLogin ? user.userNm : " 로그인"}
                </span>
              </Button>
              <Button color="blank" size="lg">
                <Alarm />
              </Button>
            </div>
          </>
        ) : (
          <>
          <ButtonDropdown isOpen={mobileIsDropDown} direction="down" toggle={mobileIsDropDownToggle}>
      <DropdownToggle color="blank" caret size="lg"><CardList /></DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => userMenu()}>{user?.isLogin ? user.userNm : "로그인"}</DropdownItem>
        {
          headerData?.map((data,index) => 
            <DropdownItem key={index} onClick={() => movePage(data?.category)}>{data?.menuName}</DropdownItem>
          )
        }
      </DropdownMenu>
    </ButtonDropdown>
          </>
        )}
      </Navbar>

      {innerWidth >= 860 && (
        <Navbar className={`${styles?.hdContent2}`}>
          {
            headerData?.map((data, index) => 
              <button key={index} type="button" onClick={() => movePage(data?.category)}>
                {data?.menuName}
              </button>
            )
          }
        </Navbar>
      )}
    </div>
  );
};

export default HeaderComponent;
