import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage = 
      typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: sessionStorage, // configure which storage will be used to store the data
  converter: JSON // configure how values will be serialized/deserialized in storage
});

// 마이페이지 - 메뉴 클릭 관리
export const myPageMenuState = atom({
  key: 'myPageMenuState',
  default: {
    index: 1,
    link: '/mypage'
  },

})

// 구독하기 모달 버튼 전역 상태관리
export const myPageHeaderSubScriptModalIsOpenState = atom({
  key: 'myPageHeaderSubScriptModalIsOpen',
  default: false
});


