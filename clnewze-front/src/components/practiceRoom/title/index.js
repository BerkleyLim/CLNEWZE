import React from "react";
import { Button, Input, InputGroup, Navbar } from "reactstrap";
import DropdownForm from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../practiceRoom.module.scss";

const TitleIndex = () => {
  return (
    <div className={`${styles?.title}`}>
      <Navbar className='titleArea'>
        <h1>연습실정보</h1>
        <InputGroup className={`${styles?.searchBox}`}>
          <DropdownForm />
          <Input
            className="form-control"
            title="검색어 입력"
          />
          <Button className={`${styles?.inputGroupSearch}`}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </Button>
        </InputGroup>
      </Navbar>
    </div>
  );
};

export default TitleIndex;
