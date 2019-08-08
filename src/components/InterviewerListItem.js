import React from "react";
import classnames from "classnames";
import "styles/InterviewerListItem.scss";
import { action } from "@storybook/addon-actions/dist/preview";

export default function InterviewerListItem(props) {
  console.log('InterviewerListItem props: ', props);
  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
  
  return (
    <li 
      className={interviewerClass}
      id={props.id}
      name={props.name}
      avatar={props.avatar}
      setInterviewer={action("setInterviewer")}
      onClick={() => props.setInterviewer(props.name)}
      //setInterviewer = () => {} // if error that setInterviewer is not a function
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  );
};

//{selected ? "Sylvia Palmer" : ""}