import React from "react";
import chevronUp from "../../assets/images/chevronup.png";
import "./backtotop.css";
const backToTopHandler = () => {
  window.scrollTo({
    top: 0,
    behavior:"smooth",
  });
};

const BackToTop = () => {
  return (
    <div className="back-to-top" onClick={backToTopHandler}>
      <div className="back-to-top-icon">
        <img src={chevronUp} alt="" />
      </div>
    </div>
  );
};

export default BackToTop;
