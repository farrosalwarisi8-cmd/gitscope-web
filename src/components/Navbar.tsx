"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { GithubIcon } from "./icons";
import { cn } from "@/lib/cn";

const links = [
  { label: "Fitur", href: "#fitur" },
  { label: "Preview", href: "#preview" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 transition-all duration-300 sm:px-8",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 border-b transition-all duration-300",
            scrolled
              ? "border-ink/10 bg-white/85 backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        />
        <a href="#top" className="relative flex items-center gap-2.5">
          <span className="relative h-10 w-10 overflow-hidden rounded-2xl border border-ink/10 shadow-[0_8px_24px_-8px_rgba(10,198,99,0.5)]">
            <Image src="/assets/logo.jpeg" alt="GitScope logo" fill sizes="40px" className="object-cover" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Git<span className="text-gradient">Scope</span>
          </span>
        </a>

        <nav className="relative hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-mist transition hover:bg-jade-500/10 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="relative hidden items-center gap-2 lg:flex">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="glass flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-ink transition hover:border-jade-500/40"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#download"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-jade-600 via-jade-500 to-emerald-400 px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_32px_-10px_rgba(10,198,99,0.8)] transition hover:shadow-[0_16px_40px_-10px_rgba(10,198,99,1)]"
          >
            <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
            Gabung Beta
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="glass relative flex h-11 w-11 items-center justify-center rounded-2xl text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mx-4 rounded-3xl border border-ink/10 bg-white/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-[15px] font-semibold text-ink/90 transition hover:bg-jade-500/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-jade-600 to-emerald-500 px-4 py-3.5 text-[15px] font-bold text-white"
            >
              <Download className="h-4 w-4" />
              Download Gitscope
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
