"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const slides = [
  { src: "/images/illustrations/web-commerce.svg", label: "Websites & e-commerce", alt: "Illustration of a website storefront, checkout bag, and successful order." },
  { src: "/images/illustrations/mobile-software.svg", label: "Mobile apps & software", alt: "Illustration of a mobile application interface and connected software tiles." },
  { src: "/images/illustrations/automation-cloud.svg", label: "Automation, cloud & transformation", alt: "Illustration of connected cloud infrastructure and automation nodes." },
] as const;

export default function HeroVisualCarousel() {
  const reducedMotion = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const touchStart = useRef<number | null>(null);
  const autoPlay = !reducedMotion && !paused && visible;
  const changeSlide = useCallback((step: number) => setActive((current) => (current + step + slides.length) % slides.length), []);

  useEffect(() => {
    const onVisibilityChange = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = window.setInterval(() => changeSlide(1), 7000);
    return () => window.clearInterval(timer);
  }, [autoPlay, changeSlide]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="UNIFOTEC-WEB capabilities"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget ?? null)) setPaused(false); }}
      onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => { const start = touchStart.current; const end = event.changedTouches[0]?.clientX; if (start !== null && end !== undefined && Math.abs(end - start) > 40) changeSlide(end < start ? 1 : -1); touchStart.current = null; }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); changeSlide(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); changeSlide(1); }
        if (event.key === "Home") { event.preventDefault(); setActive(0); }
        if (event.key === "End") { event.preventDefault(); setActive(slides.length - 1); }
      }}
      className="group relative mx-auto w-full max-w-[30rem] overflow-hidden rounded-2xl border border-blue-100 bg-blue-50 shadow-lg shadow-blue-950/10 focus:outline-none"
    >
      <div className="relative aspect-[4/3] min-h-[260px] overflow-hidden sm:min-h-0">
        {slides.map((slide, index) => (
          <div key={slide.src} aria-hidden={index !== active} className={index === active ? "absolute inset-0 translate-x-0 opacity-100 transition-[opacity,transform] duration-500 ease-out" : "pointer-events-none absolute inset-0 translate-x-2 opacity-0 transition-[opacity,transform] duration-500 ease-out"}>
            <Image src={slide.src} alt={index === active ? slide.alt : ""} fill priority={index === 0} sizes="(max-width: 1023px) 100vw, 480px" className="object-cover" />
          </div>
        ))}
      </div>
      <p className="absolute bottom-3 left-3 rounded-full bg-[#0F172A]/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm" aria-live="polite">{slides[active].label}</p>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5" aria-label="Choose illustration">
        {slides.map((slide, index) => <button key={slide.src} type="button" onClick={() => setActive(index)} aria-label={`Show ${slide.label}`} aria-current={index === active} className={index === active ? "h-1.5 w-4 rounded-full bg-white shadow-sm" : "h-1.5 w-1.5 rounded-full bg-white/70 hover:bg-white"} />)}
      </div>
      <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused || reducedMotion ? "Play carousel" : "Pause carousel"} aria-pressed={paused || reducedMotion} disabled={reducedMotion} className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-primary shadow-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{paused || reducedMotion ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}</button>
      <button type="button" onClick={() => changeSlide(-1)} aria-label="Previous illustration" className="absolute left-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary shadow-sm transition-all hover:bg-white focus-visible:grid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:group-hover:grid"><ChevronLeft className="h-4 w-4" /></button>
      <button type="button" onClick={() => changeSlide(1)} aria-label="Next illustration" className="absolute right-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary shadow-sm transition-all hover:bg-white focus-visible:grid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:group-hover:grid"><ChevronRight className="h-4 w-4" /></button>
    </section>
  );
}
