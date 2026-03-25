import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--hero-fg)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hero-fg)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
          >
            UI/UX Designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-foreground text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8"
          >
            Crafting digital
            <br />
            experiences that
            <br />
            <span className="text-primary italic">feel right.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-hero-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            I'm a UI/UX designer specializing in creating intuitive, research-driven interfaces. 
            Proficient in <span className="text-hero-foreground">Figma</span> and{" "}
            <span className="text-hero-foreground">Adobe XD</span>, I transform complex problems 
            into elegant, user-centered solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex gap-4 flex-wrap"
          >
            <a href="#projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity">
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-hero-muted/30 text-hero-foreground px-8 py-3.5 rounded-full font-medium hover:border-hero-foreground/50 transition-colors">
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 md:mt-32 flex gap-12 md:gap-20"
        >
          {[
            { num: "5+", label: "Years Experience" },
            { num: "40+", label: "Projects Delivered" },
            { num: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-hero-foreground text-3xl md:text-4xl font-display">{stat.num}</p>
              <p className="text-hero-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
