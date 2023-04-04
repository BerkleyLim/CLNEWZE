import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
// import styled from "styled-components";
import {
  Nav,
  // Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from "reactstrap";

import SelectMenuDropDown from "./dropdown/selectManu";

const HeaderComponent = (props) => {
  let navigate = useNavigate();
  const movePage = (link) => {};


  return (
    // < !--헤더 작성: 맴버, 소개, 곡목록, 악보, 커뮤니티, 다국어기능, 검색-- >
    <div className="header">
      <Nav className="hd-content1 navbar">
        <div className="header_logo">
          <a href="/">
            로고(추가예정)
            <img src="" />
          </a>
        </div>
        <SelectMenuDropDown />
        
        {/* <!-- 여기는 그냥 100px의 여백 두기 --> */}
        <div style={{ display: "flex", width: "100px" }}></div>

        <div className="header_language">
          {/* <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button"
              id="select-language" data-target="#" data-toggle="dropdown"
              aria-haspopup="true" role="button" aria-expanded="false">
              Korean
            </button>
            <div className="dropdown-menu" role="menu" aria-labelledby="select-language">
              <button id="select-korean" className="dropdown-item" type="button">Korean</button>
              <button id="select-japanese" className="dropdown-item" type="button">Japanese</button>
              <button id="select-English" className="dropdown-item" type="button">English</button>
              <button id="" className="dropdown-item" type="button">etc..</button>
            </div>
          </div> */}
        </div>

        <i className="fas fa-list header-icon"></i>

        <div className="header_mymenu">
          <button type="button">
            <i className="fas fa-user-circle"></i>
            <span className="header-nickname">홍길동</span>
          </button>
        </div>
      </Nav>

      <Nav className="hd-content2 navbar">
        <button type="button" onClick={() => movePage("introduction")}>
          {" "}
          소개
        </button>
        <button type="button" onClick={() => movePage("information")}>
          곡정보
        </button>
        <button type="button" onClick={() => movePage("media")}>
          영상
        </button>
        <button type="button" onClick={() => movePage("sheetmusic")}>
          악보
        </button>
        <button type="button" onClick={() => movePage("teacher")}>
          레스너찾기
        </button>
        <button type="button" onClick={() => movePage("practiceRoom")}>
          연습실정보
        </button>
        <button type="button" onClick={() => movePage("community")}>
          커뮤니티
        </button>
      </Nav>
    </div>
  );
};

export default HeaderComponent;
