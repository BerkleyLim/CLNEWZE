import React from "react";
import SheetMenuComponent from "../../../components/sheet/SheetMenuComponent";
import SheetListComponent from "../../../components/sheet/SheetListComponent";
import SheetViewComponent from "../../../components/sheet/SheetViewComponent";
import SheetPagingNationComponent from "../../../components/sheet/SheetPagingNationComponent";
import SheetContainer from "../../../hooks/SheetContainer";
import {useLocation} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {anotherUserState, userState} from "../../../recoil/state/userState";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SheetEditorComponent from "../../../components/sheet/SheetEditorComponent";
import {sheetSearchState} from "../../../recoil/state/sheetState"; // Material-UI 아이콘 임포트

const MyPageSheetPage = () => {
  const {useQuerySheetsList, handleModalOpen} = SheetContainer();
  const user = useRecoilValue(userState);
  const anotherUser = useRecoilValue(anotherUserState);

  const search = useRecoilValue(sheetSearchState);
  const {pathname} = useLocation();

  const pageNo = pathname.match(/\/([^\/]+)\/?$/)[1];
  const {isLoading, error} = useQuerySheetsList(anotherUser?.uno, (pageNo - 1), 10, search);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="py-2">
      <h4 className="text-left mb-4 font-bold text-3xl">{`${anotherUser?.nickName} 님의 악보`}</h4>

      {/* 악보 메뉴 선택 항목 */}
      <SheetMenuComponent/>


      <div className="relative mb-12">
        <div className="flex items-end">
          <h2 className="text-black text-2xl font-normal mt-12 mb-12">
            {anotherUser?.nickName}님의 업로드 악보 목록
          </h2>
          {pathname.includes(user?.id) && (
            <button className="ml-2 p-1 mb-12" onClick={() => handleModalOpen(null,'create')}>
              <LibraryMusicIcon/>
            </button>
          )}
        </div>
      </div>


      <div>
        {/* 악보 리스트 */}
        <SheetListComponent/>

        {/* 악보 상세 보기 모달 출력 */}
        <SheetViewComponent/>

        {/* 악보 추가 및 편집 모드 출력 */}
        <SheetEditorComponent/>

        {/* 악보 페이지네이션 추가 */}
        <SheetPagingNationComponent/>
      </div>
    </div>
  );
};

export default MyPageSheetPage;
