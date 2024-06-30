import React from "react";
import { MenuItem, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import CommonContainer from "../../../../../hooks/CommonContainer";
import styles from "../../../../../scss/mypage/commom/mypage.main.module.scss";
import { anotherUserState, userState } from "../../../../../recoil/state/userState";
import { useLocation } from "react-router-dom";

const HeaderDropdownMenuComponent = ({ menuData, title }) => {
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

  const user = useRecoilValue(userState);
  // state 정의
  // 전역 상태관리 필요 없이 구현으로 주석처리
  // const [menuInfo, setMenuInfo] = useRecoilState(myPageMenuState);
  // 리액트 훅 정의
  const { moveNavPage } = CommonContainer();

  // 여기는 드롭다운에서 클릭 시 메뉴에 알맞게 컴포넌트 변환
  const toggleMenuClick = (e, link, isDevelop) => {
    // 개발 중일때 개발중으로 표시
    if (isDevelop) {
      alert("이 서비스는 개발 중 입니다.")
      return;
    }

    // 파라미터 부분 변경
    link = link.replaceAll(":id", id);

    moveNavPage(link);
  };

  return (
    <>
      <Typography variant="h6" className="px-4 py-2" style={{ opacity: 0.5 }}>
        {title}
      </Typography>
      <MenuItem divider />
      {menuData
        ?.filter((data) => data?.isUsing && !(data?.isNotLogin && user?.id !== id))
        .map((data, index) => (
          <MenuItem
            key={index}
            value={data?.index}
            onClick={(e) => toggleMenuClick(e, data?.link, data?.isDevelop)}
            className={`${styles?.myPageListGroupItem} ${isCurrentMenu(data?.link) ? "bg-gray-200" : ""}`}
          >
            {data?.title}
          </MenuItem>
        ))}
      <MenuItem divider />
    </>
  );
};

export default HeaderDropdownMenuComponent;
