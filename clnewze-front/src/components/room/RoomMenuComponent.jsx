import React from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import RoomDropdownItem from "./RoomDropdownItem";
import RoomContainer from "../../hooks/RoomContainer";
import {roomSelectedCategoryState} from "../../recoil/state/roomState";
import {useRecoilState} from "recoil";

const RoomMenuComponent = () => {
  const [selectCategory, setSelectCategory] = useRecoilState(roomSelectedCategoryState);
  const {useQueryRoomsGenreList} = RoomContainer();
  // const setSearch = useSetRecoilState(roomSearchState);

  const {data: menuData} = useQueryRoomsGenreList();

  // // search 기준으로 카테고리 출력 (이거 추후 바꿔야함)
  // const selectToggleButton = (data) => {
  //   setSearch(roomSearchState)
  // };

  return (
    <Box className="relative top-3 p-4 mb-12 w-[95%]">
      <Box className="flex flex-col mb-4">
        <Box className="flex items-center justify-end space-x-2 w-full max-w-lg mt-8 ml-auto">
          <RoomDropdownItem/>
          <TextField
            variant="outlined"
            placeholder="검색어 입력"
            fullWidth
            sx={{
              height: '56px',
              '& .MuiOutlinedInput-root': {
                height: '100%',
                borderRadius: '8px',
              },
              '& .MuiInputBase-input': {
                padding: '14px',
              },
            }}
          />
        </Box>
      </Box>
      {selectCategory !== "all" && (
        <Box className="border pb-2">
          <Typography variant="h6" className="text-left px-4 py-2">
            장르별 검색
          </Typography>
          <hr/>
          <Box className="flex flex-wrap">
            {menuData?.data?.map((data, index) => (
              <Button
                key={index}
                className="py-2 px-5 text-xl"
                // onClick={() => selectToggleButton(data?.category)}
              >
                {data?.name}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default RoomMenuComponent;
