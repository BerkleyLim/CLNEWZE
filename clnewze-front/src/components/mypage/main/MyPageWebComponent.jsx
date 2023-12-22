import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./mypage.main.module.scss";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";

import MypageInfo from "../user/UserInformation";
import AdminTeacher from "../admin/teacher";
import AdminPracticeRoom from "../admin/practiceroom";
import AdminSheetMusic from "../admin/sheetmusic";
import AdminDashboard from "../admin/dashboard";
import UserContainer from "../../../hooks/UserContainer";
import CommonContaier from "../../../hooks/CommonContaier";
import SubScriptIndex from "../subscript/SubScriptComponent";
import { useRecoilState } from "recoil";
import { myPageMenuState } from "../../../recoil/state/myPageHeaderState";
import MyCareer from "../career/CareerComponent";
import MyTeacher from "../teacher/MyTeacherComponent";

const MyPageWebComponent = () => {
  // state 정의
  const [menuInfo, setMenuInfo] = useRecoilState(myPageMenuState);
  // 리액트 훅 정의
  const { moveNavPage, moveHrefPage } = CommonContaier();
  const { handlerLogout } = UserContainer();

  const onClickLogout = () => {
    handlerLogout();
    moveHrefPage("/");
  };

  const toggleMenuClick = (e, link) => {
    const { value } = e.target;
    setMenuInfo({
      index: value,
      link: link,
    });
    moveNavPage(link);
  };

  return (
    <div>
      {/* <!-- 마이페이지 카테고리 --> */}
      <Row className={`${styles?.mypageContainer}`}>
        <Col md={2} className={`${styles?.mypageMenuContainer} p-3`}>
          <ListGroup>
            <h6>회원 정보</h6>
            <ListGroupItem
              value={1}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo?.index === 1 ? "active" : ""
              }`}
              onClick={(e) => {
                toggleMenuClick(e, "/mypage/info");
              }}
            >
              회원 정보 및 수정
            </ListGroupItem>
            <ListGroupItem
              value={2}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 2 ? "active" : ""
              }`}
              onClick={(e) => toggleMenuClick(e, "/mypage/career")}
            >
              프로필 정보
            </ListGroupItem>
            <ListGroupItem
              value={3}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 3 ? "active" : ""
              }`}
              onClick={(e) => toggleMenuClick(e, "/mypage/subscript")}
            >
              구독 등급 관리
            </ListGroupItem>
            <ListGroupItem
              value={4}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 4 ? "active" : ""
              }`}
              onClick={(e) => toggleMenuClick(e, "/mypage/apply/return")}
            >
              환전 신청
            </ListGroupItem>
            <ListGroupItem
              value={5}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 5 ? "active" : ""
              }`}
              onClick={(e) => toggleMenuClick(e, "/mypage/teacher")}
            >
              선생님 등록/관리
            </ListGroupItem>
          </ListGroup>
          <br />
          <br />
          <ListGroup>
            <h6>업로드 정보</h6>
            <ListGroupItem
              value={6}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 6 ? "active" : ""
              }`}
              onClick={(e) => {
                toggleMenuClick(e, "/mypage/performance/info");
              }}
            >
              공연정보
            </ListGroupItem>
            <ListGroupItem
              value={7}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 7 ? "active" : ""
              }`}
              onClick={(e) => toggleMenuClick(e, "/mypage/practiceroom/info")}
            >
              연습실
            </ListGroupItem>
            <ListGroupItem
              value={8}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 8 ? "active" : ""
              }`}
              onClick={(e) => toggleMenuClick(e, "/mypage/sheetmusic/info")}
            >
              악보
            </ListGroupItem>
            <ListGroupItem
              value={9}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 9 ? "active" : ""
              }`}
              onClick={(e) => toggleMenuClick(e, "/mypage/blog/info")}
            >
              블로그
            </ListGroupItem>
          </ListGroup>
          <br />
          <br />
          <ListGroup>
            <h6>매출 정보</h6>
            <ListGroupItem
              value={10}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 10 ? "active" : ""
              }`}
              onClick={(e) => {
                toggleMenuClick(e, "/mypage/user/dashboard");
              }}
            >
              구입악보
            </ListGroupItem>
            <ListGroupItem
              value={11}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 11 ? "active" : ""
              }`}
              onClick={(e) =>
                toggleMenuClick(e, "/mypage/user/sell/sheetmusic")
              }
            >
              판매악보
            </ListGroupItem>
          </ListGroup>
          <br />
          <br />
          <ListGroup>
            <h6>마이페이지</h6>
            <ListGroupItem
              value={12}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 12 ? "active" : ""
              }`}
              onClick={(e) => {
                // toggleMenuClick(e, "/mypage/user/dashboard")
                window.location.href = "/";
              }}
            >
              이전화면
            </ListGroupItem>
            <ListGroupItem
              value={13}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 13 ? "active" : ""
              }`}
              onClick={(e) =>
                // toggleMenuClick(e, "/mypage/user/sell/sheetmusic")
                onClickLogout()
              }
            >
              로그아웃
            </ListGroupItem>
            <ListGroupItem
              value={14}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 14 ? "active" : ""
              }`}
              onClick={(e) => toggleMenuClick(e, "/mypage/user/escape")}
            >
              회원탈퇴
            </ListGroupItem>
          </ListGroup>
          <br/><br/>
          <ListGroup>
            <h6>관리자 기능 - 차후 숨길 예정</h6>
            <ListGroupItem
              value={15}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 15 ? "active" : ""
              }`}
              onClick={(e) => {
                toggleMenuClick(e, "/mypage/admin/user");
              }}
            >
              회원정보 출력
            </ListGroupItem>
            <ListGroupItem
              value={16}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 16 ? "active" : ""
              }`}
              onClick={(e) => {
                toggleMenuClick(e, "/mypage/admin/dashboard");
              }}
            >
              매출액
            </ListGroupItem>
            <ListGroupItem
              value={17}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 17 ? "active" : ""
              }`}
              onClick={(e) =>
                toggleMenuClick(e, "/mypage/admin/sheetmusic")
              }
            >
              악보 페이지 관리
            </ListGroupItem>
            <ListGroupItem
              value={18}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 18 ? "active" : ""
              }`}
              onClick={(e) =>
                toggleMenuClick(e, "/mypage/admin/practiceroom")
              }
            >
              연습실 페이지 관리
            </ListGroupItem>
            <ListGroupItem
              value={19}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 19 ? "active" : ""
              }`}
              onClick={(e) =>
                toggleMenuClick(e, "/mypage/admin/teacher")
              }
            >
              레스너찾기 페이지 관리
            </ListGroupItem>
            <ListGroupItem
              value={20}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 20 ? "active" : ""
              }`}
              onClick={(e) =>
                toggleMenuClick(e, "/mypage/admin/blog")
              }
            >
              블로그 페이지 관리
            </ListGroupItem>
            <ListGroupItem
              value={21}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 21 ? "active" : ""
              }`}
              onClick={(e) =>
                toggleMenuClick(e, "/mypage/admin/notice")
              }
            >
              공지사항
            </ListGroupItem>
            <ListGroupItem
              value={22}
              className={`${styles?.mypageListGroupItem} ${
                menuInfo.index === 22 ? "active" : ""
              }`}
              onClick={(e) =>
                toggleMenuClick(e, "/mypage/admin/qna")
              }
            >
              QnA
            </ListGroupItem>
          </ListGroup>
        </Col>
        {/* 영역 출력 */}
        <Col md={10} className={`${styles?.MyPageWebComponent}`}>
          {/* 함수 써서 출력한다. */}
          <Routes>
            <Route path="/mypage/*" element={<MypageInfo />} />
            <Route path="/mypage/career" element={<MyCareer />} />
            <Route path="/mypage/teacher" element={<MyTeacher />} />
            <Route path="/mypage/subscript" element={<SubScriptIndex />} />
            <Route path="/mypage/admin/teacher" element={<AdminTeacher />} />
            <Route
              path="/mypage/admin/practiceroom"
              element={<AdminPracticeRoom />}
            />
            <Route
              path="/mypage/admin/sheetmusic"
              element={<AdminSheetMusic />}
            />
            <Route
              path="/mypage/admin/dashboard"
              element={<AdminDashboard />}
            />
          </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default MyPageWebComponent;
