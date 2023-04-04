import React from "react";
import { Button, Input, InputGroup, Navbar } from "reactstrap";
import DropdownForm from "./dropdown";

const index = () => {
  return (
    <div className="title-information">
        <Navbar className="title_area">
          <h1>곡정보</h1>
          <InputGroup className="search-box">
            <DropdownForm />
            {/* <div className="dropdown select-box">
              <button className="btn dropdown-toggle" type="button"
                id="selected-genre" data-target="#" data-toggle="dropdown"
                aria-haspopup="true" role="button" aria-expanded="false"> 전체장르
              </button>
              <div className="dropdown-menu" role="menu" aria-labelledby="selected-genre">
                <button id="information-select-all" className="dropdown-item" type="button">전체장르</button>
                <button id="information-select-classic" className="dropdown-item" type="button">클래식</button>
                <button id="information-select-newage" className="dropdown-item" type="button">뉴에이지</button>
                <button id="information-select-jazz" className="dropdown-item" type="button">재즈</button>
                <button id="information-select-pop" className="dropdown-item" type="button">팝</button>
                <button id="information-select-koreanpop" className="dropdown-item" type="button">가요</button>
                <button id="information-select-ost" className="dropdown-item" type="button">OST</button>
                <button id="information-select-etc" className="dropdown-item" type="button">그 외</button>
              </div>
            </div> */}
            <div className="input-box">
              <input type="text" className="form-control" title="검색어 입력" value="" />
              <button type="button" className="submit"><span><i className="fas fa-search"></i></span></button>
            </div>
          </InputGroup>
        </Navbar>
        <Navbar className="items_wrap">
          <button type="button" className="all-information">전체</button>
          <button type="button" className="classic-information">클래식</button>
          <button type="button" className="newage-information">뉴에이지</button>
          <button type="button" className="jazz-information">재즈</button>
          <button type="button" className="korean-pop-information">가요</button>
          <button type="button" className="pop-information">팝</button>
          <button type="button" className="OST-information">OST</button>
          <button type="button" className="etc-information">기타장르</button>
        </Navbar>
      </div>
    // <div className="header_search">
    //   <InputGroup>
    //     <SelectMenuDropdown />
    //     <Input className="form-control" />
    //     <Button>검색</Button>
    //   </InputGroup>
    // </div>
  );
}

export default index;
