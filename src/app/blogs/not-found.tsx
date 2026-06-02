"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react"; // Swapped out tabler icons for matching lucide set

export default function BlogNotFound() {
  return (
    <div className="w-full min-h-[55vh] flex flex-col items-center justify-center text-center select-none">
      <div className="flex flex-col items-center gap-6 max-w-sm px-4">
        {/* 1. High-Density System Diagnostic Error Frame Badge */}
        <div className="w-14 h-14 rounded-2xl bg-neutral-50 dark:bg-[#0a0a0b] border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 dark:text-neutral-500 shadow-3xs">
          <FileQuestion size={22} strokeWidth={2} className="animate-pulse" />
        </div>

        {/* 2. Page Typography Copy Metadata Context */}
        <div className="space-y-2">
          {/* Custom Asymmetric System Status Code */}
          <span className="text-[10px] font-mono font-black tracking-widest text-red-500 dark:text-red-400 uppercase">
            ERR // 404_FILE_NOT_FOUND
          </span>
          <h1 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
            Blog Post Not Found
          </h1>
          <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-normal">
            The technical document or route query requested does not exist in
            the active directory schema index.
          </p>
        </div>

        {/* 3. Hardware-Accelerated Return Route Anchor Channel */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200 group outline-none pt-2"
        >
          <ArrowLeft
            size={13}
            className="group-hover:-translate-x-0.5 transition-transform duration-200 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-white"
          />
          <span>Back to all blogs</span>
        </Link>
      </div>
    </div>
  );
}
