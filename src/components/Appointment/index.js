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
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

const Appointment = props => {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW, true);
      })
      .catch(() => {
        transition(ERROR_SAVE, true);
      });
  };

  const removeInterview = () => {
    transition(DELETING);
    props
      .deleteInterview(props.id)
      .then(() => {
        transition(EMPTY, true);
      })
      .catch(() => {
        transition(ERROR_DELETE, true);
      });
  };

  const editInterview = () => {
    transition(EDIT);
  };

  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* {props.interview && <Show/>} */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          {...props.interview}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
          interviewer={props.interview.interviewer.id}
          name={props.interview.student}
        />
      )}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === CONFIRM && (
        <Confirm
          message={"Are you sure you want to delete the interview?"}
          onCancel={() => back()}
          onConfirm={() => removeInterview()}
        />
      )}
      {mode === DELETING && <Status message={"Deleting"} />}

      {mode === ERROR_SAVE && (
        <Error
          message="There was an error saving the interview"
          onClose={() => back()}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message="There was an error deleting the interview "
          onClose={() => back()}
        />
      )}

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
