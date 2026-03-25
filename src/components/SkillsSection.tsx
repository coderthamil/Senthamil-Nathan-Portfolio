import { motion } from "framer-motion";

const skills = [
  {
    title: "User Research & Strategy",
    description: "User interviews, persona development, journey mapping, competitive audits, and usability testing to ground every design decision in real user needs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
    ),
  },
  {
    title: "Visual & Interaction Design",
    description: "Pixel-perfect interfaces with thoughtful typography, color systems, micro-interactions, and motion design that create memorable user experiences.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "Wireframing & Prototyping",
    description: "From low-fidelity sketches to high-fidelity interactive prototypes in Figma and Adobe XD, enabling rapid iteration and stakeholder alignment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
  },
  {
    title: "Design Systems",
    description: "Building scalable component libraries, token systems, and comprehensive documentation that ensure consistency across products and teams.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M17 14v3h3"/>
        <path d="M14 17h3v3"/>
      </svg>
    ),
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            Design with <span className="italic">purpose.</span>
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
              className="group p-8 md:p-10 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-coral-light flex items-center justify-center text-primary mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-display text-foreground mb-3">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
