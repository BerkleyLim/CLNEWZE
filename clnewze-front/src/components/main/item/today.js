import React from 'react'
import { ChevronRight } from 'react-bootstrap-icons'

const MainTodayIssue = () => {
  return (
    <>
      <div className="main-common-header">
        <h1>오늘의 소식</h1>
        <p>
          <ChevronRight /> 더보기
        </p>
      </div>
      <div className="event-main-board-card-container event-sheetmusic">
        <div className="banner">다음은 베너로 추가</div>
      </div>
    </>
  )
}

export default MainTodayIssue