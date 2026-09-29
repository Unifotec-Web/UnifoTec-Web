import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProjectPreview from "@/components/ProjectPreview";
import CTA from "@/components/CTA";
export default function ProjectsPage() { return <main className="min-h-screen pt-20"><Navbar /><PageHero eyebrow="Concept showcases" title="Digital product ideas in view" description="These illustrative concepts show the kinds of solutions we can discuss and design. They are not client projects or evidence of delivered outcomes." action={{label:"Discuss your idea",href:"/start-project"}} /><section className="bg-[#f5f3ed] py-16 sm:py-20"><div className="section-shell"><ProjectPreview full /><p className="mt-8 rounded-2xl border border-[#d9dfd6] bg-white p-5 text-sm leading-relaxed text-slate-600"><strong className="text-slate-900">Portfolio note:</strong> Approved client case studies will appear only after verification and permission.</p></div></section><CTA /><Footer /></main>; }
