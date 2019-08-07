import React from "react";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  console.log('InterviewerList props : ', props);
  
  
  return (
  <section class="interviewers">
    <h4 class="interviewers__header text--light">Interviewer</h4>
    <ul class="interviewers__list"></ul>
  </section>
)};