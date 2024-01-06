import React, { useEffect, useState } from 'react'
import MyPageWebPage from './web/commom/MyPageWebPage';
import styles from '../../scss/mypage/mypage.module.scss'

const MyPage = () => {
    // 반응형 웹앱을 위한 state 변수
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // 반응형 웹 적용
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  }, [innerWidth]);

  return (
    // 여기서는 component가 모바일 모드와 웹 모드로 나눔
    <div className={`${styles?.myPageContainer}`}>
      {/* <MypageHeader /> */}
      {
        innerWidth >= 860 ?
        <MyPageWebPage />
        : 
        <>모바일</>
      }
    </div>
    // <div>
    //   {
    //     innerWidth >= 860 ?
    //     <MyPageWebPage />
    //     : 
    //     <>모바일</>
    //   }
    // </div>
  )
}

export default MyPage