"use client";

import React from "react";
import { iconAltMapping } from "@/constants/mySkills";
import IconCard from "./ui/IconCard";
import { motion, Variants } from "framer-motion";

export default function HomeSkillsComponent() {
  // Stagger orchestration variant settings to animate chips gracefully one-by-one
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025, // Fluid millisecond cascade loop between chips
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 22 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="w-full mt-4"
    >
      {/* Structural Header Grid Accent */}
      <h2 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-100 mb-6">
        Technical Capabilities
      </h2>

      {/* Elastic Fluid Flex Skill Cloud Container */}
      <div className="w-full flex flex-wrap gap-2.5">
        {iconAltMapping.map((icon, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
          >
            <IconCard Icon={icon.icon} alt={icon.alt} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
