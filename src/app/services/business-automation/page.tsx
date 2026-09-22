"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem, scaleIn } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  CheckCircle,
  Cpu,
  Workflow,
  ArrowRight,
  Bot,
  Database,
  Layers,
  Repeat,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function BusinessAutomationDetailPage() {
  const keyFeatures = [
    {
      title: "Intelligent Workflow Triggers",
      desc: "Event-driven automation that responds instantly to customer actions, system alerts, or scheduled intervals.",
      icon: Zap,
    },
    {
      title: "Custom AI Agent Integration",
      desc: "Deployment of specialized AI agents that handle repetitive customer inquiries, data entry, and lead qualification.",
      icon: Bot,
    },
    {
      title: "Cross-Platform Data Sync",
      desc: "Eliminate data silos with automated synchronization across your CRM, ERP, and marketing platforms.",
      icon: Repeat,
    },
    {
      title: "Predictive Analytics Engine",
      desc: "Leverage machine learning to forecast trends and trigger proactive business adjustments automatically.",
      icon: Cpu,
    },
  ];

  const useCases = [
    {
      title: "Automated Lead Funnels",
      desc: "Instant lead capture, scoring, and nurture sequences that move prospects through your pipeline with zero manual input.",
    },
    {
      title: "Inventory & Supply Chain",
      desc: "Smart reordering systems that trigger based on real-time sales velocity and warehouse stock levels.",
    },
    {
      title: "HR & Onboarding Workflows",
      desc: "Streamlined employee onboarding including automated document generation, access provisioning, and training schedules.",
    },
  ];

  const techStack = [
    { name: "Python / AI", desc: "Core language for data processing and machine learning automation.", category: "AI" },
    { name: "n8n / Zapier", desc: "Low-code and custom-coded workflow orchestration platforms.", category: "Workflows" },
    { name: "Node.js", desc: "Scalable runtime for custom automation scripts and microservices.", category: "Scripts" },
    { name: "OpenAI API", desc: "Advanced language models for intelligent text processing and agents.", category: "AI Core" },
    { name: "Docker", desc: "Isolated environments for reliable execution of automation bots.", category: "DevOps" },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-dark to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#005FFF_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <MDiv variants={staggerContainer} initial="hidden" animate="visible" className="lg:w-3/5">
              <span className="text-accent font-bold text-xs uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-4 inline-block">
                Efficiency Tier
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                Intelligent <br />
                <span className="text-accent">Business Automation</span>
              </h1>
              <p className="text-grey text-lg font-medium leading-relaxed max-w-xl">
                We eliminate manual overhead and human error by engineering autonomous systems that handle your repetitive tasks.
              </p>
            </MDiv>
            <MDiv variants={scaleIn} initial="hidden" animate="visible" className="lg:w-2/5 w-full bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-emerald-500/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scale your output?</h3>
              <p className="text-slate-400 text-sm font-medium mb-6">Let&apos;s discuss an automation roadmap for your team&apos;s workflow needs.</p>
              <Link href="/contact" className="w-full bg-accent hover:bg-emerald-600 text-white text-center block font-bold text-sm py-3 rounded-lg shadow-lg shadow-accent/20 transition-all">
                Audit My Workflows
              </Link>
            </MDiv>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Efficiency Standards</h2>
            <h3 className="text-3xl font-bold text-dark">Key Automation Features</h3>
          </div>

          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <MDiv key={i} variants={staggerItem} className="flex gap-4 p-6 bg-light rounded-xl border border-gray-100 group hover:bg-white hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-emerald-500/5 text-accent rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base mb-1.5">{feat.title}</h4>
                    <p className="text-grey text-xs font-medium leading-relaxed">{feat.desc}</p>
                  </div>
                </MDiv>
              );
            })}
          </MDiv>
        </div>
      </MotionSection>

      {/* Popular Use Cases */}
      <MotionSection className="py-20 bg-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Deployments</h2>
            <h3 className="text-3xl font-bold text-dark">Popular Use Cases</h3>
          </div>

          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <MDiv
                key={i}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-xl border border-gray-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 bg-emerald-50 rounded-full flex items-center justify-center text-accent mb-4 font-bold text-xs">
                    0{i + 1}
                  </div>
                  <h4 className="text-lg font-bold text-dark mb-3">{useCase.title}</h4>
                  <p className="text-grey text-sm font-medium leading-relaxed mb-6">{useCase.desc}</p>
                </div>
                <div className="flex items-center text-xs font-bold text-accent uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Workflow support</span>
                </div>
              </MDiv>
            ))}
          </MDiv>
        </div>
      </MotionSection>

      {/* Technologies We Use */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">The Stack</h2>
            <h3 className="text-3xl font-bold text-dark">Technologies We Use</h3>
            <p className="text-grey text-sm max-w-md mx-auto mt-2">
              We can discuss suitable automation tools and scripting for your operational needs.
            </p>
          </div>

          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {techStack.map((tech, i) => (
              <MDiv
                key={i}
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
                className="bg-light p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-sm mb-4 shadow-md shadow-slate-900/10">
                  {tech.name.charAt(0)}
                </div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">{tech.category}</span>
                <h4 className="font-bold text-dark text-sm mb-2">{tech.name}</h4>
                <p className="text-grey text-[11px] font-medium leading-normal">{tech.desc}</p>
              </MDiv>
            ))}
          </MDiv>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
