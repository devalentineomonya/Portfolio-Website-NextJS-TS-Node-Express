import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./counter.css";
const Counter = (props) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="counter-item">
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <h1>
          {counterOn && <CountUp start={0} end={props.value} duration={3} delay={0} />}
          
        </h1>
      </ScrollTrigger>
      <p>{props.name}</p>
    </div>
  );
};

export default Counter;
