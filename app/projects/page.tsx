import { client } from "@/sanity/lib/client";

import PageHeader from "@/components/shared/page-header";
import ProjectsClient from "@/screens/projects/widgets/projects-client";
import { ProjectTypes } from "@/types/project";

const PROJECTS_QUERY = `*[
  _type == "project"
]{
  _id,
  name,
  link,
  description,
  year,
  image
}`;

const Projects = async () => {
  const projects = await client.fetch<ProjectTypes[]>(PROJECTS_QUERY);

  return (
    <div>
      <main className="max-w-6xl w-full mx-auto my-16 px-4">
        <PageHeader
          title="Projects"
          description="Browse through a curated collection of projects I've worked on over the years. Feel free to reach out for collaborations or suggestions!"
        />
        <ProjectsClient projects={projects} />
      </main>
    </div>
  );
};

export default Projects;
