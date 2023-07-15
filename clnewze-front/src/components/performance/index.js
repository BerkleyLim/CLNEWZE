import React, { useEffect } from "react";

import URI from "../util/URI"
import data from "./sample/event.json"

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import bootstrap5Plugin from "@fullcalendar/bootstrap5"

const Performance = () => {
  // 리액트 방식 - fullCalendar 시작
  const plugins = [dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin];

  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  };

  const themeSystem = 'bootstrap5';

  const aspectRatio = 1.5;

  const scrollTime = "08:00";

  const events = data;
  // 리액트 방식 - fullCalendar 끝

  // 참조 : https://www.culture.go.kr/data/openapi/openapiView.do?id=317&keyword=%EC%A0%84%EC%8B%9C%EC%A0%95%EB%B3%B4&searchField=all&gubun=A#/default
  // c1730169-2f2a-4eb3-abd6-929daec4e232
  // useEffect(()=> {
  //   URI.get("http://api.kcisa.kr/openapi/service/rest/convergence/conver6?serviceKey=c1730169-2f2a-4eb3-abd6-929daec4e232"
  //       + "&numOfRows=30&keyword=예술"
  //   )
  //     .then((res) => {
  //       console.log(res.data)
  //     })
  //     .catch((e) => console.error(e))
  // },[])


  // 예술의 전당 API
  // http://infuser.odcloud.kr/oas/docs?namespace=3076480/v1
  // useEffect(() => {
  //   URI.get("http://infuser.odcloud.kr/oas/docs?namespace=3076480/v1"
  //   )
  //     .then((res) => {
  //       console.log(res.data)
  //     })
  //     .catch((e) => console.error(e))
  // })

  return (
    <div>
      <h1>공연 정보</h1>
      <FullCalendar
        plugins={plugins}
        initialView="dayGridMonth"
        headerToolbar={headerToolbar}
        themeSystem={themeSystem}
        aspectRatio={aspectRatio}
        scrollTime={scrollTime}
        events={events}
      />
    </div>
  );
};

export default Performance;



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