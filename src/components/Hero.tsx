"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Apple,
  Play,
  Search,
  Star,
  TrendingUp,
  Users,
  GitFork,
  Flame,
  BadgeCheck,
  Check,
} from "lucide-react";

const stats = [
  { icon: Users, value: "120K+", label: "Pengguna Aktif" },
  { icon: Search, value: "2,4 Jt", label: "Pencarian" },
  { icon: Star, value: "4.9", label: "Rating Pengguna" },
];

const benefits = [
  "100% gratis, tanpa akun",
  "Ranking Indonesia update harian",
  "Data langsung dari GitHub",
];

const avatars = [
  { initial: "R", tint: "from-jade-500 to-emerald-600" },
  { initial: "S", tint: "from-gold-400 to-gold-500" },
  { initial: "D", tint: "from-teal-500 to-emerald-600" },
  { initial: "A", tint: "from-jade-600 to-teal-600" },
  { initial: "+", tint: "from-pine-800 to-pine-950" },
];

const floatingCards = [
  {
    className: "left-0 top-16 sm:-left-6 sm:top-24",
    delay: "animate-float-slow",
    content: (
      <>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-jade-500/15 text-jade-700">
          <TrendingUp className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-xs font-bold text-ink">+2.450 stars</span>
          <span className="block text-[11px] text-mist">didapat minggu ini</span>
        </span>
      </>
    ),
  },
  {
    className: "right-0 top-40 sm:-right-8 sm:top-52",
    delay: "animate-float-slower",
    content: (
      <>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-400/20 text-gold-500">
          <Flame className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-xs font-bold text-ink">Peringkat #3</span>
          <span className="block text-[11px] text-mist">Indonesia · bulan ini</span>
        </span>
      </>
    ),
  },
  {
    className: "bottom-24 left-0 sm:-left-10 sm:bottom-28",
    delay: "animate-float-slow",
    content: (
      <>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
          <GitFork className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-xs font-bold text-ink">torvalds/linux</span>
          <span className="block text-[11px] text-mist">trending di Systems</span>
        </span>
      </>
    ),
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* ambient background — mint wash like the app */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid mask-fade-y absolute inset-0 opacity-70" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-jade-300/50 blur-[140px]" />
        <div className="absolute -left-40 top-64 h-72 w-72 rounded-full bg-jade-200/70 blur-[110px]" />
        <div className="absolute -right-40 top-40 h-72 w-72 rounded-full bg-gold-300/25 blur-[110px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="glass inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4 text-xs font-semibold text-ink"
          >
            <span className="rounded-full bg-gradient-to-r from-jade-600 to-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Gratis
            </span>
            v2.0 — Ranking Indonesia sudah live!
            <BadgeCheck className="h-3.5 w-3.5 text-jade-600" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display mt-6 text-[2.6rem] font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            Seluruh Dunia GitHub,
            <br />
            <span className="text-gradient">Kini di Sakumu.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-mist sm:text-lg lg:mx-0"
          >
            GitScope mengubah HP-mu jadi radar developer: kepoin profil siapa pun dalam
            sekejap, bedah repositorinya sampai ke akar, dan adu peringkat dengan developer
            terbaik Indonesia. Semuanya gratis, tanpa perlu akun!
          </motion.p>

          {/* benefit checklist */}
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 flex max-w-xl flex-wrap items-center justify-center gap-2 lg:mx-0 lg:justify-start"
          >
            {benefits.map((b) => (
              <li
                key={b}
                className="glass flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold text-ink"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-jade-500 text-white">
                  <Check className="h-3 w-3" strokeWidth={3.5} />
                </span>
                {b}
              </li>
            ))}
          </motion.ul>

          {/* fake search */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="glass mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-2xl p-2 pl-4 lg:mx-0"
          >
            <Search className="h-5 w-5 shrink-0 text-jade-600" />
            <input
              type="text"
              defaultValue="torvalds"
              aria-label="Cari username GitHub"
              className="w-full bg-transparent text-sm text-ink placeholder:text-mist/70 focus:outline-none sm:text-[15px]"
              placeholder="Ketik username idola-mu…"
            />
            <a
              href="#preview"
              className="shrink-0 rounded-xl bg-gradient-to-r from-jade-600 to-emerald-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg transition hover:brightness-110 sm:px-6"
            >
              Cari!
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mx-auto mt-2.5 max-w-xl text-xs text-mist lg:mx-0"
          >
            Coba ketik <span className="font-bold text-jade-700">“torvalds”</span>,{" "}
            <span className="font-bold text-jade-700">“yyx990803”</span>, atau username
            GitHub-mu sendiri — hasilnya muncul dalam sekejap!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#download"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-pine-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 sm:w-auto"
            >
              <Apple className="h-5 w-5" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-wider opacity-60">
                  Download di
                </span>
                App Store
              </span>
            </a>
            <a
              href="#download"
              className="glass flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-jade-500/40 sm:w-auto"
            >
              <Play className="h-5 w-5 fill-jade-500 text-jade-500" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-mist">
                  Dapatkan di
                </span>
                Google Play
              </span>
            </a>
          </motion.div>

          {/* social proof */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-3 lg:mx-0 lg:justify-start"
          >
            <div className="flex -space-x-2.5">
              {avatars.map((a, i) => (
                <span
                  key={i}
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-[11px] font-bold text-white ring-2 ring-[#F3F8F4] ${a.tint}`}
                >
                  {a.initial}
                </span>
              ))}
            </div>
            <div className="text-left">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="mt-0.5 text-xs font-semibold text-ink">
                Dicintai <span className="font-bold text-jade-700">120.000+ developer</span> Indonesia
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 flex items-center justify-center gap-6 border-t border-ink/10 pt-6 sm:gap-8 lg:justify-start"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display flex items-center justify-center gap-1.5 text-xl font-bold text-ink sm:text-2xl lg:justify-start">
                  <s.icon className="h-4 w-4 text-jade-600" />
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-mist sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* phones */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-[420px] items-end justify-center gap-3 pb-4 sm:max-w-[520px] sm:gap-5 lg:max-w-none"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-jade-300/60 blur-[100px]" />

          {/* back phone — ranking */}
          <div className="relative min-h-[280px] w-[46%] rotate-[-7deg] overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-[0_30px_80px_-20px_rgba(6,110,57,0.45)]">
            <Image
              src="/assets/screen-ranking.png"
              alt="Layar ranking GitScope — podium developer teratas"
              width={540}
              height={1170}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* front phone — profile */}
          <div className="relative -ml-8 min-h-[320px] w-[54%] rotate-[5deg] overflow-hidden rounded-[2.2rem] border-4 border-white bg-white shadow-[0_40px_100px_-20px_rgba(6,110,57,0.55)] sm:-ml-10">
            <Image
              src="/assets/screen-profile.png"
              alt="Layar profil GitScope — statistik developer Jovtim"
              width={540}
              height={1170}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* floating glass cards */}
          {floatingCards.map((c, i) => (
            <div
              key={i}
              className={`glass absolute z-10 flex items-center gap-2.5 rounded-2xl px-3.5 py-3 ${c.className} ${c.delay}`}
            >
              {c.content}
            </div>
          ))}
        </motion.div>
      </div>

      {/* marquee strip */}
      <div className="relative mt-14 border-y border-ink/10 bg-white/70 py-4 sm:mt-20">
        <div className="mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-10 pr-10 text-sm font-semibold text-mist">
            {Array.from({ length: 2 }).flatMap((_, dup) =>
              [
                "Cari profil secepat kilat",
                "Bedah repo apa pun",
                "Ranking Indonesia & dunia",
                "Peta bahasa pemrograman",
                "Heatmap kontribusi",
                "Tampilan bersih & cerah",
                "Simpan & baca offline",
                "Kartu profil siap flexing",
              ].map((t, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-10">
                  <span className="whitespace-nowrap">{t}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-jade-500" />
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
