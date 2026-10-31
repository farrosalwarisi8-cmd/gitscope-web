"use client";

import { motion } from "framer-motion";
import { Crown, Medal, ArrowUpRight, MapPin } from "lucide-react";
import { Section } from "./Section";
import { cn } from "@/lib/cn";

const leaders = [
  { rank: 1, name: "Linus Torvalds", handle: "torvalds", followers: "198K", country: "Finland", trend: "+4.2K" },
  { rank: 2, name: "Evan You", handle: "yyx990803", followers: "112K", country: "China", trend: "+2.8K" },
  { rank: 3, name: "Dan Abramov", handle: "gaearon", followers: "98K", country: "USA", trend: "+1.9K" },
  { rank: 4, name: "Sindre Sorhus", handle: "sindresorhus", followers: "87K", country: "Sweden", trend: "+1.4K" },
  { rank: 5, name: "Jovtim", handle: "jovtim", followers: "1.2K", country: "Indonesia", trend: "+320" },
];

const podiumOrder = [leaders[1], leaders[0], leaders[2]];

export function Ranking() {
  return (
    <div className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-jade-200/70 blur-[130px]" />
      <Section
        id="ranking"
        eyebrow="Ranking Live"
        title={
          <>
            Naiki podium <span className="text-gradient">developer Indonesia!</span>
          </>
        }
        description="GitScope memeringkat developer dari followers dan kontribusinya — saring per negara, pantau kenaikanmu, dan rebut podium tertinggi!"
      >
        {/* podium — order is 2-1-3 on all sizes, like the real app */}
        <div className="mx-auto grid max-w-3xl grid-cols-3 items-end gap-3 sm:gap-5">
          {podiumOrder.map((p, i) => {
            const first = p.rank === 1;
            return (
              <motion.div
                key={p.handle}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className={cn(
                    "relative flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold sm:h-16 sm:w-16",
                    first
                      ? "bg-gradient-to-br from-gold-300 via-gold-400 to-gold-500 text-[#3A2500] shadow-[0_0_40px_-6px_rgba(245,166,35,0.7)]"
                      : "glass font-bold text-ink",
                  )}
                >
                  {p.name.charAt(0)}
                  {first && (
                    <span className="absolute -top-6 text-gold-400">
                      <Crown className="h-6 w-6 fill-gold-300/60" />
                    </span>
                  )}
                  <span
                    className={cn(
                      "absolute -bottom-1 rounded-full px-2 py-0.5 text-[10px] font-bold",
                      first ? "bg-pine-950 text-gold-300" : "bg-ink/10 text-ink",
                    )}
                  >
                    #{p.rank}
                  </span>
                </div>
                <div
                  className={cn(
                    "mt-4 w-full rounded-t-3xl border-x border-t border-ink/10 bg-white px-2 pb-5 pt-4 text-center shadow-[0_-12px_40px_-20px_rgba(10,198,99,0.35)]",
                    first ? "bg-gradient-to-b from-jade-100 to-white pt-6" : "",
                    first ? "min-h-[150px] sm:min-h-[180px]" : "min-h-[120px] sm:min-h-[145px]",
                  )}
                >
                  <p className="truncate text-xs font-bold text-ink sm:text-sm">{p.name}</p>
                  <p className="mt-0.5 truncate text-[11px] text-mist">@{p.handle}</p>
                  <p className="font-display mt-2 text-sm font-bold text-jade-700 sm:text-base">
                    {p.followers}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* leaderboard list */}
        <div className="glass mx-auto mt-8 max-w-2xl overflow-hidden !bg-white/80 rounded-3xl">
          {leaders.map((p, i) => (
            <motion.a
              key={p.handle}
              href="#download"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-center gap-3 border-b border-ink/[0.07] px-4 py-3.5 transition last:border-0 hover:bg-jade-500/[0.07] sm:gap-4 sm:px-6 sm:py-4"
            >
              <span
                className={cn(
                  "font-display w-7 shrink-0 text-center text-sm font-bold",
                  p.rank <= 3 ? "text-jade-700" : "text-ink/35",
                )}
              >
                {p.rank}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-jade-500 to-emerald-400 text-sm font-bold text-white sm:h-11 sm:w-11">
                {p.name.charAt(0)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5 text-sm font-bold text-ink">
                  <span className="truncate">{p.name}</span>
                  {p.rank <= 3 && <Medal className="h-3.5 w-3.5 shrink-0 text-gold-400" />}
                </span>
                <span className="mt-0.5 flex items-center gap-1 text-[11px] text-mist sm:text-xs">
                  <MapPin className="h-3 w-3" />
                  {p.country} · {p.followers} followers
                </span>
              </span>
              <span className="hidden shrink-0 rounded-full bg-jade-500/12 px-2.5 py-1 text-[11px] font-bold text-jade-700 sm:block">
                {p.trend}
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/25 transition group-hover:translate-x-0.5 group-hover:text-jade-600" />
            </motion.a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-mist">
          Data contoh untuk ilustrasi — ranking asli di aplikasi update setiap hari. Namamu bisa ada di sini!
        </p>
      </Section>
    </div>
  );
}
