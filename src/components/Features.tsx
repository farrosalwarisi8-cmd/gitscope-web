"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Compass,
  Layers,
  MessageSquare,
  Rocket,
  FileText,
} from "lucide-react";
import { Section } from "./Section";

const features = [
  {
    icon: Gauge,
    tint: "bg-jade-500/15 text-jade-700",
    title: "Transparent Scoring",
    desc: "Setiap skor dilengkapi rincian komponen dan evidence — recruiter memahami konteks di balik angka, bukan menebak-nebak.",
  },
  {
    icon: Compass,
    tint: "bg-emerald-500/15 text-emerald-700",
    title: "Global Talent Discovery",
    desc: "Cari developer berdasarkan negara, kota, teknologi, dan ketersediaan — cakupan global, tidak terbatas jaringan lokal.",
  },
  {
    icon: Layers,
    tint: "bg-gold-400/20 text-gold-500",
    title: "Candidate Pipeline",
    desc: "Simpan kandidat ke pipeline — Saved, Interviewing, Hired — tersimpan permanen dan mudah ditindaklanjuti.",
  },
  {
    icon: MessageSquare,
    tint: "bg-teal-500/15 text-teal-700",
    title: "Realtime Chat",
    desc: "Hubungi developer lewat chat internal dengan konteks yang jelas — tanpa menampilkan email pribadi mereka.",
  },
  {
    icon: Rocket,
    tint: "bg-jade-500/15 text-jade-700",
    title: "Project Publishing",
    desc: "Developer mempublikasikan proyek terverifikasi: deskripsi, teknologi, demo, dan peran mereka di dalamnya.",
  },
  {
    icon: FileText,
    tint: "bg-gold-400/20 text-gold-500",
    title: "Export Report",
    desc: "Buat laporan PDF per kandidat — ringkasan skor, evidence, heatmap kontribusi, dan informasi proyek.",
  },
];

export function Features() {
  return (
    <div className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-jade-200/60 blur-[120px]" />
      <Section
        id="fitur"
        eyebrow="Fitur Utama"
        title={
          <>
            Satu ruang kerja untuk <span className="text-gradient">talent discovery.</span>
          </>
        }
        description="Dari analisis bukti teknis sampai pipeline dan chat internal — semua proses screening berjalan di satu tempat."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-shine glass group rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-jade-500/40 hover:shadow-[0_24px_60px_-20px_rgba(10,198,99,0.4)]"
            >
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${f.tint} transition group-hover:scale-110`}
              >
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display mt-5 text-[17px] font-bold leading-snug text-ink">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-mist">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
