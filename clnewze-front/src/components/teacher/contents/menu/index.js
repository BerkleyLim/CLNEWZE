import React from "react";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownPaging from "./dropdown";
import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import styles from "../../teacher.module.scss";

const ContentsMenu = () => {
  return (
    <Navbar className={`${styles?.listMenu}`}>
      <h2>선생님 조회</h2>
    </Navbar>
  );
};

export default ContentsMenu;
