import { useEffect, useState } from "react";
import {
  teacherModalDataState,
  teacherModalIsOpenState,
  teacherPagingNationState,
  teacherState,
} from "../recoil/state/teacherState";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useQuery } from "react-query";
import TeacherService from "../service/TeacherService";

const TeacherContainer = () => {
  const [teachers, setTeachers] = useRecoilState(teacherState);
  const [selectMajor, setSelectMajor] = useState(null);
  // Pagination 관련
  const [page, setPage] = useRecoilState(teacherPagingNationState); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  const [pagingCount, setPagingCount] = useState();
  // Pagination 관련 끝
  const [isModal, setIsModal] = useRecoilState(teacherModalIsOpenState);
  const resetModal = useResetRecoilState(teacherModalIsOpenState);
  const [modalData, setModalData] = useRecoilState(teacherModalDataState);
  const resetModalData = useResetRecoilState(teacherModalDataState);

  // 서비스 단에서 React Hooks으로 받아옴
  const { teacherSelectList, teacherSelectListAllCount } = TeacherService();

  // 조회 관련 api 호출 정의
  const selectTeacher = async () => {
    // Service 디렉토리에서 API 호출
    const data = await teacherSelectList(selectMajor, offset, limit);

    // error 나면 null 값 표시
    if (!!data) {
      setTeachers(data)
    }
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

  // 초기 렌더링 기준 설정 시
  useEffect(() => {
    // 선생님 전체 카운터
    const fetchData = async () => {
      const data = await teacherSelectListAllCount();
      if (!!data) {
        setPagingCount(data)
      }
      resetModal();
      resetModalData();
    }
    fetchData();
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
