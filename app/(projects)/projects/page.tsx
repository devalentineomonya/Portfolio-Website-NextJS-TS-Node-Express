"use client";
import { useEffect, useRef, useState } from "react";
import projectsList from "@/app/(home)/components/projects/projectsList";
import Image from "next/image";

const Projectsm = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const isoRef = useRef<any | null>(null);

  const [selectedStack, setSelectedStack] = useState<string>("");
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>("");

  useEffect(() => {
    let Isotope: any;
    if (gridRef.current) {
      import("isotope-layout").then((mod) => {
        Isotope = mod.default;
        isoRef.current = new Isotope(gridRef.current, {
          itemSelector: ".grid-item",
          layoutMode: "fitRows",
          percentPosition: true,
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
      <div className="mb-4 space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setSelectedStack("");
            setSelectedEnvironment("");
          }}
        >
          Show All
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setSelectedStack("reactjs")}
        >
          ReactJS
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setSelectedStack("nodejs")}
        >
          NodeJS
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setSelectedStack("nextjs")}
        >
          NextJS
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setSelectedEnvironment("web")}
        >
          Web
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setSelectedEnvironment("mobile")}
        >
          Mobile
        </button>
      </div>

      <div className="flex items-start justify-center h-fit min-h-[calc(100vh-6rem)] py-12">
        <div className="grid grid-cols-4 gap-8 max-w-[1350px]" ref={gridRef}>
          {projectsList.map((project) => (
            <div
              key={project.id}
              className={`${getFilterClassName(project.technologies)} ${
                project.name.includes("Mobile") ? "mobile" : "web"
              } rounded shadow grid-item`}
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

export default Projectsm;
