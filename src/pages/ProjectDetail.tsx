import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import CursorFollower from "@/components/CursorFollower";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <button onClick={() => navigate("/")} className="text-primary underline">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background cursor-none md:cursor-none">
      <CursorFollower />

      {/* Back button */}
      <motion.div
        className="fixed top-8 left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
          </span>
          <span className="text-sm font-medium hidden md:inline">Back</span>
        </button>
      </motion.div>

      {/* Hero image */}
      <motion.div
        className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={project.gallery[0]}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </motion.div>

      {/* Project info */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Category & Year */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-widest text-primary">
              {project.category}
            </span>
            <span className="text-muted-foreground text-sm font-mono">{project.year}</span>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-8">
            {project.title}
          </h1>

          {/* Divider */}
          <motion.div
            className="h-[2px] bg-primary rounded-full mb-10"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </motion.div>

        {/* Details grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 md:gap-16 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="md:col-span-2">
            <h2 className="font-display font-semibold text-lg text-foreground mb-4">About the Project</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{project.longDescription}</p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Client</p>
              <p className="text-foreground font-medium">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Role</p>
              <p className="text-foreground font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Tools</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="space-y-6 mb-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {project.gallery.slice(1).map((img, i) => (
            <motion.div
              key={i}
              className="rounded-2xl md:rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={img}
                alt={`${project.title} — ${i + 2}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Next project */}
        <motion.div
          className="border-t border-border pt-16 pb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4">Next Project</p>
          <Link
            to={`/project/${nextProject.slug}`}
            className="group flex items-center justify-between"
            data-cursor="pointer"
          >
            <h3 className="font-display font-bold text-3xl md:text-5xl text-foreground group-hover:text-primary transition-colors duration-300">
              {nextProject.title}
            </h3>
            <motion.div
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
