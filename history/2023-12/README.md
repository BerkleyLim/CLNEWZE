# 현재 작업사항 (12월)

<br/>

### 10일

- Front 
  - Teacher 사용자용 페이지 부분 Custom Hook 적용 완료, Recoil로 전역 State로 변환 완료
  - 현재, React-Query를 이용하여 실시간 갱신 제작 완료
  - modal 및 pagingNation은 Teacher State에 한번에 리팩토링 작업 실시
  - SheetMusic도 Custom Hook과 React-Query와 Recoil 작업 실시

### 15일

- Front
  - PracticeRoom Custom Hook 리팩토링
  - commom component를 이름 변경
  - User 관련 정보 업데이트
  - my-page 회원 정보 확인 부분 UI 로그인 창 수정
  - index.js 파일로 된 부분 일부 수정 
    - PracticeRoom, SheetMusic, Teacher, login, footer, header, mypage-userInfo
  - Service 디렉토리 추가
    - 이부분은 API 호출 부분을 담당하는 서비스
    - user만 분리함

### 16일
- Front
  - Service 디렉토리 분리 이후, 비동기 함수 처리를 좀 더 효율적으로 연구
  - Promise와 SetTimeout을 반복적으로 사용시에도 해결되지 않는 문제 수정 예정
  - 이부분은 로그인 처리 시 해결해야함