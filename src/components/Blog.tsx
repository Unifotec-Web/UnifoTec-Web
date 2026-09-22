"use client";

import React from 'react';
import { Blog7 } from "@/components/blocks/blog7";

const Blog = () => {
  const posts = [];

  return (
    <div id="blog">
      <Blog7
        tagline="LATEST NEWS & INSIGHTS"
        heading="Tips, updates and insights from the world of technology."
        description="Stay updated with our expert analysis on modern software engineering, mobile ecosystems, and enterprise digital strategy."
        buttonText="View All News"
        buttonUrl="/blog"
        posts={posts}
      />
    </div>
  );
};

export default Blog;
