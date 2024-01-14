import React from "react";
import { Button, Navbar, Row } from "reactstrap";
import styles from "../../../../../scss/mypage/commom/mypage.main.module.scss";
import { BellFill, CardList } from "react-bootstrap-icons";
import CommonContaier from "../../../../../hooks/CommonContaier";
import UserContainer from "../../../../../hooks/UserContainer";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../../recoil/state/userState";

const FirstHeaderComponent = () => {
  const user = useRecoilValue(userState)
  const { moveNavPage, moveHrefPage } = CommonContaier();
  const { handlerLogout } = UserContainer();

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
                  user?.uno > -1 ?
                    <Button onClick={onClickLogout}>
                      로그아웃
                    </Button>
                    : 
                    <Button>
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
    </div>
  );
};

export default FirstHeaderComponent;
