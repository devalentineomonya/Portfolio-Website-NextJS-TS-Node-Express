import React from "react";
import "./carditem.css";

const CardItem = ({ cardContent }) => {
  const handleClick = () => {
    if (cardContent.live_link) {
      window.open(cardContent.live_link, "_blank"); 
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="card-item">
      <a onClick={()=>handleClick()} onKeyDown={()=>handleKeyDown()} target="_blank" rel="noopener noreferrer">
        <div className="card-item-content">
          <div className="card-item-image">
            <img src={cardContent.image} alt="" />
          </div>
          <div className="card-item-text">
            <p>
              {cardContent.role || cardContent.date}
              {cardContent.technology && <span></span>}
              {cardContent.technology || ""}
            </p>

            <h3>{cardContent.name}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardItem;

