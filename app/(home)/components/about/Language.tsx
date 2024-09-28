import React from "react";

const Language = ({ name, value }:{name:string, value:number}) => {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex justify-between">
        <p className="font-semibold mt-2">{name}</p>
      </div>
      <div className="relative h-[6px] bg-light-primary">
        <div style={{ width: `${value}%`,  position: "absolute",height: "100%", backgroundColor: "#e9204f" }}></div>
      </div>
    </div>
  );
};

export default Language
