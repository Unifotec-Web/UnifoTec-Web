import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PageHero({ eyebrow, title, description, image, imageAlt, action }: { eyebrow: string; title: string; description: string; image?: string; imageAlt?: string; action?: { label: string; href: string } }) {
  return <section className="relative overflow-hidden border-b border-slate-200 bg-[#f5f3ed]">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
      <div className="relative z-10 max-w-3xl">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="display-title text-balance text-4xl sm:text-5xl lg:text-[4.5rem]">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
        {action && <Link className="button-dark mt-8" href={action.href}>{action.label}<ArrowUpRight className="h-4 w-4" /></Link>}
      </div>
      {image && <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-200 shadow-xl shadow-slate-900/10 lg:aspect-[5/4]"><Image src={image} alt={imageAlt ?? ""} fill priority sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover" /></div>}
    </div>
  </section>;
}
