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

const FirstHeaderComponent = () => {
  // 드롭다운 버튼 클릭
  const [mobileIsDropDown, setMobileIsDropDown] = useState(false);
  const mobileIsDropDownToggle = () => setMobileIsDropDown(!mobileIsDropDown);
  const user = useRecoilValue(userState);

  // state 정의 - 메뉴 선택시 style 저장
  const [menuInfo, setMenuInfo] = useRecoilState(myPageMenuState);

  // id 값 추출
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  // 커스텀 훅 정의
  const { toggleIsLoginOpen, moveNavPage } = CommonContainer();
  const { handlerLogout } = UserContainer();

  // 여기는 드롭다운에서 클릭 시 메뉴에 알맞게 컴포넌트 변환
  const toggleMenuClick = (e, link) => {
    const { value } = e.target;
    // 파라미터 부분 변경
    link = link.replaceAll(":id", id);

    setMenuInfo({
      index: value,
      link: link,
    });
    moveNavPage(link);
  };

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
                    {`회원 정보`}
                    {menuData?.userInfo.map((data, index) => (
                      <DropdownItem key={index} onClick={(e) => toggleMenuClick(e, data?.link)}>
                        {data?.title}
                      </DropdownItem>
                    ))}
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
