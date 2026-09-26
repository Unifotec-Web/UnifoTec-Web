import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company, navigation, services } from "@/lib/public-content";

const quickLinks = navigation.map(({ name, href }) => [name, href] as const);
const serviceLinks = services.slice(0, 4).map(([name, , href]) => [name, href] as const);

// Add only business-approved social destinations here when available.
const approvedSocialLinks: readonly { label: string; href: string }[] = [];

const footerLink = "rounded-sm text-sm leading-snug text-slate-300 transition-colors hover:text-white hover:underline hover:decoration-[#78b8c8] hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78b8c8]";

export default function Footer() {
  return (
    <footer className="border-t-4 border-[#27574c] bg-[#111b29] text-white">
      <div className="section-shell">
        <div className="grid gap-6 border-b border-white/10 py-7 sm:py-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-start gap-3">
            <Link href="/" aria-label={`${company.name} home`} className="shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78b8c8]"><Image src="/logo.jpeg" alt="" width={42} height={42} className="h-10 w-10 rounded-lg object-cover" /></Link>
            <div><p className="text-base font-extrabold tracking-tight">{company.name}</p><p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-300">{company.statement}</p></div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a href={company.phoneHref} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-sm text-slate-100 transition-colors hover:border-[#78b8c8] hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78b8c8]"><Phone aria-hidden="true" className="h-4 w-4 text-[#89c3cc]" />{company.phone}</a>
            <Link href="/start-project" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[#dceee1] px-4 py-2 text-sm font-bold text-[#17392f] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Start a Project <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            <a href={company.emailHref} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-sm text-slate-100 transition-colors hover:border-[#78b8c8] hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78b8c8]"><Mail aria-hidden="true" className="h-4 w-4 text-[#89c3cc]" />{company.email}</a>
          </div>
        </div>

        <div className="grid gap-5 py-6 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.1fr_0.9fr] lg:gap-10 lg:py-8">
          <FooterList title="Explore" items={quickLinks} />
          <FooterList title="Services" items={serviceLinks} extra={<Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#a8d7d9] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78b8c8]">View all services <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" /></Link>} />
          <div>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white">Find us</h2>
            <div className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-relaxed text-slate-300"><MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#89c3cc]" /><address className="not-italic">{company.address.join(", ")}</address></div>
            {approvedSocialLinks.length > 0 && <ul className="mt-4 flex flex-wrap gap-3">{approvedSocialLinks.map(({ label, href }) => <li key={href}><a href={href} className={footerLink}>{label}</a></li>)}</ul>}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 border-t border-white/10 py-4 text-xs text-slate-400">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2"><Link href="/privacy" className="rounded-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78b8c8]">Privacy Policy</Link><Link href="/terms" className="rounded-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78b8c8]">Terms &amp; Conditions</Link><a href="#" className="inline-flex items-center gap-1 rounded-sm text-[#a8d7d9] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78b8c8]">Back to top <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" /></a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items, extra }: { title: string; items: readonly (readonly string[])[]; extra?: React.ReactNode }) {
  return <div><h2 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white">{title}</h2><ul className="grid grid-cols-2 gap-x-5 gap-y-2.5">{items.map(([name, href]) => <li key={href}><Link href={href} className={footerLink}>{name}</Link></li>)}</ul>{extra && <div className="mt-4">{extra}</div>}</div>;
}
