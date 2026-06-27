import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import projectFintech from "@/assets/project-fintech.jpg";
import projectWellness from "@/assets/project-wellness.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSaas from "@/assets/project-saas.jpg";

type Outcome = { label: string; before: string; after: string };

const projects: {
  title: string;
  description: string;
  tools: string[];
  outcomes: Outcome[];
  image: string;
}[] = [
  {
    title: "FinFlow — Banking Reimagined",
    description:
      "Redesigned the mobile banking experience for a fintech startup, focusing on simplifying complex financial data into digestible, actionable insights.",
    tools: ["Figma", "Protopie"],
    outcomes: [
      { label: "Daily active users", before: "12k", after: "17k" },
      { label: "Task completion time", before: "48s", after: "31s" },
      { label: "App Store rating", before: "3.2★", after: "4.7★" },
    ],
    image: projectFintech,
  },
  {
    title: "Serenity — Wellness Tracker",
    description:
      "Designed a holistic wellness application combining meditation tracking, mood journaling, and wellness metrics into a calming, cohesive experience.",
    tools: ["Figma", "Photoshop"],
    outcomes: [
      { label: "3-month retention", before: "29%", after: "46%" },
      { label: "Average rating", before: "3.9★", after: "4.8★" },
      { label: "Session length", before: "2m 10s", after: "5m 40s" },
    ],
    image: projectWellness,
  },
  {
    title: "Maison — Fashion E-Commerce",
    description:
      "Created an editorial-style e-commerce experience for a luxury fashion brand, balancing visual storytelling with conversion-optimized product flows.",
    tools: ["Photoshop", "Figma"],
    outcomes: [
      { label: "Conversion rate", before: "1.8%", after: "2.3%" },
      { label: "Session duration", before: "1m 50s", after: "2m 40s" },
      { label: "Cart abandonment", before: "74%", after: "58%" },
    ],
    image: projectEcommerce,
  },
  {
    title: "Nexus — SaaS Analytics",
    description:
      "Designed a comprehensive analytics dashboard for a B2B SaaS platform, making complex data accessible through intuitive visualizations.",
    tools: ["Figma"],
    outcomes: [
      { label: "Onboarding time", before: "2hrs", after: "20min" },
      { label: "Support tickets / wk", before: "180", after: "72" },
      { label: "Enterprise accounts", before: "14", after: "42" },
    ],
    image: projectSaas,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for parallax tint
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 150, damping: 20 });
  const smy = useSpring(my, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(smy, [0, 1], [6, -6]);
  const rotateY = useTransform(smx, [0, 1], [-6, 6]);
  const imgX = useTransform(smx, [0, 1], ["-3%", "3%"]);
  const imgY = useTransform(smy, [0, 1], ["-3%", "3%"]);
  const tintX = useTransform(smx, (v) => `${v * 100}%`);
  const tintY = useTransform(smy, (v) => `${v * 100}%`);

  // Scroll-driven parallax on image
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const tintBackground = useTransform(
    [tintX, tintY],
    ([x, y]) =>
      `radial-gradient(circle at ${x} ${y}, hsl(var(--primary) / 0.35), transparent 60%)`,
  );

  const isReversed = index % 2 === 1;

  return (
    <ScrollReveal delay={0.1}>
      <div
        className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
          isReversed ? "md:[direction:rtl]" : ""
        }`}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.25),0_0_80px_hsl(var(--primary)/0.08)] transition-[border-color,box-shadow] duration-500 [direction:ltr]"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            loading="lazy"
            style={{ x: imgX, y: scrollY, translateY: imgY }}
            className="w-full h-auto object-cover scale-110 group-hover:scale-[1.18] transition-transform duration-700"
          />

          {/* Parallax-tracked tinted overlay */}
          <motion.div
            style={{ background: tintBackground }}
            className="pointer-events-none absolute inset-0 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Vignette gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-500" />

          {/* CTA pill */}
          <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
              0{index + 1} / Case Study
            </span>
            <span className="inline-flex items-center gap-1.5 text-foreground text-sm font-medium bg-card/80 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">
              View <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </motion.div>

        <div className={isReversed ? "md:[direction:ltr]" : ""}>
          <h3 className="text-2xl md:text-3xl text-foreground font-display italic mb-4">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex gap-2 mb-8">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tool}
              </span>
            ))}
          </div>

          <p className="text-xs font-medium text-foreground tracking-widest uppercase mb-4">
            Before → After
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {project.outcomes.map((outcome, oi) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 + oi * 0.1 }}
                whileHover={{ y: -4 }}
                className="group/metric rounded-lg border border-border bg-card/40 backdrop-blur-sm p-4 hover:border-primary/40 hover:bg-card/70 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300"
              >
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-2">
                  {outcome.label}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground line-through decoration-destructive/60">
                    {outcome.before}
                  </span>
                  <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                  <span className="text-lg font-semibold text-primary group-hover/metric:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)] transition-all">
                    {outcome.after}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl text-foreground font-display italic mb-16">
            Projects that <span className="text-primary">matter.</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
