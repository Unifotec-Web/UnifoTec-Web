import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import CTA from "@/components/CTA";
export default function ServicesPage() { return <main className="min-h-screen pt-20"><Navbar /><PageHero eyebrow="Services" title="Digital services for practical business needs" description="Explore how we can support your website, app, software, and digital operations. Each solution is scoped around your audience and goals." image="/images/photos/hero-collaboration.webp" imageAlt="Technology professionals working together" action={{ label: "Start a project", href: "/start-project" }} /><section className="bg-white py-16 sm:py-20"><div className="section-shell"><p className="eyebrow mb-4">Explore our work</p><h2 className="section-heading mb-9 max-w-2xl">Find the right starting point.</h2><ServiceGrid /></div></section><CTA /><Footer /></main>; }
