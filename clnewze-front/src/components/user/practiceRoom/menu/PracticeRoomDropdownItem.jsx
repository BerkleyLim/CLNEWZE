import React, { useEffect, useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button,
} from "reactstrap";
import styles from "../../../../scss/user/practiceroom/practiceRoom.module.scss";
import RoomContainer from "../../../../hooks/RoomContainer";

const PracticeRoomDropdownItem = ({ menuData }) => {
  const {categoriesMenu} = RoomContainer();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectData, setSelectData] = useState();

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    setSelectData({ name: "전체" });
  }, []);

  const selectToggleButton = (data) => {
    setSelectData(data);
    categoriesMenu(data?.category);
  };
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

export default PracticeRoomDropdownItem;
