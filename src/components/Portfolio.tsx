import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lumina Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Velocity App Design",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Horizon Packaging",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Echo Music Festival",
    category: "Event Design",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Verde Organic",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Pulse Fitness App",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      data-cursor="pointer"
      data-cursor-text="View"
    >
      {/* Image with zoom effect */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className="text-primary text-sm font-medium mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {project.category}
        </motion.p>
        <div className="flex items-center justify-between">
          <motion.h3
            className="font-display font-semibold text-xl text-foreground"
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            {project.title}
          </motion.h3>
          <motion.div
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={isHovered ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.2 }}
          >
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </motion.div>
        </div>
      </motion.div>

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary/0"
        animate={{ borderColor: isHovered ? "hsl(15 90% 60% / 0.5)" : "hsl(15 90% 60% / 0)" }}
        transition={{ duration: 0.3 }}
      />

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0"
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-full relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">
              View All Projects
            </span>
            <motion.span
              className="absolute inset-0 bg-foreground"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ originX: 0 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
