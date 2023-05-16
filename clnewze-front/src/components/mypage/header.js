import React from "react";

import "./mypage.scss";

// // 여기는 바로 페이지 이동없이 바로 마이페이지로 이동 시킨다
// function moveMypage() {
// $(document).ready( () => {
//   $(".move-mypage").click(e => {
//     // 차후, 이부분의 대해서 따로 연구해보겠음
//     //$(".header").css("height", "80px");
//     //$(".container").css("padding-top", "100px");
//     //$(".hd-content2").css("display", "none"); // 마이페이지 할때 기능 넣기

//     $.get(serverRoot + "/mypage/mypage.html", (data) => {
//       $(".container").html(data);
//     });
//   });
// })
// }

// function moveMyInformation() {
//   $.getJSON(serverRoot + "/mypage/myInformation.html", (data) => {
//       $(".mypage-target-container").html(data);
//   })
// }
const MypageHeader = () => {
  return (
    <div className="mypage-header">
      {/* <!-- 사진 --> */}
      <img
        className="mypage-banner"
        src="/image/file/mypage/defalut-my-profile.png"
      />

      {/* <!-- 마이페이지 정보 (커버랑 같이 겹치기) --> */}
      <div className="profile-information">
        <div className="profile-img">
          <img src="/image/file/mypage/defalut-my-profile.png" className="img-size" />
        </div>
        <div className="profile-component1">
          <div className="profile-name">홍길동</div>
          <div className="profile-introduction">
            홍길동님의 마이페이지 입니다
          </div>
        </div>
        <div className="profile-component2">
          <div className="profile-return">환전 포인트 : 100000 p</div>
          <div className="profile-cache">보유 캐쉬 : 100000 p</div>
        </div>
      </div>
    </div>
  );
};

export default MypageHeader;
