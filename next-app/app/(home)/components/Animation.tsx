import React from "react";
import styles from "./animation.module.css"
const Animation = ({ children }:{children:React.ReactNode}) => {
  const bubbleValue = [
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 21, 15, 13, 26, 17, 13, 20,
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 21, 15, 13, 26, 17, 13, 20,
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 21, 15, 13, 26, 17, 13, 20,
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 21, 15, 13, 26, 17, 13, 20,
  ];
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative flex">
        {bubbleValue.map((value, i) => (
          <span style={{ "--i": value } as React.CSSProperties} key={`${value + i}`} className={styles.bubblesSpan}></span>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Animation;
