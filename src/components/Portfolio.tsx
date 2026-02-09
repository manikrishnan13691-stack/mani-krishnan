import { motion } from "framer-motion";
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

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <motion.div
                className="absolute inset-0 p-6 flex flex-col justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-primary text-sm font-medium mb-2">
                  {project.category}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    {project.title}
                  </h3>
                  <motion.div
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <button className="px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-secondary transition-colors duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
