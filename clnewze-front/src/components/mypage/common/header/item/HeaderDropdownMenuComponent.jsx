import React from "react";
import { useLocation } from "react-router-dom";
import { DropdownItem, DropdownMenu } from "reactstrap";
import { useRecoilState } from "recoil";
import { myPageMenuState } from "../../../../../recoil/state/myPageHeaderState";
import CommonContainer from "../../../../../hooks/CommonContainer";

const HeaderDropdownMenuComponent = ({ menuData, title }) => {
  // 커스텀 훅 정의
  const { moveNavPage } = CommonContainer();
  // state 정의 - 메뉴 선택시 style 저장
  const [menuInfo, setMenuInfo] = useRecoilState(myPageMenuState);
  // id 값 추출
  const location = useLocation();
  const id = location.pathname.split("/")[2];
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
      {/* {title} */}
      {menuData?.map((data, index) => (
        <DropdownItem
          key={index}
          onClick={(e) => toggleMenuClick(e, data?.link)}
        >
          {data?.title}
        </DropdownItem>
      ))}
    </>
  );
};

export default HeaderDropdownMenuComponent;
