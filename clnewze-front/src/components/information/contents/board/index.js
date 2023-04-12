import React from "react";

const BoardIndex = (index, information) => {
  return (
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
                style={{width:"150px", height:"150px"}}
              />
            </div>
            <div className="col-md-8">
              <div className="">
                <div className="row" style={{verticalAlign:"bottom"}}>
                  <h5 className="card-title col-md-8 align-self-center">
                    장르 : {information.genre}
                  </h5>
                  <div className="display col align-self-center justify-content-end">
                    조회수 : {information.viewNumber}
                  </div>
                </div>

                <p className="card-text">
                  ● 발매날짜 : {information.releaseDate} 년 <br />● 앨범명 :{" "}
                  {information.albumName}
                  <br />● 상세정보 : {information.content}
                </p>
                <p className="card-text">
                  <small className="text-muted">{information.upLoadDate}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardIndex;
