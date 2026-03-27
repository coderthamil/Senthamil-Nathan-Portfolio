import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ParticlesBackground from "./ParticlesBackground";
import designerAvatar from "@/assets/designer-avatar.png";

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
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticlesBackground />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
            >
              UI/UX Designer & Creative Developer
            </motion.p>

            <h1
              ref={headingRef}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8"
              style={{ perspective: "1000px" }}
            >
              <span className="text-white">
                {splitText("Crafting digital")}
                <br />
                {splitText("experiences that")}
              </span>
              <br />
              <span className="text-primary">
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
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-full font-medium hover:border-primary/50 hover:bg-primary/5 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Designer Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative group cursor-pointer">
              {/* Animated ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{
                  borderImage: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary))) 1",
                  borderRadius: "9999px",
                  borderStyle: "dashed",
                }}
              />
              {/* Glow behind avatar */}
              <div className="absolute -inset-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-500" style={{ filter: "blur(20px)" }} />
              <motion.img
                src={designerAvatar}
                alt="Designer portrait"
                width={280}
                height={280}
                className="relative rounded-full w-56 h-56 lg:w-72 lg:h-72 object-cover border-2 border-border group-hover:border-primary/50 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              {/* Status badge */}
              <motion.div
                className="absolute bottom-4 right-4 bg-card border border-border rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-foreground">Available</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats with hover */}
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
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="cursor-default group"
            >
              <p className="text-foreground text-3xl md:text-4xl font-display font-bold group-hover:text-primary transition-colors duration-300">{stat.num}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
