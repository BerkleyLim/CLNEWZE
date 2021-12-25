import './App.css';
import Router from Router

function App() {
  return (
    <div className="App">
      <Header />

      <div className="login-popup-container"></div>
      <div className="popup-board-detail-container"></div>
      <div className="container">
          다음과 같이 본문을 작성하세요<br/>
          index.html은 각각의 파일을 분리 해놓고 여기서 수행한다.<br/>
          container 라는 클래스를 이용하여 각 파일들을 불러온다.<br/>
      </div>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div class="footer">
      <div class="ft-content">
        <p class="ft-service"><a href="#">서비스소개</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">회사소개</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">채용정보</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">이용약관</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">개인정보취급방침</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">고객의소리</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">제휴/광고문의</a>&nbsp;&nbsp;</p>
        <span class="ft-copy">Copyright (c) 2019 MusicStyle., Ltd, All Rights Reserved</span>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div class="header">
      <nav class="hd-content1 navbar">
        <div class="header_logo">
          <a href="/">로고(추가예정)<img src="" /></a>
        </div>
        <div class="header_search">
          <div class="input-group">
            <div class="input-group-prepend">
              <button id="hd-search-menu" class="btn hd-dropdown-color dropdown-toggle"
                type="button" data-target="#" data-toggle="dropdown"
                aria-haspopup="true" role="button" aria-expanded="false" style="width:140px">전체</button>
              <div class="dropdown-menu" role="menu" aria-labelledby="hd-search-menu">
                <button id="hd-search-all" class="dropdown-item" type="button">전체</button>
                <button id="hd-search-information" class="dropdown-item" type="button">곡목록</button>
                <button id="hd-search-media" class="dropdown-item" type="button">영상</button>
                <button id="hd-search-sheetmusic" class="dropdown-item" type="button">악보</button>
                <button id="hd-search-community" class="dropdown-item" type="button">커뮤니티</button>
                <button id="hd-search-teacher" class="dropdown-item" type="button">레슨샘찾기</button>
                <button id="hd-search-practiceRoom" class="dropdown-item" type="button">연습실정보</button>
              </div>
            </div>
            <input id="hd-search" type="text" class="form-control header-search-input"
              aria-label="Text input with dropdown button">
              <i class="fas fa-search header-icon" onclick=""></i>
            </input>
          </div>
        </div>

        <div style="display:flex;width:100px;"></div>

        <div class="header_language">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button"
              id="select-language" data-target="#" data-toggle="dropdown"
              aria-haspopup="true" role="button" aria-expanded="false">
              Korean
            </button>
            <div class="dropdown-menu" role="menu" aria-labelledby="select-language">
              <button id="select-korean" class="dropdown-item" type="button">Korean</button>
              <button id="select-japanese" class="dropdown-item" type="button">Japanese</button>
              <button id="select-English" class="dropdown-item" type="button">English</button>
              <button id="" class="dropdown-item" type="button">etc..</button>
            </div>
          </div>
        </div>

        <i class="fas fa-list header-icon"></i>

        <div class="header_mymenu">
          <button type="button">
            <i class="fas fa-user-circle"></i>
            <span class="header-nickname">홍길동</span>
          </button>
        </div>

      </nav>

      <nav class="hd-content2 navbar">
        <button id="moveIntroduction" type="button" onclick="movePage('introduction')"> 소개</button>
        <button id="information" type="button" onclick="movePage('information')">곡정보</button>
        <button id="media" type="button" onclick="movePage('media')">영상</button>
        <button id="musicsheet" type="button" onclick="movePage('sheetmusic')">악보</button>
        <button id="teacher" type="button" onclick="movePage('teacher')">레스너찾기</button>
        <button id="practiceRoom" type="button" onclick="movePage('practiceRoom')">연습실정보</button>
        <button id="community" type="button" onclick="movePage('community')">커뮤니티</button>
      </nav>

    </div>
  );
}

export default App;
