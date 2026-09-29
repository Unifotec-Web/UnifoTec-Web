import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const processNotes = [
  "Clear project scope",
  "Collaborative delivery",
  "Support after launch",
] as const;

export default function CTA() {
  return (
    <section aria-labelledby="final-cta-title" className="bg-[#f5f3ed] pt-10 sm:pt-12">
      <div className="section-shell">
        <div className="relative grid overflow-hidden rounded-t-[1.75rem] border border-b-0 border-[#285749]/20 bg-[#183a35] text-white shadow-[0_18px_50px_-30px_rgba(16,32,42,0.45)] lg:grid-cols-[1.08fr_0.92fr]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(60,137,106,0.45),transparent_52%),linear-gradient(125deg,#183a35_0%,#1b413c_58%,#142d39_100%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:36px_36px]" />
          <div className="relative z-10 px-6 pb-7 pt-8 sm:px-10 sm:py-10 lg:px-12 lg:py-11">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c7e4d6]">Let&apos;s begin</p>
            <h2 id="final-cta-title" className="max-w-xl text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl">Have an idea worth building?</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#e3eee9] sm:text-base">Tell us what you want to achieve. We can discuss a practical starting point, scope, and next steps.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/start-project" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#183a35] shadow-sm transition-colors hover:bg-[#e7f0e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Start a Project <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
              <Link href="/services" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/45 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore Services <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/20 pt-4 text-xs font-medium text-[#d8eae2]" aria-label="Our working approach">
              {processNotes.map((note) => <li key={note} className="inline-flex items-center gap-1.5"><Check aria-hidden="true" className="h-3.5 w-3.5 text-[#b6dbbe]" />{note}</li>)}
            </ul>
          </div>
          <div className="relative h-48 min-h-0 overflow-hidden border-t border-white/15 sm:h-64 lg:h-full lg:border-l lg:border-t-0">
            <Image src="/images/photos/about-workshop.webp" alt="Professionals discussing ideas together around a table" fill sizes="(max-width: 1023px) 100vw, 42vw" className="object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#142d39]/35 via-transparent to-transparent" />
            <div aria-hidden="true" className="absolute bottom-4 right-4 hidden h-16 w-16 rounded-2xl border border-white/40 bg-white/15 backdrop-blur-sm sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
