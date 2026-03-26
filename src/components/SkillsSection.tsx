import { motion } from "framer-motion";
import { Search, Layers, Layout, Grid3X3 } from "lucide-react";

const skills = [
  {
    title: "User Research & Strategy",
    description: "User interviews, persona development, journey mapping, competitive audits, and usability testing to ground every design decision in real user needs.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Visual & Interaction Design",
    description: "Pixel-perfect interfaces with thoughtful typography, color systems, micro-interactions, and motion design that create memorable experiences.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Wireframing & Prototyping",
    description: "From low-fidelity sketches to high-fidelity interactive prototypes in Figma and Photoshop, enabling rapid iteration and stakeholder alignment.",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: "Design Systems",
    description: "Building scalable component libraries, token systems, and comprehensive documentation that ensure consistency across products and teams.",
    icon: <Grid3X3 className="w-6 h-6" />,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl text-foreground font-display font-bold mb-6">
            Design with <span className="gradient-text italic">purpose.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every project begins with understanding people. I combine rigorous research with creative intuition to deliver designs that solve real problems beautifully.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 md:p-10 rounded-2xl bg-card/50 border border-border hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)] transition-all duration-500 cursor-pointer"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                whileHover={{ rotate: 10 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
