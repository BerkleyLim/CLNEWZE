import React from "react";
import { Button, Input, InputGroup, Navbar, Row } from "reactstrap";
import DropdownForm from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleIndex = () => {
  return (
    <div className='title'>
      <Navbar className='titleArea'>
        <h1>연습실정보</h1>
        <InputGroup className='searchBox'>
          <DropdownForm />
          <Input
            // type="text"
            className="form-control"
            title="검색어 입력"
            // value=""
          />
          <Button className="inputGroupSearch">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </Button>
        </InputGroup>
      </Navbar>
      <Navbar className='items_wrap'>
        <button type="button">전체</button>
        <button type="button">피아노</button>
        <button type="button">현악기</button>
        <button type="button">관악기</button>
        <button type="button">기타</button>
        <button type="button">바이올린</button>
        <button type="button">국악</button>
        <button type="button">다른악기</button>
      </Navbar>
    </div>
  );
};

export default TitleIndex;
