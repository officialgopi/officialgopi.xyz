"use client";

import Link from "next/link";

const footerLinks = [
  {
    title: "Column 1",
    links: [
      { name: "Home", href: "/" },
      // { name: "Blogs", href: "/blogs" },
      { name: "Projects", href: "/projects" },
      { name: "Resume", href: "/resume.pdf" },
    ],
  },
  {
    title: "Column 2",
    links: [
      { name: "GitHub", href: "https://github.com/officialgopi" },
      { name: "LinkedIn", href: "https://linkedin.com/in/gopikanta-mondal" },
      { name: "Twitter", href: "https://twitter.com/devofficialgopi" },
      { name: "Instagram", href: "https://instagram.com/gopikanta__mondal_" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative  border-neutral-800/50 pt-10  text-sm text-neutral-600 dark:text-neutral-400 overflow-hidden">
      {/* Watermark Background */}
      <span className="absolute left-0 bottom-0 flex justify-center items-center pointer-events-none select-none">
        <span className="text-[6rem] sm:text-[8rem]  font-bold tracking-widest text-neutral-800 dark:text-neutral-900 opacity-20 text-center">
          OFFICIALGOPI
        </span>
      </span>

      {/* Footer Content */}
      <div className="w-full grid justify-center items-center grid-cols-1 sm:grid-cols-2 gap-8 pl-10 relative z-10">
        {footerLinks.map((col, idx) => (
          <div
            key={idx}
            className="space-y-2 md:flex flex-col items-center text-left"
          >
            {col.links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors text-left w-[100px] block md:flex"
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="max-w-5xl mx-auto px-4 mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-neutral-500 text-xs relative z-10">
        <p>
          Find me on{" "}
          <Link
            href="https://x.com"
            className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
          >
            X
          </Link>{" "}
        </p>
        <p>
          Portfolio inspired by{" "}
          <Link
            href="https://manuarora.in"
            className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
          >
            Manu Arora
          </Link>
        </p>
      </div>
    </footer>
  );
}
