import React, { useContext } from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Servces/Services";
import ServicesContextProvider from "../Context/ServicesContext";
import About from "../components/About/About";
import CounterContextProvider from "../Context/CounterContext";
import SkillsContextProvider from "../Context/SkillsContext";
import Testimonial from "../components/Testimonials/Testimonial";
import SwipperContextProvider from "../Context/SwipperContext";
import Team  from "../components/Team/Team";
import Partners from "../components/Partners/Partners";
import LatestProjects from "../components/LatestProjects/LatestProjects";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
const Home = () => {
  return (
    <>
      <Hero />

      <ServicesContextProvider>
        <Services />
      </ServicesContextProvider>

      <CounterContextProvider>
        <SkillsContextProvider>
          <About />
        </SkillsContextProvider>
      </CounterContextProvider>

      <SwipperContextProvider>
        <Testimonial />
      </SwipperContextProvider>
      <Projects/>

      <Team/>

      <Partners/>

      <LatestProjects/>
      <Contact/>
    </>
  );
};

export default Home;
