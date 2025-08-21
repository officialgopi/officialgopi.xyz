import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: number;
}

const blogsDirectory = path.join(process.cwd(), "src/blogs");

export async function getAllBlogs(): Promise<BlogPost[]> {
  // Check if blogs directory exists
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString().split("T")[0],
        excerpt: data.excerpt || content.slice(0, 150) + "...",
        content: content,
        readingTime: Math.ceil(content.split(" ").length / 200), // Rough estimate: 200 words per minute
      };
    });

  // Sort posts by date
  return allPostsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const mdxPath = path.join(blogsDirectory, `${slug}.mdx`);

    let filePath: string;
    if (fs.existsSync(fullPath)) {
      filePath = fullPath;
    } else if (fs.existsSync(mdxPath)) {
      filePath = mdxPath;
    } else {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML with GFM support and syntax highlighting
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .use(rehypeHighlight)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || content.slice(0, 150) + "...",
      content: contentHtml,
      readingTime: Math.ceil(content.split(" ").length / 200),
    };
  } catch (error) {
    // console.error("Error reading blog post:", error);
    return null;
  }
}
