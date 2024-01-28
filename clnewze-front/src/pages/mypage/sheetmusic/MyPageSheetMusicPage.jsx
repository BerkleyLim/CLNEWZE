import React from "react";
import { useRecoilValue } from "recoil";
import { innerWidthState } from "../../../recoil/state/commonState";
import styles from "../../../scss/mypage/mypage.module.scss";
import MyPageSheetMusicMenuComponent from "../../../components/mypage/sheetmusic/menu/MyPageSheetMusicMenuComponent";
import MyPageSheetMusicListComponent from "../../../components/mypage/sheetmusic/contents/MyPageSheetMusicListComponent";
import MyPageSheetMusicViewComponent from "../../../components/mypage/sheetmusic/contents/MyPageSheetMusicViewComponent";
import MyPageSheetMusicPagingNationComponent from "../../../components/mypage/sheetmusic/contents/MyPageSheetMusicPagingNationComponent";
import { anotherUserState } from "../../../recoil/state/userState";

const MyPageSheetMusicPage = () => {
  const innerWidth = useRecoilValue(innerWidthState);
  const anotherUser = useRecoilValue(anotherUserState);
  return (
    <div
      className={`${
        innerWidth >= 860
          ? styles?.myPageWebContainer
          : styles?.myPageMobileContainer
      }`}
    >
      <h1>{anotherUser?.userName} 님의 악보</h1>

      {/* 악보 메뉴 선택 항목 */}
      <MyPageSheetMusicMenuComponent />

      <div>
        {/* 악보 리스트 */}
        <MyPageSheetMusicListComponent />

        {/* 악보 모달 상세 출력 */}
        <MyPageSheetMusicViewComponent />

        {/* 악보 페이지네이션 추가 */}
        <MyPageSheetMusicPagingNationComponent />
      </div>
    </div>
  );
};

export default MyPageSheetMusicPage;
