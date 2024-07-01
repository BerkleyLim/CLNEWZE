# clnewze-admin

- CLNEWZE 관리자 페이지 (프론트엔드)
- 메뉴나 마스터 부분은 여기서 관리하도록 설정
- 회원 정보 및 공지사항, Q&A 관리 역시 여기서 진행
- TypeScript 기반 React 프로젝트
- Redux Toolkit으로 상태 관리

<br/>

## Project Structure

```
clnewze-admin/
├── public/                    # 정적 파일 디렉토리
├── src/                       # 소스 코드 디렉토리
│   ├── components/            # 1페이지 당 컴포넌트 유지
│   ├── css/                   # CSS 파일 디렉토리
│   ├── data/                  # 동적 페이지 유지를 위한 데이터셋 디렉토리
│   ├── hooks/                 # 로직을 담는 디렉토리 (Custom Hook 디자인 패턴 적용)
│   ├── layout/                # 정적 페이지 요소를 담는 디렉토리
│   ├── pages/                 # 1페이지 전체를 이루는 페이지 컴포넌트 모음
│   ├── redux/                 # Redux 상태 관리 디렉토리
│   ├── router/                # 라우터 설정을 위한 디렉토리
│   ├── services/              # API 연동을 위한 디렉토리
│   ├── type/                  # 타입 정의를 위한 디렉토리
│   ├── util/                  # 전역적으로 함수를 사용하기 위한 디렉토리
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .env                       # 환경 변수 설정 파일
├── .gitignore
├── Dockerfile                 # Docker 설정 파일
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── postcss.config.js          # PostCSS 설정 파일
├── tailwind.config.js         # Tailwind CSS 설정 파일
├── tsconfig.json              # TypeScript 설정 파일
└── webpack.common.js          # Webpack 공통 설정 파일
```

<br/>

## Getting Started

- 로컬 기준

```bash
npm start
```
