import React, { useState } from "react";
import styles from "../../../../../scss/main/common/header.module.scss";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
} from "reactstrap";

import { BellFill, CardList } from "react-bootstrap-icons";

import headerData from '../../../../../data/header/headerData.json'
import { useRecoilValue } from "recoil";
import { userState } from "../../../../../recoil/state/userState";
import LoginPage from "../../../../../pages/login/LoginPage";
import CommonContainer from "../../../../../hooks/CommonContainer";

const MobileHeaderComponent = () => {
  const [mobileIsDropDown, setMobileIsDropDown] = useState(false);
  const mobileIsDropDownToggle = () => setMobileIsDropDown(!mobileIsDropDown);
  const user = useRecoilValue(userState);
  const {toggleIsLoginOpen} = CommonContainer();

  // 커스텀 훅 정의
  const { moveNavPage, moveHrefPage } = CommonContainer();

  const userMenu = () => {
    if (user.isLogin) {
      moveHrefPage("/mypage/"+user?.id);
    } else {
      toggleIsLoginOpen();
    }
  };

  // 헤더 이동, isView의 따라 이동 가능 불가능 결정
  const moveHeader = (category, isView) => {
    if(isView) {
      moveNavPage(category)
    } else {
      alert('빠른 시일 내에 개발하여 서비스 제공하겠습니다.')
    }
  }

  return (
    <>
    {/* 모바일 뷰 */}
      <Navbar className={`${styles?.hdContent1}`}>
        <div className={`${styles?.header_logo}`}>
          <a href="/">
            로고(추가예정)
            <img src="" alt="" />
          </a>
        </div>

        <div>
          <Button>
            <BellFill />
          </Button>
          <ButtonDropdown
            isOpen={mobileIsDropDown}
            direction="down"
            toggle={mobileIsDropDownToggle}
          >
            <DropdownToggle color="blank" caret size="lg">
              <CardList />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => userMenu()}>
                {user?.isLogin ?  ` ${user.userName}` : "로그인"}
              </DropdownItem>
              {headerData?.map((data, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => moveHeader(data?.category, data?.isView)}
                >
                  {data?.menuName}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </Navbar>

      {/* 로그인 모달 출력 */}
      <LoginPage />
    </>
  );
};

export default MobileHeaderComponent;
