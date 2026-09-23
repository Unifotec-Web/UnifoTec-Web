"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MotionSection from './motion/MotionSection';
import { staggerItem, scaleIn } from './motion/variants';

const MDiv = motion.div;
const MButton = motion.button;

const About = () => {
  return (
    <MotionSection id="about" className="py-12 sm:py-16 lg:py-20 surface-soft border-y border-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <MDiv variants={staggerItem} className="lg:w-1/2">
            <h2 className="text-primary font-bold text-3xl mb-4">About Us</h2>
            <h3 className="text-xl font-bold text-[#0F172A] mb-6 italic">Innovative. Reliable. Client-Focused.</h3>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              UNIFOTEC-WEB is an information technology and digital solutions company providing professional website development, mobile application development, software solutions, IT services, digital platforms, and technology support for businesses, organizations, institutions, and entrepreneurs.
            </p>
            <Link href="/about">
              <MButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-primary font-bold border-2 border-primary px-6 py-2.5 rounded-md hover:bg-primary hover:text-white transition-all group"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MButton>
            </Link>
          </MDiv>

          <div className="lg:w-1/2">
            <MDiv variants={scaleIn} className="relative mx-auto max-w-lg overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
              <Image src="/images/illustrations/discovery.svg" alt="Abstract illustration of connected project ideas and milestones." width={640} height={400} loading="lazy" className="h-auto w-full" />
            </MDiv>

            <p className="text-center text-sm font-medium text-[#64748B]">We plan each engagement around its goals, requirements, and approval process.</p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default About;
