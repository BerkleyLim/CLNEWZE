import React from "react";
import { Button, Input, InputGroup, Navbar, Row } from "reactstrap";
import DropdownForm from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "../information.scss"
import "../information.scss"

const TitleIndex = () => {
  return (
    <div className='title'>
      <Navbar className='titleArea'>
        <h1>곡정보</h1>
        <InputGroup className='searchBox'>
          <DropdownForm />
          <Input
            type="text"
            className="form-control"
            title="검색어 입력"
            value=""
          />
          <Button className="inputGroupSearch">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </Button>
        </InputGroup>
      </Navbar>
      <Navbar className='items_wrap'>
        <button type="button">전체</button>
        <button type="button">클래식</button>
        <button type="button">뉴에이지</button>
        <button type="button">재즈</button>
        <button type="button">가요</button>
        <button type="button">팝</button>
        <button type="button">OST</button>
        <button type="button">기타장르</button>
      </Navbar>
    </div>
  );
};

export default TitleIndex;
