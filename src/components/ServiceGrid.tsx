import Link from "next/link";
import { ArrowUpRight, Code2, Smartphone, Boxes, ShoppingBag, PlugZap, Workflow, Palette, LifeBuoy, Cloud, RefreshCw } from "lucide-react";
import { services } from "@/lib/public-content";

const icons = [Code2, Smartphone, Boxes, ShoppingBag, PlugZap, Workflow, Palette, LifeBuoy, Cloud, RefreshCw];

export default function ServiceGrid({ limit }: { limit?: number }) {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.slice(0, limit).map(([title, summary, href], index) => {
    const Icon = icons[index];
    return <Link key={title} href={href} className="service-card group relative flex min-h-60 flex-col rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm focus-visible:outline-primary sm:p-7">
      <span className="mb-9 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf2ed] text-[#285749] transition-colors group-hover:bg-[#285749] group-hover:text-white"><Icon aria-hidden="true" className="h-6 w-6" /></span>
      <span className="mb-3 flex items-start justify-between gap-4 text-xl font-bold leading-tight text-slate-900">{title}<ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 text-[#285749] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
      <span className="text-sm leading-relaxed text-slate-600">{summary}</span>
    </Link>;
  })}</div>;
}
