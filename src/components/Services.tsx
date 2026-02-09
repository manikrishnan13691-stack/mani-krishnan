import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, PenTool, Monitor, Camera, Layers, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand systems including logos, color palettes, typography, and brand guidelines.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Distinctive, memorable logos that capture your brand's essence and stand the test of time.",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "User-centered digital experiences with intuitive interfaces and beautiful aesthetics.",
  },
  {
    icon: Camera,
    title: "Social Media",
    description: "Scroll-stopping content and cohesive visual strategies for your social presence.",
  },
  {
    icon: Layers,
    title: "Print Design",
    description: "Business cards, brochures, packaging, and marketing materials that make an impact.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Animated logos, social content, and videos that bring your brand to life.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-background border border-border transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                y: -8,
                borderColor: "hsl(15 90% 60% / 0.5)",
              }}
              data-cursor="pointer"
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0"
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon with rotation on hover */}
              <motion.div
                className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                animate={{
                  backgroundColor: hoveredIndex === index ? "hsl(15 90% 60%)" : "hsl(15 90% 60% / 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <service.icon
                    className={`w-7 h-7 transition-colors duration-300 ${
                      hoveredIndex === index ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                </motion.div>
              </motion.div>

              {/* Title with underline animation */}
              <h3 className="relative font-display font-semibold text-xl mb-3 inline-block">
                {service.title}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </h3>

              <p className="text-muted-foreground leading-relaxed relative">
                {service.description}
              </p>

              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 bg-primary/20 rounded-full" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
