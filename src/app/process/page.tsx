"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  Search,
  Layout,
  Code2,
  TestTube2,
  Rocket,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function ProcessPage() {
  const steps = [
    {
      title: "Discovery & Strategy",
      desc: "Deep-dive technical audits and business requirement gathering to define a clear project roadmap.",
      icon: Search,
      tags: ["Audit", "Planning", "Backlog"],
    },
    {
      title: "UI/UX & Prototyping",
      desc: "Interactive high-fidelity prototypes and design systems focused on modern aesthetics and usability.",
      icon: Layout,
      tags: ["Figma", "Prototypes", "UX Research"],
    },
    {
      title: "Agile Development",
      desc: "Clean, documented code written in iterative sprints with continuous stakeholder feedback loops.",
      icon: Code2,
      tags: ["Next.js", "Sprint Cycles", "CI/CD"],
    },
    {
      title: "Rigorous QA Testing",
      desc: "Comprehensive automated and manual testing ensuring zero-bug production environments.",
      icon: TestTube2,
      tags: ["Unit Tests", "E2E", "Stress Testing"],
    },
    {
      title: "Deployment & Launch",
      desc: "Seamless rollout to production cloud environments with zero downtime migration strategies.",
      icon: Rocket,
      tags: ["Cloud Rollout", "SSL", "DNS Config"],
    },
    {
      title: "Maintenance & Scale",
      desc: "Maintenance, monitoring, and improvement options discussed for the needs of your platform.",
      icon: Wrench,
      tags: ["Support", "Monitoring", "Optimization"],
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-dark to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="text-accent font-bold text-xs uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-4 inline-block">
              How We Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              A Transparent, Agile <br />Engineering Workflow
            </h1>
            <p className="text-grey text-lg max-w-2xl mx-auto font-medium">
              We leverage modern Agile methodologies to ensure your project stays on track, within budget, and meets the highest technical standards.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Process Steps */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MDiv variants={staggerContainer} className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <MDiv
                  key={i}
                  variants={staggerItem}
                  className="flex flex-col lg:flex-row items-center gap-12 group"
                >
                  <div className={`lg:w-1/2 flex items-center gap-8 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                    <div className="hidden md:flex shrink-0 w-20 h-20 bg-primary/5 rounded-2xl items-center justify-center text-primary font-black text-4xl group-hover:bg-primary group-hover:text-white transition-all">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-dark mb-4 flex items-center gap-3">
                        <Icon className="w-6 h-6 text-primary md:hidden" />
                        {step.title}
                      </h3>
                      <p className="text-grey text-base font-medium leading-relaxed mb-6">
                        {step.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag, idx) => (
                          <span key={idx} className="bg-light text-grey text-[10px] font-bold px-3 py-1 rounded-full border border-gray-100 uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full aspect-video bg-light rounded-2xl border border-gray-100 overflow-hidden relative shadow-inner">
                     {/* Decorative background for the 'image' placeholder */}
                     <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
                     <div className="flex items-center justify-center h-full">
                        <Icon className="w-20 h-20 text-gray-200/50" />
                     </div>
                     <div className="absolute bottom-6 right-6">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-accent">
                           <CheckCircle className="w-6 h-6" />
                        </div>
                     </div>
                  </div>
                </MDiv>
              );
            })}
          </MDiv>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="py-20 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to start the journey?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-medium">
              Book a technical discovery session today and let's turn your vision into a production-ready digital asset.
            </p>
            <Link href="/contact" className="bg-white text-primary px-8 py-3.5 rounded-xl font-bold transition-all shadow-xl hover:bg-slate-50 inline-block">
              Begin Technical Discovery
            </Link>
          </FadeUp>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
