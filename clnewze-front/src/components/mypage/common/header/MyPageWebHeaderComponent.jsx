import React, { useEffect, useMemo, useState } from "react";

import styles from "../../../../scss/mypage/mypage.module.scss";
import { Button, Navbar, Row } from "reactstrap";
import HeaderTwoRightComponent from "./item/HeaderTwoRightComponent";
import SubScriptModalComponet from "./item/SubScriptModalComponet";
import { useRecoilValue } from "recoil";
import { myPageHeaderSubScriptModalIsOpenState } from "../../../../recoil/state/myPageHeaderState";
import { BellFill, CardList } from "react-bootstrap-icons";
import UserService from "../../../../service/UserService";
import { useLocation } from "react-router-dom";
import { userState } from "../../../../recoil/state/userState";

const MyPageWebHeaderComponent = () => {
  const isSubScriptModal = useRecoilValue(
    myPageHeaderSubScriptModalIsOpenState
  );

  const { getMyProfileUserInfo } = UserService();
  const location = useLocation();
  const id = location?.pathname.split("/")[2];

  const [anotherUser, setAnotherUser] = useState();

  const user = useRecoilValue(userState)
  // 프로필 state 문 적용, useMemo 사용
  useEffect(() => {
    const fetch = async () => {
      const data = await getMyProfileUserInfo(id);
      
      debugger
      // admin 권한 접근 제어
      if (id === 'admin' && data?.id !== user?.id) {
        alert('해당 접근 권한이 없습니다.')
        location.href = '/'
        return;
      }

      setAnotherUser(data);
    }
    fetch();
  },[])
  // const user = useMemo(async () => {
  //   return data;
  // }, []);

  // user.then((res) => setAnotherUser(res)).catch((e) => console.error(e));

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

      {isSubScriptModal && <SubScriptModalComponet />}
    </div>
  );
};

export default MyPageWebHeaderComponent;
