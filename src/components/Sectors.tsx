"use client";

import React from 'react';
import {
  Building2,
  Landmark,
  GraduationCap,
  Heart,
  PieChart,
  Map,
  ShoppingBag,
  Leaf,
  Tv
} from 'lucide-react';
import { motion } from 'framer-motion';
import MotionSection from './motion/MotionSection';
import { staggerContainer, staggerItem } from './motion/variants';

const MDiv = motion.div;

const Sectors = () => {
  const sectors = [
    { icon: Building2, label: "Business" },
    { icon: Landmark, label: "Government" },
    { icon: GraduationCap, label: "Education" },
    { icon: Heart, label: "Healthcare" },
    { icon: PieChart, label: "Finance" },
    { icon: Map, label: "Tourism" },
    { icon: ShoppingBag, label: "Retail" },
    { icon: Leaf, label: "Agriculture" },
    { icon: Tv, label: "Media" },
  ];

  return (
    <MotionSection className="py-20 surface-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MDiv variants={staggerItem} className="mb-12">
          <h2 className="text-[#0F172A] font-bold text-2xl mb-2">Technology Solutions for Different Sectors</h2>
          <p className="text-[#64748B] text-sm italic">We serve a wide range of industries with tailored digital solutions.</p>
        </MDiv>

        <MDiv
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-10"
        >
          {sectors.map((sector, idx) => (
            <MDiv
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <MDiv
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all"
              >
                <sector.icon className="w-7 h-7 text-primary group-hover:text-white" />
              </MDiv>
              <span className="text-[#64748B] text-xs font-medium group-hover:text-[#0F172A] transition-colors">{sector.label}</span>
            </MDiv>
          ))}
        </MDiv>
      </div>
    </MotionSection>
  );
};

export default Sectors;
