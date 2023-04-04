import React, { useState } from 'react'

const InformationComponent = (props) => {
  let [informations, setInformations] = useState([]);
  return (
    <div>
      <div class="title-information">
        <nav class="navbar title_area">
          <h1>곡정보</h1>
          <div class="input-group-prepend search-box">
            <div class="dropdown select-box">
              <button class="btn dropdown-toggle" type="button"
                id="selected-genre" data-target="#" data-toggle="dropdown"
                aria-haspopup="true" role="button" aria-expanded="false"> 전체장르
              </button>
              <div class="dropdown-menu" role="menu" aria-labelledby="selected-genre">
                <button id="information-select-all" class="dropdown-item" type="button">전체장르</button>
                <button id="information-select-classic" class="dropdown-item" type="button">클래식</button>
                <button id="information-select-newage" class="dropdown-item" type="button">뉴에이지</button>
                <button id="information-select-jazz" class="dropdown-item" type="button">재즈</button>
                <button id="information-select-pop" class="dropdown-item" type="button">팝</button>
                <button id="information-select-koreanpop" class="dropdown-item" type="button">가요</button>
                <button id="information-select-ost" class="dropdown-item" type="button">OST</button>
                <button id="information-select-etc" class="dropdown-item" type="button">그 외</button>
              </div>
            </div>
            <div class="input-box">
              <input type="text" class="form-control" title="검색어 입력" value="" />
              <button type="button" class="submit"><span><i class="fas fa-search"></i></span></button>
            </div>
          </div>
        </nav>
        <nav class="navbar items_wrap">
          <button type="button" class="all-information">전체</button>
          <button type="button" class="classic-information">클래식</button>
          <button type="button" class="newage-information">뉴에이지</button>
          <button type="button" class="jazz-information">재즈</button>
          <button type="button" class="korean-pop-information">가요</button>
          <button type="button" class="pop-information">팝</button>
          <button type="button" class="OST-information">OST</button>
          <button type="button" class="etc-information">기타장르</button>
        </nav>
      </div>

      <div class="information-container">
        <nav class="navbar information-list-setting">
          <h2>전체 곡 목록</h2>
          <div class="sub-menu board">
            <div class="sort-list">
              <div class="view_mode">
                <button type="button" class="feed-type fas fa-bars on" data-viewtype="3">
                  {/* <!-- <span>카드형</span> --> */}
                </button>
                <button type="button" class="list-type fas fa-th-large" data-viewtype="1">
                  {/* <!-- <span>게시판형</span> --> */}
                </button>
              </div>
              <div class="select-box">
                <a href="javascript:;" class="selected">20개</a>
                <ul class="select-layer" data-align="left">
                  <li><a href="javascript:;">10개</a></li>
                  <li><a href="javascript:;">20개</a></li>
                  <li><a href="javascript:;">30개</a></li>
                  <li><a href="javascript:;">40개</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div class="information-feed">
          {
            informations.map((information) =>
              <div class="autor_wrap card mb-3 information-detail" onclick={() => informationDetail(information.ino)}>
                <div class="information-title">{information.artist} - {information.title}</div>
                <div class="card-body">
                  <div class="card mb-3 content" >
                    <div class="row no-gutters">
                      <div class="col-md-4">
                        <img src={information.img} class="card-img" alt="..." style="width:150px;height:150px" />
                      </div>
                      <div class="col-md-8">
                        <div class="">
                          <div class="row" style="vertical-align:bottom">
                            <h5 class="card-title col-md-8 align-self-center">장르 : {this.genre}</h5>
                            <div class="display col align-self-center justify-content-end">
                              조회수 : {this.viewNumber}
                            </div>
                          </div>

                          <p class="card-text">
                            ● 발매날짜 : {information.releaseDate} 년 <br />
                            ● 앨범명 : {information.albumName}<br />
                            ● 상세정보 : {information.content}
                          </p>
                          <p class="card-text">
                            <small class="text-muted">{information.upLoadDate}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }


          {/* <!-- 상세보기 -->
          <script id="information-detail-template" type="text/x-handlebars-template">
            {{ #informationDetail}}
            <div class="bgdim"></div>
            <div class="common-board-detail-container">
              <h5 class="title-detail-information">{{ artist }} - {{ title }}</h5>
              <div style="font-size:9px; color: #555; float:right;">조회수 : {{ view }} </div>
              <nav class="nav common-content-detail-container">
                <img src="{{img}}" class="album">
                  <div class="detail-container">
                    <div class="">장르 : {{ genre }}</div>
                    <div class="">발매날짜 : {{ releaseDate }}년</div>
                    <div class="">앨범명 : {{ albumName }}</div>
                    <div class="">음원 듣기 : {{ musicLink }}</div>
                  </div>
              </nav>

              <h3>상세정보</h3>

              <!-- 내용 작성 -->
              <div style="height:80%">
                {{ content }}
              </div>

              <!-- 여기는 하단에 놓는다 -->
              <nav class="navbar information-button-event" >
                <div>이전 상세목록</div>
                <div>곡 정보 더보기</div>
                <div>다음 상세목록</div>
              </nav>
            </div>
            {{/ informationDetail}}
          </script> */}

          < section class="board-srh_wrap" >
            <div class="paging">
              <a class="page-item on" href="#">1</a>
              <a class="page-item" href="#">2</a>
              <a class="page-item" href="#">3</a>
              <a class="page-item" href="#">4</a>
              <a class="page-item" href="#">5</a>
              <a class="page-item" href="#">6</a>
              <a class="page-item" href="#">7</a>
              <a class="page-item" href="#">8</a>
              <a class="page-item" href="#">9</a>
              <a class="page-item" href="#">10</a>
              <span>...</span>
              <a class="page-item" href="#">15</a>
              <a class="page-item next" href="#">다음</a>
            </div>
          </section>
        </div>

      </div>
    </div >
  )
}

export default IntroductionComponent;