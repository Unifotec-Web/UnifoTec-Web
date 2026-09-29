import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { company } from "@/lib/public-content";
import HeroPhotoCarousel from "@/components/HeroPhotoCarousel";

export default function Hero() {
  return <section id="home" className="relative overflow-hidden bg-[#f5f3ed] pt-24 sm:pt-32">
    <div className="section-shell grid items-center gap-10 pb-14 lg:min-h-[650px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-20">
      <div className="relative z-10">
        <p className="eyebrow mb-6">Digital thinking, built for real work</p>
        <h1 className="display-title max-w-3xl text-[clamp(2.45rem,6vw,5.7rem)]">Technology that connects <span className="text-[#285749]">businesses</span> to the digital world.</h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">We provide website development, mobile application development, software solutions, IT services, digital platforms, and technology support for businesses, organizations, institutions, and entrepreneurs.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/start-project" className="button-dark">Start a project <ArrowUpRight className="h-4 w-4" /></Link><Link href="/services" className="button-light">Explore services</Link></div>
        <a href="#services" className="mt-12 hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#285749] sm:inline-flex">Explore what we do <ArrowDown className="h-4 w-4" /></a>
      </div>
      <HeroPhotoCarousel />
    </div>
    <div className="border-t border-slate-300/70 bg-white/60"><div className="section-shell flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-4 text-xs font-bold uppercase tracking-widest text-slate-600"><span>{company.primaryMarket} · digital solutions</span><span>Websites / Apps / Software / Support</span></div></div>
  </section>;
}
