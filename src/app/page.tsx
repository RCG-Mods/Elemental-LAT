import { RetroBackground } from "@/components/RetroBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { HowToJoin } from "@/components/HowToJoin";
import { Gallery } from "@/components/Gallery";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <RetroBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <HowToJoin />
        <Gallery />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
