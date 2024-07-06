import React, { useContext, useEffect, useState } from "react";
import "./about.css";
import Skill from "../Languages/Languages";
import HeadLine from "../HeadLine/HeadLine";
import { useTheme } from "../../Context/ThemeContext";
import lightSlider from "../../assets/images/lightSlider3.jpg";
import darkSlider from "../../assets/images/darkSlider3.jpg";
import Statistics from "../Statistics/Statistics";
import SkillItems from "../../assets/SkillsList/SkillsList";
import CountsList from "../../assets/CountsList/CountsList";
const About = ({languages=SkillItems}) => {

  const [bgImage, setBgImage] = useState(lightSlider);
  const {toggle} = useTheme(); 
  useEffect(() => {
    setBgImage(!toggle ? darkSlider : lightSlider);
  }, [toggle]);

  return (
    <div className="about-section">
      <HeadLine
        id="about"
        number={"02"}
        description={"Why Work with me."}
        name={"About"}
      />
      <div className="about-content">
        <div
          className="counts-section"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
          }}
        >
          <div className="counter-container">
            {CountsList.map((count, i) => (
              <Statistics key={i} name={count.name} value={count.value} />
            ))}
          </div>
        </div>
        <div className="description-section">
          <h3>Valentine Omonya</h3>
          <p>
            A versatile software engineer proficient in Python, JavaScript, PHP,
            Java, React Native, Kotlin, and Swift, adept in both web and mobile
            development. Crafts robust, aesthetically pleasing digital
            solutions, known for creative problem-solving and commitment to
            excellence. Delivers innovative solutions tailored to client needs,
            with a keen eye for detail and a passion for staying current. A
            valuable asset to any team.
          </p>
          <div className="skills-section">
            {languages.map((language, i) => (
              <Skill key={i} name={language.name} value={language.percentage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
