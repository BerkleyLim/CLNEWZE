import React from "react";
import { Button, Input, InputGroup, Navbar } from "reactstrap";
import styles from "../../practiceRoom.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownForm from "./dropdown";

const ContentsMenu = () => {
  return (
    <Navbar className={`${styles?.listMenu}`}>
      <h2>전체 연습실</h2>
      <InputGroup className={`${styles?.searchBox}`}>
        <DropdownForm />
        <Input className="form-control" title="검색어 입력" />
        <Button className={`${styles?.InputGroupSearch}`}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </Button>
      </InputGroup>
    </Navbar>
  );
};

export default ContentsMenu;
