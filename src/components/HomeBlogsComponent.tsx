"use client";
import React, { useState } from "react";

export default function HomeBlogsComponent() {
  const [blogs, setBlogs] = useState<any[]>([]);
  return (
    blogs.length > 0 && (
      <div className="w-full mt-5">
        <h2 className="text-3xl font-semibold">Recent Blogs</h2>
      </div>
    )
  );
}
