import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutAvatar from "@/assets/about-avatar.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "12", label: "Awards Won" },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <img
                src={aboutAvatar}
                alt="SK - Graphic Designer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Turning Vision Into{" "}
              <span className="text-gradient">Visual Reality</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate graphic designer based in New York, specializing in 
              brand identity, digital design, and creative direction. With over 8 years 
              of experience, I help businesses tell their stories through compelling 
              visual narratives.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              My approach combines strategic thinking with artistic creativity, ensuring 
              every design not only looks beautiful but also achieves its intended purpose. 
              I believe in the power of design to transform brands and connect with audiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="font-display font-bold text-3xl md:text-4xl text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
