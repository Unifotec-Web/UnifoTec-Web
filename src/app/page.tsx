import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import ProjectPreview, { ProjectsLink } from "@/components/ProjectPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { companyProfile } from "@/lib/public-content";

export default function Home() { return <main id="main-content"><Navbar /><Hero /><Services />
  <section className="bg-[#f5f3ed] py-16 sm:py-20 lg:py-24"><div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"><div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-200"><Image src="/images/photos/ghana-entrepreneur.webp" alt="Entrepreneur working at a sewing machine in Accra" fill sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover" /></div><Reveal><p className="eyebrow mb-4">Built around the business</p><h2 className="section-heading">Useful technology begins with understanding people.</h2><p className="mt-6 leading-relaxed text-slate-600">{companyProfile.story[0]}</p><Link href="/about" className="text-link mt-7">More about us <ArrowUpRight className="h-4 w-4" /></Link></Reveal></div></section>
  <WorkProcess />
  <section className="bg-white py-16 sm:py-20 lg:py-24"><div className="section-shell"><Reveal className="mb-9 max-w-2xl"><p className="eyebrow mb-4">Ideas in view</p><h2 className="section-heading">Explore what a digital solution could look like.</h2><p className="mt-4 text-slate-600">These are concept showcases that illustrate capabilities, not client projects or delivered outcomes.</p></Reveal><ProjectPreview /><ProjectsLink /></div></section>
  <CTA /><Footer /></main>; }
