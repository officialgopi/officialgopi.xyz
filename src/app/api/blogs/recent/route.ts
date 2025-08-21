import { NextResponse } from "next/server";
import { getAllBlogs } from "@/lib/blogs";

export async function GET() {
  try {
    const blogs = await getAllBlogs();

    // Return only the metadata needed for the home page
    const recentBlogs = blogs.slice(0, 6).map((blog) => ({
      slug: blog.slug,
      title: blog.title,
      date: blog.date,
      excerpt: blog.excerpt,
    }));

    return NextResponse.json(recentBlogs);
  } catch (error) {
    // console.error("Error fetching recent blogs:", error);
    return NextResponse.json([], { status: 500 });
  }
}
