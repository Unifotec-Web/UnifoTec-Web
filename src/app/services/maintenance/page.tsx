"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem, scaleIn } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  LifeBuoy,
  ShieldCheck,
  CheckCircle,
  Clock,
  Zap,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  HardDrive,
  Bug,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function MaintenanceDetailPage() {
  const keyFeatures = [
    {
      title: "Proactive Security Patching",
      desc: "Regular updates to core frameworks and dependencies to mitigate zero-day vulnerabilities and maintain compliance.",
      icon: ShieldAlert,
    },
    {
      title: "Monitoring Options",
      desc: "Continuous health checks and instant alerting systems to ensure your application is always available to users.",
      icon: Clock,
    },
    {
      title: "Performance Optimization",
      desc: "Regular audits of database queries, asset delivery, and server response times to maintain a snappy user experience.",
      icon: BarChart3,
    },
    {
      title: "Managed Backups & Recovery",
      desc: "Backup and restoration approaches can be planned around the project&apos;s data and operating needs.",
      icon: HardDrive,
    },
  ];

  const useCases = [
    {
      title: "SaaS Platform Continuity",
      desc: "Maintenance options for multi-tenant applications can be defined in an agreed support scope.",
    },
    {
      title: "Corporate Portal Security",
      desc: "Ongoing maintenance for high-traffic corporate websites protecting sensitive brand assets and data.",
    },
    {
      title: "Legacy System Stabilization",
      desc: "Gradual modernization and bug fixing for older systems to extend their operational lifespan and security.",
    },
  ];

  const techStack = [
    { name: "Sentry", desc: "Real-time error tracking and performance monitoring platform.", category: "Monitoring" },
    { name: "New Relic", desc: "Full-stack observability for servers and application code.", category: "Observability" },
    { name: "GitHub Actions", desc: "Automated CI/CD pipelines for secure and verified deployments.", category: "DevOps" },
    { name: "Prometheus", desc: "Open-source monitoring system and time series database.", category: "Metrics" },
    { name: "AWS Backup", desc: "Scalable and secure data backup across cloud regions.", category: "Cloud" },
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
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 mb-4 inline-block">
                Continuity Tier
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                Application <br />
                <span className="text-primary">Maintenance & Support</span>
              </h1>
              <p className="text-grey text-lg font-medium leading-relaxed max-w-xl">
                We safeguard your digital assets with rigorous monitoring, rapid bug resolution, and proactive security updates.
              </p>
            </MDiv>
            <MDiv variants={scaleIn} initial="hidden" animate="visible" className="lg:w-2/5 w-full bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Plan maintenance?</h3>
              <p className="text-slate-400 text-sm font-medium mb-6">Let&apos;s discuss a maintenance plan suited to your platform and team.</p>
              <Link href="/contact" className="w-full bg-primary hover:bg-primary-dark text-white text-center block font-bold text-sm py-3 rounded-lg shadow-lg shadow-primary/20 transition-all">
                Get Support Roadmap
              </Link>
            </MDiv>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Support Standards</h2>
            <h3 className="text-3xl font-bold text-dark">Key Maintenance Features</h3>
          </div>

          <MDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <MDiv key={i} variants={staggerItem} className="flex gap-4 p-6 bg-light rounded-xl border border-gray-100 group hover:bg-white hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-primary/5 text-primary rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
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
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Deployments</h2>
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
                  <span>Managed support</span>
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
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">The Stack</h2>
            <h3 className="text-3xl font-bold text-dark">Technologies We Use</h3>
            <p className="text-grey text-sm max-w-md mx-auto mt-2">
              We can discuss observability tools and maintenance practices for your platform.
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
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">{tech.category}</span>
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
