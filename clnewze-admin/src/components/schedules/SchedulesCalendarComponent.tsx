import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const SchedulesCalendarComponent = () => {
  const headerToolbar = {
    start: "dayGridMonth custom1",
    center: "title",
    end: "custom2 prevYear,prev,next,nextYear",
  };

  const footerToolbar = {
    start: "custom1,custom2",
    center: "",
    end: "prev,next",
  };

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
      <h2>개발 일정</h2>
      <br />
      <FullCalendar
        headerToolbar={headerToolbar}
        customButtons={customButtons}
        footerToolbar={footerToolbar}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
};

export default SchedulesCalendarComponent;
