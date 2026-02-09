import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-2xl text-gradient">
            AR.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-sm tracking-wide">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-display text-3xl font-semibold hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
