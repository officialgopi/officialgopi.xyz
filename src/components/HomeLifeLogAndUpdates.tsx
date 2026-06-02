"use client";

import React, { useMemo } from "react";
import { changelog } from "@/constants/lifeLog";
import { motion } from "framer-motion";

export default function HomeLifeLogAndUpdates() {
  // Memoize the sorted keys computation block to protect main-thread render passes
  const sortedYears = useMemo(() => {
    return Object.keys(changelog).sort((a, b) => Number(b) - Number(a));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="w-full mt-4 flex flex-col"
    >
      {/* Structural System Core Header Row */}
      <h2 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-100 mb-8">
        Life Changelog & Updates
      </h2>

      <div className="space-y-10 w-full">
        {sortedYears.map((year, yearIndex) => (
          <div
            key={year}
            className="relative w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
          >
            {/* Left Year Label Indicator Segment Column */}
            <div className="md:col-span-2 sticky top-24">
              <h3 className="text-sm font-mono font-black tracking-wider text-neutral-400 dark:text-neutral-600 uppercase md:pt-1">
                // {year}
              </h3>
            </div>

            {/* Right Active Timeline Flow Segment List Column */}
            <div className="md:col-span-10 relative border-l border-neutral-200/80 dark:border-neutral-800/60 pl-5 sm:pl-6 space-y-8.5">
              {/* FIXED: Created a shallow copy block [...] before invoking .reverse() 
                  to stop unstable array mutations inside the render framework engine loop */}
              {[...changelog[year]].reverse().map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 24,
                    delay: Math.min(i * 0.04, 0.2), // Dampened execution caps to shield performance
                  }}
                  className="relative group flex flex-col gap-1 w-full text-left"
                >
                  {/* Embedded Geometric Timeline Node Bullet Point Link */}
                  <div className="absolute -left-[24.5px] sm:-left-[28.5px] top-1.5 w-2 h-2 rounded-full border border-neutral-350 bg-white dark:border-neutral-700 dark:bg-[#0a0a0b] group-hover:bg-neutral-950 dark:group-hover:bg-white transition-colors duration-200" />

                  {/* Log Headline Meta String */}
                  <h4 className="text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                    {item.icon && (
                      <span className="text-base select-none shrink-0">
                        {item.icon}
                      </span>
                    )}
                    <span>{item.title}</span>
                  </h4>

                  {/* Context Content Log Block */}
                  <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-normal max-w-2xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
