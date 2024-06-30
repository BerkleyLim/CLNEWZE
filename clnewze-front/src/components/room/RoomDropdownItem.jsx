import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useRecoilState} from "recoil";
import {roomSelectedCategoryState} from "../../recoil/state/roomState";

const RoomDropdownItem = () => {
  const [selectCategory, setSelectCategory] = useRecoilState(roomSelectedCategoryState);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectCategory(selectedValue);
  };

  return (
    <FormControl
      variant="outlined"
      className="w-full"
      sx={{
        minWidth: 120,
        height: '56px', // 높이 조정
        flexGrow: 1, // 부모의 너비에 맞추기
        '& .MuiOutlinedInput-root': {
          height: '100%', // 높이 조정
          borderRadius: '8px', // 둥근 모서리
        },
      }}
    >
      <InputLabel>검색 메뉴</InputLabel>
      <Select
        value={selectCategory}
        onChange={handleSelectChange}
        label="검색 메뉴"
        sx={{height: '56px'}}
      >
        <MenuItem value={'all'}>
          전체
        </MenuItem>
        <MenuItem value={'genre'}>
          지역
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default RoomDropdownItem;
