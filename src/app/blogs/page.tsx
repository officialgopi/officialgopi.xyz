import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react"; // Swapped out tabler icons for uniform lucide set
import { getAllBlogs } from "@/lib/blogs";
import Seperator from "@/components/Seperator";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <section className="w-full relative z-0 select-none">
      <div className="flex flex-col items-start gap-8 w-full">
        {/* Page Typography Header Area */}
        <div className="space-y-2 text-left">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">
            Blogs & Writings
          </h1>
          <p className="max-w-2xl text-base text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed">
            Thoughts on software engineering pipelines, modern web frameworks,
            architectural optimizations, and building products that scale.
          </p>
        </div>

        {/* Global Component Separator Break */}
        <Seperator topMarginInPx={0} bottomMarginInPx={8} label="INDEX_FEED" />

        {/* Conditional Layout Rendering Pass */}
        {blogs.length === 0 ? (
          <div className="w-full text-center py-24 border border-dashed border-neutral-200 dark:border-neutral-800/80 rounded-2xl bg-neutral-50/20 dark:bg-[#0a0a0b]/10">
            <p className="text-sm font-mono font-bold tracking-wide text-neutral-400 dark:text-neutral-500">
              // ERR: no_articles_found_in_directory
            </p>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-1">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="group relative overflow-hidden rounded-2xl border border-transparent hover:border-neutral-200/50 dark:hover:border-neutral-800/40 hover:bg-neutral-50/40 dark:hover:bg-[#0a0a0b]/30 p-5 sm:p-6 transition-all duration-300 w-full text-left"
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="block outline-none"
                >
                  <div className="flex flex-col gap-3.5">
                    {/* Monospace Metadata Telemetry Block */}
                    <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-wider text-neutral-400 dark:text-neutral-600 uppercase">
                      <div className="flex items-center gap-1">
                        <Calendar
                          size={12}
                          className="text-neutral-300 dark:text-neutral-700"
                        />
                        <span>{blog.date}</span>
                      </div>
                      <span className="text-neutral-200 dark:text-neutral-800">
                        \\
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock
                          size={12}
                          className="text-neutral-300 dark:text-neutral-700"
                        />
                        <span>{blog.readingTime} min_read</span>
                      </div>
                    </div>

                    {/* Blog Title Entry */}
                    <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-950 group-hover:dark:text-white transition-colors duration-200">
                      {blog.title}
                    </h2>

                    {/* Blog Short Excerpt Snip */}
                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 font-normal max-w-3xl">
                      {blog.excerpt}
                    </p>

                    {/* Context CTA Inbound Action Link Trigger */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-950 group-hover:dark:text-white transition-colors duration-200 pt-1">
                      <span>Read article</span>
                      <ArrowRight
                        size={13}
                        className="group-hover:translate-x-0.5 transition-transform duration-200 text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-950 group-hover:dark:text-white"
                      />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
