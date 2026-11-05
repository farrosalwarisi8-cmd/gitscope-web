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
  title: "Gitscope — Temukan Talenta dari Bukti Nyata",
  description:
    "Platform talent discovery berbasis bukti nyata dari GitHub. Temukan developer lewat proyek, kontribusi, dan teknologi yang benar-benar dipakai — lengkap dengan scoring transparan, candidate pipeline, dan chat internal.",
  metadataBase: new URL("https://gitscope.app"),
  openGraph: {
    title: "Gitscope — Temukan Talenta dari Bukti Nyata",
    description:
      "Bukan sekadar CV. Lihat karya yang benar-benar berbicara. Talent discovery berbasis bukti nyata dari GitHub.",
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
