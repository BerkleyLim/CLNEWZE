# clnewze-back

- 서버를 담당하는 부분 (백엔드)
- Java 기반 Spring Boot 프로젝트, 모든 처리는 이 서버에서 진행
- 현재 사용자를 위한 서버는 Java/Spring Boot 기반으로 진행하며, 관리자를 위한 서버는 Nest.js 기반으로 분리 예정
- JWT 토큰 인증 처리 방식 추가, MyBatis 기반으로 데이터 통신 중
- 로깅 시스템과 DevOps를 위한 운영 시스템 적용 예정
- CI/CD를 위해 Docker를 도입하였지만 에러 해결이 필요함 (현재, 빌드 후 실행하는 방식으로 진행 중)

<br/>

## Project Structure

```
clnewze-back/
├── .mvn/wrapper/               # Maven Wrapper 디렉토리
├── src/
│   ├── main/
│   │   ├── java/com/clnewze/back/clnewze/   # Java 소스 코드 디렉토리
│   │   │   ├── auth/            # 인증을 위한 서비스 로직
│   │   │   ├── blog/            # 블로그를 위한 서비스 로직
│   │   │   ├── configuration/   # Spring Boot 환경 설정 디렉토리
│   │   │   ├── information/     # 음악 정보를 위한 서비스 로직 (향후 사용 예정)
│   │   │   ├── room/            # 연습실 관련 서비스 로직
│   │   │   ├── sheet/           # 악보 관련 서비스 로직
│   │   │   ├── subscript/       # 구독을 위한 서비스 로직
│   │   │   ├── teacher/         # 선생님 관리를 위한 서비스 로직
│   │   │   ├── user/            # 회원 정보를 관리하는 서비스 로직
│   │   │   └── util/            # Spring Boot에 필요한 전역 함수 적용
│   │   └── resources/
│   │       ├── mapper/          # MyBatis 연동 SQL 쿼리 매퍼
│   │       ├── md/              # Swagger 설명서 디렉토리
│   │       ├── static.sample/   # 로컬 테스트용 파일 디렉토리 (향후 제거 예정)
│   │       ├── application.yml  # Spring Boot 환경 설정 파일
│   │       ├── logback-spring.xml_bak # 로깅 시스템 설정 파일 (현재 시도 중)
│   │       └── system.properties # 시스템 환경 설정 관련 정보
├── .gitignore
├── mvnw
├── mvnw.cmd
├── pom.xml                      # Maven 프로젝트 설정 파일
└── README.md
```

<br/>

## Getting Started

- 로컬 기준

```bash
# Maven 빌드 및 실행
mvn spring-boot:run
```
