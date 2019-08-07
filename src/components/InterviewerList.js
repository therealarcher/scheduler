import React from "react";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  console.log('InterviewerList props : ', props);
  
  
  return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list"></ul>
      {props.interviewers.map(i => (
        <InterviewerListItem
          key={i.id}
          id={i.id}
          name={i.name}
          avatar={i.avatar}
          selected={i.id === props.interviewer}
          setInterviewer={props.setInterviewer}
        />
      ))
      }
  </section>
)};