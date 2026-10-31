"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { UserRound, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "./Section";
import { cn } from "@/lib/cn";

const tabs = [
  {
    id: "profile",
    label: "Bedah Profil",
    icon: UserRound,
    image: "/assets/screen-profile.png",
    alt: "Layar profil GitScope",
    title: "Profil yang bikin betah di-scroll",
    points: [
      "Foto, bio, followers & following — semua terlihat dalam sekali lirik",
      "Repo andalan dengan jumlah bintangnya, tersusun rapi",
      "Grafik bahasa dan kontribusi setahun penuh dalam satu layar",
    ],
  },
  {
    id: "ranking",
    label: "Ranking Nasional",
    icon: Trophy,
    image: "/assets/screen-ranking.png",
    alt: "Layar ranking GitScope",
    title: "Buktikan kamu yang terbaik!",
    points: [
      "Papan peringkat Indonesia & dunia yang update setiap hari",
      "Podium spesial untuk 3 developer teratas — kejar posisinya!",
      "Ketuk nama siapa pun untuk langsung intip profilnya",
    ],
  },
] as const;

export function Preview() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const tab = tabs[active];

  const go = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  return (
    <div className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-jade-200/70 blur-[130px]" />
      <Section
        id="preview"
        eyebrow="Intip Aplikasinya"
        title={
          <>
            Dibuat untuk disentuh, <span className="text-gradient">bukan di-klik.</span>
          </>
        }
        description="Dua layar andalan, langsung dari aplikasi aslinya. Geser-geser sesukamu — persis seperti di HP-mu nanti."
      >
        {/* tab switcher */}
        <div className="glass mx-auto mb-10 flex w-full max-w-md items-center gap-1 rounded-2xl !bg-white/70 p-1.5">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => go(i)}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition",
                i === active
                  ? "bg-gradient-to-r from-jade-600 to-emerald-500 text-white shadow-lg"
                  : "text-mist hover:text-ink",
              )}
            >
              <t.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{t.label}</span>
              <span className="sm:hidden">{i === 0 ? "Profil" : "Ranking"}</span>
            </button>
          ))}
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-6">
          {/* phone */}
          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[330px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-jade-300/60 blur-[90px]" />
            <div className="ring-conic animate-spin-slow absolute -inset-2 rounded-[2.8rem] opacity-30 blur-[6px]" />
            <div className="relative overflow-hidden rounded-[2.6rem] border-4 border-white bg-white shadow-[0_40px_100px_-24px_rgba(6,110,57,0.5)]">
              {/* notch */}
              <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-pine-950" />
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={tab.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 90 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -90 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Image
                    src={tab.image}
                    alt={tab.alt}
                    width={540}
                    height={1170}
                    className="h-auto w-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* arrows */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                aria-label="Layar sebelumnya"
                onClick={() => go((active + 1) % tabs.length)}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:border-jade-500/40"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {tabs.map((t, i) => (
                  <button
                    key={t.id}
                    aria-label={`Lihat ${t.label}`}
                    onClick={() => go(i)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === active ? "w-8 bg-gradient-to-r from-jade-500 to-emerald-400" : "w-2 bg-ink/20",
                    )}
                  />
                ))}
              </div>
              <button
                aria-label="Layar berikutnya"
                onClick={() => go((active + 1) % tabs.length)}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:border-jade-500/40"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* copy */}
          <div className="text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">{tab.title}</h3>
                <ul className="mx-auto mt-6 max-w-md space-y-4 lg:mx-0">
                  {tab.points.map((p, i) => (
                    <li key={p} className="glass flex items-start gap-3 rounded-2xl p-4 text-left">
                      <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-jade-600 to-emerald-500 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-sm leading-relaxed text-ink/80">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
}
