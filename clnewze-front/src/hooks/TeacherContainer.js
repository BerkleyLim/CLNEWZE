import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import URI from "../util/URI";
import {
  teacherModalDataState,
  teacherState,
} from "../recoil/state/teacherState";
import { useRecoilState, useResetRecoilState } from "recoil";
import { modalState } from "../recoil/state/modalState";
import { pagingNationState } from "../recoil/state/pagingNationState";
import { useQuery } from "react-query";

const TeacherContainer = () => {
  const [teachers, setTeachers] = useRecoilState(teacherState);
  const [selectMajor, setSelectMajor] = useState(null);
  // Pagination 관련
  const [page, setPage] = useRecoilState(pagingNationState); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  const [pagingCount, setPagingCount] = useState();
  // Pagination 관련 끝
  const [isModal, setIsModal] = useRecoilState(modalState);
  const resetModal = useResetRecoilState(modalState);
  const [modalData, setModalData] = useRecoilState(teacherModalDataState);
  const resetModalData = useResetRecoilState(teacherModalDataState);

  // 조회 관련 api 호출 정의
  const selectTeacher = () => {
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
      .then((res) => { 
        setTeachers(res.data.data);
      })
      .catch((e) => console.error(e));
  }

  // 리액트 Query를 이용하여 누군가 작업을 진행하면 자동으로 React-Query 실행하여 즉시 갱신
  const teacherQuery = useQuery({
    queryKey: "teacherList",
    queryFn: () => selectTeacher(),
  });


  // 장르 설정 할때 마다
  useEffect(() => {
    selectTeacher()
  }, [selectMajor, offset]);

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/teacher/selectListAllCount")
      .then((res) => setPagingCount(res.data.data))
      .catch((e) => console.error(e));

    resetModal();
    resetModalData();
  }, []);

  // Query 실행 중일 때
  if (teacherQuery.isLoading) {
    return "로딩 중입니다.";
  }

  // Query 성공 시 - 현재 안사용하니 그냥 스킵
  // if (teacherQuery.isSuccess) {
  //   setTeachers(teachers)
  // }
  
  // 장르 선택 여부 이벤트
  const majorMenu = (major) => {
    setSelectMajor(major);
  };

  // 리스트 클릭시 모달 데이터 출력시키기
  const onClickView = (teacher, index) => {
    console.log(teacher);
    setModalData({
      ...teacher,
      index: index,
    });
    toggleModal();
  };

  const toggleModal = () => setIsModal(!isModal);

  return {
    isModal,
    setIsModal,
    teachers,
    selectMajor,
    majorMenu,
    onClickView,
    setModalData,
    limit,
    pagingCount,
    toggleModal,
  };
};

export default TeacherContainer;
