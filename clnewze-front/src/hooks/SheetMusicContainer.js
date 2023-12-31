import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useQuery } from "react-query";
import {
  sheetMusicModalDataState,
  sheetMusicModalIsOpenState,
  sheetMusicPagingNationState,
  sheetMusicState,
} from "../recoil/state/sheetMusicState";
import SheetMusicService from "../service/SheetMusicService";

const SheetMusicContainer = () => {
  const param = useParams();
  const [sheetMusics, setSheetMusics] = useRecoilState(sheetMusicState);
  const [selectGenre, setSelectGenre] = useState(null);
  // Pagination 관련
  const [page, setPage] = useRecoilState(sheetMusicPagingNationState); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  const [pagingCount, setPagingCount] = useState();
  // Pagination 관련 끝
  const [isModal, setIsModal] = useRecoilState(sheetMusicModalIsOpenState);
  const resetModal = useResetRecoilState(sheetMusicModalIsOpenState);
  const [modalData, setModalData] = useRecoilState(sheetMusicModalDataState);
  const resetModalData = useResetRecoilState(sheetMusicModalDataState);

  const {sheetMusicSelectList, sheetMusicSelectListAllCount} = SheetMusicService();

  // 조회 관련 api 호출 정의
  const selectSheetMusic = async () => {
    const data = await sheetMusicSelectList(selectGenre, offset, limit);
    setSheetMusics(data)
  };

  // 리액트 Query를 이용하여 누군가 작업을 진행하면 자동으로 React-Query 실행하여 즉시 갱신
  const sheetMusicQuery = useQuery({
    queryKey: "sheetMusicList",
    queryFn: () => selectSheetMusic(),
  });

  // 장르 설정 할때 마다
  useEffect(() => {
    selectSheetMusic();
  }, [selectGenre, offset]);

  useEffect(() => {

    const fetchData = async () => {
      const data = await sheetMusicSelectListAllCount();

      if (!!data)
      setPagingCount(data);
    }

    fetchData();

    resetModal();
    resetModalData();
  }, []);

  // Query 실행 중일 때
  if (sheetMusicQuery.isLoading) {
    return "로딩 중입니다.";
  }

  // 장르 선택 여부 이벤트
  const genreList = (genre) => {
    setSelectGenre(genre);
  };

  // 리스트 클릭시 모달 데이터 출력시키기
  const onClickView = (sheetMusic, index) => {
    console.log(sheetMusic);
    setModalData({
      ...sheetMusic,
      index: index,
    });
    toggleModal();
  };

  const toggleModal = () => setIsModal(!isModal);

  return {
    isModal,
    setIsModal,
    sheetMusics,
    selectSheetMusic,
    genreList,
    onClickView,
    setModalData,
    limit,
    pagingCount,
    toggleModal,
  };
};

export default SheetMusicContainer;
