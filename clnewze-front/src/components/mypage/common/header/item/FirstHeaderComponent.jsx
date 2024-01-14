import React from "react";
import { Button, Navbar, Row } from "reactstrap";
import styles from "../../../../../scss/mypage/commom/mypage.main.module.scss";
import { BellFill, CardList } from "react-bootstrap-icons";
import UserContainer from "../../../../../hooks/UserContainer";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../../recoil/state/userState";
import CommonContainer from "../../../../../hooks/CommonContainer";
import LoginPage from "../../../../../pages/login/LoginPage";

const FirstHeaderComponent = () => {
  const user = useRecoilValue(userState)
  const { toggleIsLoginOpen } = CommonContainer();
  const { handlerLogout } = UserContainer();


  // 로그인 화면 출력
  const onClickLogin = () => {
    toggleIsLoginOpen();
  }

  // 로그아웃
  const onClickLogout = () => {
    handlerLogout();
    // moveHrefPage("/");
  };
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
                  user?.uno > -1 ?
                    <Button onClick={onClickLogout}>
                      로그아웃
                    </Button>
                    : 
                    <Button onClick={onClickLogin}>
                      로그인
                    </Button>
                }
            </div>
            <div style={{ padding: "0 0 0 2%" }}>
              <Button>
                <BellFill />
              </Button>
            </div>
            <div style={{ padding: "0 0 0 2%" }}>
              <Button>
                <CardList />
              </Button>
            </div>
          </div>
        </Row>
      </Navbar>
      
      <LoginPage />
    </div>
  );
};

export default FirstHeaderComponent;
