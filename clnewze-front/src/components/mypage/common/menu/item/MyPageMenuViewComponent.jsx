import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import styles from "../../../../../scss/mypage/commom/mypage.main.module.scss";
import CommonContaier from "../../../../../hooks/CommonContaier";
import { anotherUserState } from "../../../../../recoil/state/userState";
import { myPageMenuState } from "../../../../../recoil/state/myPageHeaderState";

const MyPageMenuViewComponent = ({ menuData, title }) => {
  // 경로 : /mypage/"유저 ID"/*
  const anotherUser = useRecoilValue(anotherUserState);
  const id = anotherUser?.id;
  // state 정의
  const [menuInfo, setMenuInfo] = useRecoilState(myPageMenuState);
  // 리액트 훅 정의
  const { moveNavPage } = CommonContaier();

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
    <ListGroup>
      <h6>{title}</h6>
      {menuData?.map((data, index) => (
        <ListGroupItem
          key={index}
          value={data?.index}
          className={`${styles?.myPageListGroupItem} ${
            menuInfo?.index === data?.index ? "active" : ""
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
