import React, { useState, useEffect } from "react";
import DayList from "components/DayList";
import InterviewerList from "components/InterviewerList";
import "components/Application.scss";
import Appointment from "components/Appointment";
import axios from "axios";
import getAppointmentsForDay from "../helpers/selectors";

export default function Application(props) {
  //const [day, setDay] = useState("Monday");
  //const [days, setDays] = useState([]);
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  // const appointments = [getAppointmentsForDay()];

  const setDay = day => setState({ ...state, day });
  const setDays = days => setState(prev => ({ ...prev, days }));
  const setAppointments = appointments => setState({ ...state, appointments });
  //const setDays = days => setState(prev => ({ ...prev, days }));
  //const setAppointments = appointments => setState({ ...state, appointments });
  let renderedAppointments = getAppointmentsForDay(state, state.day).map(
    appointment => {
      return (
        <Appointment
          key={appointment.id}
          {...appointment}
          // key={appointment.id}
          // id={appointment.id}
          // time={appointment.time}
          // interview={appointment.interview}
        />
      );
    }
  );
  //debugger;
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/api/days"),
      axios.get("http://localhost:3001/api/appointments")
    ]).then(all => {
      setState(oldState => {
        return {
          ...oldState,
          appointments: all[1].data,
          days: all[0].data
        };
      });
      // let appointments = [];
      // console.log("state.day: ", state.day);
      // console.log("state.days: ", state);
      // state.days.forEach(function(day) {
      //   const apptForDay = getAppointmentsForDay(state, day.name);
      //   appointments.push(apptForDay);
      // });
      // console.log("line 48: ", appointments);
    });
  }, [state.day]);
  //console.log("state line 62: ", state);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <DayList days={state.days} day={state.day} setDay={setDay} />
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
