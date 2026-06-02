"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface ProjectCardProps {
  src?: string;
  title: string;
  description: string;
  link?: string;
  techStack: string[];
  githubLink?: string;
}

export default function ProjectCard({
  src,
  title,
  description,
  link,
  techStack,
  githubLink,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Component-scoped hardware accelerated cursor tracking values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handlePointerMove({ clientX, clientY }: React.PointerEvent) {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleCardClick = () => {
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleCardClick();
      }}
      className="w-full group cursor-pointer flex flex-col relative overflow-hidden h-full rounded-2xl bg-white dark:bg-[#0a0a0b] border border-neutral-200/70 dark:border-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300 shadow-3xs select-none"
    >
      {/* Dynamic Hover Spotlight Overlay - Isolated safely per card frame container */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              280px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 120, 120, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      {/* Project Thumbnail Image Frame Container */}
      {src && (
        <div className="w-full h-[180px] relative overflow-hidden rounded-t-2xl bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200/40 dark:border-neutral-900/40">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-w-768px) 100vw, 50vw"
            className="object-cover scale-[1.01] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        </div>
      )}

      {/* Content Meta Information Area */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="p-5 flex flex-col relative z-20 h-full justify-between"
      >
        <div className="space-y-1.5">
          <h3 className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-50 flex items-center justify-between pr-2">
            <span>{title}</span>
            {link && (
              <IconExternalLink
                size={14}
                className="opacity-0 group-hover:opacity-50 transition-opacity text-neutral-400 dark:text-neutral-500"
              />
            )}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-normal line-clamp-2 text-left">
            {description}
          </p>
        </div>

        {/* Footer Actions Meta Cloud Track */}
        <div className="flex flex-col gap-4 mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-900/60">
          {/* Stack Badge Elements Grid Block */}
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wide text-neutral-500 dark:text-neutral-500 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/20 dark:border-neutral-800/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Source Code Trigger Route Channel */}
          {githubLink && (
            <div className="flex items-center justify-start">
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wide text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200 group/btn outline-none"
              >
                <IconBrandGithub
                  size={14}
                  className="group-hover/btn:scale-95 transition-transform"
                />
                <span>view_source</span>
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
