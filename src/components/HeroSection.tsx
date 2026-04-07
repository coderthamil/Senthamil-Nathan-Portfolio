import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import designerPortrait from "@/assets/designer-portrait.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const chars = headingRef.current.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { opacity: 0, y: 80, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.025,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.4,
      }
    );
  }, []);

  const splitText = (text: string, className = "") =>
    text.split("").map((char, i) => (
      <span key={i} className={`char inline-block ${className}`}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container relative z-10 py-28 md:py-36">
        <div className="grid md:grid-cols-[1fr_400px] gap-12 md:gap-20 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[2px] bg-primary mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-6"
            >
              UI/UX Designer & Creative Developer
            </motion.p>

            <h1
              ref={headingRef}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-display leading-[1.05] mb-8"
              style={{ perspective: "1000px" }}
            >
              {splitText("Crafting digital", "text-foreground")}
              <br />
              {splitText("experiences that", "text-foreground")}
              <br />
              <em>{splitText("feel right.", "text-primary")}</em>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-muted-foreground text-lg max-w-lg leading-relaxed mb-10"
            >
              I design intuitive, research-driven interfaces that transform complex
              problems into elegant solutions. Proficient in{" "}
              <span className="text-foreground">Figma</span> &{" "}
              <span className="text-foreground">Photoshop</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.5),0_0_60px_hsl(var(--primary)/0.2)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Portrait Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="hidden md:block relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-2xl" />
              <div className="absolute -inset-8 border border-border rounded-3xl" />
              
              {/* Primary glow */}
              <div className="absolute -inset-12 bg-primary/5 rounded-3xl" style={{ filter: "blur(40px)" }} />
              
              <img
                src={designerPortrait}
                alt="Designer portrait"
                width={640}
                height={800}
                className="relative rounded-xl w-full h-[480px] lg:h-[540px] object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Status badge */}
              <motion.div
                className="absolute bottom-6 left-6 bg-card/90 border border-border rounded-full px-4 py-2 flex items-center gap-2 backdrop-blur-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-foreground">Available for work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-24 md:mt-32 flex gap-16 md:gap-24"
        >
          {[
            { num: "5+", label: "Years Experience" },
            { num: "40+", label: "Projects Delivered" },
            { num: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="group cursor-default">
              <p className="text-foreground text-3xl md:text-4xl font-display italic group-hover:text-primary transition-colors duration-500">
                {stat.num}
              </p>
              <p className="text-muted-foreground text-xs tracking-widest uppercase mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
