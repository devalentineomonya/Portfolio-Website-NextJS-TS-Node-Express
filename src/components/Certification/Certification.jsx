import React from "react";
import "./certification.css"
const Certification = ({ certification }) => {
  return (
    <div className="certification-card">
      <div className="certification-image">
        <img src={certification.image} alt={certification.name} />
      </div>
    </div>
  );
};

export default Certification;
