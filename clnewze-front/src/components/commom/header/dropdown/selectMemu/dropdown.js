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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <ButtonDropdown isOpen={dropdownOpen} direction="down" toggle={toggle}>
        <Button outline>
          Split Button
        </Button>
        <DropdownToggle caret color="primary">
          {/* 전체 */}
        </DropdownToggle>
        {/* <DropdownMenu container="body"> */}
        <DropdownMenu>
          <DropdownItem onClick={function noRefCheck() {}}>곡목록</DropdownItem>
          <DropdownItem onClick={function noRefCheck() {}}>영상</DropdownItem>
          <DropdownItem onClick={function noRefCheck() {}}>악보</DropdownItem>
          <DropdownItem onClick={function noRefCheck() {}}>
            커뮤니티
          </DropdownItem>
          <DropdownItem onClick={function noRefCheck() {}}>
            레슨샘 찾기
          </DropdownItem>
          <DropdownItem onClick={function noRefCheck() {}}>
            연습실 정보
          </DropdownItem>
        </DropdownMenu>
    </ButtonDropdown>
  );
};
{
  /* <div className="header_search">
  <div className="input-group">
    <div className="input-group-prepend">
      <button id="hd-search-menu" className="btn hd-dropdown-color dropdown-toggle"
        type="button" data-target="#" data-toggle="dropdown"
        aria-haspopup="true" role="button" aria-expanded="false" style="width:140px">전체</button>
      <div className="dropdown-menu" role="menu" aria-labelledby="hd-search-menu">
        <button id="hd-search-all" className="dropdown-item" type="button">전체</button>
        <button id="hd-search-information" className="dropdown-item" type="button">곡목록</button>
        <button id="hd-search-media" className="dropdown-item" type="button">영상</button>
        <button id="hd-search-sheetmusic" className="dropdown-item" type="button">악보</button>
        <button id="hd-search-community" className="dropdown-item" type="button">커뮤니티</button>
        <button id="hd-search-teacher" className="dropdown-item" type="button">레슨샘찾기</button>
        <button id="hd-search-practiceRoom" className="dropdown-item" type="button">연습실정보</button>
      </div>
    </div>
    <input id="hd-search" type="text" className="form-control header-search-input"
      aria-label="Text input with dropdown button" />
    <i className="fas fa-search header-icon" onClick=""></i>
  </div>
</div> */
}

export default SelectManuDropdown;
