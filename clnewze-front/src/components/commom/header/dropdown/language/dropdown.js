import React, { useState } from 'react'
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { useRecoilState } from 'recoil';
import { languageState } from '../../../../../recoil/state/language';

const LanguageDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useRecoilState(languageState)
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const onLanguageChange = (lan) => {
    setLanguage({
      ...language,
      language: lan
    })
  }

  return (
    <ButtonDropdown isOpen={dropdownOpen} direction="down" toggle={toggle}>
      <DropdownToggle color="blank" caret size="lg">한국어</DropdownToggle>
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