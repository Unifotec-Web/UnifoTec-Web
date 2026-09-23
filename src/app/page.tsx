"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import About from "@/components/About";
import Team from "@/components/Team";
import WorkProcess from "@/components/WorkProcess";
import Sectors from "@/components/Sectors";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <WhyChoose />
      <About />
      <Team />
      <WorkProcess />
      <Sectors />
      <CTA />
      <Footer />
    </motion.main>
  );
}
