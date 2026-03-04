import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Palette, Rocket, ArrowRight } from "lucide-react";
import discussImg from "@/assets/cooperation-discuss.png";
import designImg from "@/assets/cooperation-design.png";
import launchImg from "@/assets/cooperation-launch.png";

const steps = [
  {
    number: "01",
    title: "Let's Talk",
    subtitle: "Share Your Vision",
    description:
      "We begin with a friendly conversation to understand your brand, goals, and dreams. No jargon — just real talk about what you need.",
    icon: MessageSquare,
    image: discussImg,
    color: "from-primary/20 to-primary/5",
  },
  {
    number: "02",
    title: "Design Magic",
    subtitle: "Concepts Come Alive",
    description:
      "I transform your ideas into stunning visual concepts. You'll see mood boards, drafts, and iterations until we nail the perfect direction.",
    icon: Palette,
    image: designImg,
    color: "from-primary/15 to-primary/5",
  },
  {
    number: "03",
    title: "Launch & Shine",
    subtitle: "Your Brand Takes Off",
    description:
      "Final files delivered, guidelines provided, and your project goes live. I stay around to make sure everything lands perfectly.",
    icon: Rocket,
    image: launchImg,
    color: "from-primary/20 to-primary/5",
  },
];

const CooperationProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary font-mono tracking-[0.3em] uppercase text-xs mb-5">
            Easy as 1-2-3
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[0.95]">
            Process of My{" "}
            <span className="text-gradient">Cooperation</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            See how easy it is to start a new project with a creative design
            concept — from first chat to final delivery.
          </p>
        </motion.div>

        {/* Steps — Zigzag layout */}
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isReversed = i % 2 !== 0;

            return (
              <motion.div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Image side */}
                <motion.div
                  className={`relative group ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${step.color} p-2`}>
                    {/* Floating step number behind image */}
                    <motion.span
                      className="absolute -top-6 -left-2 text-[120px] md:text-[160px] font-display font-bold text-primary/[0.07] leading-none select-none z-0"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    >
                      {step.number}
                    </motion.span>

                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="relative z-10 w-full h-[300px] md:h-[380px] object-cover rounded-2xl"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    />

                    {/* Decorative border glow */}
                    <div className="absolute inset-0 rounded-3xl border border-primary/10 pointer-events-none" />
                  </div>

                  {/* Floating accent shapes */}
                  <motion.div
                    className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full border-2 border-primary/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-primary/10 rounded-lg"
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Content side */}
                <div className={`space-y-6 ${isReversed ? "lg:order-1 lg:text-right" : "lg:order-2"}`}>
                  {/* Icon + Step label */}
                  <div className={`flex items-center gap-4 ${isReversed ? "lg:justify-end" : ""}`}>
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">
                      Step {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-primary/80 font-medium text-lg">{step.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
                    {step.description}
                  </p>

                  {/* Connecting arrow to next step */}
                  {i < steps.length - 1 && (
                    <motion.div
                      className={`hidden lg:flex items-center gap-2 text-primary/40 pt-4 ${
                        isReversed ? "lg:justify-end" : ""
                      }`}
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="text-sm font-mono">Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 md:mt-28"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-muted-foreground text-lg mb-6">
            Ready to start your project?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold text-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            data-cursor="pointer"
          >
            Let's Collaborate
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CooperationProcess;
