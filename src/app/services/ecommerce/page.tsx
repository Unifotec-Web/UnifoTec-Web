"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem, scaleIn } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Zap,
  ShieldCheck,
  Layout,
  CheckCircle,
  ChartBar,
  CreditCard,
  Truck,
  ArrowRight,
  Package,
} from "lucide-react";
import Link from "next/link";

const MDiv = motion.div;

export default function EcommerceDetailPage() {
  const keyFeatures = [
    {
      title: "Conversion-Optimized Checkout",
      desc: "Streamlined single-page checkout states engineered to minimize abandoned carts and maximize sales conversions.",
      icon: ShoppingCart,
    },
    {
      title: "Multi-Currency & Regional Support",
      desc: "Automated currency conversion and localized tax calculations for seamless global retail operations.",
      icon: GlobeIcon,
    },
    {
      title: "Advanced Inventory Management",
      desc: "Real-time SKU tracking, automated restock alerts, and multi-warehouse synchronization.",
      icon: Package,
    },
    {
      title: "Hardened Payment Gateways",
      desc: "PCI-compliant integrations for M-Pesa, Stripe, PayPal, and major credit card merchants.",
      icon: CreditCard,
    },
  ];

  const useCases = [
    {
      title: "B2C Fashion Retail",
      desc: "High-end visual storefronts for apparel brands with complex product variants and size guides.",
    },
    {
      title: "Multi-Vendor Marketplaces",
      desc: "Scalable platforms allowing multiple sellers to list, manage, and fulfill orders via a central dashboard.",
    },
    {
      title: "Digital Product Stores",
      desc: "Instant delivery systems for software, e-books, and media content with secure download links.",
    },
  ];

  const techStack = [
    { name: "Next.js 15", desc: "Fast frontend for SEO and instant page transitions.", category: "Frontend" },
    { name: "Shopify API", desc: "Headless commerce integration for robust backend retail logic.", category: "Commerce" },
    { name: "Stripe", desc: "Global payment processing platform for cards and wallets.", category: "Payment" },
    { name: "IntelliStore", desc: "Custom inventory management engine for real-time sync.", category: "Inventory" },
    { name: "Tailwind CSS", desc: "Premium styling for high-end retail visual aesthetics.", category: "Styling" },
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
                Retail Growth Tier
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                High-Conversion Custom <br />
                <span className="text-primary">E-Commerce Development</span>
              </h1>
              <p className="text-grey text-lg font-medium leading-relaxed max-w-xl">
                We construct ultra-fast custom digital storefronts that transform casual browsers into lifetime loyal brand consumers.
              </p>
            </MDiv>
            <MDiv variants={scaleIn} initial="hidden" animate="visible" className="lg:w-2/5 w-full bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Launch an online empire?</h3>
              <p className="text-slate-400 text-sm font-medium mb-6">Let&apos;s discuss a storefront suited to your products, operations, and platform needs.</p>
              <Link href="/contact" className="w-full bg-primary hover:bg-primary-dark text-white text-center block font-bold text-sm py-3 rounded-lg shadow-lg shadow-primary/20 transition-all">
                Launch My Storefront
              </Link>
            </MDiv>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Retail Standards</h2>
            <h3 className="text-3xl font-bold text-dark">High-Conversion Engine Attributes</h3>
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
                  <span>Ready for Scale</span>
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
              We leverage modern retail technology to ensure high conversion rates and stable checkouts.
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

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
