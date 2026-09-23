"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/motion/FadeUp";

export default function ProjectsPage() {
  return <main className="min-h-screen pt-20"><Navbar /><section className="bg-dark text-white py-24"><div className="max-w-4xl mx-auto px-4 text-center"><FadeUp><h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Projects</h1><p className="text-grey text-lg">Verified case studies will be added as they are approved for publication.</p></FadeUp></div></section><Footer /></main>;
}
