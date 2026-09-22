"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navigation, services } from "@/lib/public-content";

export default function Footer() {
  return (
    <footer className="surface-accent border-t border-blue-400/20 pt-20 pb-10 text-white">
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="text-xl font-bold uppercase text-white">
            {company.name}
          </Link>
          <p className="mt-6 text-sm font-medium italic text-blue-100">{company.tagline}</p>
        </div>
        <FooterList title="Quick Links" items={navigation.map(({ name, href }) => [name, href])} />
        <FooterList title="Services" items={services.slice(0, 6).map(([title, , href]) => [title, href])} />
        <div>
          <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
          <ul className="space-y-4 text-sm text-blue-100">
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-blue-200" />{company.phone}</li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-blue-200" />{company.email}</li>
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-blue-200" />{company.address.join(", ")}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between border-t border-white/15 px-4 pt-8 text-[10px] font-medium uppercase text-blue-100 sm:px-6 md:flex-row lg:px-8">
        <p>© 2026 {company.name}. All rights reserved.</p>
        <div className="mt-4 flex gap-6 md:mt-0">
          <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: readonly (readonly string[])[] }) {
  return (
    <div>
      <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">{title}</h4>
      <ul className="space-y-4">
        {items.map(([name, href]) => (
          <li key={href}>
            <Link href={href} className="text-sm text-blue-100 transition-colors hover:text-white">{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
