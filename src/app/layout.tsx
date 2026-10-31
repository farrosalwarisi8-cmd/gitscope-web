import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GitScope — GitHub di Sakumu: Cari Profil, Bedah Repo, Kejar Ranking!",
  description:
    "GitScope, aplikasi mobile gratis buat menjelajahi GitHub. Kepoin profil developer mana pun, bedah repositorinya, dan adu peringkat dengan developer terbaik Indonesia — tanpa perlu akun!",
  metadataBase: new URL("https://gitscope.app"),
  openGraph: {
    title: "GitScope — GitHub di Sakumu!",
    description:
      "Kepoin profil, bedah repo, dan kejar ranking developer Indonesia. Gratis, tanpa akun!",
    images: ["/assets/screen-profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F3F8F4] font-body text-[#0B2117] antialiased">
        {children}
      </body>
    </html>
  );
}
