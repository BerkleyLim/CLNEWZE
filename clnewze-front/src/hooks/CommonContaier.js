import { useNavigate } from "react-router-dom";

// 구분 짓지 않고, 어디든 자주 쓰는 React Hook
const CommonContaier = () => {
  const navigate = useNavigate();
  
  // 페이지 이동할때 쓰는 함수 - nativate
  const moveNavPage = (menu) => {
    navigate(menu);
  }

  // 페이지 이동할때 쓰는 함수 - window.href
  const moveHrefPage = (link) => {
    window.location.href=link;
  }

  return {
    moveNavPage,
    moveHrefPage
  }
}

export default CommonContaier