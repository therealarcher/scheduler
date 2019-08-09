import React from "react";
import "./styles.scss";

const Empty = ({ onAdd }) => {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={() => onAdd()}
      />
    </main>
  );
};

export default Empty;
