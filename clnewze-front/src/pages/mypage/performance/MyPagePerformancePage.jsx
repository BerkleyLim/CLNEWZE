import React, { useEffect } from "react";

import UseApi from "../../../util/UseApi";
import data from "./sample/event.json";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import styles from '../../../scss/mypage/mypage.module.scss'

import {
  Button,
  Col,
  Input,
  InputGroup,
  Row,
} from "reactstrap";
import { useRecoilValue } from "recoil";
import { innerWidthState } from "../../../recoil/state/commonState";

const MyPagePerformancePage = () => {
  // 리액트 방식 - fullCalendar 시작
  const plugins = [dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin];

  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  };

  // const themeSystem = "bootstrap5";

  const aspectRatio = 1.5;

  const scrollTime = "08:00";

  const events = data;
  // 리액트 방식 - fullCalendar 끝

  const innerWidth = useRecoilValue(innerWidthState);
  return (
    <div className={`${innerWidth >= 860 ? styles?.myPageWebContainer : styles?.myPageMobileContainer}`}>
      <Row className="m-3">
        <Col md={8}></Col>
        <Col md={4}>
          <InputGroup>
            <Button color="primary" outline>전체</Button>
            <Input className="primary" outline />
            <Button color="primary" outline>검색</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="m-3">
        <FullCalendar
          plugins={plugins}
          initialView="dayGridMonth"
          headerToolbar={headerToolbar}
          // themeSystem={themeSystem}
          aspectRatio={aspectRatio}
          scrollTime={scrollTime}
          events={events}
        />
      </Row>
    </div>
  );
};

export default MyPagePerformancePage;

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
