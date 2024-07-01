# CLNEWZE-Front

- CLNEWZE 프로그래밍 소스코드 사용자용 프론트 엔드 개발 영역
- JS 기반 React로 진행하였고, Redux --> Recoil + React Query로 교체하여 상태관리 진행
- reactstrap + bootstrap + scss 기반 UI --> Material UI + tailwind css 로 UI 교체

<br/>

## Project Structure

```
clnewze-front/
├── .vscode/                   # VSCode 설정 파일
├── node_modules/              # npm 패키지 디렉토리
├── plop-templates/            # Plop 템플릿 파일
│   ├── component.hbs
│   └── test.hbs
├── public/                    # 정적 파일 디렉토리
│   ├── image/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   ├── manifest.json
│   └── robots.txt
├── src/                       # 소스 코드 디렉토리
│   ├── components/            # 1페이지 당 컴포넌트 유지
│   ├── data/                  # 동적 페이지 유지를 위한 데이터셋 디렉토리
│   ├── hooks/                 # 로직을 담는 디렉토리 (Custom Hook 디자인 패턴 적용)
│   ├── image/                 # 동적 이미지를 담는 디렉토리 (운영 시 AWS S3 적용 예정)
│   ├── layout/                # 정적 페이지 요소를 담는 디렉토리
│   ├── pages/                 # 1페이지 전체를 이루는 페이지 컴포넌트 모음
│   ├── recoil/                # 전역 상태관리를 위한 디렉토리
│   ├── router/                # 라우터 설정을 위한 디렉토리
│   ├── scss/                  # SCSS 파일을 담는 디렉토리
│   ├── service/               # API 연동을 위한 디렉토리
│   ├── util/                  # 전역적으로 함수를 사용하기 위한 디렉토리
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

<br/>

## Getting Started

- 로컬 기준

```bash
npm run start
```
