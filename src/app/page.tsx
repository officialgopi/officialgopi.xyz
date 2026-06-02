"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HomeBlogsComponent from "@/components/HomeBlogsComponent";
import HomeProjectsComponent from "@/components/HomeProjectsComponent";
import HomeSkillsComponent from "@/components/HomeSkillsComponent";
import HomeLifeLogAndUpdates from "@/components/HomeLifeLogAndUpdates";
import HireMeAsFreeLancerComponent from "@/components/HireMeAsFreeLancerComponent";
import Seperator from "@/components/Seperator";

export default function Page() {
  const links = {
    coderroute: {
      name: "CoderRoute",
      url: "https://coderroute.officialgopi.xyz",
    },
    smartclass: {
      name: "SMARTClass",
      url: "#",
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full flex flex-col z-0 max-w-5xl mx-auto px-4 md:px-0"
    >
      {/* Initial Landing Header Top Border */}
      <Seperator topMarginInPx={0} bottomMarginInPx={24} label="SYS_START" />

      {/* Hero Bio Introduction Block Layout */}
      <div className="flex justify-between items-start flex-col-reverse md:flex-row gap-10 w-full">
        {/* Left Information Column */}
        <div className="flex flex-col items-start gap-3 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
            Gopikanta Mondal
          </h1>

          <p className="text-lg tracking-tight text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
            Full-Stack Software Engineer specialized in architecting scalable
            SaaS infrastructures, interactive developer systems like{" "}
            <Link
              href={links.coderroute.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-1.5 py-0.5 font-bold rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity"
            >
              {links.coderroute.name}
            </Link>
            , and educational learning platforms like{" "}
            <Link
              href={links.smartclass.url}
              className="px-1.5 py-0.5 font-bold rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity"
            >
              {links.smartclass.name}
            </Link>
            .
          </p>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal max-w-xl mt-3">
            Focused on performance optimization, clean developer telemetry, and
            robust data workflows. Connect with me on{" "}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-900 dark:text-neutral-100 underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Twitter
            </a>{" "}
            for regular engineering insights and technical updates.
          </p>
        </div>

        {/* Right Column: Premium Animated Image Frame Matrix */}
        <div className="relative shrink-0 md:mt-2">
          {/* Futuristic laser cross-lines extending symmetrically */}
          <div className="absolute w-px h-[140%] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-800 to-transparent left-[-8px] top-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute w-px h-[140%] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-800 to-transparent right-[-8px] top-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute h-px w-[140%] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent top-[-8px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="absolute h-px w-[140%] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent bottom-[-8px] left-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] relative overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/60 shadow-sm">
            <Image
              fill
              sizes="140px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              src="/profile-pic.jpg"
              alt="Gopikanta Mondal profile picture"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Streamlined Sub-component Presentation Sections */}
      {/* Container blocks handle uniform paddings, keeping selectors isolated from row gaps */}
      <div className="w-full mt-12 space-y-0">
        <div className="pb-8">
          <HomeBlogsComponent />
        </div>

        <Seperator topMarginInPx={0} bottomMarginInPx={0} label="LOG_FEED" />

        <div className="py-8">
          <HomeProjectsComponent />
        </div>

        <Seperator topMarginInPx={0} bottomMarginInPx={0} label="CORE_STACK" />

        <div className="py-8">
          <HomeSkillsComponent />
        </div>

        <Seperator topMarginInPx={0} bottomMarginInPx={0} label="LIFE_LOG" />

        <div className="py-8">
          <HomeLifeLogAndUpdates />
        </div>

        <Seperator topMarginInPx={0} bottomMarginInPx={0} label="CTA_INBOUND" />

        <div className="pt-8 mb-8">
          <HireMeAsFreeLancerComponent />
        </div>
      </div>
    </motion.section>
  );
}
