import React, { useState } from "react";
// import { Navbar } from "reactstrap";

import Title from "./title/index";
import Menu from "./contents/menu/index";
import "./information.scss";

const Informations = (props) => {
  let [informations, setInformations] = useState([]);
  return (
    <div>
      <Title />

      <div className="contain">
        <Menu />

        <div className="contents">
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
