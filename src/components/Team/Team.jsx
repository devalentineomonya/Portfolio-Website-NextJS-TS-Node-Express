import React from "react";
import "./team.css";
import CardItem from "../CardItem/CardItem";
import TeamList from "../../assets/TeamList/TeamList";
import HeadLine from "../HeadLine/HeadLine";
const Team = () => {
  return (
    <div className="team-section">
      <HeadLine number={"05"} description={"Who i have Worked With"} name={"Worked With"}/>
      <div className="team-card-container">
        <div className="team-cards">
          {TeamList.map((cardContent, i) => (
            <CardItem key={i} cardContent={cardContent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
