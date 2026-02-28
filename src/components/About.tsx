import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import aboutAvatar from "@/assets/about-avatar.jpg";
import { Palette, PenTool, Layout, Camera, Film, Figma, Wrench, FolderOpen, Sparkles, ExternalLink } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { projects } from "@/data/projects";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "12", label: "Awards Won" },
  ];

  const skills = [
    { icon: Palette, name: "Brand Identity", level: 95, tools: "Logo, Color Systems, Guidelines" },
    { icon: PenTool, name: "Illustration", level: 88, tools: "Digital Art, Vector, Icons" },
    { icon: Layout, name: "UI/UX Design", level: 92, tools: "Web, Mobile, Prototyping" },
    { icon: Camera, name: "Photo Editing", level: 85, tools: "Retouching, Compositing, Color" },
    { icon: Film, name: "Motion Graphics", level: 80, tools: "Animation, Video, After Effects" },
    { icon: Figma, name: "Design Systems", level: 90, tools: "Components, Tokens, Documentation" },
  ];

  const software = [
    { name: "Adobe Photoshop", category: "Photo Editing", level: 95, icon: "Ps" },
    { name: "Adobe Illustrator", category: "Vector Design", level: 92, icon: "Ai" },
    { name: "Adobe After Effects", category: "Motion Design", level: 85, icon: "Ae" },
    { name: "Adobe Premiere Pro", category: "Video Editing", level: 80, icon: "Pr" },
    { name: "Adobe InDesign", category: "Print & Layout", level: 88, icon: "Id" },
    { name: "Figma", category: "UI/UX Design", level: 95, icon: "Fi" },
    { name: "Cinema 4D", category: "3D Design", level: 75, icon: "C4" },
    { name: "Procreate", category: "Digital Art", level: 82, icon: "Pc" },
    { name: "Blender", category: "3D Modeling", level: 70, icon: "Bl" },
  ];

  const featuredProjects = projects.slice(0, 4);

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
              I'm a passionate graphic designer based in Chennai, specializing in 
              brand identity, digital design, and creative direction. With over 4 years 
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

        {/* Tabbed Section: Skills / Software / Projects */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              What I Bring
            </p>
            <h3 className="font-display font-bold text-3xl md:text-4xl">
              Skills, Tools & <span className="text-gradient">Work</span>
            </h3>
          </div>

          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="w-full flex justify-center gap-2 bg-transparent h-auto p-0 mb-12 flex-wrap">
              <TabsTrigger
                value="skills"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:border-primary/50"
                data-cursor="pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span className="font-medium text-sm">My Skills</span>
              </TabsTrigger>
              <TabsTrigger
                value="software"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:border-primary/50"
                data-cursor="pointer"
              >
                <Wrench className="w-4 h-4" />
                <span className="font-medium text-sm">My Software</span>
              </TabsTrigger>
              <TabsTrigger
                value="projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:border-primary/50"
                data-cursor="pointer"
              >
                <FolderOpen className="w-4 h-4" />
                <span className="font-medium text-sm">My Projects</span>
              </TabsTrigger>
            </TabsList>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    data-cursor="pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <skill.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-foreground">{skill.name}</h4>
                          <p className="text-muted-foreground text-xs">{skill.tools}</p>
                        </div>
                      </div>
                      <div className="relative h-2 w-full rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-primary/60"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                      <div className="flex justify-end mt-1.5">
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Software Tab */}
            <TabsContent value="software">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {software.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -4 }}
                    data-cursor="pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <span className="font-display font-bold text-lg text-primary">{tool.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-foreground">{tool.name}</h4>
                          <p className="text-muted-foreground text-xs">{tool.category}</p>
                        </div>
                      </div>
                      <div className="relative h-2 w-full rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-primary/60"
                          initial={{ width: 0 }}
                          animate={{ width: `${tool.level}%` }}
                          transition={{ duration: 1.2, delay: 0.3 + index * 0.08, ease: "easeOut" }}
                        />
                      </div>
                      <div className="flex justify-between mt-1.5">
                        <span className="text-xs text-muted-foreground">{tool.category}</span>
                        <span className="text-xs font-mono text-muted-foreground">{tool.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {featuredProjects.map((project, index) => (
                  <motion.a
                    key={project.id}
                    href={`/project/${project.slug}`}
                    className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-500"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    data-cursor="pointer"
                  >
                    {/* Project Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
