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

// test attempt
// const getAppointmentsForDay = (state, day) => {
//   const appointment = [];
//   const appointmentsId = state.days;
//   console.log("appointment: ", appointment);
//   console.log("state.days: ", state.days);

//   for (let i in state.days) {
//     let dayObj = state.days[i];
//     //console.log('day: ', state.days[i]);
//     if (dayObj.name === day) {
//       console.log(dayObj.appointments);
//       return dayObj.appointments;
//       //return dayObj.appointments;
//       dayAppt.push(dayObj.appointments);
//     }
//   }
// };

//David's solution
// const foundDay = state.days.filter(d => d.name === day)[0];

// if (!foundDay) {
//   return [];
// }

// return foundDay.appointments.map(id =>state.appointments[id]);

export { getAppointmentsForDay, getInterview };
