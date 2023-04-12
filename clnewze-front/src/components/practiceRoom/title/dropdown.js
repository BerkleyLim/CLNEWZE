import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button,
} from "reactstrap";

const InformationTitleDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction="down" className="dropdown selectBox">
      <Button className="dropdownTitle" outline> 전체</Button>
      <DropdownToggle className="dropdownToggle" caret color="primary">
        {/* 전체 */}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>전체장르</DropdownItem>
        <DropdownItem>피아노</DropdownItem>
        <DropdownItem>현악기</DropdownItem>
        <DropdownItem>관악기</DropdownItem>
        <DropdownItem>기타</DropdownItem>
        <DropdownItem>바이올린</DropdownItem>
        <DropdownItem>국악</DropdownItem>
        <DropdownItem>다른악기</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default InformationTitleDropdown;
