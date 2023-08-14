import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button,
} from "reactstrap";

const SelectManuDropdown = () => {
  const [dropdownMenu, setDropdownMenu] = useState("전체");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const dropdownMenuChange = (menu) => {
    setDropdownMenu(menu)
  }
  return (
    <ButtonDropdown isOpen={dropdownOpen} direction="down" toggle={toggle}>
        <Button outline color="info">
          {dropdownMenu}
        </Button>
        <DropdownToggle caret color="info">
          {/* 전체 */}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => dropdownMenuChange("전체")}>전체</DropdownItem>
          <DropdownItem onClick={() => dropdownMenuChange("악보")}>악보</DropdownItem>
          <DropdownItem onClick={() => dropdownMenuChange("레슨샘 찾기")}>
            레슨샘 찾기
          </DropdownItem>
          <DropdownItem onClick={() => dropdownMenuChange("연습실 정보")}>
            연습실 정보
          </DropdownItem>
        </DropdownMenu>
    </ButtonDropdown>
  );
};
{
}

export default SelectManuDropdown;
