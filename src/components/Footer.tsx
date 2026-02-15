import { motion } from "framer-motion";
import { Instagram, Dribbble, Linkedin, Twitter, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Dribbble, href: "https://dribbble.com", label: "Dribbble" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-8 px-6 md:px-12 border-t border-border overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <MagneticButton href="#">
              <span className="font-display font-bold text-4xl text-gradient">SK.</span>
            </MagneticButton>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Creative designer based in Chennai, India — crafting bold visual experiences with 4+ years of expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Testimonials", "Contact"].map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-widest">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:ksmanicosmos@gmail.com" className="hover:text-primary transition-colors">
                  ksmanicosmos@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919080627377" className="hover:text-primary transition-colors">
                  +91 90806 27377
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                Chennai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <MagneticButton key={social.label} href={social.href}>
                <motion.span
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.span>
              </MagneticButton>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} SK. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300 cursor-none"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
