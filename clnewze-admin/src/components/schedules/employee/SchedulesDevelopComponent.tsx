import dayGridPlugin from "@fullcalendar/daygrid";
import {Button, Col, Input, InputGroup, Row} from "reactstrap";
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
            <h2>개발 일정</h2>
            <br />
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
            </Row>
        </div>
    );
}

export default SchedulesDevelopComponent