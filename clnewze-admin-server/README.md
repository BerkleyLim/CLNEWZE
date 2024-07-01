# clnewze-admin-server

- CLNEWZE 관리자 페이지 서버 (백엔드)
- 현재는 구현만 되어 있으며 실제로 연동하지 않음
- 향후 Docker와 연동하여 사용 예정
- Nest.js 기반으로 구현

<br/>

## Project Structure

```
clnewze-admin-server/
├── src/
│   ├── sheet/                  # 악보 관련 서비스 로직
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── test/                   # 테스트 관련 디렉토리
│   │   ├── app.e2e-spec.ts
│   │   └── jest-e2e.json
├── .gitignore
├── Dockerfile                  # Docker 설정 파일
├── LICENSE
├── README.md
├── nest-cli.json               # Nest.js CLI 설정 파일
├── package.json
├── tsconfig.build.json         # TypeScript 빌드 설정 파일
└── tsconfig.json               # TypeScript 설정 파일
```

<br/>

## Getting Started

- 로컬 기준

```bash
# Start the development server
npm run start:dev
```
