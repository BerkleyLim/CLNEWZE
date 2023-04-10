import React from 'react'

const MediaComponent = () => {
  return (
    <>
      {/* <div className="title-information">
        <nav className="navbar title_area">
            <h1>영상정보</h1>
            <div className="input-group-prepend search-box">
                <div className="dropdown select-box">
                    <button className="btn dropdown-toggle" type="button" 
                      id="select-box" data-target="#" data-toggle="dropdown" 
                      aria-haspopup="true" role="button" aria-expanded="false"> 전체장르
                    </button>
                    <div className="dropdown-menu" role="menu" aria-labelledby="select-box">
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
                    <input type="text" className="form-control" title="검색어 입력" value=""/>
                    <button type="button" className="submit"><span><i className="fas fa-search"></i></span></button>
                </div>
            </div>
        </nav>
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
                      <button type="button" className="feed-type fas fa-bars on" data-viewtype="3">
                          {/* <!-- <span>카드형</span> --> */}
                      </button>
                      <button type="button" className="list-type fas fa-th-large" data-viewtype="1">
                          {/* <!-- <span>게시판형</span> --> */}
                      </button>
                  </div>
                  <div className="select-box">
                      <a href="javascript:;" className="selected">20개</a>
                      <ul className="select-layer" data-align="left">
                          <li><a href="javascript:;">10개</a></li>
                          <li><a href="javascript:;">20개</a></li>
                          <li><a href="javascript:;">30개</a></li>
                          <li><a href="javascript:;">40개</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
      
      {/* 이부분 map */}
      <div className="media-feed">
          <div id="information-detail-00001" className="autor_wrap card mb-3">
              <div className="information-title">이루마</div>
              <div className="card-body">
                  <div className="card mb-3 content" >
                      <div className="row no-gutters">
                          <div className="col-md-4">
                              <img src="/image/sample-yiruma-chaconne.png" className="card-img" alt="..." style="width:150px;height:150px"/>
                          </div>
                          <div className="col-md-8">
                              <div className="">
                                  <h5 className="card-title">장르 : 뉴에이지</h5>
                                  <p className="card-text">● 발매날짜 : 1996년 <br/>
                                          ● 앨범명 : <br/>
                                          ● 상세정보 : 이 곡은 클래식을 기반으로 해서....</p>
                                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <section className="board-srh_wrap">
          <div className="paging">
              <a className="page-item on" href="#">1</a>
              <a className="page-item" href="#">2</a>
              <a className="page-item" href="#">3</a>
              <a className="page-item" href="#">4</a>
              <a className="page-item" href="#">5</a>
              <a className="page-item" href="#">6</a>
              <a className="page-item" href="#">7</a>
              <a className="page-item" href="#">8</a>
              <a className="page-item" href="#">9</a>
              <a className="page-item" href="#">10</a>
              <span>...</span>
              <a className="page-item" href="#">15</a>
              <a className="page-item next" href="#">다음</a>
          </div>
      </section>

  </div>
    </>

  )
}

export default MediaComponent