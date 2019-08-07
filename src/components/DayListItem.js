import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  console.log('DayListItem props: ', props);
  const dayListClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });
  
  return (
    <li 
      className={dayListClass}
      name={props.name}
      spots={props.spots}
      onClick={() => props.setDay(props.name)}
    >

      <h1>{props.name}</h1>
      <p>{`${props.spots === 0 ? 'no' : props.spots} spot${props.spots === 1 ? '' : 's'} remaining`}</p>
    </li>
  )}