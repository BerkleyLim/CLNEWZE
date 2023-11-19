import React from "react";
import { useQueries } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { pagingNationState } from "../recoil/state/pagingNationState";
import { teacherState } from "../recoil/state/teacherState";

// 유틸로 나누는 쿼리키
const ReactQueryFn = () => {
  // Pagination 관련
  const page = useRecoilValue(pagingNationState); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  const setTeacher = useSetRecoilState(teacherState); // teacher 갱신
  // 현재 서비스하는 페이지 리스트 타입 저장
  // 레스너 찾기, 악보, 커뮤니티 등
  // 결과 값을 저장함
  // 차후, 공지사항, QnA, 알림 등도 실시간으로 처리 가능
  // 실시간 알림 처리를 react-query로 할지 혹은 sse 기법으로 할지 고민해야함
  const reactQueryList = [
    {
      type: "teacherList",
      uri:
        process.env.REACT_APP_API_ROOT +
        "/api/teacher/selectList" +
        "?major=" + null + "&pageNo=" + offset + "&limit=" + limit,
      data:
        null,
    },
  ];
  const newQueries = useQueries({
    queries: reactQueryList.map((query) => {
      if (query.type === "teacherList") {
        return {
          queryKey: ['utilQuery', 'teacherList', {uri:query.uri, data:query.data}],
          queryFn:
            fetch(query.url,{
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then ( 
              (res) => res.json()
            ).then( (res) => {
              setTeacher(res);  // data : Teacher에 저장
            }).catch((e) => console.log(e))
        }
      }
    }),
  });
  return {newQueries};
};

export default ReactQueryFn;
