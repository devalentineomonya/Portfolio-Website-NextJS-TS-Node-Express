import React, { useContext } from "react";
import "./about.css";
import { CounterContext } from "../../Context/CounterContext";
import Counter from "../Counter/Counter";
import Skill from "../Skill/Skill";
import { SkillsContext } from "../../Context/SkillsContext";
import HeadLine from "../HeadLine/HeadLine";
const About = () => {
  const { CountsList } = useContext(CounterContext);
  const { SkillsList } = useContext(SkillsContext);
  return (
    <div className="about-section">
      <HeadLine
        id="about"
        number={"02"}
        description={"Why Work with me."}
        name={"About"}
      />
      <div className="about-content">
        <div className="counts-section">
          <div className="counter-container">
            {CountsList.map((count, i) => (
              <Counter key={i} name={count.name} value={count.value} />
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
            {SkillsList.map((skill, i) => (
              <Skill key={i} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
