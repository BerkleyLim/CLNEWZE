import React from "react";
import RoomMenuComponent from "../../../components/room/RoomMenuComponent";
import RoomListComponent from "../../../components/room/RoomListComponent";
import RoomViewComponent from "../../../components/room/RoomViewComponent";
import RoomPagingNationComponent from "../../../components/room/RoomPagingNationComponent";
import RoomContainer from "../../../hooks/RoomContainer";
import {useParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {roomSearchState} from "../../../recoil/state/roomState";
import RoomEditorComponent from "../../../components/room/RoomEditorComponent";

const RoomPage = () => {
  const {useQueryRoomsList} = RoomContainer();

  // 악보 리스트 출력!!
  const {pageNo} = useParams();

  const search = useRecoilValue(roomSearchState);

  const {isLoading, error} = useQueryRoomsList(-1, (pageNo - 1), 10, search);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="container mx-auto mt-12 mb-12 w-[95%]">
      <div className="text-left mb-12 flex items-center text-4xl font-bold">
        연습실 정보
      </div>


      {/* 악보 메뉴 선택 항목 */}
      <RoomMenuComponent/>

      <h2 className="text-left text-black text-2xl font-normal mt-12 mb-12">
        전체 연습실
      </h2>

      <div>
        {/* 악보 리스트 */}
        <RoomListComponent/>

        {/* 악보 상세보기 모달 상세 출력 */}
        <RoomViewComponent/>

        {/* 악보 편집 모달 상세 출력 */}
        <RoomEditorComponent/>

        {/* 악보 페이지네이션 추가 */}
        <RoomPagingNationComponent/>
      </div>
    </div>
  );
};

export default RoomPage;
