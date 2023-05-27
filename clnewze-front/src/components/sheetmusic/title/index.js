import React from "react";
import { Button, Input, InputGroup, Navbar, Row } from "reactstrap";
import DropdownForm from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleIndex = ({ genreList }) => {
  return (
    <div className="title">
      <Navbar className="titleArea">
        <h1>악보모음</h1>
        <InputGroup className="searchBox">
          <DropdownForm />
          <Input
            className="form-control"
            title="검색어 입력"
          />
          <Button className="inputGroupSearch">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </Button>
        </InputGroup>
      </Navbar>
      <Navbar className="items_wrap">
        <button type="button" onClick={() => genreList(null)}>
          전체
        </button>
        <button type="button" onClick={() => genreList("classic")}>
          클래식
        </button>
        <button type="button" onClick={() => genreList("newage")}>
          뉴에이지
        </button>
        <button type="button" onClick={() => genreList("jazz")}>
          재즈
        </button>
        <button type="button" onClick={() => genreList("kpop")}>
          가요
        </button>
        <button type="button" onClick={() => genreList("pop")}>
          팝
        </button>
        <button type="button" onClick={() => genreList("ost")}>
          OST
        </button>
        <button type="button" onClick={() => genreList("etc")}>
          기타장르
        </button>
      </Navbar>
    </div>
  );
};

export default TitleIndex;
