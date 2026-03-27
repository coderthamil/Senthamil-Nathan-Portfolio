import { Search, Layers, Layout, Grid3X3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skills = [
  {
    title: "User Research & Strategy",
    description: "User interviews, persona development, journey mapping, competitive audits, and usability testing to ground every design decision in real user needs.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Visual & Interaction Design",
    description: "Pixel-perfect interfaces with thoughtful typography, color systems, micro-interactions, and motion design that create memorable experiences.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "Wireframing & Prototyping",
    description: "From low-fidelity sketches to high-fidelity interactive prototypes in Figma and Photoshop, enabling rapid iteration and stakeholder alignment.",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "Design Systems",
    description: "Building scalable component libraries, token systems, and comprehensive documentation that ensure consistency across products and teams.",
    icon: <Grid3X3 className="w-5 h-5" />,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />

      <div className="container relative z-10">
        <ScrollReveal className="max-w-2xl mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-6xl text-foreground font-display italic mb-6">
            Design with <span className="text-primary">purpose.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every project begins with understanding people. I combine rigorous research with creative intuition to deliver designs that solve real problems beautifully.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.title} delay={i * 0.1}>
              <div className="group p-8 md:p-10 rounded-xl bg-card/40 border border-border hover:border-primary/30 hover:bg-card/70 transition-all duration-500 cursor-pointer h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-display italic text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
