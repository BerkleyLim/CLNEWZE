import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import AppComponent from './components/AppComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="modal-container"></div>
        <div className="container">
          <Routes>
            <Route path="/"  element = {AppComponent}/>
            {/* <Route path="/introduction"  component = {IntroductionComponent}/>
            <Route path="/career"  component = {CareerComponent}/>
            <Route path="/project"  component = {ProjectComponent}/>
            <Route path="/together"  component = {TogetherComponent}/> */}
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="ft-content">
        <p className="ft-service"><a href="#">서비스소개</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">회사소개</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">채용정보</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">이용약관</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">개인정보취급방침</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">고객의소리</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">제휴/광고문의</a>&nbsp;&nbsp;</p>
        <span className="ft-copy">Copyright (c) 2019 MusicStyle., Ltd, All Rights Reserved</span>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className="header">
      <nav className="hd-content1 navbar">
        <div className="header_logo">
          <a href="/">로고(추가예정)<img src="" /></a>
        </div>
        <div className="header_search">
          <div className="input-group">
            <div className="input-group-prepend">
              <button id="hd-search-menu" className="btn hd-dropdown-color dropdown-toggle"
                type="button" data-target="#" data-toggle="dropdown"
                aria-haspopup="true" role="button" aria-expanded="false" style="width:140px">전체</button>
              <div className="dropdown-menu" role="menu" aria-labelledby="hd-search-menu">
                <button id="hd-search-all" className="dropdown-item" type="button">전체</button>
                <button id="hd-search-information" className="dropdown-item" type="button">곡목록</button>
                <button id="hd-search-media" className="dropdown-item" type="button">영상</button>
                <button id="hd-search-sheetmusic" className="dropdown-item" type="button">악보</button>
                <button id="hd-search-community" className="dropdown-item" type="button">커뮤니티</button>
                <button id="hd-search-teacher" className="dropdown-item" type="button">레슨샘찾기</button>
                <button id="hd-search-practiceRoom" className="dropdown-item" type="button">연습실정보</button>
              </div>
            </div>
            <input id="hd-search" type="text" className="form-control header-search-input"
              aria-label="Text input with dropdown button">
              <i className="fas fa-search header-icon" onclick=""></i>
            </input>
          </div>
        </div>

        <div style="display:flex;width:100px;"></div>

        <div className="header_language">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button"
              id="select-language" data-target="#" data-toggle="dropdown"
              aria-haspopup="true" role="button" aria-expanded="false">
              Korean
            </button>
            <div className="dropdown-menu" role="menu" aria-labelledby="select-language">
              <button id="select-korean" className="dropdown-item" type="button">Korean</button>
              <button id="select-japanese" className="dropdown-item" type="button">Japanese</button>
              <button id="select-English" className="dropdown-item" type="button">English</button>
              <button id="" className="dropdown-item" type="button">etc..</button>
            </div>
          </div>
        </div>

        <i className="fas fa-list header-icon"></i>

        <div className="header_mymenu">
          <button type="button">
            <i className="fas fa-user-circle"></i>
            <span className="header-nickname">홍길동</span>
          </button>
        </div>

      </nav>

      <nav className="hd-content2 navbar">
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
