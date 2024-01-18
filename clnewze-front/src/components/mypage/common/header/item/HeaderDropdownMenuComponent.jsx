import React from "react";
import { DropdownItem } from "reactstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import { myPageMenuState } from "../../../../../recoil/state/myPageHeaderState";
import CommonContainer from "../../../../../hooks/CommonContainer";
import styles from "../../../../../scss/mypage/commom/mypage.main.module.scss";
import { anotherUserState } from "../../../../../recoil/state/userState";

const HeaderDropdownMenuComponent = ({ menuData, title }) => {
  // 경로 : /mypage/"유저 ID"/*
  const anotherUser = useRecoilValue(anotherUserState);
  const id = anotherUser?.id;
  // state 정의
  const [menuInfo, setMenuInfo] = useRecoilState(myPageMenuState);
  // 리액트 훅 정의
  const { moveNavPage } = CommonContainer();

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

  return (
    <>
      <DropdownItem disabled>{title}</DropdownItem>
      <DropdownItem divider={true} />
      {menuData
        ?.filter((data) => data?.isUsing)
        .map((data, index) => (
          <DropdownItem
            key={index}
            value={data?.index}
            onClick={(e) => toggleMenuClick(e, data?.link)}
            className={`${styles?.myPageListGroupItem} ${
              menuInfo?.index === data?.index ? "active" : ""
            }`}
          >
            {data?.title}
          </DropdownItem>
        ))}
      <DropdownItem divider={true} />
    </>
  );
};

export default HeaderDropdownMenuComponent;
