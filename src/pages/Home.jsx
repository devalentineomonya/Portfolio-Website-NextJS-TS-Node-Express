import React, { useState } from "react";
import { useDataContext } from "../Context/DataContext";
import Hero from "../components/Hero/Hero";
import Loader from "../components/Loader/Loader";
// import TechStacks from "../components/TechStacks/TechStacks";
// import About from "../components/About/About";
// import CounterContextProvider from "../Context/CounterContext";
// import Testimonial from "../components/Testimonials/Testimonials";
// import Collaborators from "../components/Collaborators/Collaborators";
// import Certifications from "../components/Certifications/Certifications";
// import LatestProjects from "../components/LatestProjects/LatestProjects";
// import Contact from "../components/Contact/Contact";
// import Projects from "../components/Projects/Projects";
// import ProjectPopup from "../components/ProjectPopup/ProjectPopup";

const Home = ({ setActiveTab }) => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [projectID, setProjectID] = useState(null);
  const { data, loading } = useDataContext();

  return (
    <>
      <Hero />
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <TechStacks techStacks={data.stacks} />
          <CounterContextProvider>
            <About languages={data.languages} />
          </CounterContextProvider>

          <Testimonial testimonials={data.testimonials} />
          <Projects
            setTogglePopup={setTogglePopup}
            setProjectID={setProjectID}
            projects={data.projects}
          />
          <Collaborators collaborators={data.collaborators} />
          <Certifications certifications={data.certificates} />
          <LatestProjects />
          <Contact setActiveTab={setActiveTab} />
          <ProjectPopup
            projects={data.projects}
            togglePopup={togglePopup}
            setTogglePopup={setTogglePopup}
            projectID={projectID}
          /> */}
        </>
      )}
    </>
  );
};

export default Home;
