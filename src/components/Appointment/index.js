import React, { useState } from "react";
import "./styles.scss";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
// import Confirm from './Confirm';
// import Status from './Status';
// import Error from './Error';

const Appointment = props => {
  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* {props.interview && <Show/>} */}
      {!props.interview && <Empty onAdd={() => console.log("Empty")} />}
      {props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      )}
    </article>
  );
};

export default Appointment;
