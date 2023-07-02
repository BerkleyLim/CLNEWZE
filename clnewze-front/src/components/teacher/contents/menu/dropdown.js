import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button,
} from "reactstrap";
import styles from "../../teacher.module.scss";

const InformationTitleDropdown = ({ menuData, majormenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectData, setSelectData] = useState(menuData[0]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const selectToggleButton = (data) => {
    setSelectData(data);
    majormenu(data?.category)
  }
  return (
    <ButtonDropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      direction="down"
      className={`dropdown ${styles?.searchBox}`}
    >
      <Button className="dropdownTitle" outline>
        {" "}
        {selectData?.name}
      </Button>
      <DropdownToggle className="dropdownToggle" caret color="primary">
      </DropdownToggle>
      <DropdownMenu>
        {menuData?.map((data, index) => (
          <DropdownItem key={index} onClick={() => selectToggleButton(data)}>
            {data?.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default InformationTitleDropdown;
