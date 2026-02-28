import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const approaches = [
  {
    value: "research",
    icon: Search,
    label: "Research",
    title: "Deep Dive Research",
    description:
      "We begin every project by immersing ourselves in your industry, competitors, and target audience. Through stakeholder interviews, market analysis, and user research, we uncover the insights that drive meaningful design decisions.",
    highlights: ["Market Analysis", "User Interviews", "Competitor Audit", "Brand Audit"],
  },
  {
    value: "ideate",
    icon: Lightbulb,
    label: "Ideate",
    title: "Creative Ideation",
    description:
      "Armed with research, we explore bold creative directions. Sketching, mood boards, and rapid prototyping let us test ideas quickly — pushing boundaries while staying aligned with your goals.",
    highlights: ["Mood Boards", "Sketching", "Wireframing", "Prototyping"],
  },
  {
    value: "execute",
    icon: Rocket,
    label: "Execute",
    title: "Precision Execution",
    description:
      "This is where craft meets vision. Every pixel, every curve, every color choice is intentional. We refine relentlessly until the design not only looks stunning but performs flawlessly.",
    highlights: ["Visual Design", "Motion Design", "Asset Production", "Quality Assurance"],
  },
  {
    value: "measure",
    icon: BarChart3,
    label: "Measure",
    title: "Measure & Iterate",
    description:
      "Great design evolves. We track performance metrics, gather user feedback, and continuously refine to ensure your brand stays ahead of the curve and delivers real results.",
    highlights: ["Analytics Review", "A/B Testing", "User Feedback", "Continuous Improvement"],
  },
];

const OurApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("research");

  const activeApproach = approaches.find((a) => a.value === activeTab)!;

  return (
    <section id="approach" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Approach
          </motion.p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
            How We <span className="text-gradient">Think</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex justify-center gap-2 bg-transparent h-auto p-0 mb-12 flex-wrap">
              {approaches.map((approach, index) => (
                <TabsTrigger
                  key={approach.value}
                  value={approach.value}
                  className="group relative flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:border-primary/50"
                  data-cursor="pointer"
                >
                  <approach.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{approach.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {approaches.map((approach) => (
              <TabsContent key={approach.value} value={approach.value} className="mt-0">
                <motion.div
                  key={approach.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-2 gap-10 items-center"
                >
                  {/* Left — Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <approach.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl">
                        {approach.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {approach.description}
                    </p>
                  </div>

                  {/* Right — Highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    {approach.highlights.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        className="relative p-5 rounded-2xl border border-border bg-card group hover:border-primary/50 transition-colors duration-300"
                        data-cursor="pointer"
                      >
                        <span className="text-primary/30 font-display font-bold text-3xl absolute top-3 right-4">
                          0{i + 1}
                        </span>
                        <p className="font-display font-semibold text-foreground mt-4">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;
