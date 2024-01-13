import React from "react";

import styles from "../../../../scss/mypage/mypage.module.scss";
import { Button, Navbar, Row } from "reactstrap";
import HeaderTwoRightComponent from "./item/HeaderTwoRightComponent";
import SubScriptModalComponent from "./item/SubScriptModalComponent";
import { useRecoilValue } from "recoil";
import { myPageHeaderSubScriptModalIsOpenState } from "../../../../recoil/state/myPageHeaderState";
import { BellFill, CardList } from "react-bootstrap-icons";
import { anotherUserState } from "../../../../recoil/state/userState";

const MyPageWebHeaderComponent = () => {
  const isSubScriptModal = useRecoilValue(
    myPageHeaderSubScriptModalIsOpenState
  );

  const anotherUser = useRecoilValue(anotherUserState);

  return (
    <div className={`${styles?.myPageHeader}`}>
      {/* 메뉴바 */}
      <div style={{ backgroundColor: "#eee" }}>
        <Navbar className={`${styles?.myPageHeaderMenu}`}>
          {/* 헤더 부분 */}
          <div style={{ width: "15%" }}>CLNEWZE</div>

          {/* 오른쪽으로 배치하고, 다시 Navbar로 조정 */}
          <Row style={{ width: "85%" }}>
            <div style={{ display: "flex", justifyContent: "end" }}>
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
      {/* <!-- 마이페이지 정보 (커버랑 같이 겹치기) --> */}
      <Navbar className={`${styles?.profileHeader}`}>
        <div style={{ width: "200px" }}>
          <div className={`${styles?.profileImg}`}>
            <img
              src="/image/file/myPage/defalut-my-profile.png"
              alt="my-profile"
              className={`${styles?.imgSize}`}
            />
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <Row>
            <h3 style={{ textAlign: "left" }}>{anotherUser?.userName}</h3>
          </Row>
          <Row style={{ fontSize: "20px" }} className="mt-1">
            소개 : {anotherUser?.userName} 님의 페이지 입니다..
          </Row>
        </div>
        <HeaderTwoRightComponent />
      </Navbar>

      {isSubScriptModal && <SubScriptModalComponent />}
    </div>
  );
};

export default MyPageWebHeaderComponent;
