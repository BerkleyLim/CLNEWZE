# CLNEWZE

- CLNEWZE 란 Classic, Newage, Jazz를 합친 말입니다.
- Okky와 비슷하게 음악 전문가들 중심으로 이루며 음악 종합적인 사이트를 운영 및 서비스
- 음악을 생업으로 하는 사람을 위해 프로필 관리 및 공연정보, 악보 등 커뮤니티 활성화로 목적 둠

<br/>

## 싸이트

- 3월경 오픈 예정 (디자이너에게 요구사항을 건네줄 기획 문서(스토리보드) 및 개발 테스트 진행 중)

<br/>

## 개발 목적

- 사업 목적이 아닌 단순히 개발자로써 가져야 할 스킬을 위해 진행
- 개발 숙련도를 향상 시키는 목적으로 다양한 기술 스택으로 개발한 인생을 담긴 프로젝트로 남기 위함
- 프론트엔드/백엔드/서버 DevOps 까지 익힌 개발자로 풀스택 개발자의 역량을 향상시키는 목적

<br/>

## 프로젝트 기간

- 23' 04 ~ 24' 03
- 운영 시작 예정 일(Beta) : 24' 03 ~

<br/>

## 클뉴즈 소스코드 공개 범위 리스트

- 회원 정보(로그인/회원수정/로그아웃)
- 악보 업로드
- 선생님 리스트 조회 (등록 제외)
- 관리자 페이지 일부(나머지는 개발 중으로 표시)
- 기타 : 개발중으로 표시
- 앱버전 : 오픈베타 종료 이후, 추가 개발 예정

<br/>

## 릴리즈 버전
- 배포 이후 작성 진행 예정

## 기술 스택

- 사용자 페이지

> - Maven XX, VS code, Java 11 -> 17, Nodejs 16 -> 20, MySQL, Windows 11
> - 프론트엔드 : React, React-Query, Redux -> Recoil, JavaScript, scss/sass, html, reactstrap
> - 백엔드 : java, springBoot 3.0.3, My-batis, Jwt
> - DB : mysql(로컬), mariadb(개발 및 운영)
> - App : React Native
> - Infra : AWS, Route 53, SSL
> - Other : SSE, Web Socket, SEO

<br/>

- 관리자 페이지

> - VS code, Nodejs 20, MySQL, Windows 11
> - 프론트엔드 : React, React-Query, MobX, TypeScript, scss/sass, html
> - 백엔드 : nodejs, express, nest.js, My-batis
> - DB : mysql(로컬), mariadb(개발 및 운영)
> - Infra : AWS, Route 53, SSL

<br/>

## Gettings start

```
# 사용자 - 프론트 엔드 서버 실행 방법
#repo
cd *front
npm install
npm start

# 사용자 - 백 엔드 서버 실행 방법
#repo
cd *back
mvn spring-boot:run

# 관리자 - 프론트 엔드 서버 실행 방법
#repo
cd clnewze-admin
npm install
npm start

# 관리자 - 백 엔드 서버 실행 방법
#repo
cd *server
npm install
npm run start:dev # 운영 시 npm run start:prod
```

<br/>

## 개발 히스토리

- history 폴더로 들어가서 개발 이력 확인 바람

<br/>

## 개발 후 기대 숙련도

- 프론트엔드

> - html, css, javascript 기본기 습득 및 Custom Hooks 디자인 패턴 습득
> - React를 이용하여 상태관리 Redux, Recoil, mobX로 Client state 습득
> - React-Query를 활용하여 Server state 관리 가능
> - SSE으로 FCM 개발 가능, Web Socket으로 사용자 간의 대화 가능

- 백엔드

> - Java, Spring 으로 활용한 백엔드 개발 가능
> - JWT 활용하는 방법의 대해 습득 및 비즈니스 로직 설계 가능
> - DB 쿼리문을 활용하여 개발 구현 가능
> - Node.js, express, nest.js 기술 스택 습득

- APP

> - React Native의 대해 습득 및 개발 가능
> - Android와 IOS 환경에서도 개발 구현 가능

- 서버 & 인프라 개발

> - AWS 기반으로 서버 런칭 가능 / nginx로 이용하여 서버 포워딩 가능 / 트래픽 제어 가능 / SSL 연동 가능
> - Linux의 활용하는 방법의 대해 습득 가능
> - DevOps의 대한 능력 습득

<br/>

## 감사의 인사

- 먼저 아랫분들께서 저의 개발 숙련도를 올려주시는데에 도움을 주셔서 감사드립니다.
- commiter : [goni9071](https://github.com/goni9071),[@Joon1313](https://github.com/Joon1313)
