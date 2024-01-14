import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginOpenState } from "../recoil/state/commonState";
import UserContainer from "./UserContainer";

// 구분 짓지 않고, 어디든 자주 쓰는 React Hook
const CommonContainer = () => {
  // 로그인 시 모달
  const [isLoginOpen,  setIsLoginOpen] = useRecoilState(isLoginOpenState)
  const { handlerLogin } = UserContainer();
  const navigate = useNavigate();
  
  // 페이지 이동할때 쓰는 함수 - natigate
  const moveNavPage = (menu) => {
    navigate(menu);
  }

  // 페이지 이동할때 쓰는 함수 - window.href
  const moveHrefPage = (link) => {
    window.location.href=link;
  }

  // 로그인 화면 창 띄우기 역할 수행
  const toggleIsLoginOpen = () => {
    setIsLoginOpen(!isLoginOpen);
  }

  // 로그인 버튼 클릭 시
  const loginButton = async (inputs) => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    const isNotClose = await handlerLogin(inputs)
    await setIsLoginOpen(!isNotClose) 
  };

  return {
    moveNavPage,
    moveHrefPage,
    toggleIsLoginOpen,
    loginButton
  }
}

export default CommonContainer