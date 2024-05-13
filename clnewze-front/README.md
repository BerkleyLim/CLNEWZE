# CLNEWZE-Front

- 클뉴즈 프로그래밍 소스코드 사용자용 프론트 엔드 개발 영역
- JS 기반 React로 진행 하였고, Recoil + React Query를 활용하여 상태관리 진행


## Project Structure

```

public
src
 ⎿ component : 1페이지 당 컴포넌트 유지
 ⎿ data : back-end 와 연동 하지 않고 front 단에서 동적 페이지 유지하기 위한 dataset 담는 디렉토리
 ⎿ hook : 로직을 담는 디렉토리 (Custom Hook 디자인 패턴 적용)
 ⎿ image : 로컬 서버 기준 동적 이미지를 담는 디렉토리 (운영 시 AWS S3 적용 예정)
 ⎿ layout : React Router Dom을 이용 시 정적 페이지로 출력하는 페이지 요소로 담는 디렉토리
 ⎿ pages : 1페이지 전체를 이루는 페이지 컴포넌트 모음
 ⎿ recoil : 전역 상태관리를 위한 디렉토리
 ⎿ scss : 각 해당 css 를 구성하는 요소된 디렉토리(scss로 구성)
 ⎿ service : API를 연동하는 디렉토리
 ⎿ util : 전역적으로 함수를 사용하기 위한 디렉토리

```

## Gettings start

- 로컬 기준

```bash

npm run start

```
