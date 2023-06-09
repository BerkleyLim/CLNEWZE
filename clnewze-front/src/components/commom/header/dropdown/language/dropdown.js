import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const LanguageDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  // const language = useSelector(state => state.language);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const onLanguageChange = (language) => {
    dispatch({type:"setLanguage", language:language});
  }

  return (
    <ButtonDropdown isOpen={dropdownOpen} direction="down" toggle={toggle}>
      <DropdownToggle caret size="lg">한국어</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => onLanguageChange("ko")}>한국어</DropdownItem>
        <DropdownItem onClick={() => onLanguageChange("ja")}>Japanese</DropdownItem>
        <DropdownItem onClick={() => onLanguageChange("en")}>English</DropdownItem>
        <DropdownItem>etc..</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  )
}

export default LanguageDropdown;