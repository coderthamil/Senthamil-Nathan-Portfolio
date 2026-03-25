import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-hero">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Let's Connect</p>
            <h2 className="text-4xl md:text-6xl text-hero-foreground mb-6">
              Have a project <span className="italic">in mind?</span>
            </h2>
            <p className="text-hero-muted text-lg mb-12 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="mailto:hello@alexcarter.design"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              hello@alexcarter.design
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-8"
          >
            {[
              { label: "Dribbble", href: "#" },
              { label: "Behance", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "GitHub", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-hero-muted hover:text-hero-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-hero-muted/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-hero-muted text-sm">© 2026 Alex Carter. All rights reserved.</p>
          <p className="text-hero-muted text-sm">Designed with care in San Francisco</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
