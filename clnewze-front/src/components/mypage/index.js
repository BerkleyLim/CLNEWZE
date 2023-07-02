import React, { useEffect, useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'; 

import styles from "./mypage.module.scss"
import { Col, Row } from 'reactstrap'

import MypageInfo from "./user/index"
import URI from "../util/URI"
import { useDispatch } from 'react-redux';
import AdminTeacher from './admin/teacher';

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
        <Row className={`${styles?.mypageContainer}`}>
            <Col md={2} className={`${styles?.mypageMenuContainer}`}>
                <button className="btn" onClick={() => moveMyPage("info")}>기본정보</button>
                <button className="btn">회원정보 및 수정</button>
                <button className="btn">환전 신청</button>
                
                <hr/>
                
                <h6>업로드 정보</h6>
                <button className="btn">연습실</button>
                <button className="btn">악보</button>

                <hr/>

                <h6>구매 정보</h6>
                <button className="btn">구입음원</button>
                <button className="btn">구입악보</button>

                <hr/>

                <h6>마이페이지</h6>
                <button className="btn" onClick={() => window.location.href="/"}> 이전화면</button>
                <button className="btn" onClick={toggleLogout}> 로그아웃</button>
                <button className="btn"> 회원탈퇴</button>

                <hr/>

                <h6>관리자 기능 - 차후 숨길 예정</h6>
                <button className="btn">회원정보 출력</button>
                <button className="btn">매출액</button>
                <button className="btn">악보 페이지 관리</button>
                <button className="btn">연습실 페이지 관리</button>
                <button className="btn" onClick={() => moveMyPage("admin/teacher")}>레스너찾기 페이지 관리</button>
                <button className="btn">블로그 페이지 관리</button>
                
            </Col>
                {/* 영역 출력 */}
            <Col md={10} >
              {/* 함수 써서 출력한다. */}
              <Routes>
                <Route path="/mypage/*"  element = {<MypageInfo />}/>
                <Route path="/mypage/admin/teacher"  element = {<AdminTeacher />}/>
              </Routes>
            </Col>
        </Row>
    </div>
  )
}

export default MypageMain