import React, { Component } from 'react'

export default function AppComponent(props) {
    return (
      <>
        <div>
          <nav className="nav justify-content-center event-main-container">
            <div className="event-icon-prev"><i className="fas fa-angle-left"></i></div>
            <div className="event-banner-cover">
              <img src="image/sample-banner.jpg" style="width:800px; height:200px;"/>
            </div>
            <div className="event-icon-next"><i className="fas fa-angle-right"></i></div>
          </nav>

          <div className="main-common-header">
            <h1>오늘의 소식</h1>
            <p>&gt; 더보기</p>
          </div>
          <div className="banner">다음은 베너로 추가</div>

          <div className="row">
            <div className="col main-notice">
              <div className="main-common-header">
                <h1>공지사항</h1>
                <p>&gt; 더보기</p>
              </div>
              <table className="table table-hover">
                <thead>
                  <th>번호</th>
                  <th>제목</th>
                  <th></th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>뮤직스타일 이용안내</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>경고 및 제재사항</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col main-QnA">
              <div className="main-common-header">
                <h1>QnA</h1>
                <p>&gt; 더보기</p>
              </div>
              <table className="table table-hover">
                <thead>
                  <th>번호</th>
                  <th>제목</th>
                  <th></th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>영상 올리는 방법이 궁금해여</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>마이페이지 기능은 무엇인가요?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="main-common-header">
            <h1>곡 정보</h1>
            <p onclick="movePage('information')">&gt; 더보기</p>
          </div>
          <nav className="nav justify-content-center event-main-container">
            <div className="event-icon-prev"><i className="fas fa-angle-left"></i></div>
            <div className="event-main-board-card-container event-information">
              <button type="button" className="common-main-card">1</button>
              <button type="button" className="common-main-card">2</button>
              <button type="button" className="common-main-card">3</button>
              <button type="button" className="common-main-card">4</button>
              <button type="button" className="common-main-card">5</button>
              <button type="button" className="common-main-card">6</button>
            </div>
            <div className="event-icon-next"><i className="fas fa-angle-right"></i></div>
          </nav>

          <div className="main-common-header">
            <h1>영상</h1>
            <p>&gt; 더보기</p>
          </div>
          <nav className="nav justify-content-center event-main-container">
            <div className="event-icon-prev"><i className="fas fa-angle-left"></i></div>
            <div className="event-main-board-card-container event-media">
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
            </div>
            <div className="event-icon-next"><i className="fas fa-angle-right"></i></div>
          </nav>

          <div className="main-common-header">
            <h1>악보</h1>
            <p>&gt; 더보기</p>
          </div>
          <nav className="nav justify-content-center event-main-container">
            <div className="event-icon-prev"><i className="fas fa-angle-left"></i></div>
            <div className="event-main-board-card-container event-sheetmusic">
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
            </div>
            <div className="event-icon-next"><i className="fas fa-angle-right"></i></div>
          </nav>

          <div className="main-common-header">
            <h1>레스너 찾기</h1>
            <p>&gt; 더보기</p>
          </div>
          <nav className="nav justify-content-center event-main-container">
            <div className="event-icon-prev"><i className="fas fa-angle-left"></i></div>
            <div className="event-main-board-card-container event-teacher">
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
            </div>
            <div className="event-icon-next"><i className="fas fa-angle-right"></i></div>
          </nav>

          <div className="main-common-header">
            <h1>연습실 정보</h1>
            <p>&gt; 더보기</p>
          </div>
          <nav className="nav justify-content-center event-main-container">
            <div className="event-icon-prev"><i className="fas fa-angle-left"></i></div>
            <div className="event-main-board-card-container event-practiceRoom">
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
            </div>
            <div className="event-icon-next"><i className="fas fa-angle-right"></i></div>
          </nav>

          <div className="main-common-header">
            <h1>커뮤니티</h1>
            <p>&gt; 더보기</p>
          </div>
          <nav className="nav justify-content-center event-main-container">
            <div className="event-icon-prev"><i className="fas fa-angle-left"></i></div>
            <div className="event-main-board-card-container event-community">
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
            </div>
            <div className="event-icon-next"><i className="fas fa-angle-right"></i></div>
          </nav>
        </div>
      </>
    )
}
