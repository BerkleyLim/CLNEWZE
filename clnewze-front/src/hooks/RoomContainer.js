import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseApi from "../util/UseApi";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useQuery } from "react-query";
import {
  practiceRoomModalDataState,
  practiceRoomModalIsOpenState,
  practiceRoomPagingNationState,
  practiceRoomState,
} from "../recoil/state/practiceRoomState";

const RoomContainer = () => {
  const param = useParams();
  const [practiceRooms, setPracticeRooms] = useRecoilState(practiceRoomState);
  const [selectCategories, setSelectCategories] = useState(null);
  // Pagination 관련
  const [page, setPage] = useRecoilState(practiceRoomPagingNationState); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  const [pagingCount, setPagingCount] = useState();
  // Pagination 관련 끝
  const [isModal, setIsModal] = useRecoilState(practiceRoomModalIsOpenState);
  const resetModal = useResetRecoilState(practiceRoomModalIsOpenState);
  const [modalData, setModalData] = useRecoilState(practiceRoomModalDataState);
  const resetModalData = useResetRecoilState(practiceRoomModalDataState);

  // 조회 관련 api 호출 정의
  const selectPracticeRoom = () => {
    UseApi.get(
      process.env.REACT_APP_API_ROOT +
        "practiceroom/selectList"
          + "?categories=" + selectCategories
          + "&pageNo=" + offset
          + "&limit=" + limit
    )
      .then((res) => setPracticeRooms(res.data.data))
      .catch((e) => console.error(e));
  };

  // 리액트 Query를 이용하여 누군가 작업을 진행하면 자동으로 React-Query 실행하여 즉시 갱신
  const practiceRoomQuery = useQuery({
    queryKey: "practiceRoomList",
    queryFn: () => selectPracticeRoom(),
  });

  // 장르 설정 할때 마다
  useEffect(() => {
    selectPracticeRoom();
  }, [selectCategories, offset]);

  useEffect(() => {
    UseApi.get(
      process.env.REACT_APP_API_ROOT + "practiceroom/selectListAllCount"
    )
      .then((res) => setPagingCount(res.data.data))
      .catch((e) => console.error(e));

    resetModal();
    resetModalData();
  }, []);

  // Query 실행 중일 때
  if (practiceRoomQuery.isLoading) {
    return "로딩 중입니다.";
  }

  // 장르 선택 여부 이벤트
  const categoriesMenu = (categories) => {
    setSelectCategories(categories);
  };

  // 리스트 클릭시 모달 데이터 출력시키기
  const onClickView = (practiceRoom, index) => {
    console.log(practiceRoom);
    setModalData({
      ...practiceRoom,
      index: index,
    });
    toggleModal();
  };

  const toggleModal = () => setIsModal(!isModal);

  return {
    isModal,
    setIsModal,
    practiceRooms,
    selectPracticeRoom,
    categoriesMenu,
    onClickView,
    setModalData,
    limit,
    pagingCount,
    toggleModal,
  };
};

export default RoomContainer;
