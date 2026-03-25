import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompaniesCarousel from "@/components/CompaniesCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
