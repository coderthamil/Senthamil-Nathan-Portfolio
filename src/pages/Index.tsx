import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <PhilosophySection />
      <ContactSection />
    </div>
  );
};

export default Index;
