import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            What I Do
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer hover-lift"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
