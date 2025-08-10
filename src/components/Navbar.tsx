"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useThemeStore } from "@/store/themeStore";
export default function Navbar() {
  const { toggleTheme } = useThemeStore();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Resume",
      href: "/resume.pdf",
    },
  ];

  const checkIsActive = (link: string): boolean => {
    if (link === "/") {
      return pathname === link;
    }
    return pathname.startsWith(link);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="h-[100px] w-full  flex items-center backdrop-blur-lg bg-white/50 dark:bg-neutral-950/50 sticky top-0 left-0   z-[100]">
      <nav className="flex items-center justify-between w-full h-[40px] px-2">
        <motion.button
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          className="cursor-pointer border px-2 py-1 border-neutral-500/50  rounded-4xl"
          onClick={() => {
            toggleTheme();
          }}
        >
          <motion.span
            whileInView={{ rotate: -360 }}
            className="text-neutral-600 flex dark:hidden"
          >
            <IconSun />
          </motion.span>
          <motion.span
            whileInView={{ rotate: 360 }}
            className="text-neutral-600 dark:flex hidden"
          >
            <IconMoon />
          </motion.span>
        </motion.button>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(50px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0)",
          }}
          className=" items-center justify-center  text-sm  border border-neutral-500/50 rounded-3xl h-full px-2 hidden sm:flex overflow-hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "cursor-pointer h-full px-2 py-2 relative font-medium hover:text-neutral-900 dark:hover:text-neutral-50  text-neutral-600 dark:text-neutral-400    transition duration-300 ease-in-out ",
                checkIsActive(link.href)
                  ? "text-neutral-950 dark:text-neutral-50  onNavlinkActiveBottomEffect"
                  : ""
              )}
            >
              {link.title}
            </Link>
          ))}
        </motion.div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" items-end justify-center  text-sm  border border-neutral-500/50 rounded-sm h-full px-2 flex sm:hidden w-[40px] flex-col gap-1 cursor-pointer "
        >
          <div
            className={cn(
              "py-px bg-neutral-700 dark:bg-neutral-100 transition-[width] duration-300  ",
              !isOpen ? "w-2/3" : "w-3/4"
            )}
          />
          <div
            className={cn(
              " py-px bg-neutral-700 dark:bg-neutral-100 transition-[width] duration-300  ",
              !isOpen ? "w-full" : "w-2/3"
            )}
          />
          <div
            className={cn(
              " py-px bg-neutral-700 dark:bg-neutral-100 transition-[width] duration-300  ",
              !isOpen ? "w-3/4" : "w-full"
            )}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
                filter: "blur(50px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -100,
                opacity: 0,
                filter: "blur(50px)",
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              className="absolute top-[100%] left-0 w-[90%] mx-[20] z-100 bg-white dark:bg-neutral-950  sm:hidden flex flex-col items-start  justify-center gap-4  border border-neutral-500/50 rounded-2xl py-3 px-4"
            >
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="cursor-pointer h-full  py-2 px-2 w-full   font-medium text-neutral-700 dark:text-neutral-400     ease-in-out group "
                >
                  <span className="transition duration-300 group-hover:translate-y-[-1px] group-hover:text-neutral-950 dark:group-hover:text-neutral-50">
                    {link.title}
                  </span>
                  {links.length - 1 !== idx && (
                    <div className="bg-neutral-500/50 dark:bg-neutral-500/50 h-px w-full mt-[16px]" />
                  )}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
