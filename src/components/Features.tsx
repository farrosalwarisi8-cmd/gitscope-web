"use client";

import { motion } from "framer-motion";
import {
  Search,
  FolderGit2,
  Trophy,
  Languages,
  CalendarDays,
  Bookmark,
  Share2,
  Zap,
} from "lucide-react";
import { Section } from "./Section";

const features = [
  {
    icon: Search,
    tint: "bg-jade-500/15 text-jade-700",
    title: "Cari Profil Secepat Kilat",
    desc: "Temukan developer mana pun dalam hitungan detik — lengkap dengan saran pintar dan riwayat pencarianmu.",
  },
  {
    icon: FolderGit2,
    tint: "bg-emerald-500/15 text-emerald-700",
    title: "Bedah Repositori Total",
    desc: "Intip stars, forks, dan README setiap repo dalam tampilan mobile yang rapi dan nyaman dibaca.",
  },
  {
    icon: Trophy,
    tint: "bg-gold-400/20 text-gold-500",
    title: "Ranking Indonesia & Dunia",
    desc: "Naiki papan peringkat berdasarkan followers dan impact — buktikan kamu termasuk yang terbaik!",
  },
  {
    icon: Languages,
    tint: "bg-teal-500/15 text-teal-700",
    title: "Peta Bahasa Pemrograman",
    desc: "Lihat bahasa apa saja yang dikuasai setiap developer lewat visualisasi yang cantik dan mudah dipahami.",
  },
  {
    icon: CalendarDays,
    tint: "bg-jade-500/15 text-jade-700",
    title: "Heatmap Kontribusi",
    desc: "Setahun penuh aktivitas coding tersaji dalam grafik kontribusi yang tajam dan bisa digeser-geser.",
  },
  {
    icon: Bookmark,
    tint: "bg-emerald-500/15 text-emerald-700",
    title: "Simpan & Baca Offline",
    desc: "Bookmark profil dan repo favoritmu — tetap bisa dibuka kapan pun, bahkan tanpa internet.",
  },
  {
    icon: Share2,
    tint: "bg-teal-500/15 text-teal-700",
    title: "Kartu Profil Siap Flexing",
    desc: "Bikin kartu profil keren berisi statistikmu dan pamerkan ke medsos dalam sekali ketuk!",
  },
  {
    icon: Zap,
    tint: "bg-gold-400/20 text-gold-500",
    title: "Ngebut Tanpa Lemot",
    desc: "Rasakan kecepatan setara aplikasi bawaan: data tersimpan cerdas dan scrolling mulus 60fps.",
  },
];

export function Features() {
  return (
    <div className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-jade-200/60 blur-[120px]" />
      <Section
        id="fitur"
        eyebrow="Kenapa GitScope?"
        title={
          <>
            Semua kehebatan GitHub, <span className="text-gradient">dalam genggamanmu.</span>
          </>
        }
        description="Delapan alasan kenapa ratusan ribu developer beralih ke GitScope — dan kenapa kamu harus ikut sekarang juga."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
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
