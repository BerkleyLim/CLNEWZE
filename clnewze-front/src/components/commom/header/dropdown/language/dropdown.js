import React, { useState } from 'react'
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

function LanguageDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <ButtonDropdown isOpen={dropdownOpen} direction="down" toggle={toggle}>
      <Button outline color="btn-secondary">
        Korean
      </Button>
      <DropdownToggle />
      <DropdownMenu>
        <DropdownItem>Korean</DropdownItem>
        <DropdownItem>Japanese</DropdownItem>
        <DropdownItem>English</DropdownItem>
        <DropdownItem>etc..</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  )
}

export default LanguageDropdown;