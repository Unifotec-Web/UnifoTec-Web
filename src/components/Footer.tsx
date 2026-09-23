"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navigation, services } from "@/lib/public-content";

const quickLinks = navigation.map(({ name, href }) => [name, href] as const);
const serviceLinks = services.slice(0, 4).map(([name, , href]) => [name, href] as const);

export default function Footer() {
  return <footer className="border-t border-blue-400/15 bg-[#0F172A] [background-image:radial-gradient(circle_at_90%_8%,rgb(0_95_255_/_0.28),transparent_23rem)] py-10 text-white sm:py-12">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-8">
      <div><Link href="/" className="text-lg font-bold uppercase text-white">{company.name}</Link><p className="mt-3 max-w-xs text-sm italic text-blue-100">{company.tagline}</p></div>
      <FooterList title="Quick Links" items={quickLinks} grid />
      <FooterList title="Services" items={serviceLinks} grid extra={<Link href="/services" className="text-sm font-medium text-blue-200 hover:text-white">View all services</Link>} />
      <div><h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Contact us</h4><ul className="space-y-2.5 text-sm text-blue-100"><li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-blue-200" />{company.phone}</li><li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-blue-200" />{company.email}</li><li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-blue-200" />{company.address.join(", ")}</li></ul></div>
    </div>
    <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/15 px-4 pt-5 text-[10px] font-medium uppercase text-blue-100 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><p>© 2026 {company.name}. All rights reserved.</p><div className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/privacy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link></div></div>
  </footer>;
}

function FooterList({ title, items, grid, extra }: { title: string; items: readonly (readonly string[])[]; grid?: boolean; extra?: React.ReactNode }) {
  return <div><h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">{title}</h4><ul className={grid ? "grid grid-cols-2 gap-x-4 gap-y-2" : "space-y-2"}>{items.map(([name, href]) => <li key={href}><Link href={href} className="text-sm text-blue-100 hover:text-white">{name}</Link></li>)}</ul>{extra && <div className="mt-3">{extra}</div>}</div>;
}
