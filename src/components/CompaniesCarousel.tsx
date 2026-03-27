import ScrollReveal from "./ScrollReveal";

const companies = [
  "Google", "Microsoft", "Spotify", "Airbnb", "Stripe",
  "Figma", "Adobe", "Netflix", "Slack", "Notion",
];

const CompaniesCarousel = () => {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <ScrollReveal>
        <div className="container mb-8">
          <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase text-center">
            Trusted by teams at
          </p>
        </div>
      </ScrollReveal>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          className="flex gap-16 items-center whitespace-nowrap animate-marquee"
          style={{ width: "fit-content" }}
        >
          {[...companies, ...companies].map((company, i) => (
            <span
              key={`${company}-${i}`}
              className="text-muted-foreground/30 hover:text-primary transition-colors duration-500 text-2xl md:text-3xl font-display italic cursor-default select-none"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesCarousel;
