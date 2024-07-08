import React from "react";
import "./carditem.css";

const CardItem = ({ cardContent=null }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (cardContent?.live_link || cardContent?.githubLink) {
      window.open(cardContent?.live_link || cardContent?.githubLink, "_blank"); 
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
            <img src={cardContent?.image} alt="" />
          </div>
          <div className="card-item-text">
            <p>
              {cardContent?.role || cardContent?.date}
              {cardContent?.technologies && <span></span>}
              {cardContent?.technologies?.join(". ") || ""}
            </p>

            <h3>{cardContent?.name}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardItem;

