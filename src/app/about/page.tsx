import { CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import { company, companyProfile, differentiators } from "@/lib/public-content";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="surface-accent px-4 py-16 text-center text-white sm:py-20 lg:py-24">
        <p className="mb-4 font-bold uppercase tracking-[0.2em] text-blue-300">About {company.name}</p>
        <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-extrabold md:text-6xl">Technology shaped around real business needs</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">A Ghana-based digital team helping businesses turn ideas, customer needs and operational challenges into useful digital products.</p>
      </section>

      <section className="surface-soft border-b border-blue-100/60 px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Our story</p>
            <h2 className="mb-6 text-3xl font-extrabold text-dark sm:text-4xl">Digital work should feel clear and purposeful</h2>
            <div className="space-y-5 text-lg leading-relaxed text-grey">
              {companyProfile.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="grid gap-5">
            <article className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm"><p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Our mission</p><p className="leading-relaxed text-dark">{companyProfile.mission}</p></article>
            <article className="rounded-3xl border border-blue-900 bg-dark p-7 text-white shadow-sm"><p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-300">Our vision</p><p className="leading-relaxed text-slate-200">{companyProfile.vision}</p></article>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center"><p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">How we work</p><h2 className="text-3xl font-extrabold text-dark sm:text-4xl">Values we can be measured by</h2></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {companyProfile.values.map(([title, description]) => <article key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"><CheckCircle2 aria-hidden="true" className="mb-4 h-7 w-7 text-primary" /><h3 className="mb-2 text-lg font-bold text-dark">{title}</h3><p className="text-sm leading-relaxed text-grey">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="surface-soft border-y border-blue-100/60 px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl"><div className="mb-10 max-w-2xl"><p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Why UNIFOTEC-WEB</p><h2 className="text-3xl font-extrabold text-dark sm:text-4xl">Fast-moving work without losing clarity</h2></div><div className="grid gap-5 md:grid-cols-2">{differentiators.map(([title, description], index) => <article key={title} className="rounded-2xl border border-blue-100 bg-white p-6"><span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">{String(index + 1).padStart(2, "0")}</span><h3 className="mb-2 text-xl font-bold text-dark">{title}</h3><p className="leading-relaxed text-grey">{description}</p></article>)}</div></div>
      </section>

      <Team />
      <Footer />
    </main>
  );
}
