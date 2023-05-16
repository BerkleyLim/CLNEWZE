import React from 'react'

import "./mypage.scss"

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
const MypageMain = () => {
  return (
    <div>
        {/* <!-- 마이페이지 카테고리 --> */}
        <div className="mypage-container">
            <div className="col-sm-3 mypage-menu-container">
                {/* <button className="btn" onClick="moveMyInformation()">기본정보</button> */}
                <button className="btn">회원정보 및 수정</button>
                <button className="btn">환전 신청</button>
                
                <hr/>
                
                <h6>업로드 정보</h6>
                <button className="btn">영상</button>
                <button className="btn">연습실</button>
                <button className="btn">음원</button>
                <button className="btn">악보</button>

                <hr/>

                <h6>구매 정보</h6>
                <button className="btn">구입음원</button>
                <button className="btn">구입악보</button>

                <hr/>

                <h6>(관리자 기능)</h6>
                <button className="btn">곡 정보 추가</button>
            </div>
            <div className="col-sm-9 mypage-target-container">
                영역 출력
                {/* <!-- 여기는 메뉴를 클릭시 바로 출력 영역 (jQuery 사용) --> */}
            </div>
        </div>
    </div>
  )
}

export default MypageMain