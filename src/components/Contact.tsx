import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@alexrivera.design" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "New York, NY" },
  ];

  return (
    <section id="contact" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Let's Create{" "}
              <span className="text-gradient">Something Amazing</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Have a project in mind? I'd love to hear about it. Whether you need 
              a complete brand overhaul or just want to chat about design, 
              don't hesitate to reach out.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Type</label>
              <select
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                <option value="branding">Brand Identity</option>
                <option value="logo">Logo Design</option>
                <option value="uiux">UI/UX Design</option>
                <option value="print">Print Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full flex items-center justify-center gap-2 hover-lift glow-effect"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
