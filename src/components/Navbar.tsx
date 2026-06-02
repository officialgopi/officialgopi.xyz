"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Terminal } from "lucide-react"; // Updated icon set imports
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/themeStore";

export default function Navbar() {
  const { toggleTheme } = useThemeStore();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links = [
    { title: "Home", href: "/" },
    { title: "Blogs", href: "/blogs" },
    { title: "Projects", href: "/projects" },
    { title: "Resume", href: "/resume.pdf" },
  ];

  const checkIsActive = (link: string): boolean => {
    if (link === "/") return pathname === link;
    return pathname.startsWith(link);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-5 left-0 right-0 w-full flex justify-center z-50 px-4 select-none pointer-events-none">
      <header className="w-full max-w-2xl bg-white/70 dark:bg-[#0a0a0b]/75 backdrop-blur-md border border-neutral-200/60 dark:border-neutral-800/50 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.35)] transition-all duration-300 relative pointer-events-auto">
        <nav className="flex items-center justify-between w-full h-12 pl-4 pr-1.5">
          {/* Identity Tag Segment */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-tight text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity outline-none"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 text-neutral-500 dark:text-neutral-400">
              <Terminal size={11} strokeWidth={2.5} />
            </div>
            <div className="flex items-center gap-1">
              <span>G.M</span>
              <span className="text-neutral-300 dark:text-neutral-700 font-normal">
                /
              </span>
              <span className="text-neutral-400 dark:text-neutral-500 font-normal">
                sys
              </span>
            </div>
          </Link>

          {/* Desktop Links Navigation Cloud */}
          <div className="hidden sm:flex items-center gap-0.5 relative h-full py-1.5">
            {links.map((link) => {
              const isActive = checkIsActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-1 text-[11px] font-bold tracking-wide rounded-lg relative transition-all duration-200 outline-none",
                    isActive
                      ? "text-neutral-950 dark:text-white"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200",
                  )}
                >
                  <span className="relative z-20">{link.title}</span>

                  {/* Fluid active route layout capsule background track */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/10 dark:border-neutral-800/30 rounded-lg z-10 shadow-3xs"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Control Utility Core Trigger Interface */}
          <div className="flex items-center gap-1">
            {/* Smooth Spring Theme Toggler */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              title="Toggle Workspace Theme"
              className="cursor-pointer flex items-center justify-center w-8 h-8 rounded-xl text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/50 dark:hover:bg-neutral-900/40 transition-all duration-200 outline-none"
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <span className="absolute transform transition-all duration-300 ease-out flex dark:hidden dark:rotate-90 dark:scale-0">
                  <Sun size={15} strokeWidth={2.5} />
                </span>
                <span className="absolute transform transition-all duration-300 ease-out hidden dark:flex -rotate-90 scale-0 dark:rotate-0 dark:scale-100">
                  <Moon size={15} strokeWidth={2.5} />
                </span>
              </div>
            </motion.button>

            {/* Mobile Adaptive Hamburger Matrix Button Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu Feed"
              className="flex sm:hidden w-8 h-8 rounded-xl items-center justify-center flex-col gap-1.5 cursor-pointer hover:bg-neutral-100/50 dark:hover:bg-neutral-900/40 transition-colors outline-none"
            >
              <div
                className={cn(
                  "h-[1.2px] bg-neutral-600 dark:bg-neutral-300 transition-all duration-200 rounded-full origin-center",
                  isOpen ? "w-3.5 rotate-45 translate-y-[2.4px]" : "w-3.5",
                )}
              />
              <div
                className={cn(
                  "h-[1.2px] bg-neutral-600 dark:bg-neutral-300 transition-all duration-200 rounded-full origin-center",
                  isOpen
                    ? "w-3.5 -rotate-45 -translate-y-[2.4px]"
                    : "w-2.5 ml-1",
                )}
              />
            </button>
          </div>
        </nav>

        {/* Dropdown Mobile Display Framework menu overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute top-[calc(100%+6px)] left-0 right-0 w-full z-50 bg-white/95 dark:bg-[#0a0a0b]/95 border border-neutral-200/80 dark:border-neutral-800/70 rounded-2xl p-1.5 shadow-xl backdrop-blur-xl flex flex-col items-stretch overflow-hidden"
            >
              {links.map((link, idx) => {
                const isActive = checkIsActive(link.href);

                return (
                  <Link
                    key={idx}
                    href={link.href}
                    className={cn(
                      "cursor-pointer w-full py-2.5 px-3.5 text-xs font-bold tracking-wide rounded-xl transition-all duration-150 flex items-center justify-between group outline-none",
                      isActive
                        ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-950 dark:text-white"
                        : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 hover:text-neutral-950 dark:hover:text-white",
                    )}
                  >
                    <span>{link.title}</span>
                    <span className="opacity-0 group-hover:opacity-40 transition-opacity text-[9px] font-mono font-bold tracking-widest uppercase">
                      // router_go
                    </span>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
