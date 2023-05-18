import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const DropdownPaging = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="selectBox">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
        <DropdownToggle className="selected" caret>
          10
        </DropdownToggle>
        <DropdownMenu className="select-layer">
          <DropdownItem className="select_item">10</DropdownItem>
          <DropdownItem className="select_item">20</DropdownItem>
          <DropdownItem className="select_item">30</DropdownItem>
          <DropdownItem className="select_item">40</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownPaging;
