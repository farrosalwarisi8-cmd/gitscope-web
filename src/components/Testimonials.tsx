"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section } from "./Section";

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Mobile Developer · Jakarta",
    initial: "R",
    tint: "from-jade-500 to-emerald-600",
    text: "Gila sih, akhirnya bisa kepoin profil GitHub tanpa buka laptop! Ranking Indonesia-nya bikin gue semangat ngoding tiap hari biar naik peringkat!",
  },
  {
    name: "Sarah Chen",
    role: "Frontend Engineer · Singapura",
    initial: "S",
    tint: "from-gold-400 to-gold-500",
    text: "Nggak nyangka aplikasi GitHub bisa secantik ini! Grafik bahasa dan heatmap-nya juara — tiap pagi gue buka GitScope kayak buka medsos.",
  },
  {
    name: "Dimas Anggara",
    role: "Mahasiswa IT · Bandung",
    initial: "D",
    tint: "from-teal-500 to-emerald-600",
    text: "Buat nyari referensi repo tugas akhir, GitScope jauh lebih cepat dari browser. Kartu profilnya juga keren banget buat pamer di LinkedIn!",
  },
  {
    name: "Amara Okafor",
    role: "Maintainer Open Source · Lagos",
    initial: "A",
    tint: "from-jade-600 to-teal-600",
    text: "Fitur bookmark + offline-nya penyelamat pas internet lemot. Akhirnya komunitas lokal kami dapat sorotan yang layak lewat leaderboard!",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-jade-200/50 blur-[130px]" />
      <Section
        id="testimoni"
        eyebrow="Kata Mereka"
        title={
          <>
            Mereka sudah pindah. <span className="text-gradient">Giliranmu kapan?</span>
          </>
        }
        description="Rating 4.9 dari 12.400+ ulasan bintang lima di App Store dan Google Play. Jangan cuma percaya kata kami!"
      >
        <div className="mask-fade-x -mx-5 overflow-hidden sm:-mx-8">
          <div className="animate-marquee flex w-max gap-4 pr-4 sm:gap-5 sm:pr-5">
            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.figure
                key={`${t.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="glass w-[300px] shrink-0 rounded-3xl !bg-white/85 p-6 text-left sm:w-[360px]"
              >
                <Quote className="h-6 w-6 text-jade-500" />
                <blockquote className="mt-3 text-sm leading-relaxed text-ink/85">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-base font-bold text-white ${t.tint}`}
                  >
                    {t.initial}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{t.name}</span>
                    <span className="block text-xs text-mist">{t.role}</span>
                  </span>
                </figcaption>
                <div className="mt-4">
                  <Stars />
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
