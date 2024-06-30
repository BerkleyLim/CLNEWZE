import React from "react";
import SheetMenuComponent from "../../../components/sheet/SheetMenuComponent";
import SheetListComponent from "../../../components/sheet/SheetListComponent";
import SheetViewComponent from "../../../components/sheet/SheetViewComponent";
import SheetPagingNationComponent from "../../../components/sheet/SheetPagingNationComponent";
import SheetContainer from "../../../hooks/SheetContainer";
import {useParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {sheetSearchState} from "../../../recoil/state/sheetState";
import SheetEditorComponent from "../../../components/sheet/SheetEditorComponent";

const SheetPage = () => {
  const {useQuerySheetsList} = SheetContainer();

  // 악보 리스트 출력!!
  const {pageNo} = useParams();

  const search = useRecoilValue(sheetSearchState);

  const {isLoading, error} = useQuerySheetsList(-1, (pageNo - 1), 10, search);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="container mx-auto mt-12 mb-12 w-[95%]">
      <div className="text-left mb-12 flex items-center text-4xl font-bold">
        악보 모음
      </div>


      {/* 악보 메뉴 선택 항목 */}
      <SheetMenuComponent/>

      <h2 className="text-left text-black text-2xl font-normal mt-12 mb-12">
        전체 악보 목록
      </h2>

      <div>
        {/* 악보 리스트 */}
        <SheetListComponent/>

        {/* 악보 상세보기 모달 상세 출력 */}
        <SheetViewComponent/>

        {/* 악보 편집 모달 상세 출력 */}
        <SheetEditorComponent/>

        {/* 악보 페이지네이션 추가 */}
        <SheetPagingNationComponent/>
      </div>
    </div>
  );
};

export default SheetPage;
