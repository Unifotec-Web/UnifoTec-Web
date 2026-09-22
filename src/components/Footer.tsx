"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import MotionSection from './motion/MotionSection';
import { staggerContainer, staggerItem } from './motion/variants';

const MDiv = motion.div;

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <MDiv variants={staggerItem} className="col-span-1">
            <Link href="/" className="flex items-center mb-6 group">
              <MDiv
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg mr-2 overflow-hidden"
              >
                <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
              </MDiv>
              <span className="text-dark font-bold text-xl tracking-tight uppercase group-hover:text-primary transition-colors">UNIFOTEC-WEB</span>
            </Link>
            <p className="text-grey text-sm font-medium italic mb-6">Build - Connect - Grow</p>
            <div className="flex space-x-4">
              <SocialLink icon={Facebook} />
              <SocialLink icon={Twitter} />
              <SocialLink icon={Instagram} />
              <SocialLink icon={Linkedin} />
            </div>
          </MDiv>

          {/* Quick Links */}
          <MDiv variants={staggerItem} className="col-span-1">
            <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/industries">Industries</FooterLink>
              <FooterLink href="/solutions">Solutions</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </MDiv>

          {/* Services */}
          <MDiv variants={staggerItem} className="col-span-1">
            <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4">
              <FooterLink href="/services/web-development">Web Development</FooterLink>
              <FooterLink href="/services">Mobile Apps</FooterLink>
              <FooterLink href="/services">Software Solutions</FooterLink>
              <FooterLink href="/services">IT Services</FooterLink>
              <FooterLink href="/services">E-commerce</FooterLink>
              <FooterLink href="/services">Cloud & Hosting</FooterLink>
            </ul>
          </MDiv>

          {/* Contact */}
          <MDiv variants={staggerItem} className="col-span-1">
            <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <ContactItem icon={Phone} text="+233 24 499 3720" />
              <ContactItem icon={Mail} text="hello@unifotecweb.com" />
              <ContactItem icon={MapPin} text="Nairobi, Kenya" />
            </ul>
          </MDiv>
        </MotionSection>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] text-grey font-medium uppercase tracking-tighter">
          <p>© 2025 UNIFOTEC-WEB. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <MDiv whileHover={{ x: 4 }}>
      <Link href={href} className="text-grey text-sm hover:text-primary transition-colors flex items-center">
        {children}
      </Link>
  </MDiv>
  </li>
);

const SocialLink = ({ icon: Icon }: { icon: any }) => (
  <MDiv
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Link href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-grey hover:bg-primary hover:text-white transition-all shadow-sm">
      <Icon className="w-4 h-4" />
    </Link>
  </MDiv>
);

const ContactItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <MDiv whileHover={{ x: 4 }} className="flex items-start group cursor-default">
    <Icon className="w-5 h-5 text-primary mr-3 shrink-0 group-hover:scale-110 transition-transform" />
    <span className="text-grey text-sm group-hover:text-dark transition-colors">{text}</span>
  </MDiv>
);

export default Footer;
