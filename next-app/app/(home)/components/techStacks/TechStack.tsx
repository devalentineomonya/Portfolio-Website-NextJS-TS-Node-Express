"use client";
import React, { useState } from "react";
import styles from "./techStack.module.css";
import { BsChevronRight } from "react-icons/bs";

interface TechStacksProps {
  techStack: {
    name: string;
    icon: React.ReactNode;
    description: string;
  };
}

const TechStack = ({ techStack }: TechStacksProps) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      toggleAccordion();
    }
  };
  return (
    <div
      className={`grid grid-rows-1 max-w-full lg:max-w-[25rem] overflow-hidden cursor-pointer rounded-sm relative z-[1] `}
      onClick={toggleAccordion}
      onKeyDown={handleKeyDown}
    >
      <div
        className={`flex items-center justify-start p-[10px_0_10px_10px] xl:p-[20px_0_20px_20px]  gap-x-4 text-slate-800 hover:text-white bg-light-primary hover:bg-primary active:bg-primary transition-all ease-in-out duration-500 h-20 md:h-28 xl:h-32 w-full  ${styles.cardContent}`}
      >
        <div className="flex items-center justify-start w-16 md:w-20 h-16 relative border-r-2 border-gray-500 px-1 md:px-4">
          {techStack?.icon}
        </div>
        <div className="flex items-center justify-start gap-x-3 ">
          <BsChevronRight className={`transition-all eae-in-out duration-300 ${isActive && "rotate-90"}`} size={35} />
          <p className="text-lg md:text-2xl font-bold font-grotesk ">{techStack?.name}</p>
        </div>
      </div>
      <div
        className={`relative overflow-hidden text-slate-800 transition-all eae-in-out duration-300 ${
          isActive ? "max-h-[350px]" : "max-h-0"
        }`}
      >
        <p className={`text-xl leading-8 tracking-[3px]`}>
          {techStack?.description}
        </p>
      </div>
    </div>
  );
};

export default TechStack;
