"use client";

import React from 'react';
import {
  Monitor,
  Smartphone,
  Settings,
  ShoppingCart,
  CreditCard,
  Zap,
  Palette,
  Cloud,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MotionSection from './motion/MotionSection';
import { staggerItem } from './motion/variants';
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";

const MDiv = motion.div;

const defaultServices: TimelineItem[] = [
  {
    id: 1,
    title: "Web Development",
    date: "Core",
    content: "Modern, responsive websites for a range of devices using Next.js and React.",
    category: "Web",
    icon: Monitor,
    relatedIds: [3, 7],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Mobile Apps",
    date: "Expansion",
    content: "Android, iOS and cross-platform apps built with Flutter and React Native.",
    category: "Mobile",
    icon: Smartphone,
    relatedIds: [1, 7],
    status: "completed",
    energy: 95,
  },
  {
    id: 3,
    title: "Custom Software",
    date: "Enterprise",
    content: "Tailored solutions for your business needs, from CRM to ERP systems.",
    category: "Software",
    icon: Settings,
    relatedIds: [6, 8],
    status: "in-progress",
    energy: 85,
  },
  {
    id: 4,
    title: "E-Commerce",
    date: "Retail",
    content: "Online stores with payment integrations and considered checkout journeys.",
    category: "Commerce",
    icon: ShoppingCart,
    relatedIds: [1, 5],
    status: "completed",
    energy: 90,
  },
  {
    id: 5,
    title: "API & Payment",
    date: "Fintech",
    content: "Connections for M-Pesa, card merchants, global banks, and webhook automation.",
    category: "Integration",
    icon: CreditCard,
    relatedIds: [4, 6],
    status: "completed",
    energy: 98,
  },
  {
    id: 6,
    title: "Automation",
    date: "Efficiency",
    content: "Automate workflows, reduce human error, and skyrocket organizational efficiency.",
    category: "Optimization",
    icon: Zap,
    relatedIds: [3, 5],
    status: "in-progress",
    energy: 75,
  },
  {
    id: 7,
    title: "UI/UX Design",
    date: "Creative",
    content: "Beautiful and easy-to-use interfaces focused on modern aesthetic design tokens.",
    category: "Design",
    icon: Palette,
    relatedIds: [1, 2],
    status: "completed",
    energy: 88,
  },
  {
    id: 8,
    title: "Cloud & Hosting",
    date: "Infrastructure",
    content: "Hosting, cloud, and server-management options discussed for your project needs.",
    category: "Cloud",
    icon: Cloud,
    relatedIds: [1, 3],
    status: "completed",
    energy: 92,
  }
];

const Services = () => {
  return (
    <MotionSection id="services" className="py-20 surface-base border-b border-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <MDiv variants={staggerItem}>
            <h2 className="text-primary font-bold text-xs uppercase tracking-widest mb-3">OUR SERVICES</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
              Everything You Need for Your Digital Growth
            </h3>
          </MDiv>
          <MDiv variants={staggerItem} className="hidden md:flex">
            <Link href="/services" className="text-primary font-bold text-sm flex items-center hover:underline transition-all group">
              View All Services <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MDiv>
        </div>

        <MDiv variants={staggerItem} className="w-full">
           <RadialOrbitalTimeline timelineData={defaultServices} />
        </MDiv>
      </div>
    </MotionSection>
  );
};

export default Services;
