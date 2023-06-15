import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Col, Row, Table } from "reactstrap";
import "./main.scss";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <!-- 이미지 메인 --> */}
      <nav className="nav justify-content-center event-main-container">
        <div className="event-icon-prev">
          <ChevronLeft />
        </div>
        <div className="event-banner-cover">
          <img
            src="image/sample-banner.jpg"
            style={{ width: "800px", height: "200px" }}
          />
        </div>
        <div className="event-icon-next">
          <ChevronRight />
        </div>
      </nav>

      {/* <!-- 오늘의 소식 --> */}
      <div className="main-common-header">
        <h1>오늘의 소식</h1>
        <p>
          <ChevronRight /> 더보기
        </p>
      </div>
      <div className="event-main-board-card-container event-sheetmusic">
        <div className="banner">다음은 베너로 추가</div>

        {/* <button type="button" className="common-main-card">
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
          </button> */}
      </div>

      {/* <!-- 공지사항 및 QnA --> */}
      <Row>
        <Col className="main-notice">
          <div className="main-common-header">
            <h1>공지사항</h1>
            <p>&gt; 더보기</p>
          </div>
          <Table className="table-hover">
            <thead>
              <th>번호</th>
              <th>제목</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>뮤직스타일 이용안내</td>
              </tr>
              <tr>
                <td>2</td>
                <td>경고 및 제재사항</td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col className="main-QnA">
          <div className="main-common-header">
            <h1>QnA</h1>
            <p>
              <ChevronRight /> 더보기
            </p>
          </div>
          <Table className="table-hover">
            <thead>
              <th>번호</th>
              <th>제목</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>영상 올리는 방법이 궁금해여</td>
              </tr>
              <tr>
                <td>2</td>
                <td>마이페이지 기능은 무엇인가요?</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* <!-- 곡정보 --> */}
      {/* <div className="main-common-header">
        <h1>곡 정보</h1>
        <p onClick={() => navigate("/information")}><ChevronRight /> 더보기</p>
      </div>
      <nav className="nav justify-content-center event-main-container">
        <div className="event-icon-prev">
          <ChevronLeft />
        </div>
        <div className="event-main-board-card-container event-information">
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
      </nav> */}

      {/* <!-- 영상 --> */}
      {/* <div className="main-common-header">
            <h1>영상</h1>
            <p>&gt; 더보기</p>
          </div>
          <nav className="nav justify-content-center event-main-container">
            <div className="event-icon-prev">
                <ChevronLeft/>
            </div>
            <div className="event-main-board-card-container event-media">
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
              <button type="button" className="common-main-card"></button>
            </div>
            <div className="event-icon-next">
                <ChevronRight/>
            </div>
          </nav> */}

      {/* <!-- 음원 --> */}
      {/* <div className="main-common-header">
        <h1>음원</h1>
        <p>&gt; 더보기</p>
      </div>
      <nav className="nav justify-content-center event-main-container">
        <div className="event-icon-prev">
          <i className="fas fa-angle-left"></i>
        </div>
        <div className="event-main-board-card-container event-music">
          <button type="button" className="common-main-card"></button>
          <button type="button" className="common-main-card"></button>
          <button type="button" className="common-main-card"></button>
          <button type="button" className="common-main-card"></button>
          <button type="button" className="common-main-card"></button>
          <button type="button" className="common-main-card"></button>
        </div>
        <div className="event-icon-next">
          <i className="fas fa-angle-right"></i>
        </div>
      </nav> */}

      {/* <!-- 악보 --> */}
      <div className="main-common-header">
        <h1>악보</h1>
        <p onClick={() => navigate("/information")}>
          <ChevronRight /> 더보기
        </p>
      </div>
      <nav className="nav justify-content-center event-main-container">
        <div className="event-icon-prev">
          <ChevronLeft />
        </div>
        <div className="event-main-board-card-container event-sheetmusic">
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

      {/* <!-- 레스너 찾기 --> */}
      <div className="main-common-header">
        <h1>레스너 찾기</h1>
        <p onClick={() => navigate("/teacher")}>
          <ChevronRight /> 더보기
        </p>
      </div>
      <nav className="nav justify-content-center event-main-container">
        <div className="event-icon-prev">
          <ChevronLeft />
        </div>
        <div className="event-main-board-card-container event-teacher">
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

      {/* <!-- 연습실 정보 --> */}
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

      {/* <!-- 커뮤니티 --> */}
      {/* <div className="main-common-header">
        <h1>커뮤니티</h1>
        <p>&gt; 더보기</p>
      </div>

      <nav className="nav justify-content-center event-main-container">
        <div className="event-icon-prev">
          <i className="fas fa-angle-left"></i>
        </div>
        <div className="event-main-board-card-container event-community">
          <button type="button" className="common-main-card"></button>
          <button type="button" className="common-main-card"></button>
          <button type="button" className="common-main-card"></button>
          <button type="button" className="common-main-card"></button>
          <button type="button" className="common-main-card"></button>
          <button type="button" className="common-main-card"></button>
        </div>
        <div className="event-icon-next">
          <i className="fas fa-angle-right"></i>
        </div>
      </nav> */}
      {/* <!-- container 안에 있는거 끝 --> */}
    </div>
  );
};

export default Main;
