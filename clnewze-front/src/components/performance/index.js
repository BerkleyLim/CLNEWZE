import React from "react";
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

  const event = [
    {
      title: 'Event1',
      start: '2023-07-14',
      end: '2023-07-18',
    },
    {
      title: 'Event1',
      start: '2023-07-14',
      end: '2023-07-31',
    }
  ]
  
  const color = 'yellow';

  const textColor = 'black';
  // 리액트 방식 - fullCalendar 끝

  return (
    <div>
      <h1>공연 정보</h1>
      <FullCalendar
        plugins={plugins}
        initialView="dayGridMonth"
        headerToolbar={headerToolbar}
        themeSystem={themeSystem}
        event={event}
        color={color}
        textColor={textColor}
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