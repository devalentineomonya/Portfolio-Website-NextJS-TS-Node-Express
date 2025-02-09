"use client"
import React, { useEffect, useRef, useState } from "react";
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';
import styles from "./counter.module.css";

const Counter = ({ value, name }: { value: number; name: string }) => {
  const odometerRef = useRef<HTMLDivElement>(null);
  const counterContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = counterContainerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
  
    if (container) {
      observer.observe(container);
    }
  
    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && odometerRef.current && isVisible) {
      const odometer = new Odometer({
        el: odometerRef.current,
        value: 0, 
        format: "(,ddd)", 
        duration: 3000 
      });
      odometer.update(value); 
    } else if (odometerRef.current) {
      odometerRef.current.innerHTML = "0";
    }
  }, [value, isVisible]);

  return (
    <div ref={counterContainerRef} className={`flex flex-col items-center justify-center h-full w-full ${styles.counterItem}`}>
      <div ref={odometerRef} className="text-6xl font-dosis tracking-[1rem] font-bold flex flex-row text-black">0</div>
      <p className="text-2xl text-primary font-grotesk font-medium">{name}</p>
    </div>
  );
};

export default Counter;
