import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lumina Brand Identity",
    category: "Branding",
    color: "from-[hsl(15,90%,60%)] to-[hsl(35,95%,55%)]",
    accentBg: "bg-[hsl(15,90%,60%)]/15",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Velocity App Design",
    category: "UI/UX",
    color: "from-[hsl(260,80%,65%)] to-[hsl(290,70%,55%)]",
    accentBg: "bg-[hsl(260,80%,65%)]/15",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Horizon Packaging",
    category: "Packaging",
    color: "from-[hsl(170,70%,45%)] to-[hsl(140,60%,50%)]",
    accentBg: "bg-[hsl(170,70%,45%)]/15",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Echo Music Festival",
    category: "Event Design",
    color: "from-[hsl(330,80%,60%)] to-[hsl(350,90%,55%)]",
    accentBg: "bg-[hsl(330,80%,60%)]/15",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Verde Organic",
    category: "Branding",
    color: "from-[hsl(45,90%,55%)] to-[hsl(25,85%,55%)]",
    accentBg: "bg-[hsl(45,90%,55%)]/15",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Pulse Fitness App",
    category: "UI/UX",
    color: "from-[hsl(200,85%,55%)] to-[hsl(220,80%,60%)]",
    accentBg: "bg-[hsl(200,85%,55%)]/15",
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
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Alternating layout: large cards take 2 cols
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      ref={cardRef}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
        isLarge ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
      }`}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.25, 0.4, 0.25, 1] }}
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
      {/* Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      />

      {/* Colorful gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply`}
        animate={{ opacity: isHovered ? 0.75 : 0.3 }}
        transition={{ duration: 0.5 }}
      />

      {/* Dark bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

      {/* Floating number */}
      <motion.span
        className="absolute top-6 left-6 font-display font-bold text-7xl text-foreground/10"
        animate={{ opacity: isHovered ? 0.3 : 0.1, y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      {/* Category pill */}
      <motion.div
        className={`absolute top-6 right-6 ${project.accentBg} backdrop-blur-md px-4 py-1.5 rounded-full`}
        animate={{ y: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
          {project.category}
        </span>
      </motion.div>

      {/* Content bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <motion.h3
          className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2"
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {project.title}
        </motion.h3>

        {/* Animated underline */}
        <motion.div
          className={`h-0.5 bg-gradient-to-r ${project.color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "40%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Arrow button */}
      <motion.div
        className={`absolute bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
        initial={{ scale: 0, rotate: -90 }}
        animate={isHovered ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
      >
        <ArrowUpRight className="w-5 h-5 text-foreground" />
      </motion.div>

      {/* Shine sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none"
        animate={{ x: isHovered ? "200%" : "-100%", opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? "inset 0 0 30px rgba(255,255,255,0.08), inset 0 0 0 2px rgba(255,255,255,0.15)"
            : "inset 0 0 0px rgba(255,255,255,0), inset 0 0 0 0px rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-[hsl(15,90%,60%)]/5 blur-[150px]"
          animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-32 w-[400px] h-[400px] rounded-full bg-[hsl(260,80%,65%)]/5 blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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

        {/* Projects Grid - masonry-style with large/small cards */}
        <div className="grid md:grid-cols-2 gap-6" style={{ perspective: "1200px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="group relative px-10 py-4 border border-border text-foreground font-semibold rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">
              View All Projects
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-primary to-[hsl(35,95%,55%)]"
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
