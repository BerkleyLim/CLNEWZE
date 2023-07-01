import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button,
} from "reactstrap";
import styles from "../../sheetmusic.module.scss";

const DropdownPaging = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className={`${styles?.selectBox}`}>
      <ButtonDropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      direction="down"
      className={`dropdown ${styles?.searchBox}`}
    >
      <Button className="dropdownTitle" outline>
        {" "}
        전체
      </Button>
      <DropdownToggle className="dropdownToggle" caret color="primary">
        {/* 전체 */}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>전체</DropdownItem>
        <DropdownItem>클래식</DropdownItem>
        <DropdownItem>뉴에이지</DropdownItem>
        <DropdownItem>재즈</DropdownItem>
        <DropdownItem>가요</DropdownItem>
        <DropdownItem>팝</DropdownItem>
        <DropdownItem>OST</DropdownItem>
        <DropdownItem>기타장르</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    </div>
  );
};

export default DropdownPaging;
