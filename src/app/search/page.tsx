"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ArrowRight,
  FileText,
  Briefcase,
  Settings,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = [
    { title: "Next.js 15 Implementation Guide", type: "Article", path: "/blog/nextjs-15-enterprise" },
    { title: "Mobile App Development Services", type: "Service", path: "/services/mobile-app" },
    { title: "Custom Software Solutions", type: "Service", path: "/services/custom-software" },
    { title: "Projects", type: "Project", path: "/projects" },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h1 className="text-3xl font-extrabold text-dark mb-8 tracking-tight">Search Knowledge Base</h1>
            <div className="relative group">
               <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full bg-light border border-gray-100 rounded-2xl px-6 py-5 pl-14 text-lg focus:outline-none focus:border-primary/50 font-medium shadow-sm group-hover:shadow-md transition-all"
               />
               <Search className="w-6 h-6 text-grey absolute left-6 top-1/2 -translate-y-1/2" />
               <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark text-white p-2.5 rounded-xl hover:bg-slate-800 transition-colors">
                  <Filter className="w-4 h-4" />
               </button>
            </div>
          </FadeUp>
        </div>
      </section>

      <MotionSection className="py-20 bg-light min-h-[400px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {query.length > 0 ? (
            <MDiv variants={staggerContainer} className="space-y-4">
              <h2 className="text-sm font-bold text-grey uppercase tracking-widest mb-6">Results for "{query}"</h2>
              {results.map((result, i) => (
                <MDiv key={i} variants={staggerItem} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <Link href={result.path} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                          {result.type === 'Article' && <FileText className="w-5 h-5" />}
                          {result.type === 'Service' && <Settings className="w-5 h-5" />}
                          {result.type === 'Project' && <Briefcase className="w-5 h-5" />}
                       </div>
                       <div>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-0.5">{result.type}</span>
                          <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">{result.title}</h3>
                       </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-grey group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </MDiv>
              ))}
            </MDiv>
          ) : (
            <div className="text-center py-20">
               <div className="w-20 h-20 bg-gray-200/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-300" />
               </div>
               <h3 className="text-xl font-bold text-gray-400">Enter a keyword to start searching...</h3>
            </div>
          )}
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
