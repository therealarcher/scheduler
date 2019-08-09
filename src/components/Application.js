import React, { useState } from "react";
import DayList from "components/DayList";
import InterviewerList from "components/InterviewerList";
import "components/Application.scss";
import Appointment from "components/Appointment";

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0
  }
];

const appointments = [
  {
    id: 1,
    time: "12pm"
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 3,
    time: "2pm"
  },
  {
    id: 4,
    time: "4pm",
    interview: {
      student: "Chuck Norris",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 5,
    time: "5pm"
  }
];

export default function Application(props) {
  const [day, setDay] = useState("Monday");
  const renderedAppointments = appointments.map(appointment => (
    <Appointment
      key={appointment.id}
      {...appointment}
      // key={appointment.id}
      // id={appointment.id}
      // time={appointment.time}
      // interview={appointment.interview}
    />
  ));
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <DayList days={days} day={day} setDay={setDay} />
        <nav className="sidebar__menu" />
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">{renderedAppointments}</section>
    </main>
  );
}
