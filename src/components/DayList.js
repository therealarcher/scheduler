import React from "react";
import DayListItem from "components/DayListItem"

export default function DayList(props) {
  console.log('DayList props : ', props);
  
  
  return (
    <ul>
      {props.days.map((day) => (
        <DayListItem
          selected={day.name === props.day}
          name = {day.name}
          spots = {day.spots}
          setDay = {props.setDay}
          key = {day.id}
        />
      ))}
      
    </ul>
)};