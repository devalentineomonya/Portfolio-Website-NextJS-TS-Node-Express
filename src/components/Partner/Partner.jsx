import React from "react";
import "./partner.css"
const Partner = ({ partner }) => {
  return (
    <div className="partner-card">
      <div className="partner-image">
        <img src={partner.image} alt={partner.name} />
      </div>
    </div>
  );
};

export default Partner;
