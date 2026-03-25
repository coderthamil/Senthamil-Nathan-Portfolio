import { motion } from "framer-motion";
import projectFintech from "@/assets/project-fintech.jpg";
import projectWellness from "@/assets/project-wellness.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSaas from "@/assets/project-saas.jpg";

const projects = [
  {
    title: "FinFlow — Banking Reimagined",
    description: "Redesigned the mobile banking experience for a fintech startup, focusing on simplifying complex financial data into digestible, actionable insights for everyday users.",
    tools: ["Figma", "Protopie"],
    outcomes: ["42% increase in daily active users", "Task completion time reduced by 35%", "App Store rating improved from 3.2 to 4.7"],
    image: projectFintech,
  },
  {
    title: "Serenity — Wellness Tracker",
    description: "Designed a holistic wellness application that combines meditation tracking, mood journaling, and daily wellness metrics into a calming, cohesive experience.",
    tools: ["Figma", "Adobe XD"],
    outcomes: ["User retention up 58% in 3 months", "Featured in App Store 'Apps We Love'", "4.8★ average rating across platforms"],
    image: projectWellness,
  },
  {
    title: "Maison — Fashion E-Commerce",
    description: "Created an editorial-style e-commerce experience for a luxury fashion brand, balancing visual storytelling with conversion-optimized product flows.",
    tools: ["Adobe XD", "Figma"],
    outcomes: ["28% improvement in conversion rate", "Average session duration increased 45%", "Reduced cart abandonment by 22%"],
    image: projectEcommerce,
  },
  {
    title: "Nexus — SaaS Analytics",
    description: "Designed a comprehensive analytics dashboard for a B2B SaaS platform, making complex data sets accessible through intuitive visualizations and smart defaults.",
    tools: ["Figma"],
    outcomes: ["Onboarding time reduced from 2 hours to 20 minutes", "Support tickets decreased 60%", "Enterprise adoption grew 3x"],
    image: projectSaas,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Selected Work</p>
          <h2 className="text-4xl md:text-5xl text-foreground mb-16">
            Projects that <span className="italic">matter.</span>
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <h3 className="text-2xl md:text-3xl text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                <div className="flex gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground mb-2">Key Outcomes</p>
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
