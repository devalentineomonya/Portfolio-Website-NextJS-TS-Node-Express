import React, { useEffect, useState } from "react";
import "./backtotop.css";
import { BsChevronUp } from "react-icons/bs";

const backToTopHandler = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    backToTopHandler();
  }
};

const BackToTop = () => {
  const [iScrolled, setIscrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150) {
        setIscrolled(true);
      } else {
        setIscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${iScrolled ? "hidden" : ""}`} onClick={backToTopHandler} onKeyDown={handleKeyDown}>
      <div className="back-to-top-icon">
        <BsChevronUp className="chevron-top"/>
      </div>
    </div>
  );
};

export default BackToTop;
