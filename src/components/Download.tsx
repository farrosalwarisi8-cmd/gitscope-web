"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download as DownloadIcon, ShieldCheck, EyeOff, UserCheck } from "lucide-react";
import { Section } from "./Section";

const assurances = [
  { icon: ShieldCheck, label: "API resmi GitHub" },
  { icon: EyeOff, label: "Tanpa ekspor data massal" },
  { icon: UserCheck, label: "Developer pegang kendali" },
];

export function Download() {
  return (
    <div className="relative px-5 py-20 sm:px-8 sm:py-28">
      <Section
        id="download"
        eyebrow="Gabung Beta"
        title={
          <>
            Mulai dari bukti.{" "}
            <span className="text-gradient">Bangun tim yang lebih tepat.</span>
          </>
        }
        description="Gitscope membuka tahap beta untuk recruiter dan developer. Bergabunglah lebih awal dan bantu bentuk cara baru menemukan talenta teknis."
        className="px-0 sm:px-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-pine-950 p-8 text-center sm:rounded-[2.5rem] sm:p-14"
        >
          {/* emerald aurora on deep pine — echoes the app's dark mode */}
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
                alt="Ikon aplikasi Gitscope"
                fill
                sizes="96px"
                loading="eager"
                className="object-cover"
              />
              <span className="animate-pulse-glow absolute inset-0 rounded-[1.4rem] ring-2 ring-inset ring-white/20" />
            </span>

            <h3 className="font-display mx-auto mt-6 max-w-xl text-2xl font-bold leading-tight text-white sm:text-4xl">
              Talent discovery berbasis{" "}
              <span className="text-gradient-light">bukti nyata.</span>
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/70 sm:text-base">
              Pilih peranmu: temukan talenta teknis dari seluruh dunia lewat bukti nyata,
              atau tampilkan karya terbaikmu sambil tetap pegang kendali atas visibilitas
              dan komunikasi.
            </p>

            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <a
                href="#download"
                className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-pine-950 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <DownloadIcon className="h-6 w-6" />
                Download Gitscope
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
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
