import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const titleWords = ["Creative", "Graphic", "Designer"];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
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
        <motion.div
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full"
          animate={{ y: [0, -30, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary/60 rounded-full"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Subtitle */}
        <motion.p
          className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm Alex Rivera
        </motion.p>

        {/* Main title with staggered animation */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-9xl leading-none mb-8">
          {titleWords.map((word, index) => (
            <motion.span
              key={word}
              className={`block ${index === 1 ? "text-gradient" : ""}`}
              initial={{ opacity: 0, y: 80, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              {word}
            </motion.span>
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

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover-lift glow-effect"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-secondary transition-colors duration-300"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
