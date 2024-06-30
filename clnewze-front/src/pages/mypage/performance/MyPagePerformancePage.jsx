import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import data from "./sample/event.json";
import SearchIcon from '@mui/icons-material/Search'; // Material-UI 아이콘 사용
import "./fullcalendar.css";

const MyPagePerformancePage = () => {
  const plugins = [dayGridPlugin, timeGridPlugin, listPlugin];

  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  };

  const themeSystem = "standard"; // DaisyUI 스타일 적용

  const aspectRatio = 1.5;

  const scrollTime = "08:00";

  const events = data;

  const navLinks = true;

  const select = (arg) => {
    alert("클릭");
  };

  const dateClick = () => {
    alert("클릭");
  };

  return (
    <div className={`py-2`}>
      <h4 className="text-left mb-4 font-bold text-3xl">
        공연 일정 (사용자 페이지)
      </h4>
      <div className="my-3 flex justify-end items-center">
        <button className="btn btn-outline btn-primary mr-2">전체</button>
        <div className="relative w-56 mr-2">
          <input className="input input-bordered w-full h-10 pl-3 pr-10" placeholder="검색"/>
          <SearchIcon className="absolute right-2 top-2 text-gray-500"/>
        </div>
        <button className="btn btn-outline btn-primary">검색</button>
      </div>
      <div className="m-3">
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
      </div>
    </div>
  );
};

export default MyPagePerformancePage;
