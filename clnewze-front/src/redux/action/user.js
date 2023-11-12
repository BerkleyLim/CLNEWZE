import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: sessionStorage, // configure which storage will be used to store the data
  converter: JSON // configure how values will be serialized/deserialized in storage
});

const InitState = {
  userId: undefined,
  userNm: undefined,
  nickNm: undefined,
  role_admin: undefined,
  user_company: undefined,
  isLogin: false,  // 현재 로그인중인지 알려준다
  validated: false // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미
}

export const foodState = atom({
  key: 'user',
  default: InitState,
  effects_UNSTABLE: [persistAtom]
});
