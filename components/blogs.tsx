import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description: "A deep dive into useState, useEffect, and custom hooks for better state management.",
    date: "March 5, 2026",
    link: "/blog/react-hooks"
  },
  {
    id: 2,
    title: "Next.js Best Practices",
    description: "Optimizing your Next.js application for performance and SEO.",
    date: "February 28, 2026",
    link: "/blog/nextjs-best-practices"
  },
  {
    id: 3,
    title: "Styling with Tailwind CSS",
    description: "Tips and tricks for efficient and scalable styling with Tailwind CSS.",
    date: "February 20, 2026",
    link: "/blog/tailwind-css-tips"
  }
];

const Blogs = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={post.link} key={post.id}>
            <div className="block border-2 border-border p-6 shadow-neo bg-background hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer h-full">
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-foreground/70 text-sm mb-4">{post.date}</p>
              <p className="text-foreground/80">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
