# CLNEWZE

- CLNEWZE 란 Classic, Newage, Jazz를 합친 말입니다.
- 요약 : 음악 전문가 중심으로 ERP 서비스 제공, 음악 중계 서비스 제공

<br/>

## 목적

- 프로젝트 시작 : 개발 숙련도 향상을 목표, 음악을 취미로 두고 시작함
- 프론트엔드 및 백엔드 뿐만 아닌 서버 및 인프라, DevOps까지 갖춘 풀스택 개발자로 성장을 목표로 둠
- 트래픽 까지 관리하여 고객 응대까지 겸비하는 소프트웨어적인 스킬을 향상을 목표 

<br/>

### 프로젝트 기간

- 23' 04 ~ 24' 01 (오픈베타 런칭)
- 24' 01 ~ 24' 05 (정식 서비스 오픈 전 개발 기간)

<br/>

### 개발 환경

- Maven XX, VS code, Java 11 -> 17, Nodejs 16 -> 20, MySQL, Windows 11

<br/>

### 최종 사용 스택

> - 프론트 엔드 : React, React-Query, Recoil, JavaScript, scss/sass, html, css
> - 백엔드 : java, springBoot, My-batis, mariadb, mysql
> - DB : mysql(로컬), mariadb(개발 및 운영)
> - App : React Native (오픈 베타 이후 개발 예정)
> - Infra : AWS, Route 53, SSL

<br/>

### 오픈 베타 런칭 직전 적용 기술

- 인증 : JWT 토큰 기반, Java 기반 Spring Boot 적용, My-Batis 적용
- JS 기반 리액트 적용, React Hooks 디자인 패턴 적용, 유지보수 향상 시킬 컴포넌트 단위로 분할
- 음악인에게 필요한 ERP 서비스와 이력 관리 서비스 제공, 악보, 연습실, 선생님 서비스 제공

<br/>

### 오픈 베타 이후 변경 예정사항

- 음악 컨텐츠 블로그 커뮤니티 제공, 음악을 전문으로 하는 사람들 중심으로 ERP 서비스 제공
- 전문가 중심으로 고도화 작업을 진행하여 컨텐츠를 늘려나가는 방식으로 운영 예정
- 백엔드 : kotlin 기반 spring boot 변경 예정, TS 기반 React 변경 예정
- 오픈 베타 이후, 추가 작업은 소스코드 비공개 전환, Release만 업데이트 예정
- Docker&Kubernatis 도입 예정

<br/>

### 런칭 이후

- 본격적으로 전문가의 요구사항을 기반으로 추가 및 이슈 사항 개편 예정
- 트래픽 수 증가애 따라 AWS 서버 증폭, 동시 방문자 수 10,000명 이상 일 경우 AWS 서버 대신 리눅스 서버 구매 고려하여 로드밸런싱 구축 예정

<br/>

### 개발 히스토리

- history 폴더로 들어가서 개발 이력 확인 바람

<br/>

### 개발 후 기대 숙련도

- 프론트엔드 : React 개발 숙련도 중급 이상의 수준으로 향상
- 백엔드 서버단 : Java 기반 Spring Boot로 이용하여 인증, 보안 등 활용 가능
- 서버 & 인프라 개발 : AWS 기반으로 서버 런칭 가능, nginx로 이용하여 서버 포워딩 가능, 트래픽 제어 가능, SSL 연동 가능

<br/>

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
