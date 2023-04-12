import axios from 'axios'

// 다음은 Axios를 이용한 API 호출을 위해 전송
// Interceptors로 이용한 통신을 한다.
// 1.요청하기 직전, 2. 응답을 받고 then, catch로 처리 직전
// 인스턴스, request설정, response 설정 한다.

// 참조 : https://velog.io/@skyepodium/axios-%EC%9D%B8%ED%84%B0%EC%85%89%ED%84%B0%EB%A1%9C-API-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0

// axios 인스턴스를 생성합니다.
/*
    axios 인스턴스를 생성합니다.
    생성할때 사용하는 옵션들 (baseURL, timeout, headers 등)은 다음 URL에서 확인할 수 있습니다.
    https://github.com/axios/axios 의 Request Config 챕터 확인
*/
const instance = axios.create({
  // baseURL: 'https://api.hnpwa.com',
  baseURL: 'https://localhost:8080',
  timeout: 1000,
  headers: {
    'Content-Type': 'Application/json',
  }
});

/*
  1. 요청 인터셉터
  2개의 콜백 함수를 받습니다.
*/
/*
    1) 요청 바로 직전 - 인자값: axios config
    2) 요청 에러 - 인자값: error
*/
instance.interceptors.request.use(
  function (config) {
      // 요청 성공 직전 호출됩니다.
      // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
      return config;
  }, 
  function (error) {
      // 요청 에러 직전 호출됩니다.
      return Promise.reject(error);
  }
);

/*
  2. 응답 인터셉터
  2개의 콜백 함수를 받습니다.
*/
instance.interceptors.response.use(
  function (response) {
  /*
      http status가 200인 경우
      응답 성공 직전 호출됩니다. 
      .then() 으로 이어집니다.
  */
      return response;
  },

  function (error) {
  /*
      http status가 200이 아닌 경우
      응답 에러 직전 호출됩니다.
      .catch() 으로 이어집니다.    
  */
      return Promise.reject(error);
  }
);

export default instance;