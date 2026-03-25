import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Philosophy</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-10">
              My design <span className="italic">approach.</span>
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
                body: "Rapid ideation through sketches, wireframes, and prototypes. I believe in making ideas tangible quickly so we can test, learn, and iterate with confidence.",
              },
              {
                step: "03",
                title: "Execute",
                body: "Pixel-perfect delivery with comprehensive design systems, detailed specifications, and close collaboration with engineering to ensure nothing is lost in translation.",
              },
            ].map((item) => (
              <div key={item.step} className="border-t border-border pt-6">
                <p className="text-primary font-medium text-sm mb-2">{item.step}</p>
                <h3 className="text-xl font-display text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
