import React from "react";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { useRecoilValue } from "recoil";
import {
  anotherUserState,
  userState,
} from "../../../../../recoil/state/userState";
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

  // 리액트 훅 정의
  const { moveNavPage } = CommonContainer();

  const user = useRecoilValue(userState);

  const toggleMenuClick = (e, link, isDevelop) => {
    // 개발 중일때 개발중으로 표시
    if (isDevelop) {
      alert("이 서비스는 개발 중 입니다.");
      return;
    }

    // 개발중 아닐때 실행
    const { value } = e.target;
    // 파라미터 부분 변경
    link = link.replaceAll(":id", id);
    link = link.replaceAll(":pageNo", 1);

    // 메뉴 이동 실행
    moveNavPage(link);
  };

  return (
    <List className="bg-white shadow-md rounded p-4 max-w-[200px]">
      <h6>{menuData.length > 0 && title}</h6>
      {menuData
        ?.filter((data) => data?.isUsing && !(data?.isNotLogin && user?.id !== id))
        .map((data, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              selected={isCurrentMenu(data?.link)}
              onClick={(e) => toggleMenuClick(e, data?.link, data?.isDevelop)}
            >
              <ListItemText primary={data?.title} />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
};

export default MyPageMenuViewComponent;
