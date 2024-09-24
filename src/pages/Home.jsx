import { useState } from "react";
// import { useDataContext } from "../Context/DataContext";
import Hero from "../components/Hero/Hero";
import Loader from "../components/Loader/Loader";
import TechStacks from "../components/TechStacks/TechStacks";
import About from "../components/About/About";
import CounterContextProvider from "../Context/CounterContext";
import Testimonial from "../components/Testimonials/Testimonials";
import Collaborators from "../components/Collaborators/Collaborators";
import Certifications from "../components/Certifications/Certifications";
import LatestProjects from "../components/LatestProjects/LatestProjects";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import ProjectPopup from "../components/ProjectPopup/ProjectPopup";
import TechStacksList from "../assets/TechStacksList/TechStacksList";
import SkillsList from "../assets/SkillsList/SkillsList";
import SwipperList from "../assets/SwipperList/SwipperList";
import ProjectsList from "../assets/ProjectsList/ProjectsList";
import TeamList from "../assets/TeamList/TeamList";


const Home = ({ setActiveTab }) => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [projectID, setProjectID] = useState(null);
  // const { data, loading, error } = useDataContext();

  return (
    <>
      <Hero />
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <h1 className="fetch-error">
          OOPS .... The following error Occurred while Fetching Data from the backend ,
          {error}
        </h1>
      ) : ( */}
        <>
          <TechStacks techStacks={/*data.stacks*/ TechStacksList} />
          <CounterContextProvider>
            <About languages={/*data.languages*/ SkillsList}  />
          </CounterContextProvider>

          <Testimonial testimonials={/*data.testimonials*/ SwipperList} />
          <Projects
            setTogglePopup={setTogglePopup}
            setProjectID={setProjectID}
            projects={/*data.projects*/ ProjectsList}
          />
          <Collaborators collaborators={/*data.collaborators*/ TeamList} />
         {/* <Certifications certifications=data.certificates certifi} />  */}
          <LatestProjects />
          <Contact setActiveTab={setActiveTab} />
          <ProjectPopup
            projects={/*data.projects*/ ProjectsList}
            togglePopup={togglePopup}
            setTogglePopup={setTogglePopup}
            projectID={projectID}
          />
        </>
      {/* )} */}
    </>
  );
};

export default Home;
