"use client";
import { iconAltMapping } from "@/constants/mySkills";
import IconCard from "./ui/IconCard";
import { motion } from "framer-motion";
const HomeSkillsComponent = () => {
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
      className="w-full mt-5"
    >
      <h2 className="text-3xl font-semibold">My Skills</h2>
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(50px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        className="w-full mt-5 flex flex-wrap gap-2"
      >
        {iconAltMapping.map((icon, index) => (
          <IconCard key={index} Icon={icon.icon} alt={icon.alt} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HomeSkillsComponent;
