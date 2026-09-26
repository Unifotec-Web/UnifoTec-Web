import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { conceptProjects } from "@/lib/public-content";

export default function ProjectPreview({ full = false }: { full?: boolean }) {
  return <div className="grid gap-5 lg:grid-cols-3">{conceptProjects.slice(0, full ? undefined : 3).map((project, index) => <article key={project.title} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
    <div className={`relative aspect-[4/3] overflow-hidden p-6 ${index === 1 ? "bg-[#f5e9dd]" : index === 2 ? "bg-[#e8eee8]" : "bg-[#e8edf3]"}`}><Image src={project.image} alt="" width={640} height={480} className="h-full w-full object-contain transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]" /></div>
    <div className="p-6"><p className="eyebrow mb-3">{project.category}</p><h3 className="text-xl font-bold text-slate-900">{project.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{project.summary}</p>{full && <ul className="mt-5 space-y-2 text-sm text-slate-700">{project.capabilities.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true" className="text-[#285749]">✓</span>{item}</li>)}</ul>}</div>
  </article>)}</div>;
}

export function ProjectsLink() { return <Link href="/projects" className="text-link mt-8">Explore concept showcases <ArrowUpRight className="h-4 w-4" /></Link>; }
