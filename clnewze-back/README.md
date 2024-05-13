# clnewze-back 

- 서버를 담당하는 부분 (백엔드)
- 현재 사용자 + 관리자 페이지를 위한 서버는 여기서 진행하지만, 관리자를 위한 서버는 nest.js 기반으로 분리하여 업로드 예정

## Project Structure

```

java
  ⎣ auth : 인증을 위한 서비스 로직
  ⎣ blog : 블로그를 위한 서비스 로직
  ⎣ configuration : Spring Boot를 환경 설정을 위한 디렉토리
  ⎣ information : 음악 정보를 위한 서비스 로직 (현재 사용하고 있지 않지만 향후 적용 할 것을 예상하고 지우지 않음)
  ⎣ room : 연습실 관련 서비스 로직
  ⎣ sheet : 악보 관련 서비스 로직
  ⎣ subscript : 구독을 위한 서비스 로직
  ⎣ teacher : 선생님 관리를 위한 서비스 로직
  ⎣ user : 회원 정보를 관리하는 서비스 로직
  ⎣ util : spring boot에 필요한 전역 함수 적용
resources
    ⎣ mapper : mybatis 연동 이후 sql 쿼리 결과를 java 단에서 사용하도록 지정
    ⎣ md : 스웨거 설명 안내서를 담긴 디렉토리
    ⎣ static.sample : 로컬 테스트용 파일을 담는 디렉토리 (향후 제거 예정)
    ⎣ application.yml : 스프링 부트 환경 설정
    ⎣ logback-spring.xml_bak : 로깅 시스템 도입을 위한 환경 설정, 현재는 아직 시도중
    ⎣ system.properties : 시스템 환경 설정의 관련 정보

```
