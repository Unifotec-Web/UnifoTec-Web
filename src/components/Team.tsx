"use client";
import { BriefcaseBusiness } from "lucide-react";
import { teamRoles } from "@/lib/public-content";
export default function Team() { return <section id="team" className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-extrabold text-dark text-center mb-3">Our Team</h2><p className="text-grey text-center mb-10">Our published team structure.</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{teamRoles.map((role) => <div key={role} className="p-6 bg-light rounded-2xl border border-gray-100 text-center"><BriefcaseBusiness className="w-8 h-8 text-primary mx-auto mb-4" /><h3 className="font-bold text-dark">{role}</h3></div>)}</div></div></section>; }
