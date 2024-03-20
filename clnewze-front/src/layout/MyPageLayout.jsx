import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import UserContainer from "../hooks/UserContainer";
import {useRecoilState} from "recoil";
import {innerWidthState} from "../recoil/state/commonState";
import styles from "../scss/mypage/commom/mypage.common.module.scss";
import MyPageWebPage from "./item/MyPageWebPage";
import MyPageMobilePage from "./item/MyPageMobilePage";

const MyPageLayout = () => {
  // id값 추출하고, another state 변수에 저장
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { userProfile } = UserContainer();
  // 반응형 웹앱을 위한 state 변수
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerWidth, setInnerWidth] = useRecoilState(innerWidthState);

  // 반응형 웹 적용
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  }, [innerWidth]);

  // mypage 진입 시 유저 목록 출력 - react hook으로 활용하여 한번만 출력하도록 설정함
  useEffect(() => {
    const fetch = async () => {
      await userProfile(id)
    }
    fetch();
  }, [])

  return (
    // 여기서는 component가 모바일 모드와 웹 모드로 나눔
    <div className={`${styles?.myPageContainer}`}>
      {
        innerWidth >= 860 ?
          <MyPageWebPage />
          :
          <MyPageMobilePage />
      }
    </div>
  )
}

export default MyPageLayout;