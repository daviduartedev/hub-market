import { CategorySection } from "@/components/CategorySection";
import { FeaturedRadarOffer } from "@/components/FeaturedRadarOffer";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { Header } from "@/components/Header";
import { HeroRadar } from "@/components/HeroRadar";
import { MostViewed } from "@/components/MostViewed";
import { ProductRail } from "@/components/ProductRail";
import { TopRadarBar } from "@/components/TopRadarBar";
import { TrustStrip } from "@/components/TrustStrip";
import { WhatsappCTA } from "@/components/WhatsappCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E7EAEE] font-sans text-[#111111]">
      <TopRadarBar />
      <Header />
      <HeroRadar />
      <TrustStrip />
      <FeaturedRadarOffer />
      <ProductRail />
      <WhatsappCTA />
      <CategorySection />
      <MostViewed />
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
