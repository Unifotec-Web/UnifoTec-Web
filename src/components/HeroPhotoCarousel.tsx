"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const slides = [
  { src: "/images/photos/hero-collaboration.webp", alt: "People working together around a table", line: "Good ideas grow through conversation." },
  { src: "/images/photos/about-workshop.webp", alt: "People discussing ideas around a table", line: "A clearer path starts with listening." },
  { src: "/images/photos/ghana-entrepreneur.webp", alt: "A person working at a sewing machine", line: "Useful tools make everyday work easier." },
] as const;

export default function HeroPhotoCarousel() {
  const reducedMotion = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const playing = !reducedMotion && !userPaused && !hovered && !focused && visible;

  useEffect(() => {
    const updateVisibility = () => setVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Scenes of everyday work"
      className="relative mx-auto w-full max-w-xl pb-6 pr-5 sm:pb-8 sm:pr-8 lg:mx-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-slate-200 shadow-2xl shadow-slate-900/15">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === active ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={slide.src}
              alt={index === active ? slide.alt : ""}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "eager"}
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        ))}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-slate-950/25 p-1 backdrop-blur-sm sm:bottom-4 sm:left-4" aria-label="Choose a slide">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}: ${slide.line}`}
              aria-current={index === active ? "true" : undefined}
              className="grid h-7 w-7 place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className={`block h-1.5 rounded-full transition-all ${index === active ? "w-3 bg-white" : "w-1.5 bg-white/65"}`} />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setUserPaused((current) => !current)}
          aria-label={reducedMotion ? "Automatic slideshow off for reduced motion" : userPaused ? "Play slideshow" : "Pause slideshow"}
          aria-pressed={userPaused}
          disabled={reducedMotion}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#285749] shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749] disabled:opacity-70 sm:right-4 sm:top-4"
        >
          {userPaused || reducedMotion ? <Play aria-hidden="true" className="h-4 w-4" /> : <Pause aria-hidden="true" className="h-4 w-4" />}
        </button>
      </div>
      <p className="absolute bottom-0 right-0 flex min-h-[5rem] max-w-[12rem] items-center rounded-2xl border border-white/30 bg-[#285749] p-4 text-sm font-semibold leading-snug text-white shadow-xl sm:min-h-[6rem] sm:max-w-[15rem] sm:p-6">
        {slides[active].line}
      </p>
    </div>
  );
}
