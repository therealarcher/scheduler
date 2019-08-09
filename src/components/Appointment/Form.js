import React, { useState } from "react";
import "./styles.scss";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList"


const Form = (props) => {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const buttonCancel = () => {
    setName('');
    setInterviewer(null);
    props.onCancel();
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(event) => setName(event.target.value)} //event.target.value retrieves value for whatever it's called on
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          interviewer={interviewer}
          onChange={(id) => setInterviewer(id)} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={buttonCancel}>Cancel</Button>
          <Button confirm onClick={()=>props.onSave(name, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  ) 
}

export default Form;