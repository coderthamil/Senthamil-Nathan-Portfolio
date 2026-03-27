import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = ["Projects", "Skills", "Philosophy", "Contact"];

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
  >
    {children}
  </a>
);

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
          <motion.a
            href="#"
            className="text-foreground font-display text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Alex<span className="gradient-text">.</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              className="relative text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Resume</span>
              <motion.span
                className="absolute inset-0 bg-accent"
                initial={{ x: "-100%", skewX: "-15deg" }}
                whileHover={{ x: "0%", skewX: "0deg" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.a>
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
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground text-2xl font-display font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                download
                className="text-lg font-medium px-6 py-3 rounded-full bg-primary text-primary-foreground text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
