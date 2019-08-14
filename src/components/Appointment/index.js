import React, { useState } from "react";
import "./styles.scss";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Confirm from "./Confirm";
import Status from "./Status";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

const Appointment = props => {
  const { mode, transition, back } = useVisualMode(EMPTY);

  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* {props.interview && <Show/>} */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && <Form interviewers={[]} onCancel={() => back()} />}

      {/* // {!props.interview && <Empty onAdd={() => console.log("Empty")} />}
      // {props.interview && (
      //   <Show
      //     student={props.interview.student}
      //     interviewer={props.interview.interviewer}
      //     onEdit={props.onEdit}
      //     onDelete={props.onDelete}
      //   />
      // )} */}
    </article>
  );
};

export default Appointment;
