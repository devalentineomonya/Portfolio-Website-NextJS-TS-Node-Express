import React, { useRef } from "react";
import "./headline.css";

const HeadLine = (props) => {
  const sectionRef = useRef();

  return (
    <div id={props.id} ref={sectionRef} className="title-section">
      <div className="section-title">
        <h1 className="title-number">{props.number}</h1>
        <h1 className="title-name">{props.name}</h1>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default HeadLine;
