"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProjectCard from "@/components/common/project-card";
import { ProjectTypes } from "@/types/project";
import { urlFor } from "@/sanity/lib/image";

interface ProjectsClientProps {
  projects: ProjectTypes[];
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsClient: React.FC<ProjectsClientProps> = ({ projects }) => {
  const [selectedYear, setSelectedYear] = useState<string | null>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesYear = selectedYear === "All" || project.year === selectedYear;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ToggleGroup
            type="single"
            variant="outline"
            value={selectedYear || "All"}
            onValueChange={(value) => setSelectedYear(value || "All")}
          >
            {["All", "2025", "2024", "2023", "2022"].map((year) => (
              <ToggleGroupItem
                key={year}
                value={year}
                asChild
                className="text-foreground data-[state=on]:bg-black dark:data-[state=on]:bg-white data-[state=on]:text-white dark:data-[state=on]:text-black"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                >
                  {year}
                </motion.div>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative w-full md:w-auto flex items-center gap-2"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="pl-10 w-full md:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project._id}
              variants={itemVariants}
              layout
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <ProjectCard
                title={project.name}
                description={project.description}
                year={project.year}
                imageSrc={urlFor(project.image).url()}
                link={project.link}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500"
        >
          No projects found matching your criteria
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectsClient;
