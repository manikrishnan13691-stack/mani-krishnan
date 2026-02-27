import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lumina Brand Identity",
    category: "Branding",
    year: "2024",
    description: "A complete visual identity system for a luxury lighting brand.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Velocity App Design",
    category: "UI/UX",
    year: "2024",
    description: "End-to-end mobile experience for a fitness tracking platform.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Horizon Packaging",
    category: "Packaging",
    year: "2023",
    description: "Sustainable packaging design for an eco-conscious skincare line.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Echo Music Festival",
    category: "Event Design",
    year: "2023",
    description: "Full creative direction for an underground electronic music festival.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Verde Organic",
    category: "Branding",
    year: "2023",
    description: "Farm-to-table restaurant identity with organic visual language.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Pulse Fitness App",
    category: "UI/UX",
    year: "2022",
    description: "Health and wellness platform with gamified workout experiences.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Horizontal layout card */}
      <div
        className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-0 md:gap-0 items-stretch cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-cursor="pointer"
        data-cursor-text="View"
      >
        {/* Image side */}
        <div className="relative w-full md:w-[55%] overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] md:aspect-auto md:min-h-[420px]">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-background/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Floating index number */}
          <motion.span
            className="absolute top-6 left-6 font-display font-extrabold text-8xl md:text-9xl text-foreground/[0.04] select-none leading-none"
            animate={{ 
              opacity: isHovered ? 0.12 : 0.04,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>

          {/* Center arrow on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                >
                  <ArrowUpRight className="w-7 h-7 text-primary-foreground" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category pill */}
          <div className="absolute bottom-5 left-5">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-background/70 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-foreground border border-border/50"
              animate={{ y: isHovered ? -4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.category}
            </motion.span>
          </div>
        </div>

        {/* Content side */}
        <div className={`w-full md:w-[45%] flex flex-col justify-center ${isEven ? "md:pl-12 lg:pl-16" : "md:pr-12 lg:pr-16"} py-8 md:py-12`}>
          {/* Year */}
          <motion.span
            className="text-muted-foreground text-sm font-mono tracking-widest mb-3"
            animate={{ opacity: isHovered ? 1 : 0.6, x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            — {project.year}
          </motion.span>

          {/* Title */}
          <motion.h3
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4"
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.title}
          </motion.h3>

          {/* Animated line */}
          <motion.div
            className="h-[2px] bg-primary rounded-full mb-5"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "80px" : "40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-md"
            animate={{ opacity: isHovered ? 1 : 0.7, x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {project.description}
          </motion.p>

          {/* View project link */}
          <motion.div
            className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider"
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span>View Project</span>
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Separator line */}
      {index < projects.length - 1 && (
        <motion.div
          className="mt-12 md:mt-16 h-px bg-border/50"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 * index + 0.5, ease: "easeOut" }}
          style={{ originX: isEven ? 0 : 1 }}
        />
      )}
    </motion.div>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.03] blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 md:mb-28 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <motion.p
              className="text-primary font-mono tracking-[0.3em] uppercase text-xs mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Selected Work
            </motion.p>
            <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
              Featured
              <br />
              <span className="text-gradient">Projects</span>
            </h2>
          </div>

          <motion.p
            className="text-muted-foreground text-lg max-w-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A curated selection of projects that showcase creative thinking and meticulous execution.
          </motion.p>
        </motion.div>

        {/* Top separator */}
        <motion.div
          className="h-px bg-border/50 mb-12 md:mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ originX: 0 }}
        />

        {/* Projects list */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-20 md:mt-28"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.button
            className="group relative px-12 py-5 border border-border text-foreground font-display font-semibold text-lg rounded-full overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
              View All Projects
            </span>
            <motion.span
              className="absolute inset-0 bg-primary"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
