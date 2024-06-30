import React, {useEffect, useState} from "react";
import SchedulesDevelopComponent from "./employee/SchedulesDevelopComponent";
import {useLocation} from "react-router-dom";

const SchedulesCalendarComponent = () => {
  const { pathname } = useLocation();
  const [displayView, setDisplayView] = useState<any>();

  const linkMenu = pathname.split('/').slice(3).join("")

  useEffect(() => {
    const fetch:any = () => {
      if (linkMenu === 'develop') {
        return <SchedulesDevelopComponent />
      }
    }
    setDisplayView(fetch())
  },[linkMenu])
  return (
    <div>
      {displayView}
    </div>
  );
};

export default SchedulesCalendarComponent;
