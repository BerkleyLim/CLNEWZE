import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import styles from "../../sheetmusic.module.scss";

const DropdownPaging = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className={`${styles?.selectBox}`} size="lg">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
        <DropdownToggle className={`${styles?.selected}`} caret>
          10
        </DropdownToggle>
        <DropdownMenu className={`${styles?.selectLayer}`}>
          <DropdownItem className={`${styles?.select_item}`}>10</DropdownItem>
          <DropdownItem className={`${styles?.select_item}`}>20</DropdownItem>
          <DropdownItem className={`${styles?.select_item}`}>30</DropdownItem>
          <DropdownItem className={`${styles?.select_item}`}>40</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownPaging;
