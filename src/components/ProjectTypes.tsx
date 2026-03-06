import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Globe, Package, Music, Smartphone, PenTool, Megaphone, Film } from "lucide-react";

const projectTypes = [
  { icon: Palette, label: "Brand Identity", count: "15+", color: "hsl(15 90% 60%)" },
  { icon: Globe, label: "Web Design", count: "12+", color: "hsl(35 95% 55%)" },
  { icon: Package, label: "Packaging", count: "10+", color: "hsl(200 80% 55%)" },
  { icon: Music, label: "Event Design", count: "8+", color: "hsl(280 70% 60%)" },
  { icon: Smartphone, label: "App Design", count: "9+", color: "hsl(150 70% 50%)" },
  { icon: PenTool, label: "Logo Design", count: "20+", color: "hsl(350 80% 60%)" },
  { icon: Megaphone, label: "Social Media", count: "18+", color: "hsl(45 90% 55%)" },
  { icon: Film, label: "Motion Graphics", count: "7+", color: "hsl(190 80% 55%)" },
];

const CircleItem = ({
  item,
  index,
  total,
  isInView,
  activeIndex,
  setActiveIndex,
}: {
  item: (typeof projectTypes)[0];
  index: number;
  total: number;
  isInView: boolean;
  activeIndex: number | null;
  setActiveIndex: (i: number | null) => void;
}) => {
  const angle = (index / total) * 360 - 90;
  const radius = 280;
  const mobileRadius = 140;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  const mx = Math.cos((angle * Math.PI) / 180) * mobileRadius;
  const my = Math.sin((angle * Math.PI) / 180) * mobileRadius;
  const isActive = activeIndex === index;

  return (
    <>
      {/* Desktop */}
      <motion.div
        className="absolute hidden md:flex flex-col items-center cursor-pointer"
        style={{ left: "50%", top: "50%" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
                x: x - 40,
                y: y - 40,
              }
            : { opacity: 0, scale: 0 }
        }
        transition={{
          duration: 0.6,
          delay: 0.15 * index,
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
        data-cursor="pointer"
      >
        {/* Connecting line to center */}
        <motion.div
          className="absolute w-px bg-border/40"
          style={{
            height: Math.sqrt(x * x + y * y),
            transformOrigin: "top center",
            rotate: `${angle + 90}deg`,
            left: 40,
            top: 40,
          }}
          animate={{ opacity: isActive ? 0.6 : 0.15 }}
          transition={{ duration: 0.3 }}
        />

        {/* Circle node */}
        <motion.div
          className="relative w-20 h-20 rounded-full border-2 flex items-center justify-center z-10"
          style={{ borderColor: item.color }}
          animate={{
            scale: isActive ? 1.25 : 1,
            backgroundColor: isActive ? item.color : "transparent",
            boxShadow: isActive ? `0 0 40px ${item.color}50` : "0 0 0px transparent",
          }}
          transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
        >
          <item.icon
            className="w-7 h-7 transition-colors duration-300"
            style={{ color: isActive ? "hsl(0 0% 4%)" : item.color }}
          />

          {/* Orbiting ring */}
          <motion.div
            className="absolute inset-[-6px] rounded-full border border-dashed"
            style={{ borderColor: `${item.color}40` }}
            animate={{ rotate: isActive ? 360 : 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Label */}
        <motion.div
          className="mt-3 text-center"
          animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-foreground font-display font-semibold text-sm whitespace-nowrap">
            {item.label}
          </p>
          <p className="text-xs font-bold mt-0.5" style={{ color: item.color }}>
            {item.count} Projects
          </p>
        </motion.div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        className="absolute flex md:hidden flex-col items-center cursor-pointer"
        style={{ left: "50%", top: "50%" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, x: mx - 24, y: my - 24 }
            : { opacity: 0, scale: 0 }
        }
        transition={{
          duration: 0.6,
          delay: 0.15 * index,
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
        onClick={() => setActiveIndex(isActive ? null : index)}
      >
        <motion.div
          className="relative w-12 h-12 rounded-full border-2 flex items-center justify-center z-10"
          style={{ borderColor: item.color }}
          animate={{
            scale: isActive ? 1.2 : 1,
            backgroundColor: isActive ? item.color : "transparent",
          }}
          transition={{ duration: 0.3 }}
        >
          <item.icon
            className="w-5 h-5"
            style={{ color: isActive ? "hsl(0 0% 4%)" : item.color }}
          />
        </motion.div>
        <p className="text-[10px] font-display font-semibold text-foreground mt-1 whitespace-nowrap">
          {item.label}
        </p>
      </motion.div>
    </>
  );
};

const ConnectionLines = ({
  total,
  radius,
  isInView,
  activeIndex,
}: {
  total: number;
  radius: number;
  isInView: boolean;
  activeIndex: number | null;
}) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      {Array.from({ length: total }).map((_, index) => {
        const angle = (index / total) * 360 - 90;
        const endX = Math.cos((angle * Math.PI) / 180) * radius;
        const endY = Math.sin((angle * Math.PI) / 180) * radius;
        const isActive = activeIndex === index;
        const item = projectTypes[index];

        return (
          <motion.line
            key={index}
            x1="50%"
            y1="50%"
            x2={`calc(50% + ${endX}px)`}
            y2={`calc(50% + ${endY}px)`}
            stroke={isActive ? item.color : "hsl(0 0% 18%)"}
            strokeWidth={isActive ? 2 : 1}
            strokeDasharray={isActive ? "0" : "6 4"}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: isActive ? 0.8 : 0.25 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
          />
        );
      })}
    </svg>
  );
};

const ProjectTypes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="project-types" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Click & Drag
          </motion.p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
            Project Types I{" "}
            <span className="text-gradient">Specialize In</span>
          </h2>
        </motion.div>

        {/* Circle Layout */}
        <div className="relative w-full aspect-square max-w-[700px] mx-auto">
          {/* SVG Connection Lines - Desktop */}
          <div className="hidden md:block">
            <ConnectionLines total={projectTypes.length} radius={280} isInView={isInView} activeIndex={activeIndex} />
          </div>
          {/* SVG Connection Lines - Mobile */}
          <div className="block md:hidden">
            <ConnectionLines total={projectTypes.length} radius={140} isInView={isInView} activeIndex={activeIndex} />
          </div>

          {/* Center hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          >
            {/* Pulsing rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-primary/20"
                style={{ margin: `${-12 - i * 16}px` }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut",
                }}
              />
            ))}

            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-card border border-border flex items-center justify-center relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="text-center relative z-10">
                <motion.p
                  className="font-display font-bold text-2xl md:text-3xl text-gradient"
                  animate={
                    activeIndex !== null
                      ? { scale: [1, 1.1, 1] }
                      : {}
                  }
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex !== null ? projectTypes[activeIndex].count : "99+"}
                </motion.p>
                <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-wider font-medium">
                  {activeIndex !== null ? projectTypes[activeIndex].label : "Total Projects"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Orbital circle items */}
          {projectTypes.map((item, i) => (
            <CircleItem
              key={item.label}
              item={item}
              index={i}
              total={projectTypes.length}
              isInView={isInView}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}

          {/* Outer decorative ring */}
          <motion.div
            className="absolute inset-8 md:inset-4 rounded-full border border-dashed border-border/30"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
