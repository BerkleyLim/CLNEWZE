
import React from "react";
import SchedulesCalendarComponent from "../../components/schedules/SchedulesCalendarComponent";

const SchedulesManagementPage = () => {

  return (
    <div>
      <h1>일정 관리</h1>
      <hr/>
      <br /><br />

      {/* 개발일정 컴포넌트 */}
      <SchedulesCalendarComponent />
      <hr/>

      <br /><br />
    </div>
  );
};

export default SchedulesManagementPage;
