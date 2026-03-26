import { motion } from "framer-motion";

const companies = [
  "Google", "Microsoft", "Spotify", "Airbnb", "Stripe",
  "Figma", "Adobe", "Netflix", "Slack", "Notion",
];

const CompaniesCarousel = () => {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="container mb-8">
        <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase text-center">
          Trusted by teams at
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center whitespace-nowrap animate-marquee"
          style={{ width: "fit-content" }}
        >
          {[...companies, ...companies].map((company, i) => (
            <motion.span
              key={`${company}-${i}`}
              className="text-muted-foreground/40 hover:text-primary transition-colors duration-300 text-2xl md:text-3xl font-display font-bold cursor-default select-none"
              whileHover={{ scale: 1.15, y: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {company}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesCarousel;
