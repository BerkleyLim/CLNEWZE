import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const MainPracticeRoom = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="main-common-header">
        <h1>연습실 정보</h1>
        <p onClick={() => navigate("/practiceroom")}>
          <ChevronRight /> 더보기
        </p>
      </div>
      <nav className="nav justify-content-center event-main-container">
        <div className="event-icon-prev">
          <ChevronLeft />
        </div>
        <div className="event-main-board-card-container event-practiceRoom">
          <button type="button" className="common-main-card">
            1
          </button>
          <button type="button" className="common-main-card">
            2
          </button>
          <button type="button" className="common-main-card">
            3
          </button>
          <button type="button" className="common-main-card">
            4
          </button>
          <button type="button" className="common-main-card">
            5
          </button>
          <button type="button" className="common-main-card">
            6
          </button>
        </div>
        <div className="event-icon-next">
          <ChevronRight />
        </div>
      </nav>
    </>
  )
}

export default MainPracticeRoom