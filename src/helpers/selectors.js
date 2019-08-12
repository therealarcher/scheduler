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

export default getAppointmentsForDay;
