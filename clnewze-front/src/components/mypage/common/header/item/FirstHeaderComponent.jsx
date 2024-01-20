import React, { useState } from "react";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  Row,
} from "reactstrap";
import styles from "../../../../../scss/mypage/commom/mypage.main.module.scss";
import { BellFill, CardList } from "react-bootstrap-icons";
import UserContainer from "../../../../../hooks/UserContainer";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../../../../recoil/state/userState";
import CommonContainer from "../../../../../hooks/CommonContainer";
import LoginPage from "../../../../../pages/login/LoginPage";
import { myPageMenuState } from "../../../../../recoil/state/myPageHeaderState";
import menuData from "../../../../../data/my/page/myPageMenu.json";
import { useLocation } from "react-router-dom";
import HeaderDropdownMenuComponent from "./HeaderDropdownMenuComponent";

const FirstHeaderComponent = () => {
  // 드롭다운 버튼 클릭
  const [mobileIsDropDown, setMobileIsDropDown] = useState(false);
  const mobileIsDropDownToggle = () => setMobileIsDropDown(!mobileIsDropDown);
  const user = useRecoilValue(userState);

  // 커스텀 훅 정의
  const { toggleIsLoginOpen } = CommonContainer();
  const { handlerLogout } = UserContainer();


  // 로그인 화면 출력
  const onClickLogin = () => {
    toggleIsLoginOpen();
  };

  // 로그아웃
  const onClickLogout = () => {
    handlerLogout();
    // moveHrefPage("/");
  };

  console.log(menuData);

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Navbar className={`${styles?.myPageHeaderMenu}`}>
        {/* 헤더 부분 */}
        <div style={{ width: "15%" }}>CLNEWZE</div>

        {/* 오른쪽으로 배치하고, 다시 Navbar로 조정 */}
        <Row style={{ width: "85%" }}>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <div style={{ padding: "0 0 0 2%" }}>
              {
                // 로그인 여부 측정
                user?.uno > -1 ? (
                  <Button onClick={onClickLogout}>로그아웃</Button>
                ) : (
                  <Button onClick={onClickLogin}>로그인</Button>
                )
              }
            </div>
            <div style={{ padding: "0 0 0 2%" }}>
              <Button>
                <BellFill />
              </Button>
            </div>
            <div style={{ padding: "0 0 0 2%" }}>
              <ButtonDropdown
                isOpen={mobileIsDropDown}
                direction="down"
                toggle={mobileIsDropDownToggle}
              >
                <DropdownToggle caret>
                  <CardList />
                </DropdownToggle>
                {/* 이부분 나중에 리팩토링 하기 */}
                <DropdownMenu>
                  <HeaderDropdownMenuComponent menuData={menuData?.userInfo} title={"회원 정보"}/>
                  <HeaderDropdownMenuComponent menuData={menuData?.uploadInfo} title={"업로드 정보"}/>
                  <HeaderDropdownMenuComponent menuData={menuData?.salesInfo} title={"매출 정보"}/>
                  {
                    user?.id === 'admin' &&
                      <HeaderDropdownMenuComponent menuData={menuData?.adminMenu} title={"관리자 정보"}/>
                  }
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </div>
        </Row>
      </Navbar>

      <LoginPage />
    </div>
  );
};

export default FirstHeaderComponent;
