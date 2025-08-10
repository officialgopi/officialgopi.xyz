"use client";

import { changelog } from "@/constants/lifeLog";
import { motion } from "framer-motion";

export default function HomeLifeLogAndUpdates() {
  const sortedYears = Object.keys(changelog).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(50px)",
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      className="w-full mt-5 "
    >
      <h2 className="text-3xl font-bold mb-6">Life Changelog and Updates</h2>

      {sortedYears.map((year, yearIndex) => (
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(50px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          key={year}
        >
          <h3 className="text-xl font-semibold  mb-4">{year}</h3>
          <div className="space-y-6">
            {changelog[year].map((item, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  filter: "blur(50px)",
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-neutral-700 pl-4"
              >
                <h4 className="text-neutral-900 dark:text-white font-medium flex items-center gap-2">
                  <span className="p-1">{item.icon}</span>
                  <span>{item.title}</span>
                </h4>
                <p className="text-neutral-960 dark:text-neutral-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Separator between years */}
          {yearIndex !== sortedYears.length - 1 && (
            <div className="border-t border-neutral-800 my-8" />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
