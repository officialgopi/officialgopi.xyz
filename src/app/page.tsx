"use client";

import HomeBlogsComponent from "@/components/HomeBlogsComponent";
import HomeProjectsComponent from "@/components/HomeProjectsComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import HomeSkillsComponent from "@/components/HomeSkillsComponent";
import HireMeAsFreeLancerComponent from "@/components/HireMeAsFreeLancerComponent";
import HomeLifeLogAndUpdates from "@/components/HomeLifeLogAndUpdates";

const page = () => {
  const links: {
    [key: string]: {
      name: string;
      url?: string;
    };
  } = {
    coderroute: {
      name: "CoderRoute",
      url: "https://coderroute.officialgopi.xyz",
    },
    smartclass: {
      name: "SMARTClass",
    },
  };
  return (
    <motion.section
      initial={{
        opacity: 0,
        filter: "blur(50px)",
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
      }}
      className="w-full relative z-0"
    >
      <div className="flex justify-between items-start md:flex-row flex-col-reverse gap-10">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-4xl font-bold tracking-tight">
            Gopikanta Mondal
          </h1>
          <p className="text-lg tracking-tight text-neutral-700 dark:text-neutral-300">
            Building{" "}
            <Link
              href={links.coderroute.url ?? "#"}
              target="_blank"
              className="p-1 font-semibold rounded-sm mr-1 bg-neutral-100 dark:bg-neutral-800"
            >
              {links.coderroute.name}
            </Link>
            ,
            <Link
              href={links.smartclass.url ?? "#"}
              target="_blank"
              className="p-1 font-semibold rounded-sm mr-1 bg-neutral-100 dark:bg-neutral-800"
            >
              {links.smartclass.name}
            </Link>
            and other{" "}
            <span className="p-1 font-semibold rounded-sm mr-1 ">
              cool things
            </span>
          </p>
          <span className="mt-[20] text-neutral-600 dark:text-neutral-400">
            Full Stack Web Developer building SaaS products and web apps.
            <br />
            Find me on twitter for tech updates and memes.
          </span>
        </div>
        <div className="relative z-0 top-[10px]">
          <div className=" absolute  w-px h-[150%] bg-gradient-to-b from-transparent via-cyan-500 dark:via-cyan-50/10 to-transparent   dark:bg-neutral-800 pointer-events-none z-[-1] rounded-full top-[50%] translate-y-[-50%] right-[-5px]" />
          <div className=" absolute  w-px h-[150%] bg-gradient-to-b from-transparent via-cyan-500 dark:via-cyan-50/10 to-transparent   dark:bg-neutral-800 pointer-events-none z-[-1] rounded-full top-[50%] translate-y-[-50%] left-[-5px]" />
          <div className=" absolute  h-px w-[150%] bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-50/10 to-transparent   dark:bg-neutral-800 pointer-events-none z-[-1] rounded-full top-[-5px] translate-x-[50%] right-[50%]" />
          <div className=" absolute  h-px w-[150%] bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-50/10 to-transparent   dark:bg-neutral-800 pointer-events-none z-[-1] rounded-full bottom-[-5px] translate-x-[50%] right-[50%]" />
          <Image
            width={150}
            height={150}
            className="rounded-sm"
            src={"/profile-pic.jpg"}
            alt={""}
          />
          {/* <div className=" absolute  h-px w-[300px] bg-gradient-to-r from-transparent via-cyan-50/10 to-transparent   dark:bg-neutral-800 pointer-events-none z-[-1] rounded-full top-[-5px] right-[10px]" /> */}
          {/* <div className=" absolute  w-px h-[300px] bg-gradient-to-b from-transparent via-cyan-50/10 to-transparent   dark:bg-neutral-800 pointer-events-none z-[-1] rounded-full top-[0px] left-[calc(100%+5px)]" /> */}
        </div>
      </div>
      <HomeBlogsComponent />
      <HomeProjectsComponent />
      <HomeSkillsComponent />
      <HomeLifeLogAndUpdates />
      <HireMeAsFreeLancerComponent />
    </motion.section>
  );
};

export default page;
