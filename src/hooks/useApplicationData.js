import { useState, useEffect, useReducer } from "react";
import axios from "axios";

export default function Application() {
  const initialState = {
    day: "Monday",
    days: [],
    appointments: {},
    interviewer: {}
  };

  const SET_DAY = "SET_DAY";
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_INTERVIEW = "SET_INTERVIEW";

  const reducer = (state, action) => {
    switch (action.type) {
      case SET_DAY:
        return { ...state, day: action.day };
      case SET_APPLICATION_DATA:
        return {
          ...state,
          days: action.days,
          appointments: action.appointments,
          interviewers: action.interviewers
        };
      case SET_INTERVIEW: {
        const appointment = {
          ...state.appointments[action.id],
          interview: { ...action.interview }
        };
        const appointments = {
          ...state.appointments,
          [action.id]: appointment
        };
        return { ...state, appointments };
      }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setDay = day => dispatch({ type: SET_DAY, day });

  const bookInterview = (id, interview) => {
    console.log(id, interview);
    return axios
      .put(`/api/appointments/${id}`, {
        interview
      })
      .then(resp => {
        if (!resp.status === 204) {
          console.error("Server responded with a non 2xx response", resp.body);
          return;
        }
        dispatch({ type: SET_INTERVIEW, id, interview });
      });
  };

  const deleteInterview = id =>
    axios.delete(`/api/appointments/${id}`).then(resp => {
      if (!resp.status === 204) {
        console.error("Server responded with a non 2xx response", resp.body);
        return;
      }
      dispatch({ type: SET_INTERVIEW, id, interview: null });
    });

  const editInterview = () => {
    console.log("editInterview");
  };

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/api/days"),
      axios.get("http://localhost:3001/api/appointments"),
      axios.get("http://localhost:3001/api/interviewers")
    ]).then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      });
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    deleteInterview
  };
}
