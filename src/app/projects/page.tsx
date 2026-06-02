import React from "react";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import Seperator from "@/components/Seperator";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectLinks } from "@/constants/projectLinks";

export default function ProjectsPage() {
  return (
    <section className="w-full relative z-0 select-none text-left flex flex-col gap-8">
      {/* 1. Header Copy Description Info Area Block */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
          Engineering & Works
        </h1>
        <p className="max-w-2xl text-base text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed">
          A comprehensive timeline directory covering full-stack web
          applications, open-source libraries, and production-ready
          architectures. While you are browsing, you can also{" "}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-0.5 font-bold text-neutral-800 dark:text-neutral-200 hover:underline outline-none"
          >
            <span>checkout the blog directory</span>
            <ArrowUpRight size={13} className="text-neutral-400" />
          </Link>{" "}
          where I document system design choices, modern optimizations, and
          engineering paradigms.
        </p>
      </div>

      {/* Primary Section Breaking Anchor Line */}
      <Seperator
        topMarginInPx={0}
        bottomMarginInPx={8}
        label="DEPLOYED_PRODUCTIONS"
      />

      {/* 2. Main High-Fidelity Master Project Grid Area */}
      <div className="space-y-12 w-full">
        <div className="space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {projectLinks.map((project, index) => (
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
        </div>

        {/* Visual Partition Bridge Line */}
        <Seperator
          topMarginInPx={8}
          bottomMarginInPx={8}
          label="ACTIVE_PIPELINES"
        />

        {/* 3. Minimalist Brutalist Staging Area Block (Upcoming Manifest) */}
        <div className="space-y-4 w-full">
          <h2 className="text-xs font-mono font-black tracking-widest text-neutral-400 dark:text-neutral-600 uppercase">
            // pipeline_staging
          </h2>

          <div className="w-full py-10 px-6 border border-dashed border-neutral-200 dark:border-neutral-800/80 rounded-2xl bg-neutral-50/20 dark:bg-[#0a0a0b]/10 flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
            <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#0c0c0d] border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 dark:text-neutral-500 shadow-3xs">
              <Code2 size={16} className="animate-pulse" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                More architectures are currently compiling
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 max-w-sm font-normal">
                New full-stack systems, WebRTC integrations, and
                performance-driven tools are regularly being committed to the
                active branch directory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
