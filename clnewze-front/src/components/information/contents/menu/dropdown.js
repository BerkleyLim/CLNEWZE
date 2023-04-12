import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const DropdownPaging = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="selectBox">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
        <DropdownToggle caret>10</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>10</DropdownItem>
          <DropdownItem>20</DropdownItem>
          <DropdownItem>30</DropdownItem>
          <DropdownItem>40</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default DropdownPaging