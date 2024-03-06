import React from "react";
import './counter.css'
const Counter = (props) => {
  return (
    <div className="counter-item">
      <h1>{props.value}</h1>
      <p>{props.name}</p>
    </div>
  );
};

export default Counter;
