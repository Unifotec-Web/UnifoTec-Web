"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Next.js 15 in Enterprise Architectures",
      excerpt: "Exploring how the latest updates in Next.js 15 are revolutionizing server-side rendering and client-side performance for large-scale apps.",
      category: "Engineering",
      author: "Alex Muli",
      date: "Oct 24, 2024",
      readTime: "8 min read",
      slug: "nextjs-15-enterprise",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeUp>
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-4 inline-block">
              Tech Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Engineering Excellence <br />& Digital Strategy
            </h1>
            <p className="text-grey text-lg max-w-2xl font-medium">
              Explore our latest thoughts on software architecture, design systems, and the future of technology in business.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Content */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Blog Grid */}
            <div className="lg:w-2/3">
              <MDiv variants={staggerContainer} className="space-y-12">
                {posts.map((post, i) => (
                  <MDiv key={i} variants={staggerItem} className="group border-b border-gray-100 pb-12 last:border-0">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-50 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-grey text-xs font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-grey text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="block group">
                      <h2 className="text-2xl md:text-3xl font-extrabold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-grey text-base font-medium leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-light rounded-full flex items-center justify-center border border-gray-100">
                          <User className="w-4 h-4 text-grey" />
                        </div>
                        <span className="text-xs font-bold text-dark">{post.author}</span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </MDiv>
                ))}
              </MDiv>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Search */}
              <div className="bg-light p-8 rounded-3xl border border-gray-100">
                <h3 className="text-lg font-bold text-dark mb-6">Search Articles</h3>
                <div className="relative">
                  <input type="text" placeholder="Keywords..." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pl-12 text-sm focus:outline-none focus:border-primary/50 font-medium shadow-sm" />
                  <Search className="w-4 h-4 text-grey absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-light p-8 rounded-3xl border border-gray-100">
                <h3 className="text-lg font-bold text-dark mb-6">Categories</h3>
                <div className="space-y-3">
                  {["Engineering", "Design", "FinTech", "AI", "Cloud Infra", "Strategy"].map((cat) => (
                    <button key={cat} className="w-full flex justify-between items-center text-sm font-bold text-grey hover:text-primary transition-colors py-2 group">
                      <span>{cat}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
                 <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                 <p className="text-white/80 text-sm font-medium mb-6">Get our monthly digest of tech insights and engineering excellence.</p>
                 <form className="space-y-4">
                    <input type="email" placeholder="Email address" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white/20 placeholder:text-white/40 font-medium" />
                    <button className="w-full bg-white text-primary font-bold py-3 rounded-xl shadow-lg transition-all hover:bg-slate-50">
                       Subscribe Now
                    </button>
                 </form>
              </div>
            </aside>

          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
