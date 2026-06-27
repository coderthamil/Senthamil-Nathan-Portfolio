import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompaniesCarousel from "@/components/CompaniesCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import BackendProjectsSection from "@/components/BackendProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <VideoBackground />
      <Navbar />
      <HeroSection />
      <CompaniesCarousel />
      <ParallaxSection speed={0.4}><ProjectsSection /></ParallaxSection>
      <ParallaxSection speed={0.35}><BackendProjectsSection /></ParallaxSection>
      <ParallaxSection speed={0.3}><SkillsSection /></ParallaxSection>
      <ParallaxSection speed={0.5}><PhilosophySection /></ParallaxSection>
      <ParallaxSection speed={0.2}><ContactSection /></ParallaxSection>
      <Footer />
    </div>
  );
};

export default Index;
