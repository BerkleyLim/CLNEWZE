import { atom } from "recoil";

// 로그인 모달창 띄우기
export const isLoginOpenState = atom({
  key: 'isLoginOpen',
  default: false,
});


// 반응형 웹앱을 위한 화면 조정을 위한것
export const innerWidthState = atom({
  key: 'innerWidth',
  default: window.innerWidth
})