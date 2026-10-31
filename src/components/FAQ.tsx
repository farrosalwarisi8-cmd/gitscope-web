"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section } from "./Section";
import { cn } from "@/lib/cn";

const faqs = [
  {
    q: "Beneran gratis? Nggak ada jebakan?",
    a: "Beneran 100% gratis, tanpa jebakan! Semua fitur inti — cari profil, bedah repositori, sampai ranking global — bisa dipakai tanpa bayar dan tanpa bikin akun. Install, buka, langsung gas eksplorasi!",
  },
  {
    q: "Harus punya akun GitHub dulu?",
    a: "Nggak perlu sama sekali! GitScope memakai GitHub public API, jadi kamu bisa kepoin profil dan repo siapa pun sebagai tamu. Menyambungkan akun GitHub sifatnya opsional — cuma buat kamu yang mau limit pencarian lebih besar.",
  },
  {
    q: "Ranking-nya dihitung dari apa?",
    a: "Dari kombinasi followers, stars, dan aktivitas kontribusi yang dihitung ulang setiap hari. Saring per negara buat lihat peringkatmu di Indonesia, atau tantang dirimu di papan dunia — terus ketuk profil mana pun buat dipelajari!",
  },
  {
    q: "Data pribadi saya aman?",
    a: "Aman banget. GitScope tidak menyimpan password atau token GitHub di server — semuanya terkunci di HP-mu sendiri. Kami tidak menjual data dan tidak ada iklan mengganggu. Privasi kamu, prioritas kami.",
  },
  {
    q: "Bisa dipakai di HP apa saja?",
    a: "Bisa! GitScope tersedia untuk Android (Google Play) dan iPhone (App Store). Ukurannya ringan, jalan mulus di HP kentang sekalipun. Klik tombol download di bawah dan gabung dengan 120 ribu+ developer lainnya!",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="relative py-20 sm:py-28">
      <Section
        id="faq"
        eyebrow="Tanya Jawab"
        title={
          <>
            Masih ragu? <span className="text-gradient">Nih kami yakinkan!</span>
          </>
        }
        description="Semua yang perlu kamu tahu sebelum install — dibaca 2 menit, langsung pengen download."
      >
        <div className="mx-auto max-w-2xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-colors",
                  isOpen
                    ? "border-jade-500/40 bg-white shadow-[0_16px_40px_-20px_rgba(10,198,99,0.4)]"
                    : "border-ink/10 bg-white/70",
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-bold text-ink sm:text-base">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white",
                      isOpen ? "bg-gradient-to-br from-jade-600 to-emerald-500" : "bg-ink/10 text-ink",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-mist sm:px-6 sm:text-[15px]">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
