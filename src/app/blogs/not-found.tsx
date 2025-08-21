import Link from "next/link";
import { IconArrowLeft, IconFileInfo } from "@tabler/icons-react";

export default function BlogNotFound() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center gap-6 max-w-md">
        <div className="w-20 h-20 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center">
          <IconFileInfo
            size={40}
            className="text-neutral-600 dark:text-neutral-400"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Blog Post Not Found
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Sorry, the blog post you're looking for doesn't exist or has been
            moved.
          </p>
        </div>

        <Link
          href="/blogs"
          className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300 group"
        >
          <IconArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span>Back to all blogs</span>
        </Link>
      </div>
    </div>
  );
}
