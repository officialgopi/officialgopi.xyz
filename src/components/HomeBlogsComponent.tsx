"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function HomeBlogsComponent() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const response = await fetch("/api/blogs/recent");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data.slice(0, 3));
        }
      } catch (error) {
        // Suppressed internal telemetries
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, []);

  // 1. Structured Layout-Safe Loading Skeleton Matrix
  if (loading) {
    return (
      <div className="w-full mt-4 flex flex-col">
        <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded-md w-32 mb-6 animate-pulse" />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-neutral-200/60 dark:border-neutral-800/60 rounded-2xl p-5 space-y-3.5 bg-neutral-50/20 dark:bg-[#0a0a0b]/10 animate-pulse"
            >
              <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-1/3" />
              <div className="space-y-2">
                <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-11/12" />
                <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4" />
              </div>
              <div className="space-y-1.5 pt-2">
                <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-full" />
                <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (blogs.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="w-full mt-4 flex flex-col"
    >
      {/* Updated Header Component Row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-100">
          Recent Blogs & Articles
        </h2>

        <Link
          href="/blogs"
          className="flex items-center gap-1 text-xs font-bold text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200 group outline-none"
        >
          <span>View all blogs</span>
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform duration-200 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-white"
          />
        </Link>
      </div>

      {/* High-Density Responsive Technical Articles Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {blogs.map((blog) => (
          <motion.article
            key={blog.slug}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-50/40 to-transparent dark:from-[#0a0a0b]/40 dark:to-transparent border border-neutral-200/70 dark:border-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300 shadow-3xs"
          >
            <Link
              href={`/blogs/${blog.slug}`}
              className="block p-5 h-full outline-none"
            >
              <div className="flex flex-col h-full justify-between gap-4.5 text-left">
                <div className="space-y-2">
                  {/* Monospace System Timestamp Prefix */}
                  <div className="text-[10px] font-mono font-bold tracking-wide text-neutral-400 dark:text-neutral-600">
                    // {blog.date}
                  </div>

                  <h3 className="text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-200 line-clamp-2">
                    {blog.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-normal line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
