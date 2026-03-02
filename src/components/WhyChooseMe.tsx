import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Users, Zap, CheckCircle } from "lucide-react";
import whyChooseImg from "@/assets/why-choose-me.jpg";

const reasons = [
  {
    icon: Zap,
    title: "Pixel-Perfect Execution",
    description: "Every design is crafted with obsessive attention to detail and precision.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "I respect deadlines and deliver quality work within the agreed timeline.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Your vision drives every decision—collaboration is at the heart of my process.",
  },
  {
    icon: Award,
    title: "Award-Worthy Quality",
    description: "Designs that don't just look good—they perform, convert, and inspire.",
  },
];

const stats = [
  { value: "50+", label: "Projects Done" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction" },
];

const WhyChooseMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary font-mono tracking-[0.3em] uppercase text-xs mb-5">
            Why Me
          </p>
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            Why Choose <span className="text-gradient">Me?</span>
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative border frame */}
            <motion.div
              className="absolute -inset-3 md:-inset-4 border-2 border-primary/20 rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Floating accent shapes */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-sm"
              animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/30 rounded-full blur-sm"
              animate={{ y: [0, 10, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="relative overflow-hidden rounded-xl">
              <motion.img
                src={whyChooseImg}
                alt="Creative workspace showcasing design process"
                className="w-full h-[400px] md:h-[520px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Stats overlay */}
            <motion.div
              className="absolute -bottom-6 left-4 right-4 md:left-6 md:right-6 bg-card/90 backdrop-blur-md border border-border rounded-xl p-4 md:p-5"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="grid grid-cols-4 gap-2">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <span className="block font-display font-bold text-lg md:text-2xl text-primary">
                      {stat.value}
                    </span>
                    <span className="text-muted-foreground text-[10px] md:text-xs">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Text & Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              I bring a unique blend of creativity and technical expertise to every project. 
              My goal is to transform your ideas into visually stunning, functional designs 
              that leave a lasting impression on your audience.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    className="group flex gap-5 items-start p-4 rounded-xl border border-transparent hover:border-border hover:bg-card/50 transition-all duration-300"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-primary/40 group-hover:text-primary flex-shrink-0 mt-1 transition-colors duration-300" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
