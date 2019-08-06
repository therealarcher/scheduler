import React from "react";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  console.log(props);
  return (
    <button 
      onClick={props.name}
    >
      {`${props.spots === 0 ? 'no' : props.spots} spot${props.spots === 1 ? '' : 's'} remaining`}
    </button>
  )}