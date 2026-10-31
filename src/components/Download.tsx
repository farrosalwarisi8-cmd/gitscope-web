"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, Play, QrCode, ShieldCheck, Zap, WifiOff } from "lucide-react";
import { Section } from "./Section";

const assurances = [
  { icon: ShieldCheck, label: "Tanpa perlu login" },
  { icon: Zap, label: "Selamanya gratis" },
  { icon: WifiOff, label: "Bisa offline" },
];

export function Download() {
  return (
    <div className="relative px-5 py-20 sm:px-8 sm:py-28">
      <Section
        id="download"
        eyebrow="Download Sekarang"
        title={
          <>
            Berhenti penasaran. <span className="text-gradient">Mulai eksplorasi!</span>
          </>
        }
        description="Install 30 detik, langsung pakai. Gratis selamanya, tanpa akun, tanpa ribet — 120 ribu developer sudah membuktikannya."
        className="px-0 sm:px-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-pine-950 p-8 text-center sm:rounded-[2.5rem] sm:p-14"
        >
          {/* emerald aurora on deep pine — echoes the APK's dark mode */}
          <div className="pointer-events-none absolute inset-0">
            <div className="bg-grid absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]" />
            <div className="absolute -top-24 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-jade-500/40 blur-[100px]" />
            <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-emerald-400/25 blur-[100px]" />
            <div className="absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-gold-400/20 blur-[100px]" />
          </div>

          <div className="relative">
            <span className="relative mx-auto block h-20 w-20 overflow-hidden rounded-[1.4rem] border border-white/25 shadow-[0_16px_48px_-12px_rgba(10,198,99,0.9)] sm:h-24 sm:w-24">
              <Image
                src="/assets/logo.jpeg"
                alt="Ikon aplikasi GitScope"
                fill
                sizes="96px"
                loading="eager"
                className="object-cover"
              />
              <span className="animate-pulse-glow absolute inset-0 rounded-[1.4rem] ring-2 ring-inset ring-white/20" />
            </span>

            <h3 className="font-display mx-auto mt-6 max-w-xl text-2xl font-bold leading-tight text-white sm:text-4xl">
              Duniamu di GitHub, <span className="text-gradient-light">sekarang muat di saku.</span>
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/70 sm:text-base">
              Gabung dengan 120.000+ developer yang sudah kepoin profil, bedah repo, dan kejar ranking lewat GitScope. Gratis — kenapa nggak dari kemarin?
            </p>

            <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <a
                href="#download"
                className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-pine-950 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <Apple className="h-6 w-6" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider opacity-60">
                    Download di
                  </span>
                  App Store
                </span>
              </a>
              <a
                href="#download"
                className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/45"
              >
                <Play className="h-6 w-6 fill-jade-300 text-jade-300" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                    Dapatkan di
                  </span>
                  Google Play
                </span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {assurances.map((a) => (
                <span
                  key={a.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur"
                >
                  <a.icon className="h-3.5 w-3.5 text-jade-300" />
                  {a.label}
                </span>
              ))}
              <span className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur sm:inline-flex">
                <QrCode className="h-3.5 w-3.5 text-jade-300" />
                Scan buat install
              </span>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
