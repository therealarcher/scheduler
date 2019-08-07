import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";
import { action } from "@storybook/addon-actions/dist/preview";

export default function InterviewerListItem(props) {
  console.log('InterviewerListItem props: ', props);
  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  
  return (
    <li 
      className={interviewerClass}
      id={props.id}
      name={props.name}
      avatar={props.avatar}
      setInterviewer={action("setInterviewer")}
    >
  
    <li class="interviewers__item">
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  )}