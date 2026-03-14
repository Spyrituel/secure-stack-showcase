import CyberBackground from "@/components/CyberBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import TechLabSection from "@/components/TechLabSection";
import AwsCloudSection from "@/components/AwsCloudSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CyberBackground />
      <Navbar />
      <HeroSection />
      <ParallaxSection offset={25}>
        <AboutSection />
      </ParallaxSection>
      <ParallaxSection offset={35}>
        <SkillsSection />
      </ParallaxSection>
      <ParallaxSection offset={20}>
        <TechLabSection />
      </ParallaxSection>
      <ParallaxSection offset={30}>
        <AwsCloudSection />
      </ParallaxSection>
      <ParallaxSection offset={25}>
        <TimelineSection />
      </ParallaxSection>
      <ParallaxSection offset={15}>
        <ContactSection />
      </ParallaxSection>
      <footer className="relative z-10 py-8 text-center text-xs text-muted-foreground border-t border-border/50">
        © 2025 Alaeddine Hamadouche — Portfolio
      </footer>
    </div>
  );
};

export default Index;
