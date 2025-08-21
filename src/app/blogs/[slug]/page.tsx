import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { IconCalendar, IconClock, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { Metadata } from "next";

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
    <article className="w-full relative z-0">
      <div className="flex flex-col items-start gap-6">
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300 group"
        >
          <IconArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span>Back to blogs</span>
        </Link>

        <header className="w-full">
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            <div className="flex items-center gap-1">
              <IconCalendar size={16} />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <IconClock size={16} />
              <span>{blog.readingTime} min read</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {blog.excerpt}
            </p>
          )}
        </header>

        <div
          className="w-full prose prose-neutral dark:prose-invert "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </article>
  );
}
