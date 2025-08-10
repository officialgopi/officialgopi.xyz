"use client";

import { projectLinks } from "@/constants/projectLinks";
import React, { useState } from "react";
import ProjectCard from "./ui/ProjectCard";
import Link from "next/link";
import { motion } from "motion/react";

const HomeProjectsComponent = () => {
  const [projects, _] = useState<typeof projectLinks>(projectLinks.slice(0, 2));
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(50px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
      }}
      className="w-full mt-5 flex flex-col"
    >
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            githubLink={project.githubLink}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <Link
          href="/projects"
          className="text-sm flex items-center gap-1 hover:opacity-70 transition-opacity "
        >
          <span>See more</span>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default HomeProjectsComponent;
