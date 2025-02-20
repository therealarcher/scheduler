// returns the appointments for a given day
const getAppointmentsForDay = (state, day) => {
  const appointmentsId = state.days
    .filter(e => e.name === day)
    .map(e => e.appointments)
    .reduce((acc, val) => acc.concat(val), []);

  const appointment = [];
  appointmentsId.forEach(e => {
    appointment.push(state.appointments[e]);
  });

  return appointment;
};

const getInterviewersForDay = (state, day) => {
  const interviewersId = state.days
    .filter(e => e.name === day)
    .map(e => e.interviewers)
    .reduce((acc, val) => acc.concat(val), []);
  const interviewer = [];
  interviewersId.forEach(e => {
    if (state.interviewers[e]) interviewer.push(state.interviewers[e]);
  });

  return interviewer;
};

// returns an object containing student, interviewer
const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  } else {
    const student = interview.student;
    //console.log("state in getInterview: ", state);
    const interviewer = state.interviewers[interview.interviewer];
    const interviewObj = { student, interviewer };
    return interviewObj;
  }
};

//David's solution
// const foundDay = state.days.filter(d => d.name === day)[0];

// if (!foundDay) {
//   return [];
// }

// return foundDay.appointments.map(id =>state.appointments[id]);

export { getAppointmentsForDay, getInterview, getInterviewersForDay };
