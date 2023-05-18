import React from "react";
import { Button, Input, InputGroup, Navbar, Row } from "reactstrap";
import DropdownForm from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleIndex = ({ majormenu }) => {
  return (
    <div className="title">
      <Navbar className="titleArea">
        <h1>선생님 정보</h1>
        <InputGroup className="searchBox">
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
      <Navbar className="items_wrap">
        <button type="button" onClick={() => majormenu(null)}>
          전체
        </button>
        <button type="button" onClick={() => majormenu("piano")}>
          피아노
        </button>
        <button type="button" onClick={() => majormenu("string")}>
          현악기
        </button>
        <button type="button" onClick={() => majormenu("wind")}>
          관악기
        </button>
        <button type="button" onClick={() => majormenu("guitar")}>
          기타
        </button>
        <button type="button" onClick={() => majormenu("gugak")}>
          국악
        </button>
        <button type="button" onClick={() => majormenu("etc")}>
          다른악기
        </button>
      </Navbar>
    </div>
  );
};

export default TitleIndex;
