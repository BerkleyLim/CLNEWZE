# 현재 작업사항 (12월)

- 12월 기준

## 10일

- Front 
  - Teacher 사용자용 페이지 부분 Custom Hook 적용 완료, Recoil로 전역 State로 변환 완료
  - 현재, React-Query를 이용하여 실시간 갱신 제작 완료
  - modal 및 pagingNation은 Teacher State에 한번에 리팩토링 작업 실시
  - SheetMusic도 Custom Hook과 React-Query와 Recoil 작업 실시

## 15일

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

## 16일

- Front
  - Service 디렉토리 분리 이후, 비동기 함수 처리를 좀 더 효율적으로 연구
  - Promise와 SetTimeout을 반복적으로 사용시에도 해결되지 않는 문제 수정
    - 로그인 처리 시 모달이 정상적으로 닫히지 않는 문제 발생 했으나 해결 완료 
    - async~await로 API 호출하는 axios에 적용, 비동기 방식을 동기 방식처럼 적용
  - my-page 전면 개편
    - custom hook 방식으로 맞춤
    - my page header
      - 컴포넌트 분환 완료
      - 사이즈 줄이면 헤더 부분 아래로 내려가는 문제 해결 (xl -> sm 변경)
    - 전체 컴포넌트 
      - web 전용으로 나누고 분리함
      - header와 container 부분 모두 적용
    - 메뉴바
      - UI 전면 개편
      - custom hook을 이용하여 링크 이동
    - 구독 등급 관리
      - 페이지 추가
      - 아직 작업해야함

## 17일

- Back
  - entity 디렉토리 생성 후 경로 리팩토링
  - 구독 API 추가
    - 나를 구독한 리스트 추가
    - 내가 구독한 리스트 추가

## 18일

- Front
  - URI.js -> restApiAllUser.js 수정
    - 이 파일은 user용 axios 호출하는 util형 파일
    - 차후, restApiLoginUser.js로 jwt 호출

## 19일

- Front
  - jwt restapi 구현 완료
  - 추후 backend jwt restful api 구현 시 테스트 예정

- Back
  - jwt 인증 개발 중 

## 22일

- Back
  - jwt 1차 구현 완료
    - 인증 받고 token 받아오는 것까지 완료
    - 2차 테스트 진행 예정