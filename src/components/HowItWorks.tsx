"use client";

import { motion } from "framer-motion";
import {
  Link2,
  Cpu,
  Compass,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  EyeOff,
  UserCheck,
} from "lucide-react";
import { Section } from "./Section";

const steps = [
  {
    icon: Link2,
    title: "Connect",
    desc: "Hubungkan akun GitHub lewat OAuth dengan izin akses minimal.",
  },
  {
    icon: Cpu,
    title: "Analyze",
    desc: "Kami menganalisis aktivitas, proyek, kontribusi, dan teknologi lewat server-side processing.",
  },
  {
    icon: Compass,
    title: "Discover",
    desc: "Cari developer berdasarkan posisi, keyword, negara, kota, dan teknologi.",
  },
  {
    icon: BarChart3,
    title: "Compare",
    desc: "Bandingkan kandidat memakai metrik nyata yang tersedia di dalam sistem.",
  },
  {
    icon: MessageSquare,
    title: "Engage",
    desc: "Simpan kandidat ke pipeline dan mulai percakapan lewat chat internal.",
  },
];

const principles = [
  { icon: ShieldCheck, label: "API resmi GitHub, bukan scraping" },
  { icon: EyeOff, label: "Tanpa ekspor data massal" },
  { icon: UserCheck, label: "Manusia pengambil keputusan akhir" },
];

export function HowItWorks() {
  return (
    <div className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-jade-200/70 blur-[130px]" />
      <Section
        id="cara-kerja"
        eyebrow="Cara Kerja"
        title={
          <>
            Lima langkah, dari bukti <span className="text-gradient">ke keputusan.</span>
          </>
        }
        description="Gitscope menyatukan data proyek, kontribusi, dan teknologi developer ke dalam satu ruang kerja yang mudah dipahami."
      >
        <div className="relative mx-auto max-w-5xl">
          {/* connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-jade-500/40 to-transparent lg:block" />

          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="glass relative flex gap-4 rounded-3xl p-5 lg:flex-col lg:items-center lg:gap-0 lg:p-4 lg:text-center"
              >
                <div className="relative shrink-0">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-jade-600 to-emerald-500 text-white shadow-[0_12px_32px_-10px_rgba(10,198,99,0.7)]">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-pine-950 text-[10px] font-bold text-jade-300">
                    {i + 1}
                  </span>
                </div>
                <div className="lg:mt-4">
                  <h3 className="font-display text-base font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-mist">{s.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* responsible principles */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
          {principles.map((p) => (
            <span
              key={p.label}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-ink"
            >
              <p.icon className="h-3.5 w-3.5 text-jade-600" />
              {p.label}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
}
