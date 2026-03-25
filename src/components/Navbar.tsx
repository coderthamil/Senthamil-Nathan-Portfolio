import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = ["Projects", "Skills", "Philosophy", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-border py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a href="#" className="text-foreground font-display text-xl font-bold">
            Alex<span className="gradient-text">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground text-2xl font-display font-bold"
                >
                  {item}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="text-lg font-medium px-6 py-3 rounded-full bg-primary text-primary-foreground text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
