import React, { useState } from "react";
// import { Navbar } from "reactstrap";

import Title from "./title/index"

const Informations = (props) => {
  let [informations, setInformations] = useState([]);
  return (
    <div>
      <Title />
      {/* <div className="title-information">
        <Navbar className="title_area">
          <h1>곡정보</h1>
          <div className="input-group-prepend search-box">
            <div className="dropdown select-box">
              <button className="btn dropdown-toggle" type="button"
                id="selected-genre" data-target="#" data-toggle="dropdown"
                aria-haspopup="true" role="button" aria-expanded="false"> 전체장르
              </button>
              <div className="dropdown-menu" role="menu" aria-labelledby="selected-genre">
                <button id="information-select-all" className="dropdown-item" type="button">전체장르</button>
                <button id="information-select-classic" className="dropdown-item" type="button">클래식</button>
                <button id="information-select-newage" className="dropdown-item" type="button">뉴에이지</button>
                <button id="information-select-jazz" className="dropdown-item" type="button">재즈</button>
                <button id="information-select-pop" className="dropdown-item" type="button">팝</button>
                <button id="information-select-koreanpop" className="dropdown-item" type="button">가요</button>
                <button id="information-select-ost" className="dropdown-item" type="button">OST</button>
                <button id="information-select-etc" className="dropdown-item" type="button">그 외</button>
              </div>
            </div>
            <div className="input-box">
              <input type="text" className="form-control" title="검색어 입력" value="" />
              <button type="button" className="submit"><span><i className="fas fa-search"></i></span></button>
            </div>
          </div>
        </Navbar>
        <nav className="navbar items_wrap">
          <button type="button" className="all-information">전체</button>
          <button type="button" className="classic-information">클래식</button>
          <button type="button" className="newage-information">뉴에이지</button>
          <button type="button" className="jazz-information">재즈</button>
          <button type="button" className="korean-pop-information">가요</button>
          <button type="button" className="pop-information">팝</button>
          <button type="button" className="OST-information">OST</button>
          <button type="button" className="etc-information">기타장르</button>
        </nav>
      </div> */}

      <div className="information-container">
        <nav className="navbar information-list-setting">
          <h2>전체 곡 목록</h2>
          <div className="sub-menu board">
            <div className="sort-list">
              <div className="view_mode">
                <button
                  type="button"
                  className="feed-type fas fa-bars on"
                  data-viewtype="3"
                >
                  {/* <!-- <span>카드형</span> --> */}
                </button>
                <button
                  type="button"
                  className="list-type fas fa-th-large"
                  data-viewtype="1"
                >
                  {/* <!-- <span>게시판형</span> --> */}
                </button>
              </div>
              <div className="select-box">
                <a href="javascript:;" className="selected">
                  20개
                </a>
                <ul className="select-layer" data-align="left">
                  <li>
                    <a href="javascript:;">10개</a>
                  </li>
                  <li>
                    <a href="javascript:;">20개</a>
                  </li>
                  <li>
                    <a href="javascript:;">30개</a>
                  </li>
                  <li>
                    <a href="javascript:;">40개</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="information-feed">
          {informations.map((information, index) => (
            <div
              key={index}
              className="autor_wrap card mb-3 information-detail"
              // onclick={() => informationDetail(information.ino)}
            >
              <div className="information-title">
                {information.artist} - {information.title}
              </div>
              <div className="card-body">
                <div className="card mb-3 content">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={information.img}
                        className="card-img"
                        alt="..."
                        style="width:150px;height:150px"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="">
                        <div className="row" style="vertical-align:bottom">
                          <h5 className="card-title col-md-8 align-self-center">
                            장르 : {this.genre}
                          </h5>
                          <div className="display col align-self-center justify-content-end">
                            조회수 : {this.viewNumber}
                          </div>
                        </div>

                        <p className="card-text">
                          ● 발매날짜 : {information.releaseDate} 년 <br />●
                          앨범명 : {information.albumName}
                          <br />● 상세정보 : {information.content}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            {information.upLoadDate}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <!-- 상세보기 -->
          <script id="information-detail-template" type="text/x-handlebars-template">
            {{ #informationDetail}}
            <div className="bgdim"></div>
            <div className="common-board-detail-container">
              <h5 className="title-detail-information">{{ artist }} - {{ title }}</h5>
              <div style="font-size:9px; color: #555; float:right;">조회수 : {{ view }} </div>
              <nav className="nav common-content-detail-container">
                <img src="{{img}}" className="album">
                  <div className="detail-container">
                    <div className="">장르 : {{ genre }}</div>
                    <div className="">발매날짜 : {{ releaseDate }}년</div>
                    <div className="">앨범명 : {{ albumName }}</div>
                    <div className="">음원 듣기 : {{ musicLink }}</div>
                  </div>
              </nav>

              <h3>상세정보</h3>

              <!-- 내용 작성 -->
              <div style="height:80%">
                {{ content }}
              </div>

              <!-- 여기는 하단에 놓는다 -->
              <nav className="navbar information-button-event" >
                <div>이전 상세목록</div>
                <div>곡 정보 더보기</div>
                <div>다음 상세목록</div>
              </nav>
            </div>
            {{/ informationDetail}}
          </script> */}

          <section className="board-srh_wrap">
            <div className="paging">
              <a className="page-item on" href="#">
                1
              </a>
              <a className="page-item" href="#">
                2
              </a>
              <a className="page-item" href="#">
                3
              </a>
              <a className="page-item" href="#">
                4
              </a>
              <a className="page-item" href="#">
                5
              </a>
              <a className="page-item" href="#">
                6
              </a>
              <a className="page-item" href="#">
                7
              </a>
              <a className="page-item" href="#">
                8
              </a>
              <a className="page-item" href="#">
                9
              </a>
              <a className="page-item" href="#">
                10
              </a>
              <span>...</span>
              <a className="page-item" href="#">
                15
              </a>
              <a className="page-item next" href="#">
                다음
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Informations;
