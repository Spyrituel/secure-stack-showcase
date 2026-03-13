import CyberBackground from "@/components/CyberBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import TechLabSection from "@/components/TechLabSection";
import AwsCloudSection from "@/components/AwsCloudSection";
import HybridProfileSection from "@/components/HybridProfileSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CyberBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <TechLabSection />
      <AwsCloudSection />
      <HybridProfileSection />
      <ContactSection />
      <footer className="relative z-10 py-8 text-center text-xs text-muted-foreground border-t border-border">
        © 2025 Alaeddine Hamadouche — Portfolio
      </footer>
    </div>
  );
};

export default Index;
