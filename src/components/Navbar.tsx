"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navigation } from "@/lib/public-content";
import { isActiveNavigationPath } from "@/lib/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const closeMenu = useCallback((restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); closeMenu(true); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <nav aria-label="Primary navigation" className="fixed inset-x-3 top-3 z-50 sm:inset-x-4 lg:top-4">
      <div className={`relative mx-auto max-w-7xl rounded-[1.2rem] border backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${isScrolled ? "border-slate-300/80 bg-[#fffefa]/95 shadow-[0_12px_32px_rgba(15,23,42,0.12)]" : "border-white/80 bg-[#fffefa]/85 shadow-[0_2px_14px_rgba(15,23,42,0.04)]"}`}>
        <div className={`flex items-center justify-between gap-3 px-3 transition-[height] duration-300 sm:px-4 lg:px-5 ${isScrolled ? "h-[54px]" : "h-[60px]"}`}>
          <Link href="/" onClick={() => closeMenu()} className="group flex min-w-0 shrink-0 items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749]">
            <Image src="/logo.jpeg" alt="UNIFOTEC-WEB logo" width={34} height={34} className="h-8 w-8 rounded-lg object-cover sm:h-[34px] sm:w-[34px]" />
            <span className="truncate text-sm font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-[#285749] sm:text-[15px]">UNIFOTEC-WEB</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((link) => {
              const active = isActiveNavigationPath(pathname, link.href);
              return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-2.5 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749] ${active ? "bg-[#e5efe8] font-bold text-[#214b3d] ring-1 ring-[#cbded0]" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`}>{active && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#285749]" />}{link.name}</Link>;
            })}
          </div>

          <Link href="/start-project" className="group hidden min-h-9 shrink-0 items-center gap-1.5 rounded-full bg-[#285749] px-4 text-[13px] font-bold text-white transition-colors hover:bg-[#1d4438] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749] lg:inline-flex">Start a Project <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:transform-none" /></Link>

          <button ref={triggerRef} type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => isOpen ? closeMenu(true) : setIsOpen(true)} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-slate-900 transition-colors hover:bg-[#e5efe8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749] lg:hidden">{isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}</button>
        </div>

        <AnimatePresence>
          {isOpen && <motion.div id="mobile-navigation" key="mobile-navigation" initial={reduceMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }} className="absolute left-0 right-0 top-[calc(100%+0.5rem)] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-[1.2rem] border border-slate-200 bg-[#fffefa] p-2 shadow-[0_18px_40px_rgba(15,23,42,0.16)] lg:hidden">
            <div className="grid gap-1 sm:grid-cols-2">
              {navigation.map((link) => {
                const active = isActiveNavigationPath(pathname, link.href);
                return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} onClick={() => closeMenu(true)} className={`flex min-h-12 items-center gap-2 rounded-xl px-4 text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749] ${active ? "bg-[#e5efe8] text-[#214b3d]" : "text-slate-700 hover:bg-slate-100"}`}>{active && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#285749]" />}{link.name}</Link>;
              })}
            </div>
            <Link href="/start-project" onClick={() => closeMenu(true)} className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#285749] px-4 text-base font-bold text-white hover:bg-[#1d4438] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285749]">Start a Project <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
          </motion.div>}
        </AnimatePresence>
      </div>
    </nav>
  );
}
