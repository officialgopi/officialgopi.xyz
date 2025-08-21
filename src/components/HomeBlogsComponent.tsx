"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function HomeBlogsComponent() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const response = await fetch("/api/blogs/recent");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data.slice(0, 3)); // Show only 3 recent blogs
        }
      } catch (error) {
        // console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, []);

  if (loading) {
    return (
      <div className="w-full mt-20">
        <h2 className="text-3xl font-semibold mb-6">Recent Blogs</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  return (
    <div className="w-full mt-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">Recent Blogs</h2>
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">View all</span>
          <IconArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <article
            key={blog.slug}
            className="group border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300"
          >
            <Link href={`/blogs/${blog.slug}`} className="block">
              <div className="flex flex-col gap-3">
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {blog.date}
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
