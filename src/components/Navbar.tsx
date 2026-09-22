"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/public-content";

const MotionNav = motion.nav;
const MotionDiv = motion.div;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = navigation;

  return (
    <MotionNav aria-label="Primary navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-white/50 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="w-9 h-9 bg-primary flex items-center justify-center rounded-lg mr-2 shadow-lg shadow-primary/20 overflow-hidden"
            >
              <img src="/logo.jpeg" alt="UNIFOTEC-WEB logo" width="36" height="36" className="w-full h-full object-cover" />
            </MotionDiv>
            <span className="text-dark font-bold text-lg tracking-tight uppercase group-hover:text-primary transition-colors">UNIFOTEC-WEB</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? "text-primary" : "text-[#64748B] hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              );
            })}
            <MotionDiv
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-2.5 rounded-md font-bold text-sm flex items-center hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </MotionDiv>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation"
              className="text-[#1E293B] hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div id="mobile-navigation" className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link, idx) => (
                <MotionDiv
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block px-3 py-4 text-[#64748B] hover:text-primary font-bold text-lg border-b border-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </MotionDiv>
              ))}
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  href="/contact"
                  className="block w-full text-center mt-6 px-3 py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-lg shadow-primary/20"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </MotionDiv>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionNav>
  );
};

export default Navbar;
