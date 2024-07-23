import React from "react";
import "./bubblesanimation.css";
const HeroAmimation = ({ children }) => {
  const bubbleValue = [
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 21, 15, 13, 26, 17, 13, 20,
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 21, 15, 13, 26, 17, 13, 20,
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 21, 15, 13, 26, 17, 13, 20,
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 21, 15, 13, 26, 17, 13, 20,
  ];
  return (
    <div className="bubbles-container">
      <div className="bubbles">
        {bubbleValue.map((value, i) => (
          <span style={{ "--i": value }} key={`${i}-${value}`}></span>
        ))}
      </div>
      {children}
    </div>
  );
};

export default HeroAmimation;
