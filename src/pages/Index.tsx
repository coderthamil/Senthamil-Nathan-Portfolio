import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompaniesCarousel from "@/components/CompaniesCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GradientMesh from "@/components/GradientMesh";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GradientMesh />
      <div className="fixed inset-0 -z-5 pointer-events-none">
        <ParticlesBackground />
      </div>
      <Navbar />
      <HeroSection />
      <CompaniesCarousel />
      <ProjectsSection />
      <SkillsSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
