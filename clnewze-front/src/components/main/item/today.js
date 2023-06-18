import React from 'react'
import { ChevronRight } from 'react-bootstrap-icons'
import styles from "../main.module.scss";

const MainTodayIssue = () => {
  return (
    <>
      <div className={`${styles?.mainCommonHeader}`}>
        <h1>오늘의 소식</h1>
        <p>
          <ChevronRight /> 더보기
        </p>
      </div>
      <div className={`${styles?.eventMainBoardCardContainer}`}>
        <div className={`${styles?.banner}`}>다음은 베너로 추가</div>
      </div>
    </>
  )
}

export default MainTodayIssue