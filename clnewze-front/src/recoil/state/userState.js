import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage = 
      typeof window !== 'undefined' ? window.sessionStorage : undefined


const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: sessionStorage, // configure which storage will be used to store the data
  converter: JSON // configure how values will be serialized/deserialized in storage
});

// 기본 값 - 로그인한 유저 정보
const InitState = {
  uno: -1,
  userId: undefined,
  userNm: undefined,
  nickNm: undefined,
  role_admin: undefined,
  user_company: undefined,
  isLogin: false,  // 현재 로그인중인지 알려준다
  validated: false // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미
}

// user 정보 상태 관리 값 - 로그인한 유저 정보 상태 값
export const userState = atom({
  key: 'user',
  default: InitState,
  effects_UNSTABLE: [persistAtom]
});

// 관리자를 위한 권한, userAdminListState를 지정
export const userAdminListState = atom({
  key: 'userList',
  default: []
})