import React from "react";
import data from "./sample/event.json";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";

import {useRecoilValue} from "recoil";
import {innerWidthState} from "../../../recoil/state/commonState";
import {Box, Button, Grid, InputAdornment, TextField, useMediaQuery} from "@mui/material";
import styles from "../../../scss/mypage/commom/mypage.common.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const PerformanceComponent = () => {
  // 리액트 방식 - fullCalendar 시작
  const plugins = [dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin];

  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  };

  const themeSystem = "bootstrap5";

  const aspectRatio = 1.5;

  const scrollTime = "08:00";

  const events = data;

  const navLinks = true;

  const select = (arg) => {
    alert("클릭");
  }

  const dateClick = () => {
    alert("클릭");
  }

  // 리액트 방식 - fullCalendar 끝

  const innerWidth = useRecoilValue(innerWidthState);
  const isWideScreen = useMediaQuery('(min-width:860px)');

  return (
    <Box className={isWideScreen ? styles?.myPageWebContainer : styles?.myPageMobileContainer}>
      <Grid container spacing={2} className="m-3">
        <Grid item md={8}></Grid>
        <Grid item md={4}>
          <Box display="flex" alignItems="center">
            <Button variant="outlined" color="primary" className="mr-2">전체</Button>
            <TextField
              variant="outlined"
              placeholder="검색"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon/>
                  </InputAdornment>
                ),
              }}
              className="flex-grow mr-2"
            />
            <Button variant="outlined" color="primary">검색</Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="m-3">
        <FullCalendar
          plugins={plugins}
          initialView="dayGridMonth"
          headerToolbar={headerToolbar}
          locale="ko"
          themeSystem={themeSystem}
          select={select}
          aspectRatio={aspectRatio}
          scrollTime={scrollTime}
          events={events}
          navLinks={navLinks}
          dateClick={dateClick}
        />
      </Grid>
    </Box>
  );
};

export default PerformanceComponent;

// Javascript 방식
// const calendarEl = document.getElementById("calender")
// let calendar = new Calendar(calendarEl, {
//   plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
//   initialView: 'dayGridMonth',
//   headerToolbar: {
//     left: 'prev,next today',
//     center: 'title',
//     right: 'dayGridMonth,timeGridWeek,listWeek'
//   }
// });
// calendar.render();
