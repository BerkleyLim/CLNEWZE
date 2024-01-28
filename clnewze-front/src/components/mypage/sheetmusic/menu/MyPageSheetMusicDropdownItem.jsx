import React, { useEffect, useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button,
} from "reactstrap";
import SheetMusicContainer from "../../../../hooks/SheetMusicContainer";

const MyPageSheetMusicDropdownItem = ({ menuData }) => {
  const {genreList} = SheetMusicContainer();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectData, setSelectData] = useState();

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    setSelectData({ name: "전체" });
  }, []);
  const selectToggleButton = (data) => {
    setSelectData(data);
    genreList(data?.category);
  };

  return (
    <ButtonDropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      direction="down"
      className={`dropdown`}
    >
      <Button className="dropdownTitle" outline>
        {" "}
        {selectData?.name}
      </Button>
      <DropdownToggle className="dropdownToggle" caret color="primary">
      </DropdownToggle>
      <DropdownMenu>
        {/* {menuData?.map((data, index) => (
          <DropdownItem key={index} onClick={() => selectToggleButton(data)}>
            {data?.name}
          </DropdownItem>
        ))} */}
        <DropdownItem>
          {"전체"}
        </DropdownItem>
        <DropdownItem>
          {"제목"}
        </DropdownItem>
        <DropdownItem>
          {"내용"}
        </DropdownItem>
        <DropdownItem>
          {"글쓴이"}
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default MyPageSheetMusicDropdownItem;
