"use client";
import { useEffect, useRef, useState } from "react";
import projectsList from "@/app/(home)/components/projects/projectsList";
import Image from "next/image";

const ProjectsGrid = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const isoRef = useRef<any | null>(null);

  const [selectedStack, setSelectedStack] = useState<string>("");
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>("");

  useEffect(() => {
    let Isotope: any;

    if (gridRef.current) {
      import("isotope-layout").then((mod) => {
        Isotope = mod.default;
        import("isotope-packery").then(() => {
          isoRef.current = new Isotope(gridRef.current, {
            itemSelector: ".grid-item",
            layoutMode: "packery",
            packery: {
              gutter: 30,
            },
            percentPosition: true,
          });
        });
      });
    }

    return () => {
      if (isoRef.current) {
        isoRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const filterValue =
      `${selectedStack ? `.${selectedStack}` : ""}${
        selectedEnvironment ? `.${selectedEnvironment}` : ""
      }` || "*";
    if (isoRef.current) {
      isoRef.current.arrange({ filter: filterValue });
    }
  }, [selectedStack, selectedEnvironment]);

  const getFilterClassName = (technologies: string[]) => {
    return technologies
      .map((tech) => tech.replace(/\s+/g, "").toLowerCase())
      .join(" ");
  };

  return (
    <>
      <div className="w-full flex items-center justify-center gap-x-3 flex-wrap gap-y-4">
        <button
          className={`${
            selectedStack === "" && selectedEnvironment === ""
              ? "bg-primary text-white"
              : "bg-white text-slate-900"
          } px-3 py-1 gap-x-3`}
          onClick={() => {
            setSelectedStack("");
            setSelectedEnvironment("");
          }}
        >
          All
        </button>
        <button
          className={`${
            selectedStack === "reactjs" ? "bg-primary text-white" : "bg-white text-slate-900"
          } px-3 py-1 gap-x-3`}
          onClick={() => setSelectedStack("reactjs")}
        >
          ReactJS
        </button>
        <button
          className={`${
            selectedStack === "angular" ? "bg-primary text-white" : "bg-white text-slate-900"
          } px-3 py-1 gap-x-3`}
          onClick={() => setSelectedStack("angular")}
        >
          Angular
        </button>
        <button
          className={`${
            selectedStack === "nextjs" ? "bg-primary text-white" : "bg-white text-slate-900"
          } px-3 py-1 gap-x-3`}
          onClick={() => setSelectedStack("nextjs")}
        >
          NextJS
        </button>
        <button
          className={`${
            selectedStack === "nodejs" ? "bg-primary text-white" : "bg-white text-slate-900"
          } px-3 py-1 gap-x-3`}
          onClick={() => setSelectedStack("nodejs")}
        >
          NodeJS
          </button>
        <button
          className={`${
            selectedStack === "laravel" ? "bg-primary text-white" : "bg-white text-slate-900"
          } px-3 py-1 gap-x-3`}
          onClick={() => setSelectedStack("laravel")}
        >
          Laravel
        </button>
        <button
          className={`${
            selectedStack === "python" ? "bg-primary text-white" : "bg-white text-slate-900"
          } px-3 py-1 gap-x-3`}
          onClick={() => setSelectedStack("python")}
        >
          Python
          </button>
      </div>
          <div className="w-full flex items-center justify-center gap-x-3 flex-wrap gap-y-4 mt-3">
        <button
          className={`${
            selectedEnvironment === "web" ? "bg-primary text-white" : "bg-white text-slate-900"
          } px-3 py-1 gap-x-3`}
          onClick={() => setSelectedEnvironment("web")}
        >
          Web
        </button>
        <button
          className={`${
            selectedEnvironment === "mobile" ? "bg-primary text-white" : "bg-white text-slate-900"
          } px-3 py-1 gap-x-3`}
          onClick={() => setSelectedEnvironment("mobile")}
        >
          Mobile
        </button>
        <button
          className={`${
            selectedEnvironment === "aiml" ? "bg-primary text-white" : "bg-white text-slate-900"
          } px-3 py-1 gap-x-3`}
          onClick={() => setSelectedEnvironment("aiml")}
        >
          AIML
        </button>
        </div>

      <div className="flex items-start justify-center h-fit min-h-[calc(100vh-6rem)] py-12">
        <div className="flex flex-wrap w-full max-w-[1400px] mx-[calc(1.5rem/-2)]" ref={gridRef}>
          {projectsList.map((project) => (
            <div
              key={project.id}
              className={`${getFilterClassName(project.technologies)} ${
                project.environment
              } rounded shadow flex-[0_0_auto] mx-[calc(1.5rem/-3)] lg:mx-[calc(1.5rem/-2)] shrink-0 w-full lg:mt-3 lg:w-1/4 aspect-square grid-item`}
            >
              <Image
                src={project.popupImage}
                alt={project.name}
                className="w-full aspect-square object-cover mb-2 rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsGrid;
