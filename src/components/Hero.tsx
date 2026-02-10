import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleWords = ["Creative", "Graphic", "Designer"];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      {/* Animated background elements with parallax */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary/20 blob"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-48 h-48 bg-primary/10 blob"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          style={{ animationDelay: "2s" }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/60 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      <motion.div className="relative z-10 max-w-6xl mx-auto text-center" style={{ opacity }}>
        {/* Subtitle with character animation */}
        <motion.div
          className="overflow-hidden mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Hello, I'm SK
          </motion.p>
        </motion.div>

        {/* Main title with staggered animation */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-9xl leading-none mb-8">
          {titleWords.map((word, index) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                className={`block ${index === 1 ? "text-gradient" : ""}`}
                initial={{ y: 120, rotateX: -80 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3 + index * 0.15,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Crafting visual experiences that captivate, communicate, and inspire.
          Transforming ideas into stunning designs that make brands unforgettable.
        </motion.p>

        {/* CTA Buttons with magnetic effect */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <MagneticButton href="#portfolio">
            <span
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full glow-effect relative overflow-hidden group"
              data-cursor="pointer"
            >
              <span className="relative z-10">View My Work</span>
              <motion.span
                className="absolute inset-0 bg-foreground"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </span>
          </MagneticButton>
          <MagneticButton href="#contact">
            <span
              className="inline-block px-8 py-4 border border-border text-foreground font-semibold rounded-full relative overflow-hidden group"
              data-cursor="pointer"
            >
              <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                Let's Talk
              </span>
              <motion.span
                className="absolute inset-0 bg-foreground"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with bounce */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
