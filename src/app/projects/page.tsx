import ProjectCard from "@/components/ui/ProjectCard";
import { projectLinks } from "@/constants/projectLinks";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="flex flex-col">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="md:pr-40 text-lg">
        <span className="text-neutral-900 font-medium dark:text-neutral-400">
          I’ve developed commercial projects as well as hobby projects. All
          projects are included here. –{" "}
          <Link href="/blogs" className="underline text-blue-600">
            checkout my blog while you're here.
          </Link>
        </span>
        <br />
        <span className="dark:text-neutral-200">
          I write about technology, learning and memes.
        </span>
      </p>
      <section className="mt-10">
        <h2 className="text-3xl font-semibold my-5">Full Stack Works</h2>
        <section className=" grid grid-cols-1 md:grid-cols-2  gap-5 w-full">
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
        </section>
        <section>
          <h2 className="text-3xl font-semibold my-5">Upcoming Projects</h2>

          <ProjectCard
            src={""}
            title={"More Projects are coming"}
            description={"More Projects are coming"}
            link={""}
            techStack={[]}
            githubLink={""}
          />
        </section>
      </section>
    </section>
  );
}
