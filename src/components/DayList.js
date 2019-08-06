import React from "react";
import DayListItem from "components/DayListItem"

export default function DayList(props) {
  console.log(props);
  return (
    <ul>
      <DayListItem days.map()
        days
        selected={day.name === props.day} 

      />
      
    </ul>
)};