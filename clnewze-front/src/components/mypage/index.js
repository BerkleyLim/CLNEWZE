import React, { useEffect, useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'; 

import "./mypage.scss"
import { Col, Row } from 'reactstrap'

import MypageInfo from "./user/index"
import URI from "../util/URI"
import { useDispatch } from 'react-redux';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moveMyPage = (menu) => {
    navigate("/mypage/" + menu);
  }
  const toggleLogout = () => {
    dispatch({ type: "logout" });
    window.location.href="/";
  };
  return (
    <div>
        {/* <!-- 마이페이지 카테고리 --> */}
        <Row className="mypage-container">
            <Col md={2} className="mypage-menu-container">
                <button className="btn" onClick={() => moveMyPage("info")}>기본정보</button>
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
                <button className="btn">회원정보 출력</button>
                <button className="btn">매출액</button>
                <button className="btn" onClick={() => window.location.href="/"}> 이전화면</button>
                <button className="btn" onClick={toggleLogout}> 로그아웃</button>
                
            </Col>
                {/* 영역 출력 */}
            <Col md={10} >
              {/* 함수 써서 출력한다. */}
              <Routes>
                <Route path="/mypage/*"  element = {<MypageInfo />}/>
                {/* <Route path="/mypage/info" elemet = {< MypageInfo/>} /> */}
              </Routes>
            </Col>
        </Row>
    </div>
  )
}

export default MypageMain