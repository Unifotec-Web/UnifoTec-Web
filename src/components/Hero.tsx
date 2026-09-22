"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, scaleIn } from './motion/variants';

const MotionDiv = motion.div;
const MotionSection = motion.section;
const MotionSpan = motion.span;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionButton = motion.button;

const Hero = () => {
  const heroData = {
    title: "Technology That Connects Businesses to the Digital World",
    subtitle: "We provide website development, mobile application development, software solutions, IT services, digital platforms, and technology support for businesses, organizations, institutions, and entrepreneurs."
  };

  return (
    <MotionSection id="home" className="relative pt-20 pb-16 bg-white overflow-hidden min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Modern high-quality overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40"></div>
      </div>

      {/* Background Animated Grid (kept but subtle) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "0px -40px"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#005FFF 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:w-[50%] lg:pr-12 mb-12 lg:mb-0 z-10"
          >
            <MotionSpan
              variants={staggerItem}
              className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
            >
              UNIFOTEC-WEB
            </MotionSpan>
            <MotionH1
              variants={staggerItem}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0F172A] leading-[1.05] mb-8 tracking-tighter"
            >
              {heroData.title.split('<br />').map((line, i) => (
                <React.Fragment key={i}>
                  {line} {i < heroData.title.split('<br />').length - 1 && <br />}
                </React.Fragment>
              ))}
            </MotionH1>
            <MotionP
              variants={staggerItem}
              className="text-[#64748B] text-lg mb-10 leading-relaxed max-w-xl font-medium"
            >
              {heroData.subtitle}
            </MotionP>
            <MotionDiv
              variants={staggerItem}
              className="flex flex-wrap gap-4"
            >
              <Link href="/start-project">
                <MotionButton
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-white px-8 py-3.5 rounded-md font-bold text-base hover:bg-primary-dark transition-all flex items-center shadow-md shadow-primary/20"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </MotionButton>
              </Link>
              <Link href="/services">
                <MotionButton
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#1E293B] text-white px-8 py-3.5 rounded-md font-bold text-base hover:bg-black transition-all"
                >
                  Our Services
                </MotionButton>
              </Link>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="lg:w-[50%] relative flex justify-center items-center h-full"
          >
            {/* Devices Mockup Placeholder */}
            <MotionDiv
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-square flex items-center justify-center scale-110"
            >
              {/* Laptop */}
              <div className="absolute left-0 bottom-4 w-[75%] aspect-[16/10] bg-[#1E293B] rounded-xl shadow-2xl border-[12px] border-[#1E293B] overflow-hidden z-10">
                <div className="w-full h-full bg-white relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white flex flex-col p-6">
                      <div className="text-primary font-bold text-xs mb-2">Your Vision</div>
                      <div className="text-primary font-bold text-xs mb-2">Our Technology</div>
                      <div className="text-primary font-bold text-xs">Your Growth</div>
                   </div>
                </div>
              </div>
              {/* Tablet */}
              <MotionDiv
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-4 top-4 w-[45%] aspect-[3/4] bg-[#0F172A] rounded-2xl shadow-xl border-[8px] border-[#0F172A] overflow-hidden z-20"
              >
                <div className="w-full h-full bg-primary flex flex-col items-center justify-center p-4 text-center">
                   <div className="text-white font-bold text-xl italic mb-4">U</div>
                   <div className="text-white font-medium text-[10px] leading-tight opacity-90 uppercase tracking-tighter">
                      Build <br /> Smarter <br /> Go Further
                   </div>
                </div>
              </MotionDiv>
              {/* Phone */}
              <MotionDiv
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[-20px] bottom-0 w-[22%] aspect-[9/19] bg-[#0F172A] rounded-2xl shadow-lg border-[6px] border-[#0F172A] overflow-hidden z-30"
              >
                 <div className="w-full h-full bg-white">
                    <div className="h-full w-full bg-gradient-to-b from-primary to-primary-dark p-2 flex flex-col justify-between">
                       <div className="text-white text-[8px] font-bold">UNIFOTEC-WEB</div>
                       <div className="grid grid-cols-2 gap-1 mb-4">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="aspect-square bg-white/20 rounded-sm"></div>
                          ))}
                       </div>
                    </div>
                 </div>
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
};

export default Hero;
