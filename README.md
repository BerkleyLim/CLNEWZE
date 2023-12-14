# CLNEWZE
- CLNEWZE 란 Classic, Newage, Jazz를 합친 말입니다.
- 시작 계기는 코딩연습을 위해 하였으며, 클래식 음악을 좋아하고 피아노 연주를 좋아하는 사람 중 하나로 나만의 사이트를 만들기 위해 시작
- 최종 목적으로는 풀스택 개발자(프론트엔드, 백엔드, DB, 서버 및 인프라) 능력을 향상 시키기 위해 진행
- 음악 중계, ERP 등 음악과 관련된 서비스 개발을 하여 사업이 아닌 실제 트래픽 관리 경험과 로직 구성을 깔끔히 하여 서버 트래픽 비용을 절감시키는 연습을 위해 목표로 진행
- 본 코드는 일체 무단 복제/사용을 금한다!

### 프로젝트 기간

- 23' 04 ~ (개발중)

### 베타 테스트 오픈 예정일
- 24년 1월 경 마무리하여 베타 테스트 버전으로 런칭하여 고객에게 피드백 받는 기간으로 운영 예정

### 서비스 실제 운영 예정 일
- 베타 테스트 끝난 이후, 24년 5월경 오픈 예정

### 개발 환경
- Maven XX
- VS code
- Java 11 -> 17
- Nodejs 16 -> 20
- MySQL
- Windows 11

### 사용 스택
```
React, React-Query, Recoil, JavaScript, scss/sass, npm, html, css, java, springBoot, My-batis, mariadb, mysql, aws, maven
```

### 작업 진행 사항 (사용자용 UI 기준)
- 메뉴 : 악보 정보, 연습실 정보, 선생님 정보
- Redux -> Recoil 변경
- Custom Hook 형식 리팩토링 후, 중복코드 및 재사용성은 util로 분리
- Session Storage에 미리 state 값 저장 방식 사용 
  - 해당 페이지에 잠시 사용하고 버릴경우 : useState()
  - 접속 시 state 값 유지된 페이지로 사용할 경우 : recoil state 방식 사용

### 베타 테스트 전, 작업 예정 사항
- Redux 활용 -> React-Query와 Recoil로 리팩토링, custom hooks 디자인 패턴으로 전환 예정
- JWT 없이 test로 누구나 접속 할 수 있게 설정
- test1, test2, admin 계정 공개, 회원가입 권한 미지정
- 사용자 권한만 부여
- 메인은 정적페이지로 그냥 둘 예정

### 베타 버전 이후 서비스 런칭 전까지 작업 진행사항
- 공개 git 업로드 해제. 레거시 코드 그대로 둘 예정
- 암호 해쉬화, 연락처 등 개인정보 암호화
- 미완성 기능 추가
- 디자인 화면 다시 바꿀 예정
- jwt 기능 추가
- 공연 정보 / 블로그추가 / 기능 편의성 제공
- React Native 기반으로 앱 운영 예정 
- Java -> Kotlin 기반으로 전환 예정
- SEO 기능을 탑재하여 서비스 홍보 작업 실시

### 운영 이후
- 로드밸런싱으로 프론트엔드 백엔드 서버 몇대 배치

### 개발 히스토리
- history 폴더로 들어가서 개발 이력 확인 바람


### 개발 후 기대 숙련도
- 프론트엔드 화면단 : React 기반으로 state 관리 가능, React를 이용하는 프로젝트의 대해 누구보다도 더 잘할 수 있음
- 백엔드 서버단 : Spring Boot 기반으로 API 및 비즈니스 로직 구현, API 개발 뿐만 아닌 인증, 보안 가능
- 서버 & 인프라 개발 : AWS 기반으로 서버 런칭 가능, nginx로 이용하여 서버 포워딩 가능, 트래픽 제어 가능, SSL 연동 가능

### Gettings start

```
# 프론트 엔드 서버 실행 방법
#repo
cd *front
npm install
npm start
```

```
# 백 엔드 서버 실행 방법
#repo
cd *back
mvn spring-boot:run
```
