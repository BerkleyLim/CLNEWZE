import React from "react";
import RoomMenuComponent from "../../../components/room/RoomMenuComponent";
import RoomListComponent from "../../../components/room/RoomListComponent";
import RoomViewComponent from "../../../components/room/RoomViewComponent";
import RoomPagingNationComponent from "../../../components/room/RoomPagingNationComponent";
import RoomContainer from "../../../hooks/RoomContainer";
import {useLocation} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {anotherUserState, userState} from "../../../recoil/state/userState";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import RoomEditorComponent from "../../../components/room/RoomEditorComponent";
import {roomSearchState} from "../../../recoil/state/roomState"; // Material-UI 아이콘 임포트

const MyPageRoomPage = () => {
  const {useQueryRoomsList, handleModalOpen} = RoomContainer();
  const user = useRecoilValue(userState);
  const anotherUser = useRecoilValue(anotherUserState);

  const search = useRecoilValue(roomSearchState);
  const {pathname} = useLocation();

  const pageNo = pathname.match(/\/([^\/]+)\/?$/)[1];
  const {isLoading, error} = useQueryRoomsList(anotherUser?.uno, (pageNo - 1), 10, search);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="py-2">
      <h4 className="text-left mb-4 font-bold text-3xl">{`${anotherUser?.nickName} 님의 업로드한 연습실 정보`}</h4>

      {/* 악보 메뉴 선택 항목 */}
      <RoomMenuComponent/>


      <div className="relative mb-12">
        <div className="flex items-end">
          <h2 className="text-black text-2xl font-normal mt-12 mb-12">
            {anotherUser?.nickName}님의 연습실
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
        <RoomListComponent/>

        {/* 악보 상세 보기 모달 출력 */}
        <RoomViewComponent/>

        {/* 악보 추가 및 편집 모드 출력 */}
        <RoomEditorComponent/>

        {/* 악보 페이지네이션 추가 */}
        <RoomPagingNationComponent/>
      </div>
    </div>
  );
};

export default MyPageRoomPage;
