import React from "react";
import {Box, Grid} from "@mui/material";
import MainNoticeComponent from "../components/common/main/MainNoticeComponent";
import MainQnaComponent from "../components/common/main/MainQnaComponent";
import MainSheetComponent from "../components/common/main/MainSheetComponent";
import MainTeacherComponent from "../components/common/main/MainTeacherComponent";
import MainPracticeRoomComponent from "../components/common/main/MainRoomComponent";

const MainPage = () => {
  return (
    <Box className="p-4">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MainNoticeComponent/>
        </Grid>
        <Grid item xs={12} md={6}>
          <MainQnaComponent/>
        </Grid>
      </Grid>
      <Box my={4}>
        <MainSheetComponent/>
      </Box>
      <Box my={4}>
        <MainTeacherComponent/>
      </Box>
      <Box my={4}>
        <MainPracticeRoomComponent/>
      </Box>
    </Box>
  );
};

export default MainPage;
