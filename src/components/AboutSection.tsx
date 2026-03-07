import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Globe, Rocket } from "lucide-react";

const timeline = [
  { year: "2024", title: "Started Coding Journey", desc: "Began learning web development, Python & modern tools" },
  { year: "2024", title: "Built First Platforms", desc: "Created educational & management systems for Ethiopia" },
  { year: "2025", title: "AI & Full-Stack Mastery", desc: "Integrated AI tools, built scalable enterprise systems" },
  { year: "2026", title: "Innovation Leader", desc: "Building Africa's next digital solutions at scale" },
];

const highlights = [
  { icon: Code, label: "Full-Stack Mastery", desc: "Expert in React, Django, Node.js and modern stacks" },
  { icon: Brain, label: "AI Integration", desc: "Building intelligent tools with ML & automation" },
  { icon: Globe, label: "Ethiopian Impact", desc: "Solving real problems with local digital solutions" },
  { icon: Rocket, label: "Scalable Systems", desc: "Enterprise-grade platforms for Africa's future" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a young Ethiopian full-stack developer passionate about building intelligent digital platforms that solve real-world problems. From AI-powered educational tools to freelance marketplaces, I create technology that empowers communities across Africa.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center group hover:glow-purple transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <h.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{h.label}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 gradient-text">Developer Journey</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"} pl-10 md:pl-0`}>
                  <div className="glass rounded-lg p-4 inline-block">
                    <span className="text-sm font-mono text-accent">{item.year}</span>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 glow-purple" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
