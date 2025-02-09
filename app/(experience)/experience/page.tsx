import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import SectionLayout from "@/components/layouts/section/SectionLayout";

const experiences = [
  {
    name: "Frontend Developer at TechSolutions",
    timeRange: "Jan 2022 - Present",
    shortDescription:
      "Developed responsive web applications using React and TypeScript.",
    responsibilities: [
      { name: "UI Development", description: "Built user interfaces with React and CSS." },
      { name: "Code Optimization", description: "Improved app performance by 30% through optimization techniques." },
      { name: "Collaboration", description: "Worked closely with design and backend teams to deliver features." },
    ],
    status: "current",
  },
  {
    name: "Backend Engineer at DevCorp",
    timeRange: "Jun 2021 - Dec 2021",
    shortDescription:
      "Designed and implemented APIs and database systems using Node.js.",
    responsibilities: [
      { name: "API Development", description: "Created RESTful APIs with Express.js and PostgreSQL." },
      { name: "Database Management", description: "Designed relational databases and wrote complex SQL queries." },
      { name: "Security", description: "Implemented JWT authentication and role-based access control." },
    ],
    status: "past",
  },
  {
    name: "Full-Stack Developer at WebTech",
    timeRange: "Aug 2020 - May 2021",
    shortDescription: "Built full-stack applications using MERN stack.",
    responsibilities: [
      { name: "Frontend & Backend Development", description: "Developed both frontend and backend services using React and Node.js." },
      { name: "DevOps", description: "Set up CI/CD pipelines and managed AWS deployment." },
      { name: "Testing", description: "Wrote unit and integration tests using Jest and Cypress." },
    ],
    status: "past",
  },
  {
    name: "Mobile App Developer at InnovateX",
    timeRange: "Mar 2020 - Jul 2020",
    shortDescription: "Developed cross-platform mobile applications using Flutter.",
    responsibilities: [
      { name: "App Development", description: "Created highly performant mobile apps for Android and iOS." },
      { name: "State Management", description: "Utilized Bloc for state management in complex app features." },
      { name: "App Store Deployment", description: "Published apps on Google Play and Apple App Store." },
    ],
    status: "past",
  },
  {
    name: "Software Engineer Intern at CloudSoft",
    timeRange: "Jan 2020 - Feb 2020",
    shortDescription: "Worked on cloud-based web services and microservices architecture.",
    responsibilities: [
      { name: "Cloud Architecture", description: "Designed and implemented microservices on AWS." },
      { name: "Performance Tuning", description: "Enhanced cloud service performance by reducing latency." },
      { name: "API Integration", description: "Integrated third-party APIs for extended functionality." },
    ],
    status: "past",
  },
];

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(" ");
}

const ExperienceShowcase = () => {
  return (
    <SectionLayout
      sectionDescription="My Tech Experience over the years"
      sectionId="experience"
      sectionName="My Experience"
      sectionNumber="01"
    >
      <div className="h-fit min-h-[calc(100vh-6rem)] w-full flex items-center justify-center py-12">
        <nav aria-label="Experience Showcase" className="w-full max-w-5xl">
          <ol role="list" className="overflow-hidden">
            {experiences.map((experience) => (
              <li
                key={experience.name}
                className={classNames(
                  "relative",
                  "pb-4"
                )}
              >
                {experience.status === "past" ? (
                  <>
                    <div
                      className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-red-600"
                      aria-hidden="true"
                    />
                    <ExperienceCard
                      href="#"
                      name={experience.name}
                      timeRange={experience.timeRange}
                      shortDescription={experience.shortDescription}
                      responsibilities={experience.responsibilities}
                      status={experience.status}
                    />
                  </>
                ) : (
                  <>
                    <div
                      className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                      aria-hidden="true"
                    />
                    <ExperienceCard
                      href="#"
                      name={experience.name}
                      timeRange={experience.timeRange}
                      shortDescription={experience.shortDescription}
                      responsibilities={experience.responsibilities}
                      status={experience.status}
                    />
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </SectionLayout>
  );
};

export default ExperienceShowcase;
