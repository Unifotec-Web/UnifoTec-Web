"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/motion/MotionSection";
import FadeUp from "@/components/motion/FadeUp";
import { staggerContainer, staggerItem } from "@/components/motion/variants";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
} from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

const MDiv = motion.div;

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("Web Development");
  const [emailAppOpened, setEmailAppOpened] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const services = [
    "Web Development",
    "Mobile App Development",
    "Custom Software",
    "API & Payment",
    "Cloud Infrastructure",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website inquiry: ${selectedService}`;
    const body = [
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Service: ${selectedService}`,
      "",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:hello@unifotecweb.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailAppOpened(true);
  };

  return (
    <main id="main-content" className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <Image src="/images/illustrations/automation-cloud.svg" alt="Illustration of connected cloud services and automation." width={180} height={135} loading="lazy" className="mx-auto mb-6 h-auto w-36" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mb-6 tracking-tight text-balance">
              Let's Engineer Your <br /><span className="text-primary">Next Digital Asset</span>
            </h1>
            <p className="text-grey text-lg max-w-2xl mx-auto font-medium">
              Have a complex technical challenge? Tell us about it and we can discuss practical software options.
            </p>
          </FadeUp>
        </div>
      </section>

      <MotionSection className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <MDiv variants={staggerContainer} className="space-y-8">
              <MDiv variants={staggerItem}>
                <h2 className="text-2xl font-bold text-dark mb-6">Global Headquarters</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-lg mb-1">Accra, Ghana</h4>
                      <p className="text-grey text-sm font-medium">East Legon, Digital Address GA-123-4567</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-50 text-accent rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-lg mb-1">Electronic Mail</h4>
                      <p className="text-grey text-sm font-medium">hello@unifotecweb.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-lg mb-1">Direct Line</h4>
                      <p className="text-grey text-sm font-medium">+233 24 499 3720</p>
                      <p className="text-grey text-sm font-medium">Mon-Fri, 8AM - 6PM GMT</p>
                    </div>
                  </div>
                </div>
              </MDiv>

              <MDiv variants={staggerItem} className="p-8 bg-dark rounded-3xl text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Project enquiries
                 </h3>
                 <p className="text-grey text-sm font-medium leading-relaxed">
                    We review enquiries as capacity allows. Any next steps are discussed by email.
                 </p>
              </MDiv>
            </MDiv>

            {/* Contact Form */}
            <MDiv variants={staggerItem} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-dark mb-8">Send a Technical Inquiry</h3>
              <p className="text-grey text-sm font-medium -mt-4 mb-8">Submitting opens your email application with a prefilled draft; it does not send your inquiry automatically.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full-name" className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      id="full-name" type="text" autoComplete="name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="John Doe"
                      className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      id="email" type="email" autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@company.com"
                      className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium"
                    />
                  </div>
                </div>

                <CustomSelect
                  label="Subject / Service"
                  options={services}
                  value={selectedService}
                  onChange={setSelectedService}
                />

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-grey uppercase tracking-widest mb-2">Message / Requirements</label>
                  <textarea
                    id="message" rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your project goals and technical constraints..."
                    className="w-full bg-light border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group bg-primary hover:bg-primary-dark text-white shadow-primary/20"
                >
                  <>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    Open Email App
                  </>
                </button>
                {emailAppOpened && <p className="text-center text-sm font-medium text-grey">Your email application should now be open. Review the draft and send it when ready.</p>}
              </form>
            </MDiv>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
