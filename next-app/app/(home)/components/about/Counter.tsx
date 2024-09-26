import React, { useEffect, useRef } from "react";
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css'; // Import a theme of your choice
import styles from "./counter.module.css"
const Counter = ({ value, name }: { value: number, name: string }) => {
  const odometerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (odometerRef.current) {
      const odometer = new Odometer({
        el: odometerRef.current,
        value: 0, 
        format: '(,ddd)', 
        duration: 3000 
      });
      odometer.update(value); 
    }
  }, [value]);

  return (
    <div className={`flex flex-col items-center justify-center h-full w-full ${styles.counterItem} `}>
      
        <div ref={odometerRef} className="text-6xl font-dosis tracking-[1rem]  font-bold flex flex-row text-black">0</div>
    
      <p className="text-2xl text-primary font-grotesk font-medium">{name}</p>
    </div>
  );
};

export default Counter;
