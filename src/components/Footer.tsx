import { Github, Linkedin, Dribbble, Twitter, ArrowUpRight } from "lucide-react";

const socials = [
  { label: "GitHub", href: "#", icon: <Github className="w-4 h-4" /> },
  { label: "LinkedIn", href: "#", icon: <Linkedin className="w-4 h-4" /> },
  { label: "Dribbble", href: "#", icon: <Dribbble className="w-4 h-4" /> },
  { label: "Twitter", href: "#", icon: <Twitter className="w-4 h-4" /> },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a href="#" className="text-foreground font-display text-xl font-bold">
              Alex<span className="gradient-text">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Designed & built with care.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Download Resume <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">© 2026 Alex Carter. All rights reserved.</p>
          <p className="text-muted-foreground text-xs">Crafted with React, Framer Motion & GSAP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
