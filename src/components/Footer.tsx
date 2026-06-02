"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";

export default function Footer() {
  const [timestamp, setTimestamp] = useState("00:00:00 UTC");

  useEffect(() => {
    // Generate a clean ISO timestamp string mapping to standard UTC intervals
    const updateTime = () => {
      const now = new Date();
      setTimestamp(`${now.toISOString().slice(11, 19)} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const internalLinks = [
    { name: "home", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "resume", href: "/resume.pdf" },
  ];

  const socialLinks = [
    { name: "github", href: "https://github.com/officialgopi" },
    { name: "linkedin", href: "https://linkedin.com/in/gopikanta-mondal" },
    { name: "twitter", href: "https://twitter.com/devofficialgopi" },
  ];

  return (
    <footer className="w-full relative mt-16 pt-8 pb-6 border-t border-dashed border-neutral-200 dark:border-neutral-800/80 select-none text-left font-mono">
      {/* 1. Terminal Manifest Grid Node */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-6 relative z-10 text-[11px] leading-relaxed">
        {/* Left Column: Internal System Index Struct */}
        <div className="sm:col-span-4 flex flex-col gap-1 text-neutral-400 dark:text-neutral-500">
          <span className="font-bold text-neutral-900 dark:text-neutral-300 flex items-center gap-1.5 mb-1">
            <Terminal size={12} className="text-neutral-400" />
            const navigation = [
          </span>

          <div className="pl-4 space-y-1">
            {internalLinks.map((link, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="text-neutral-300 dark:text-neutral-700">
                  {" "}
                  &quot;
                </span>
                <Link
                  href={link.href}
                  className="font-bold text-neutral-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors outline-none"
                >
                  {link.name}
                </Link>
                <span className="text-neutral-300 dark:text-neutral-700">
                  &quot;{i < internalLinks.length - 1 ? "," : ""}
                </span>
              </div>
            ))}
          </div>
          <span className="font-bold text-neutral-900 dark:text-neutral-300 mt-1">
            ];
          </span>
        </div>

        {/* Center Column: Social Outbound Index Struct */}
        <div className="sm:col-span-4 flex flex-col gap-1 text-neutral-400 dark:text-neutral-500">
          <span className="font-bold text-neutral-900 dark:text-neutral-300 flex items-center gap-1.5 mb-1">
            <Terminal size={12} className="text-neutral-400" />
            const network_graph = [
          </span>

          <div className="pl-4 space-y-1">
            {socialLinks.map((link, i) => (
              <div key={i} className="flex items-center gap-1.5 group">
                <span className="text-neutral-300 dark:text-neutral-700">
                  {" "}
                  &quot;
                </span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-neutral-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-0.5 outline-none"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight
                    size={10}
                    className="text-neutral-300 dark:text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
                <span className="text-neutral-300 dark:text-neutral-700">
                  &quot;{i < socialLinks.length - 1 ? "," : ""}
                </span>
              </div>
            ))}
          </div>
          <span className="font-bold text-neutral-900 dark:text-neutral-300 mt-1">
            ];
          </span>
        </div>

        {/* Right Column: Platform Inspiration Credit Metadata */}
        <div className="sm:col-span-4 flex flex-col gap-1 text-neutral-400 dark:text-neutral-600 sm:text-right sm:items-end">
          <span className="font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider text-[10px] mb-1">
            // architecture_ref
          </span>
          <p className="max-w-xs text-neutral-400 dark:text-neutral-500 font-medium">
            Core layout layout design engineered with performance tokens.
            Aesthetic reference inspiration via{" "}
            <a
              href="https://manuarora.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white underline underline-offset-2 transition-colors outline-none"
            >
              Manu Arora
            </a>
            .
          </p>
        </div>
      </div>

      {/* 2. Sub-Pixel Baseline Data Pipeline Bar */}
      <div className="w-full mt-10 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-[10px] text-neutral-400 dark:text-neutral-500 font-bold tracking-wide">
        {/* Core Identity Stream */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-neutral-900 dark:text-neutral-300 uppercase tracking-wider text-[9px]">
            G.Mondal // sys_ok
          </span>
          <span className="text-neutral-200 dark:text-neutral-800">|</span>
          <span className="font-normal text-neutral-400 dark:text-neutral-600">
            v2.0.26_stable
          </span>
        </div>

        {/* Time-Tracking Telemetry Stream */}
        <div className="flex items-center gap-2 sm:justify-end text-neutral-400 dark:text-neutral-600 font-normal">
          <span>LOC: WB_IN</span>
          <span className="text-neutral-200 dark:text-neutral-800">/</span>
          <span className="font-mono text-neutral-500 dark:text-neutral-500 font-bold">
            {timestamp}
          </span>
        </div>
      </div>
    </footer>
  );
}
