import React from "react";

import styles from "../../../../scss/mypage/mypage.module.scss";
import { Navbar, Row } from "reactstrap";
import HeaderTwoRightComponent from "./item/HeaderTwoRightComponent";
import SubScriptModalComponent from "./item/SubScriptModalComponent";
import { useRecoilValue } from "recoil";
import { myPageHeaderSubScriptModalIsOpenState } from "../../../../recoil/state/myPageHeaderState";
import { anotherUserState } from "../../../../recoil/state/userState";
import FirstHeaderComponent from "./item/FirstHeaderComponent";

const MyPageWebHeaderComponent = () => {
  const isSubScriptModal = useRecoilValue(
    myPageHeaderSubScriptModalIsOpenState
  );

  const anotherUser = useRecoilValue(anotherUserState);

  return (
    <div className={`${styles?.myPageHeader}`}>
      {/* 첫번째 헤더에 있는 메뉴바 표시 - 모바일과 비슷함 */}
      <FirstHeaderComponent />
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
