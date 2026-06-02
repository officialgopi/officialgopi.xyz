import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Calendar, Clock } from "lucide-react"; // Swapped out tabler icons for uniform lucide set
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import BlogRenderer from "@/components/BlogRenderer";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${blog.title} | OfficialGopi Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="w-full relative z-0 select-none text-left">
      <div className="flex flex-col items-start gap-8 w-full">
        {/* 1. Asymmetric Return Route Anchor Pipeline */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200 group outline-none"
        >
          <ArrowLeft
            size={13}
            className="group-hover:-translate-x-0.5 transition-transform duration-200 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-white"
          />
          <span>Back to blogs</span>
        </Link>
        {/* 2. Structured Article Document Metadata Header Block */}
        <header className="w-full space-y-4">
          {/* Monospace System Telemetry Tracker */}
          <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-wider text-neutral-400 dark:text-neutral-600 uppercase">
            <div className="flex items-center gap-1">
              <Calendar
                size={12}
                className="text-neutral-300 dark:text-neutral-700"
              />
              <span>{blog.date}</span>
            </div>
            <span className="text-neutral-200 dark:text-neutral-800">\\</span>
            <div className="flex items-center gap-1">
              <Clock
                size={12}
                className="text-neutral-300 dark:text-neutral-700"
              />
              <span>{blog.readingTime} min_read</span>
            </div>
          </div>

          {/* Master Structural Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            {blog.title}
          </h1>

          {/* Context Executive Abstract Excerpt */}
          {blog.excerpt && (
            <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400 font-normal max-w-3xl pt-1">
              {blog.excerpt}
            </p>
          )}

          {/* Elegant Horizontal Rule Underlining Document Metadata */}
          <div className="w-full h-[1px] bg-neutral-100 dark:bg-neutral-900/60 pt-4" />
        </header>
        {/* 3. Sanitized HTML Render Output Viewport - Fluid Layout Containment */}

        <BlogRenderer htmlContent={blog.content} />
      </div>
    </article>
  );
}
