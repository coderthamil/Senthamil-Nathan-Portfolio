import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ParticlesBackground from "./ParticlesBackground";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const chars = headingRef.current.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { opacity: 0, y: 60, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.3,
      }
    );
  }, []);

  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block" style={{ opacity: 0 }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticlesBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
          >
            UI/UX Designer & Creative Developer
          </motion.p>

          <h1
            ref={headingRef}
            className="text-foreground text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8"
            style={{ perspective: "1000px" }}
          >
            {splitText("Crafting digital")}
            <br />
            {splitText("experiences that")}
            <br />
            <span className="gradient-text glow-text">
              {splitText("feel right.")}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            I'm a UI/UX designer specializing in creating intuitive, research-driven interfaces.
            Proficient in <span className="text-foreground font-medium">Figma</span> and{" "}
            <span className="text-foreground font-medium">Photoshop</span>, I transform complex problems
            into elegant, user-centered solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all"
            >
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-full font-medium hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 md:mt-32 flex gap-12 md:gap-20"
        >
          {[
            { num: "5+", label: "Years Experience" },
            { num: "40+", label: "Projects Delivered" },
            { num: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-foreground text-3xl md:text-4xl font-display font-bold">{stat.num}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
