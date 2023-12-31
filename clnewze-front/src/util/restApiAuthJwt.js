import axios from "axios";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { refreshTokenState, tokenState, userState } from "../state/userState";

// jwt에 필요한 토큰 가져오기
let isTokenRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = (accessToken) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

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
  baseURL: "https://localhost:8080",
  timeout: 1000,
  headers: {
    "Content-Type": "Application/json",
  },
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
  /*
    요청 성공 직전 호출됩니다.
    axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
  */
  function (config) {
    // JWT 인증을 위해 if문 추가함, 이 코드는 Bearer token에서 JWT 인증 토크가 일치해야 사용 가능
    // 만일 token이 없으면 토큰 추가함
    if (
      ("Bearer null" === config.headers["X-Authorization"] ||
        undefined === config.headers["X-Authorization"]) &&
      null !== sessionStorage.getItem("token")
    ) {
      instance.defaults.headers["X-Authorization"] =
        "Bearer " + sessionStorage.getItem("token");
      config.headers["X-Authorization"] =
        "Bearer " + sessionStorage.getItem("token");
    }
    return config;
  },

  // 요청 에러 직전 호출됩니다.
  async function (error) {
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
    // jwt를 통해 불려옴
    const {
      config,
      response: { status },
    } = error;
    const originalReq = config;
    // 401 에러 발생시
    if (status === 401 && config && !config.__isRetryRequest) {
      const resetUser = useResetRecoilState(userState);
      const token = useRecoilValue(tokenState);
      const setToken = useSetRecoilState(tokenState);
      const resetToken = useResetRecoilState(tokenState);
      const refreshToken = useRecoilValue(refreshTokenState);
      const setRefreshToken = useSetRecoilState(refreshTokenState);
      const resetRefreshToken = useResetRecoilState(refreshTokenState);
      resetUser();
      if (!isTokenRefreshing) {
        isTokenRefreshing = true;

        fetch(process.env.REACT_APP_API_ROOT + "auth/authenticate", {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Device: "device",
            "X-Authorization":
              "Bearer " + refreshToken,
          },
          redirect: "follow",
          referrer: "no-referrer",
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.status !== 401 && res.status !== 417) {
              setToken(res.data.data);
              setRefreshToken(res.data.data);
              // setToken(res.data.data.token);
              // setRefreshToken(res.data.data.refreshToken);

              // Default Instance Header update
              instance.defaults.headers["X-Authorization"] =
                // "Bearer " + res.data.token;
                "Bearer " + res.data.data;

              // Original Request Header update
              originalReq.headers["X-Authorization"] =
                // "Bearer " + res.data.token;
                "Bearer " + res.data.data;
              onTokenRefreshed(res.data.data);
              // onTokenRefreshed(res.data.token);

              isTokenRefreshing = false;
            } else {
              delete instance.defaults.headers["X-Authorization"];

              resetToken();
              resetRefreshToken();

              isTokenRefreshing = false;

              window.alert("접근 권한이 만료되어 로그아웃 처리 되어 다시 로그인하여 주시기 바랍니다.");
              window.location.href = "/login";
            }
          })
          .catch((e) => {
            delete instance.defaults.headers["X-Authorization"];

            resetToken();
            resetRefreshToken();

            isTokenRefreshing = false;

            window.alert("접근 권한이 만료되어 로그아웃 처리 되어 다시 로그인하여 주시기 바랍니다.");
            window.location.href = "/login";
          });
      }

      // token이 재발급 되는 동안의 요청은 refreshSubscribers에 저장
      const retryOriginalRequest = new Promise((resolve) => {
        addRefreshSubscriber((accessToken) => {
          originalReq.headers["X-Authorization"] = "Bearer " + accessToken;
          resolve(axios(originalReq));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

export default instance;
