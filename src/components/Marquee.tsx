import { motion } from "framer-motion";

const Marquee = () => {
  const items = [
    "Brand Identity",
    "✦",
    "Logo Design",
    "✦",
    "UI/UX",
    "✦",
    "Motion Graphics",
    "✦",
    "Print Design",
    "✦",
    "Social Media",
    "✦",
  ];

  return (
    <div className="py-8 bg-primary overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mx-4 md:mx-8"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
