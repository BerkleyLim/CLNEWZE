import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import React from "react";


const SchedulesDevelopComponent = () => {
  // 리액트 방식 - fullCalendar 시작
  const plugins = [dayGridPlugin];

  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  };

  // const themeSystem = "bootstrap5";
  const themeSystem = "themeSystem";

  const aspectRatio = 1.5;

  const scrollTime = "08:00";

  // const events = data;

  const navLinks = true;

  const dateClick = () => {
    alert("클릭")
  }

  // 리액트 방식 - fullCalendar 끝

  const customButtons = {
    custom1: {
      text: "custom 1",
      click: () => {
        alert("clicked custom button 1!");
      },
    },
    custom2: {
      text: "custom 2",
      click: () => {
        alert("clicked custom button 2!");
      },
    },
  };

  return (
    <div>
      <div className={`font-bold  text-3xl`}>개발 일정</div>
      <hr className={`my-5 border-black border-4`}/>
      <div className={`w-full my-3 flex flex-wrap justify-end flex-row align-middle`}>
        <button className={`h-10 border-2 w-20`}>전체</button>
        <input className={`border-2 w-56`}/>
        <button className={`h-10 border-2 w-20`}>검색</button>
      </div>
      <FullCalendar
        plugins={plugins}
        customButtons={customButtons}
        initialView="dayGridMonth"
        headerToolbar={headerToolbar}
        locale="ko"
        themeSystem={themeSystem}
        // select={select}
        aspectRatio={aspectRatio}
        scrollTime={scrollTime}
        // events={events}
        navLinks={navLinks}
        // dateClick={dateClick}
      />
    </div>
  );
}

export default SchedulesDevelopComponent