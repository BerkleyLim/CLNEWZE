import React, { useEffect } from 'react'

export default function practiceRoomComponent(props) {
  let [practiceRooms, setPracticeRooms] = useEffect([]);


  const practiceRoomDetail = (pno) => {

  }
  return (
    <div>
      <div class="title-practiceRoom">
        <nav class="navbar title_area">
          <h1>연습실정보</h1>
          <div class="input-group-prepend search-box">
            <div class="dropdown select-box">
              <button class="btn dropdown-toggle" type="button"
                id="select-box" data-target="#" data-toggle="dropdown"
                aria-haspopup="true" role="button" aria-expanded="false"> 전체
              </button>
              <div class="dropdown-menu" role="menu" aria-labelledby="select-box">
                <button id="practiceRoom-select-all" class="dropdown-item" type="button">전체</button>
                <button id="practiceRoom-select-classic" class="dropdown-item" type="button"></button>
                <button id="practiceRoom-select-newage" class="dropdown-item" type="button">뉴에이지</button>
                <button id="practiceRoom-select-jazz" class="dropdown-item" type="button">재즈</button>
                <button id="practiceRoom-select-pop" class="dropdown-item" type="button">팝</button>
                <button id="practiceRoom-select-koreanpop" class="dropdown-item" type="button">가요</button>
                <button id="practiceRoom-select-ost" class="dropdown-item" type="button">OST</button>
                <button id="practiceRoom-select-etc" class="dropdown-item" type="button">그 외</button>
              </div>
            </div>
            <div class="input-box">
              <input type="text" class="form-control" title="검색어 입력" value="" />
              <button type="button" class="submit"><span><i class="fas fa-search"></i></span></button>
            </div>
          </div>
        </nav>
        <nav class="navbar items_wrap">
          <button type="button" class="all-practiceRoom">전체</button>
          <button type="button" class="piano-practiceRoom">피아노</button>
          <button type="button" class="string-practiceRoom">현악기</button>
          <button type="button" class="wind-practiceRoom">관악기</button>
          <button type="button" class="guitar-practiceRoom">기타</button>
          <button type="button" class="violin-practiceRoom">바이올린</button>
          <button type="button" class="Kmusic-practiceRoom">국악</button>
          <button type="button" class="etc-practiceRoom">다른 악기</button>
        </nav>
      </div>

      <div class="practiceRoom-container">
        <nav class="navbar practiceRoom-list-setting">
          <h2>전체 연습실</h2>
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

        <div class="practiceRoom-feed">
          {
            practiceRooms.map(
              practiceRoom =>
                <div class="autor_wrap card mb-3 practiceRoom-detail" onClick={() => practiceRoomDetail(practiceRoom.pno)}>
                  <div class="practiceRoom-title">{practiceRoom.title}</div>
                  <div class="card-body">
                    <div class="card mb-3 content" >
                      <div class="row no-gutters">
                        <div class="col-md-4">
                          <img src={practiceRoom.img} class="card-img" alt="..." style="width:150px;height:150px" />
                        </div>
                        <div class="col-md-8">
                          <div class="">
                            <h5 class="card-title"></h5>
                            <p class="card-text">
                              ● 성함 : {practiceRoom.name} <br />
                              ● 위치 : {practiceRoom.place} <br />
                              ● 문의 번호 : {practiceRoom.phone}<br />
                              ● 대여가격 : {practiceRoom.price}
                              ● 상세정보 : {practiceRoom.content}
                            </p>
                            <p class="card-text">
                              <small class="text-muted">{practiceRoom.updateDate}</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )
          }

          <section class="board-srh_wrap">
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
