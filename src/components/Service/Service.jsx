import React, { useState } from "react";
import chevron_right from "../../assets/images/chevron.png";
import "./service.css";
const Service = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`services-card ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
      <div className="card-content">
        <div className="service-icon">
          <img src={props.image} alt="" />
        </div>
        <div className="service-name">
          <img src={chevron_right} alt="" />
          <p>{props.name}</p>
        </div>
      </div>
      <div className="service-description">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Service;
