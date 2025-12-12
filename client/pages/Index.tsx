import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import StatsSection from "@/components/StatsSection";
import Ticker from "@/components/Ticker";
// import CTASection from "@/components/CTASection"; // Remove this
import ProjectCards from "@/components/ProjectCards"; // Keep this
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <div id="hero">
        <HeroSection />
      </div>
      <LogoCarousel />
      <div id="stats">
        <StatsSection />
      </div>
      <Ticker />
      <div id="projects">
        <ProjectCards />
      </div>
      {/* <CTASection /> */} {/* Removed */}
      <Footer />
    </div>
  );
}
