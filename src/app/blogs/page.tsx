import { getAllBlogs } from "@/lib/blogs";
import Link from "next/link";
import { IconCalendar, IconClock, IconArrowRight } from "@tabler/icons-react";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <section className="w-full relative z-0">
      <div className="flex flex-col items-start gap-6">
        <div>
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="md:pr-40 text-lg mt-2 text-neutral-700 dark:text-neutral-300">
            Thoughts on technology, development, and building things that
            matter.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="w-full text-center py-20">
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="w-full space-y-6">
            {blogs.map((blog, index) => (
              <article
                key={blog.slug}
                className="group border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300"
              >
                <Link href={`/blogs/${blog.slug}`} className="block">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                      <div className="flex items-center gap-1">
                        <IconCalendar size={16} />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IconClock size={16} />
                        <span>{blog.readingTime} min read</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                      {blog.title}
                    </h2>

                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-300">
                      <span className="text-sm font-medium">Read more</span>
                      <IconArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
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
