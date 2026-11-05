"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section } from "./Section";
import { cn } from "@/lib/cn";

const faqs = [
  {
    q: "Apa itu Gitscope?",
    a: "Gitscope adalah platform talent discovery yang membantu perusahaan dan recruiter menemukan developer terbaik berdasarkan bukti nyata dari aktivitas dan karya mereka di GitHub — bukan sekadar klaim di CV. Data proyek, kontribusi, dan teknologi disatukan ke dalam satu ruang kerja yang mudah dipahami.",
  },
  {
    q: "Bagaimana cara kerja scoring-nya?",
    a: "Data diambil melalui API resmi GitHub dan dianalisis di sisi server. Setiap skor dilengkapi rincian komponen dan evidence yang bisa ditelusuri recruiter. Skor bukan keputusan akhir dan tidak menggantikan penilaian manusia — ia berfungsi sebagai sinyal bantu agar evaluasi dimulai dari informasi yang lebih relevan.",
  },
  {
    q: "Apakah developer bisa mengontrol visibilitasnya?",
    a: "Bisa, sepenuhnya. Developer hanya muncul di Feed dan Discover jika memilih untuk tampil (opt-in). Mereka dapat mengatur status ketersediaan kerja, domisili, notifikasi, memblokir recruiter tertentu, hingga menghapus akun kapan saja.",
  },
  {
    q: "Bagaimana recruiter menghubungi developer?",
    a: "Melalui realtime chat di dalam aplikasi dengan konteks yang jelas — nama perusahaan dan posisi yang tersedia. Email pribadi developer tidak ditampilkan dan tidak diekspor. Developer tetap dapat menerima, menolak, memblokir, atau melaporkan komunikasi yang tidak diinginkan.",
  },
  {
    q: "Bagaimana data developer dilindungi?",
    a: "Gitscope menggunakan API resmi GitHub (bukan scraping), tidak mengekspor data developer secara massal, tidak menampilkan email pribadi, dan tidak memakai atribut sensitif seperti etnis, agama, gender, atau usia. Kami juga melakukan audit bias secara berkala dan menyediakan mekanisme blokir, laporan, serta penghapusan akun.",
  },
  {
    q: "Bagaimana cara ikut tahap beta?",
    a: "Klik tombol Download di halaman ini. Gitscope sedang membuka pendaftaran beta untuk dua sisi: recruiter yang ingin menemukan talenta teknis secara global, dan developer yang ingin menampilkan karya terbaiknya sambil tetap memegang kendali atas visibilitas serta komunikasi.",
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
            Masih penasaran? <span className="text-gradient">Kami jelaskan.</span>
          </>
        }
        description="Hal-hal yang paling sering ditanyakan tentang Gitscope — dari cara kerja skor sampai privasi developer."
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
