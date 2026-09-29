import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceGrid from "@/components/ServiceGrid";
import Reveal from "@/components/motion/Reveal";

export default function Services() { return <section id="services" className="bg-white py-16 sm:py-20 lg:py-24"><div className="section-shell"><Reveal className="mb-9 flex flex-wrap items-end justify-between gap-5"><div className="max-w-2xl"><p className="eyebrow mb-4">What we build</p><h2 className="section-heading">Digital services shaped around your next step.</h2><p className="mt-4 text-slate-600">From a clear web presence to connected workflows, each engagement starts with the people and problem behind it.</p></div><Link className="text-link" href="/services">All services <ArrowUpRight className="h-4 w-4" /></Link></Reveal><ServiceGrid limit={6} /></div></section>; }
