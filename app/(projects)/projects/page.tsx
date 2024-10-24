import SectionLayout from "@/components/layouts/section/SectionLayout";
import ProjectsGrid from "../components/ProjectsGrid";

const Projects = () => {

  return (
    <SectionLayout sectionId="projects-page" sectionDescription="Browse collections of my projects" sectionName="My Projects" sectionNumber="01">
   <ProjectsGrid/>
    </SectionLayout>
  );
};

export default Projects;
