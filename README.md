# CLNEWZE

- CLNEWZE 란 Classic, Newage, Jazz를 합친 말입니다.
<br/>

## 싸이트

- 6월 오픈 예정

<br/>

## 개발 목적

- 프론트엔드/백엔드/서버 DevOps 까지 익힌 개발자로 풀스택 개발자의 역량을 향상시키는 목적
- 개발자로써 다져야하는 내공을 쌓기 위한 연습용 프로젝트로 운영까지 숙련도를 올리기 위해 진행

<br/>

## 프로젝트 구조

- 베타버전 Infra

```

 nginx 서버 -----> 베타버전 서비스 서버 (사용자 서버, 관리자 서버, DB)

```

- 실제 서비스 Infra 예상 1안

```

nginx 서버
  -> 사용자 프론트/백엔드 서버 2대 <-> NAS 서버
  -> 관리자 프론트/벡엔드 서버 1대 <-> NAS 서버

```

<br/>

## 릴리즈 버전
- 배포 이후 작성 진행 예정

<br/>

## 사용 기술 스택

> - Maven XX, Intelli J, Java 17, Nodejs 20, MySQL, Mac OS
> - 프론트엔드 : React, React-Query, Redux, Recoil, JavaScript, Typescript scss/sass, html, reactstrap
> - 백엔드 : java, springBoot 3.0.3, My-batis, Jwt
> - DB : mysql
> - App : React Native
> - Infra : AWS, Route 53, SSL
> - Other : SSE, Web Socket, SEO

<br/>

## Gettings start

```bash
# 사용자 페이지 - 프론트 엔드 서버 실행 방법
#repo
cd *front
npm install
npm start

# 사용자 - 백 엔드 서버 실행 방법
#repo
cd *back
mvn spring-boot:run

# 관리자 페이지 - 프론트 엔드 서버 실행 방법
#repo
cd clnewze-admin
npm install
npm start

```

<br/>

## 감사의 인사

- 먼저 아랫분들께서 저의 개발 숙련도를 올려주시는데에 도움을 주셔서 감사드립니다.
- commiter : [goni9071](https://github.com/goni9071),[@Joon1313](https://github.com/Joon1313)
