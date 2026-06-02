import React from "react";
import { IconType } from "react-icons";

interface IconCardProps {
  Icon: IconType;
  alt: string;
}

export default function IconCard({ Icon, alt }: IconCardProps) {
  return (
    <div className="group inline-flex items-center gap-2 h-9 px-3 rounded-xl border border-neutral-200/70 dark:border-neutral-800/60 bg-white/50 dark:bg-[#0a0a0b]/40 hover:border-neutral-350 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-all duration-200 ease-out cursor-pointer shadow-3xs select-none">
      {/* Framework Icon Frame Asset */}
      <div className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-200 shrink-0">
        <Icon className="w-4 h-4" aria-hidden="true" />
      </div>

      {/* Framework Title Character String Label */}
      <span className="text-xs font-mono font-bold tracking-wide text-neutral-500 dark:text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-neutral-200 transition-colors duration-200">
        {alt}
      </span>
    </div>
  );
}
