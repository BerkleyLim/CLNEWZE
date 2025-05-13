# CLNEWZE

이 프로젝트는 클래식(Classic), 뉴에이지(Newage), 재즈(Jazz) 등 음악 데이터를 활용한  
웹 기반 정보 관리 시스템을 설계하는 개인 기술 실험 프로젝트입니다.

<br/>

## 개발 목적

- 백엔드 중심의 시스템 구조 설계, 프론트엔드 화면 구성, DevOps 환경 세팅까지 전반을 직접 경험하기 위함
- 음악이라는 특정 도메인을 활용하여, SaaS 구조 실험 및 API 설계/배포 등의 **풀스택 역량 강화**를 목표로 함

<br/>

## 프로젝트 구조

```
CLNEWZE_Beta/
├── .vscode/                           # VSCode 설정 파일
├── clnewze-admin-server/              # 관리자 서버 소스 코드
│   ├── src/
│   └── pom.xml
├── clnewze-admin/                     # 관리자 프론트엔드 소스 코드
│   ├── src/
│   └── package.json
├── clnewze-back/                      # 사용자 백엔드 소스 코드
│   ├── src/
│   └── pom.xml
├── clnewze-front/                     # 사용자 프론트엔드 소스 코드
│   ├── src/
│   └── package.json
├── clnewze-sql/                       # SQL 스크립트 및 DB 관련 파일
├── history/                           # 프로젝트 변경 기록
├── .gitignore
├── LICENSE
├── README.md
├── SECURITY.md
└── docker-compose.yml                 # Docker Compose 설정 파일
```

<br/>

## 사용 기술 스택

| **구분**       | **기술 스택**                                                                                     |
|----------------|---------------------------------------------------------------------------------------------------|
| **Tool**       | Maven, IntelliJ, Node.js 20, Mac OS                                                               |
| **프론트엔드** | React, React-Query, Redux, Recoil, JavaScript, Typescript, SCSS/SASS, HTML, Reactstrap            |
| **백엔드**     | Java, Spring Boot 3.0.3, MyBatis, JWT                                                              |
| **DB**         | MySQL                                                                                             |
| **App**        | React Native                                                                                      |
| **Infra**      | AWS, Route 53, SSL                                                                                |
| **Other**      | SSE, WebSocket, SEO                                                                               |

<br/>

## 주요 기능

- **베타버전 기능**: 악보 소개, 마이페이지 일부 등 제공
- **테스트 계정**: ID `test2` / PW `test2`로 로그인 가능

<br/>

## Getting Started

### 사용자 페이지 - 프론트엔드 서버 실행 방법
```bash
# Clone the repository
git clone https://github.com/clnewze/CLNEWZE_Beta.git

# Navigate to the frontend directory
cd CLNEWZE_Beta/clnewze-front

# Install dependencies
npm install

# Start the development server
npm start
```

### 사용자 페이지 - 백엔드 서버 실행 방법
```bash
# Clone the repository
git clone https://github.com/clnewze/CLNEWZE_Beta.git

# Navigate to the backend directory
cd CLNEWZE_Beta/clnewze-back

# Start the backend server
mvn spring-boot:run
```

### 관리자 페이지 - 프론트엔드 서버 실행 방법
```bash
# Clone the repository
git clone https://github.com/clnewze/CLNEWZE_Beta.git

# Navigate to the admin frontend directory
cd CLNEWZE_Beta/clnewze-admin

# Install dependencies
npm install

# Start the development server
npm start
```

### 관리자 서버 - 백엔드 실행 방법
```bash
# Clone the repository
git clone https://github.com/clnewze/CLNEWZE_Beta.git

# Navigate to the admin server directory
cd CLNEWZE_Beta/clnewze-admin-server

# Start the backend server
mvn spring-boot:run
```

<br/>

## 감사의 인사

- 이 프로젝트에 기여해주신 분들께 감사드립니다.
- 커미터: [goni9071](https://github.com/goni9071), [@Joon1313](https://github.com/Joon1313)
