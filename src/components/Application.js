import React, { useState, useEffect } from "react";
import DayList from "components/DayList";
import InterviewerList from "components/InterviewerList";
import "components/Application.scss";
import Appointment from "components/Appointment";
import axios from "axios";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay
} from "../helpers/selectors";

export default function Application(props) {
  //const [day, setDay] = useState("Monday");
  //const [days, setDays] = useState([]);
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewer: {}
  });

  // const appointments = [getAppointmentsForDay()];

  const setDay = day => setState({ ...state, day });
  const setDays = days => setState(prev => ({ ...prev, days }));
  const setAppointments = appointments => setState({ ...state, appointments });
  const bookInterview = (id, interview) => {
    console.log(id, interview);

    const appointments = {
      ...state.appointments,
      [id]: { ...state.appointments[id], interview: interview }
    };

    console.log(state.appointments);
    console.log("appointments: ", appointments);

    return axios
      .put(`http://localhost:3001/api/appointments/${id}`, appointments[id])
      .then(res => {
        setState({ ...state, appointments: appointments });
      });
  };

  let renderedAppointments = getAppointmentsForDay(state, state.day).map(
    appointment => {
      // eg, interview = { student: "Lydia", interview: { id: "1", name: "Sylvia", avatar: "https://i.imgur.com/xyc.png" } }
      const interview = getInterview(state, appointment.interview);
      // console.log("SEE HERE", interview);
      return (
        <Appointment
          //key={appointment.id}
          //{...appointment}
          key={appointment.id}
          id={appointment.id}
          time={appointment.time}
          interview={interview}
          interviewers={getInterviewersForDay(state, state.day)}
          bookInterview={bookInterview}
        />
      );
    }
  );
  //debugger

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/api/days"),
      axios.get("http://localhost:3001/api/appointments"),
      axios.get("http://localhost:3001/api/interviewers")
    ]).then(all => {
      setState(oldState => {
        return {
          ...oldState, // just dealing with the things that are changing below.  Everything else isn't considered.
          appointments: all[1].data,
          days: all[0].data,
          interviewers: all[2].data
        };
      });
    });
  }, []);

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
