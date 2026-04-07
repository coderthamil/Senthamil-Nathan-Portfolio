import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import projectFintech from "@/assets/project-fintech.jpg";
import projectWellness from "@/assets/project-wellness.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSaas from "@/assets/project-saas.jpg";

const projects = [
  {
    title: "FinFlow — Banking Reimagined",
    description: "Redesigned the mobile banking experience for a fintech startup, focusing on simplifying complex financial data into digestible, actionable insights.",
    tools: ["Figma", "Protopie"],
    outcomes: ["42% increase in daily active users", "Task completion time reduced by 35%", "App Store rating improved from 3.2 to 4.7"],
    image: projectFintech,
  },
  {
    title: "Serenity — Wellness Tracker",
    description: "Designed a holistic wellness application combining meditation tracking, mood journaling, and wellness metrics into a calming, cohesive experience.",
    tools: ["Figma", "Photoshop"],
    outcomes: ["User retention up 58% in 3 months", "Featured in App Store 'Apps We Love'", "4.8★ average rating"],
    image: projectWellness,
  },
  {
    title: "Maison — Fashion E-Commerce",
    description: "Created an editorial-style e-commerce experience for a luxury fashion brand, balancing visual storytelling with conversion-optimized product flows.",
    tools: ["Photoshop", "Figma"],
    outcomes: ["28% improvement in conversion rate", "Session duration increased 45%", "Cart abandonment reduced by 22%"],
    image: projectEcommerce,
  },
  {
    title: "Nexus — SaaS Analytics",
    description: "Designed a comprehensive analytics dashboard for a B2B SaaS platform, making complex data accessible through intuitive visualizations.",
    tools: ["Figma"],
    outcomes: ["Onboarding reduced from 2hrs to 20min", "Support tickets decreased 60%", "Enterprise adoption grew 3x"],
    image: projectSaas,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-6xl text-foreground font-display italic mb-16">
            Projects that <span className="text-primary">matter.</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1}>
              <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className="group overflow-hidden rounded-xl bg-card border border-border relative cursor-pointer hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15),0_0_60px_hsl(var(--primary)/0.05)] transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="inline-flex items-center gap-1 text-foreground text-sm font-medium bg-card/80 px-4 py-2 rounded-full border border-border backdrop-blur-sm">
                      View Case Study <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <h3 className="text-2xl md:text-3xl text-foreground font-display italic mb-4">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  <div className="flex gap-2 mb-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2.5">
                    <p className="text-xs font-medium text-foreground tracking-widest uppercase mb-3">Key Outcomes</p>
                    {project.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
