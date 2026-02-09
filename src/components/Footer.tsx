import { motion } from "framer-motion";
import { Instagram, Dribbble, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-3xl text-gradient">
            AR.
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 Alex Rivera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
