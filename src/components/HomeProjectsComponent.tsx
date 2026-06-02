"use client";

import React, { useMemo } from "react";
import { projectLinks } from "@/constants/projectLinks";
import ProjectCard from "./ui/ProjectCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // Imported pristine matching lucide icon
import { motion } from "framer-motion";

export default function HomeProjectsComponent() {
  // Safe extraction of recent engineering projects without redundant state initialization
  const recentProjects = useMemo(() => projectLinks.slice(0, 2), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="w-full mt-4 flex flex-col"
    >
      {/* Section Master Header Area Row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-100">
          Featured Engineering
        </h2>

        <Link
          href="/projects"
          className="hidden sm:flex items-center gap-0.5 text-xs font-bold text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200 group outline-none"
        >
          <span>See all projects</span>
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-white"
          />
        </Link>
      </div>

      {/* High-Fidelity 2-Column Responsive Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {recentProjects.map((project, index) => (
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

      {/* Mobile Screen Navigation Fallback Route Button */}
      <div className="w-full flex sm:hidden items-center justify-center mt-6">
        <Link
          href="/projects"
          className="text-xs font-bold flex items-center gap-0.5 text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors group outline-none"
        >
          <span>See all projects</span>
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </Link>
      </div>
    </motion.div>
  );
}
