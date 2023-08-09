# 현재 작업사항 (8월)

<br/>
9일
1) react-query 설치
- 연습을 목적으로 React-Query를 반영하기 위해 사용
- 사용 배경
- - 반복적인 비동기 데이터를 호출 방지
- - 불필요한 API 콜을 줄여 서버에 대한 부하를 줄이기 위해 사용시도
- - 일반적으로 데이터 갱신시: 화면을 보고 있을때, 페이지 전환 일어날때, 페이지 전환없이 이벤트가 발생해 데이터 요청시 갱신한다.
- React-Query 사용 시 : Refetching 설정 가능
- - refetchOnWindowFocus : 브라우저에 포커스가 들어온 경우
- - refetchOnMount : 새로운 컴포넌트 마운트가 발생시
- - refetchOnReconnect : 네트워크 재연결 발생 시
- 지금은 Redux로 사용하고 있지만, 학습 진행 후 리팩토링 예정 (Redux에선 Server 처리에 한계가 있고, 지금 legacy형태로 사용 중이다.)
2) URI 경로 재설정
- 페이징 네이션 처리 시 고객 편의성 개편용으로 사용
- 생성 형식 : domain/menu/1    // 1이라는 숫자는 1페이지를 의미함