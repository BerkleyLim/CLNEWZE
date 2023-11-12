import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'; 

import styles from "./mypage.module.scss"
import { Col, Row } from 'reactstrap'

import MypageInfo from "./user/index"
import AdminTeacher from './admin/teacher';
import AdminPracticeRoom from './admin/practiceroom';
import AdminSheetMusic from './admin/sheetmusic';
import AdminDashboard from './admin/dashboard';
import { useResetRecoilState } from 'recoil';
import { userState } from '../../recoil/state/user';

const MypageMain = () => {
  const navigate = useNavigate();
  const moveMyPage = (menu) => {
    navigate("/mypage/" + menu);
  }

  const logout = useResetRecoilState(userState);

  const toggleLogout = () => {
    logout();
    window.location.href="/";
  };
  return (
    <div>
        {/* <!-- 마이페이지 카테고리 --> */}
        <Row className={`${styles?.mypageContainer}`}>
            <Col md={2} className={`${styles?.mypageMenuContainer}`}>
                <hr/>
                <h6>회원 정보</h6>
                <button className="btn" onClick={() => moveMyPage("info")}>회원정보 및 수정</button>
                <button className="btn">환전 신청</button>
                <button className="btn">선생님 관리</button>
                
                <hr/>
                
                <h6>업로드 정보</h6>
                {/* 각 음악 전공자 별로 공연 정보를 등록하여 사용자에게 공유한다. */}
                <button className="btn">공연정보</button>
                <button className="btn">연습실</button>
                <button className="btn">악보</button>
                <button className="btn">블로그</button>

                <hr/>

                <h6>매출 정보</h6>
                <button className="btn">구입악보</button>
                <button className="btn">판매악보</button>

                <hr/>

                <h6>마이페이지</h6>
                <button className="btn" onClick={() => window.location.href="/"}> 이전화면</button>
                <button className="btn" onClick={toggleLogout}> 로그아웃</button>
                <button className="btn"> 회원탈퇴</button>

                <hr/>

                <h6>관리자 기능 - 차후 숨길 예정</h6>
                <button className="btn">회원정보 출력</button>
                <button className="btn" onClick={() => moveMyPage("admin/dashboard")}>매출액</button>
                <button className="btn" onClick={() => moveMyPage("admin/sheetmusic")}>악보 페이지 관리</button>
                <button className="btn" onClick={() => moveMyPage("admin/practiceroom")}>연습실 페이지 관리</button>
                <button className="btn" onClick={() => moveMyPage("admin/teacher")}>레스너찾기 페이지 관리</button>
                <button className="btn">블로그 페이지 관리</button>
                
            </Col>
                {/* 영역 출력 */}
            <Col md={10} >
              {/* 함수 써서 출력한다. */}
              <Routes>
                <Route path="/mypage/*"  element = {<MypageInfo />}/>
                <Route path="/mypage/admin/teacher"  element = {<AdminTeacher />}/>
                <Route path="/mypage/admin/practiceroom"  element = {<AdminPracticeRoom />}/>
                <Route path="/mypage/admin/sheetmusic"  element = {<AdminSheetMusic />}/>
                <Route path="/mypage/admin/dashboard"  element = {<AdminDashboard />}/>
              </Routes>
            </Col>
        </Row>
    </div>
  )
}

export default MypageMain