# CLNEWZE
- CLNEWZE 란 Classic, Newage, Jazz를 합친 말입니다.
- 시작 계기는 코딩연습을 위해 하였으며, 클래식 음악을 좋아하고 피아노 연주를 좋아하는 사람 중 하나로 나만의 사이트를 만들기 위해 시작
- 각 음악 관련 플랫폼에서 부족한 니즈를 충족시키고, ERP를 제작하여 운영을 목적으로 프로젝트를 계획
- MysicStyle 프로젝트에서의 리뉴얼하고, 보다 질 높은 프로젝트로 구성
  - MysicStyle에서 만든 잔버그 수정
  - 레거시 코드 대량 제거
  - 기능 구현 완성 시키지 못한 부분 리팩토링
- URL : 피드백 목적으로 개발 환경에서 AWS 기반 클라우드 서버에 구동 중 (주소는 컨트리뷰터 및 저를 성장 시켜주는데 적극적으로 피드백 해주실 분만 공유해드립니다.)
- 블로그 : 차후, 사용자 메뉴얼 형태로 제작 예정
- 이 프로젝트는 베타 테스트를 시작한 이후에 프로젝트는 비공개 합니다.
- 단, 프로젝트 파트너(즉, 프리랜서 및 정규직 개발자)를 구하는 경우에만 제한적으로만 공개할 예정입니다.

### 프로젝트 기간
- 23' 04 ~ (개발중)

### 베타 테스트 오픈 예정일
- 23년 12월 경 마무리하여 베타 테스트 버전으로 오픈하여 서비스화 할 예정

## 컨트리뷰터 및 사이드 프로젝트 참여 가능해요
- 지금 현재 웹 디자니어의 대해 공부 중이거나 실력을 키우실분 환영합니다. (도움이 필요해요. 아이디어 제시해주시면 감사드립니다.)
- 음악계열의 대해 취미로 가지시거나 실제 음악 관련 직종에 종사 하시는분들도 언제든지 아이디어를 제공 가능합니다.
- 웹 개발 부분에서 소스코드의 대한 피드백과 아쉬운 기능이 있는 경우 아이디어 제공, 변수명을 어떻게 했으면 좋겠다라는 피드백도 적극적으로 수용 가능해요.
- JWT 및 Token 기반 알고리즘 활용에 대해 알고 계시는 분들 중 도움 줄 수 있는 분 환영합니다.
- SCSS/SASS에 대해 숙련도를 올려주실 컨트리뷰터분 환영합니다.
- Navive App 및 Hibrid App 반영 방법의 대해 스터디 해주실분 환영합니다. 가능하면 React Native 를 활용했으면 좋겠고, 그 외적으로 순수 Java 기반으로도 오키합니다.
- README.md 관리 하는 방법과 피드백 요청 적극 환영합니다.
- 이에 대한 문의사항은 berkleylim16@gmail.com 으로 문의 부탁드립니다.

### 개발 환경
- Maven XX
- VS code
- React
- My-batis
- Spring boot
- MySQL

### 사용 스택
```
React, Redux Session, JavaScript, scss/sass, npm, webpack, html, css, java, springBoot, My-batis, mariadb, mysql, aws, maven
```


### 작업 진행 사항
1) UI 설계(템플릿 제작) - 기본페이지 완료
2) UI 구현 - 기본페이지 완료 (관리자 페이지 일부 추가, 프로필은 ERP형태로 더 추가 예정)
3) DB 설계 - 사용자에게 보여질 페이지는 구현 되었으나 마이페이지 및 관리자용 DB를 추가하여 회원 관리 및 로그 관리 마스터 테이블 형태로 추가 예정
4) Spring boot 환경 설정 - 완료 (Spring Security와 JWT, Batch 및 로그에 필요한 interceptor 구현예정)
5) My-batis 구현 - DB 설계된 부분에서 Read만 구현 완료, 간단한 로그인 구현 완료
6) 프론트와 백엔드 Restful API 사용 - 현재까지 필요한 API 연동 완료, 추가 시 바로 적용
7) 테스트 - 지금까지 완료된 개발은 완료, 마이페이지 및 관리자 페이지 추가시 재테스트 후 베타 테스트 후 서비스화로 배포 예정
8) 운영 - 23년 12월 쯤 베타버전으로 배포 예정 (24년 2월 경 본 서비스 운영 예정)


### 현재 작업 진행도
1) 악보 - 구현, 미리보기에 악보 1페이지만 곡 파일 pdf -> 미리보기 jpg 변환 작업 진행중 (테스트용 기능 구현 완) / 장르 및 악기를 대분류 소분류로 탭으로 구현예정
2) 레스너 찾기 - 선생님 리스트 및 각 전공별 분야별로 나타내는 기능 추가, 장르, 악기 등
3) 연습실 정보 - 각 지역별 연습실 정보 추가, 빅 데이터를 활용하여 연습실 사업으로 등록된 사업장 추출예정
4) 음악인용 커뮤니티 블로그 - 미구현, 현재 선생님 및 음악가 중심으로 교육 및 정보 공유를 목적으로 하여 블로그 형태로 구현 예정
5) 메인 - 현재 UI 일부만 구현 완료 (아직 기능 없음, 차후 바꿀 예정)
6) 마이페이지 - UI 일부 구현 (반응형 앱 넣을 예정)
7) 관리자 전용 페이지 - 미구현
8) 대쉬보드(매출액) - 구현 예정

### 추가 예정 페이지
1) 음악 일정회 : 각종 연동 API를 사용하거나 백엔드 API 정보 가져와서 연동
2) 블로그 : UI 구상중
3) 관리자 페이지 : 각 페이지별 오더바이 기능 및 고객이 필요한 기능을 DB화하여 순서 조정, 회원 관리 및 대쉬보드 기능 추가
4) 마이페이지 : 연습실, 블로그, 악보, 레스너 등 기능 뿐만 아닌 구독자 관리와 이런 것들을 관리한다.

### 삭제 페이지
1) 영상, 음원, 곡정보

### 운영 이후 계획
- 기능 편의성 개편
- 필요 기능은 개발 과정 사이클 처럼 진행 할것
- 차후, 앱 프로젝트도 병행하여 개발 예정


### 개발 히스토리
- history 폴더로 들어가서 개발 이력 확인 바람
- 현재 하나의 조직에 속하면서 조직의 대한 일들과 CLNEWZE 프로젝트를 진행하고 있음
- 본업이 바쁘거나 기능 연습을 걸쳐 중간에 개발이 빠진 경우도 있지만 꾸준히 개발하고 있는 점 참고 바람

### 개발 후 파급효과
- React를 이용하여 반응형 웹앱 개발을 마스터 할 수 있다.
- React 라이브러리를 활용도를 점차 늘릴 수 있다.
- 프론트엔드 개발 실력을 중급 이상으로 역량을 낼 수 있다.
- Html, css, js 를 어느정도 활용 할 수 있는 경지에 올라선다.
- SQL문, Transaction을 활용한 문법을 자유자재로 사용 가능
- Mybatis를 활용한 데이터 관리를 할 수 있다.
- 관리자 페이지까지 구현하여 Master Table을 프론트 화면에서 간접적으로 데이터 관리에 용의하게 할 수 있다.
- Spring Boot 활용을 적극적으로 사용 가능
- 외부 API를 활용하여 필요한 데이터를 받을 수 있다.
- Rest API 방식 뿐만 아닌 WSDL로 개발된 기술로 데이터를 받아 활용 할 수 있다.
- 중급 개발자의 준하는 역량을 보유 할 수 있는 수준으로 경지에 오른다.

