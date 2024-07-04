import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./statistics.css";
const Statistics = ({value=0, name=""}) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="counter-item">
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <h1>
          {counterOn && <CountUp start={0} end={value} duration={3} delay={0} />}
          
        </h1>
      </ScrollTrigger>
      <p>{name}</p>
    </div>
  );
};

export default Statistics;
