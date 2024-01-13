import React from "react";

import menu from '../../../../data/my/page/myPageMenu.json'
import MyPageMenuViewComponent from "./item/MyPageMenuViewComponent";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../recoil/state/userState";

const MyPageMenuComponent = () => {
  const user = useRecoilValue(userState);

  return (
    <>
      <MyPageMenuViewComponent menuData={menu?.userInfo} title={"회원 정보"} />
      <br/><br/>
      <MyPageMenuViewComponent menuData={menu?.uploadInfo} title={"업로드 정보"} />
      <br/><br/>
      <MyPageMenuViewComponent menuData={menu?.salesInfo} title={"매출 정보"} />
      <br/><br/>
      {
        user?.id === 'admin' &&
        <MyPageMenuViewComponent menuData={menu?.adminMenu} title={"관리자 기능"} />
      }
      
    </>
  );
};

export default MyPageMenuComponent;
