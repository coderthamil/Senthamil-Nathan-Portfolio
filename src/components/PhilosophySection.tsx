import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5" style={{ filter: "blur(150px)" }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Philosophy</p>
            <h2 className="text-4xl md:text-5xl text-foreground font-display font-bold mb-10">
              My design <span className="gradient-text italic">approach.</span>
            </h2>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl font-display text-foreground leading-relaxed mb-12 italic"
          >
            "Good design is invisible. It doesn't ask users to think — it anticipates their needs and
            gently guides them toward their goals."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
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
              <motion.div
                key={item.step}
                className="border-t border-border pt-6 group cursor-default hover:border-primary/40 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <p className="gradient-text font-display font-bold text-sm mb-2">{item.step}</p>
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
