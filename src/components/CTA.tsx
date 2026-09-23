"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MotionSection from './motion/MotionSection';
import { staggerItem } from './motion/variants';

const MDiv = motion.div;
const MButton = motion.button;
const MH2 = motion.h2;
const MP = motion.p;

const CTA = () => {
  return (
    <MotionSection id="contact" className="py-12 sm:py-16 lg:py-20 surface-soft border-t border-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="surface-accent rounded-[2rem] p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          {/* Background pattern */}
          <MDiv
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"
          ></MDiv>
          <MDiv
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"
          ></MDiv>

          <div className="max-w-3xl relative z-10">
            <MH2
              variants={staggerItem}
              className="text-white font-extrabold text-3xl md:text-5xl mb-6"
            >
              Let's Build Your Solution
            </MH2>
            <MP
              variants={staggerItem}
              className="text-blue-50 text-lg leading-relaxed mb-10 opacity-90"
            >
              Have a project in mind? Tell us what you want to build, and our team will help you define the technology, features, development requirements and implementation process.
            </MP>
            <Link href="/contact">
              <MButton
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all flex items-center group shadow-xl"
              >
                Contact Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MButton>
            </Link>
          </div>

          {/* Laptop/Device hint in design */}
          <div className="absolute bottom-0 right-0 w-[40%] h-[80%] hidden lg:block overflow-hidden rounded-tl-3xl opacity-20">
             <div className="w-full h-full bg-[#0F172A] border-l-8 border-t-8 border-white/20"></div>
          </div>
        </MDiv>
      </div>
    </MotionSection>
  );
};

export default CTA;
