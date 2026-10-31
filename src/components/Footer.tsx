import Image from "next/image";
import { Globe, AtSign, Mail } from "lucide-react";
import { GithubIcon } from "./icons";

const columns = [
  {
    title: "Produk",
    links: ["Fitur Unggulan", "Ranking", "Yang Baru", "Roadmap"],
  },
  {
    title: "Bantuan",
    links: ["Blog", "Pusat Bantuan", "GitHub API", "Status Server"],
  },
  {
    title: "Kami",
    links: ["Tentang", "Kontak", "Privasi", "Syarat"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="relative h-10 w-10 overflow-hidden rounded-2xl border border-ink/10">
                <Image src="/assets/logo.jpeg" alt="GitScope logo" fill sizes="40px" className="object-cover" />
              </span>
              <span className="font-display text-lg font-bold text-ink">
                Git<span className="text-gradient">Scope</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              Teman setia para developer Indonesia. Kepoin profil, bedah repo, dan kejar ranking —
              semuanya dari HP-mu. Gratis selamanya!
            </p>
            <div className="mt-6 flex gap-2.5">
              {[
                { icon: GithubIcon, label: "GitHub" },
                { icon: Globe, label: "Website" },
                { icon: AtSign, label: "Social" },
                { icon: Mail, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-ink/70 transition hover:border-jade-500/40 hover:text-jade-700"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-sm text-mist transition hover:text-jade-700"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-xs text-mist sm:flex-row">
          <p>© 2026 GitScope. Dibuat dengan bangga oleh developer, untuk developer Indonesia.</p>
          <p>
            Data dari <span className="text-ink/70">GitHub API</span> · Bukan afiliasi resmi
            GitHub, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
