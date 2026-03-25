import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-hero/95 backdrop-blur-md py-4" : "bg-transparent py-6"
    }`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="text-hero-foreground font-display text-xl">
          Alex Carter
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Projects", "Skills", "Philosophy", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-hero-muted hover:text-hero-foreground transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
