"use client";

import React from 'react';
import {
  MessageSquare,
  Map as MapIcon,
  Palette,
  Code,
  CheckCircle2,
  Rocket,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import MotionSection from './motion/MotionSection';
import { staggerContainer, staggerItem } from './motion/variants';

const MDiv = motion.div;

const WorkProcess = () => {
  const steps = [
    { icon: MessageSquare, title: "Consultation", sub: "Understand your needs", num: "01" },
    { icon: MapIcon, title: "Planning", sub: "Define scope & plan", num: "02" },
    { icon: Palette, title: "UI/UX Design", sub: "Create the interface", num: "03" },
    { icon: Code, title: "Development", sub: "Build the solution", num: "04" },
    { icon: CheckCircle2, title: "Testing", sub: "Ensure quality", num: "05" },
    { icon: Rocket, title: "Deployment", sub: "Go live", num: "06" },
    { icon: TrendingUp, title: "Training & succeed", sub: "Help you succeed", num: "07" },
  ];

  return (
    <MotionSection id="process" className="py-20 surface-soft border-y border-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MDiv variants={staggerItem} className="mb-16">
          <h2 className="text-[#0F172A] font-bold text-2xl mb-2">Our Work Process</h2>
          <p className="text-[#64748B] text-sm italic">From idea to launch, we follow a clear and proven process.</p>
        </MDiv>

        <div className="relative">
          <MDiv
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-7 left-0 right-0 h-0.5 bg-blue-100 hidden lg:block origin-left"
          ></MDiv>

          <MDiv
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8"
          >
            {steps.map((step, idx) => (
              <MDiv
                key={idx}
                variants={staggerItem}
                className="relative flex flex-col items-center text-center group"
              >
                <MDiv
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-white border border-blue-100 rounded-full flex items-center justify-center mb-4 relative z-10 group-hover:border-primary transition-colors shadow-sm"
                >
                  <step.icon className="w-6 h-6 text-primary" />
                  <div className="absolute -top-2 -right-2 bg-primary text-white text-[8px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {step.num}
                  </div>
                </MDiv>
                <h4 className="font-bold text-[#0F172A] text-xs mb-1">{step.title}</h4>
                <p className="text-[#64748B] text-[10px] leading-tight">{step.sub}</p>
              </MDiv>
            ))}
          </MDiv>
        </div>
      </div>
    </MotionSection>
  );
};

export default WorkProcess;
