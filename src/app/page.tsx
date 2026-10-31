import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Preview } from "@/components/Preview";
import { Ranking } from "@/components/Ranking";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#F3F8F4] text-[#0B2117]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Preview />
        <Ranking />
        <Testimonials />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
