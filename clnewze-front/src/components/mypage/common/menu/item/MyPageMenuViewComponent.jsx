import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import styles from "../../../../../scss/mypage/commom/mypage.main.module.scss";
import { anotherUserState } from "../../../../../recoil/state/userState";
import { myPageMenuState } from "../../../../../recoil/state/myPageHeaderState";
import CommonContainer from "../../../../../hooks/CommonContainer";
import { useLocation } from "react-router-dom";

const MyPageMenuViewComponent = ({ menuData, title }) => {
  // 현재 경로 구하는 React Hook
  const { pathname } = useLocation();
  // admin이 아닌 mypage접근시 유저 ID가 동적이므로 데이터 가공
  const currentPath = pathname.includes("mypage")
    ? pathname.split("/").slice(3).join("")
    : pathname;

  // 현재 경로 인지 확인하는 함수
  const isCurrentMenu = (menuLink) => {
    const menuPath = menuLink.includes("mypage")
      ? menuLink.split("/").slice(3).join("")
      : menuLink.link;

    return currentPath === menuPath;
  };
  // 경로 : /mypage/"유저 ID"/*
  const anotherUser = useRecoilValue(anotherUserState);
  const id = anotherUser?.id;
  // state 정의
  // 전역 상태관리 필요 없이 구현으로 주석처리
  // const [menuInfo, setMenuInfo] = useRecoilState(myPageMenuState);
  // 리액트 훅 정의
  const { moveNavPage } = CommonContainer();

  const toggleMenuClick = (e, link) => {
    const { value } = e.target;
    // 파라미터 부분 변경
    link = link.replaceAll(":id", id);

    // setMenuInfo({
    //   index: value,
    //   link: link,
    // });
    moveNavPage(link);
  };

  return (
    <ListGroup>
      <h6>{menuData.length > 0 && title}</h6>
      {menuData
        ?.filter((data) => data?.isUsing)
        .map((data, index) => (
          <ListGroupItem
            key={index}
            value={data?.index}
            className={`${styles?.myPageListGroupItem} ${
              isCurrentMenu(data?.link) && "active"
            }`}
            onClick={(e) => {
              toggleMenuClick(e, data?.link);
            }}
          >
            {data?.title}
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default MyPageMenuViewComponent;
