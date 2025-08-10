"use client";
import { IconBrandGithub, IconCode, IconLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

export default function ProjectCard({
  src,
  title,
  description,
  link,
  techStack,
  githubLink,
}: {
  src?: string;
  title: string;
  description: string;
  link?: string;
  techStack: string[];
  githubLink?: string;
}) {
  return (
    <motion.button
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
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="w-full group  cursor-pointer flex flex-col shadow-inner relative overflow-hidden h-full rounded-lg border border-l-cyan-500/20 border-t-neutral-500/10 border-r-cyan-500/10 border-b-neutral-500/20"
      onClick={() => {
        if (link) window.open(link, "_blank");
      }}
      onPointerMoveCapture={(e) => {
        document
          .querySelector("html")
          ?.style.setProperty("--mouse-x", `${e.clientX}px`);
        document
          .querySelector("html")
          ?.style.setProperty("--mouse-y", `${e.clientY}px`);
      }}
      onPointerLeave={(e) => {
        document
          .querySelector("html")
          ?.style.setProperty("--mouse-x", `${e.clientX}px`);
        document
          .querySelector("html")
          ?.style.setProperty("--mouse-y", `${e.clientY}px`);
      }}
    >
      {src && (
        <Image
          src={src}
          alt={title}
          width={300}
          height={300}
          className="w-full h-[200px] object-cover rounded-t-lg border-b border-neutral-500/10 "
        />
      )}
      <motion.div
        whileHover={{
          paddingLeft: "20px",
        }}
        className="p-4 flex flex-col relative"
      >
        <h2 className="text-lg font-bold text-left">{title}</h2>
        <p className="text-sm text-neutral-500  dark:text-neutral-400 text-left">
          {description}
        </p>
        <div className="flex items-center flex-wrap mt-2 gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="p-1 text-shadow-2xs rounded-sm text-xs border border-neutral-500/50 italic"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-4 relative bottom-0">
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="p-1 rounded-xl border border-neutral-500/50 group"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <IconCode className="group-hover:scale-95 transition duration-300 " />
            </Link>
          )}
        </div>
      </motion.div>
    </motion.button>
  );
}
