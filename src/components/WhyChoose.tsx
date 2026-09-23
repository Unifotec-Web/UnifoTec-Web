"use client";

import React from 'react';
import {
  BarChart3,
  Maximize,
  Smartphone,
  ShieldCheck,
  Network,
  Headphones
} from 'lucide-react';
import { motion } from 'framer-motion';
import MotionSection from './motion/MotionSection';
import { staggerContainer, staggerItem } from './motion/variants';

const MDiv = motion.div;

const WhyChoose = () => {
  const points = [
    { title: "Business-Focused Technology", icon: BarChart3 },
    { title: "Scalable Solutions", icon: Maximize },
    { icon: Smartphone, title: "Mobile-First Approach" },
    { icon: ShieldCheck, title: "Security-Conscious Development" },
    { icon: Network, title: "Integrated Solutions" },
    { icon: Headphones, title: "Long-Term Technical Support" },
  ];

  return (
    <MotionSection className="py-12 sm:py-16 lg:py-20 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MDiv variants={staggerItem} className="text-center mb-16">
          <h2 className="text-primary font-bold text-xs uppercase tracking-widest mb-3">WHY CHOOSE US</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold">Why Businesses Choose UNIFOTEC-WEB</h3>
        </MDiv>

        <MDiv
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8"
        >
          {points.map((point, index) => (
            <MDiv
              key={index}
              variants={staggerItem}
              whileHover={{ x: 5 }}
              className="flex items-center space-x-6 group"
            >
              <MDiv
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-primary/20 transition-colors"
              >
                <point.icon className="w-6 h-6 text-primary" />
              </MDiv>
              <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">{point.title}</h4>
            </MDiv>
          ))}
        </MDiv>
      </div>
    </MotionSection>
  );
};

export default WhyChoose;
