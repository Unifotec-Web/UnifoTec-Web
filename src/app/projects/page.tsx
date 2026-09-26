"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FadeUp from "@/components/motion/FadeUp";
import { conceptProjects } from "@/lib/public-content";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="surface-accent px-4 py-16 text-center text-white sm:py-20">
        <FadeUp><p className="mb-3 font-bold uppercase tracking-[0.2em] text-blue-300">Capabilities in practice</p><h1 className="mb-5 text-4xl font-extrabold md:text-6xl">Digital product concepts</h1><p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">These concept showcases demonstrate the kinds of solutions our team can design and develop. Approved client case studies will be published separately.</p></FadeUp>
      </section>
      <section className="surface-soft px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-3">
          {conceptProjects.map((project) => <article key={project.title} className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="aspect-[4/3] overflow-hidden bg-blue-50 p-6"><Image src={project.image} alt="" width={640} height={480} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" /></div><div className="p-7"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">{project.category}</p><h2 className="mb-3 text-2xl font-extrabold text-dark">{project.title}</h2><p className="mb-6 leading-relaxed text-grey">{project.summary}</p><ul className="space-y-2 text-sm text-dark">{project.capabilities.map((capability) => <li key={capability} className="flex items-center gap-2"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />{capability}</li>)}</ul></div></article>)}
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center text-sm leading-relaxed text-amber-900"><strong>Portfolio note:</strong> These are illustrative concepts, not published client claims. Client names, outcomes and testimonials will only appear after verification and permission.</p>
      </section>
      <Footer />
    </main>
  );
}
