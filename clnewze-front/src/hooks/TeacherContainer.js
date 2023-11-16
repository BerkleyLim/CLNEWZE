import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import URI from "../util/URI";
import { teacherState } from "../recoil/state/teacherState";
import { useRecoilState, useResetRecoilState } from "recoil";
import { modalState } from "../recoil/state/modalState";
import { pagingNationState } from "../recoil/state/pagingNationState";

const TeacherContainer = () => {

  const [boards, setBoards] = useRecoilState(teacherState);
  const [selectMajor, setSelectMajor] = useState(null);
  // Pagination 관련
  const [page, setPage] = useRecoilState(pagingNationState); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  const [pagingCount, setPagingCount] = useState();
  // Pagination 관련 끝
  const [isModal, setIsModal] = useRecoilState(modalState);
  const resetModal = useResetRecoilState(modalState);
  const [modalData, setModalData] = useState();


  console.log(isModal)
  // 장르 설정 할때 마다
  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT +
        "/api/teacher/selectList" +
        "?major=" +
        selectMajor +
        "&pageNo=" +
        offset +
        "&limit=" +
        limit
    )
      .then((res) => setBoards(res.data.data))
      .catch((e) => console.error(e));
  }, [selectMajor, offset]);

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/teacher/selectListAllCount")
      .then((res) => setPagingCount(res.data.data))
      .catch((e) => console.error(e));

    resetModal()
  }, []);

  const majorMenu = (major) => {
    setSelectMajor(major);
  };

  const onClickView = (board) => {
    setModalData(board);
    toggleModal();
  };

  const toggleModal = () => setIsModal(!isModal);

  return {
    isModal,
    setIsModal,
    boards,
    selectMajor,
    majorMenu,
    onClickView,
    modalData,
    setModalData,
    limit,
    pagingCount,
    toggleModal,
  };
};

export default TeacherContainer;
