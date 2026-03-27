import ScrollReveal from "./ScrollReveal";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">Philosophy</p>
            <h2 className="text-4xl md:text-6xl text-foreground font-display italic mb-12">
              My design <span className="text-primary">approach.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <blockquote className="text-2xl md:text-3xl font-display italic text-foreground/90 leading-relaxed mb-16">
              "Good design is invisible. It doesn't ask users to think — it anticipates their needs and
              gently guides them toward their goals."
            </blockquote>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                step: "01",
                title: "Empathize",
                body: "I start every project by deeply understanding users — their frustrations, motivations, and contexts. Research isn't a phase; it's a mindset.",
              },
              {
                step: "02",
                title: "Explore",
                body: "Rapid ideation through sketches, wireframes, and prototypes. I believe in making ideas tangible quickly so we can test, learn, and iterate.",
              },
              {
                step: "03",
                title: "Execute",
                body: "Pixel-perfect delivery with comprehensive design systems, detailed specifications, and close collaboration with engineering.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.15}>
                <div className="border-t border-border pt-8 group cursor-default hover:border-primary/40 transition-colors duration-500">
                  <p className="text-primary font-display italic text-sm mb-3">{item.step}</p>
                  <h3 className="text-xl font-display italic text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
