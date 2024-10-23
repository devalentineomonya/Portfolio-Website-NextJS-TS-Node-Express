"use client";
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import projectsList from "@/app/(home)/components/projects/projectsList";
import Image from "next/image";

const Gallery = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const isoRef = useRef<Isotope | null>(null);

  const [selectedStack, setSelectedStack] = useState<string>("");
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined" && gridRef.current) {
      isoRef.current = new Isotope(gridRef.current, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        percentPosition: true,
      });
    }

    return () => {
      if (isoRef.current) {
        isoRef.current.destroy();
      }
    };
  }, []);

  const handleFilter = () => {
    const filterValue =
      `${selectedStack ? `.${selectedStack}` : ""}${
        selectedEnvironment ? `.${selectedEnvironment}` : ""
      }` || "*";
    if (isoRef.current) {
      isoRef.current.arrange({ filter: filterValue });
    }
  };

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
            handleFilter();
          }}
        >
          Show All
        </button>
        {/* Hardcoded filter buttons */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setSelectedStack("reactjs");
            handleFilter();
          }}
        >
          ReactJS
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setSelectedStack("nodejs");
            handleFilter();
          }}
        >
          NodeJS
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setSelectedStack("nextjs");
            handleFilter();
          }}
        >
          NextJS
        </button>

        {/* Environment filters */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setSelectedEnvironment("web");
            handleFilter();
          }}
        >
          Web
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setSelectedEnvironment("mobile");
            handleFilter();
          }}
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

export default Gallery;
