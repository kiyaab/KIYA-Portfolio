import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import temarlije from "@/assets/project-temarlije.png";
import gilgil from "@/assets/project-gilgil.png";
import eyita from "@/assets/project-eyita.png";
import fithiai from "@/assets/project-fithiai.png";

const projects = [
  {
    title: "ተማር ልጄ",
    desc: "AI-powered educational platform for Ethiopian students with courses, live classes, AI tutor, and study tools.",
    image: temarlije,
    tech: ["React", "Django", "PostgreSQL", "AI"],
    github: "https://github.com/kiyaab",
    live: "#",
  },
  {
    title: "ግልግል HUB",
    desc: "A freelance marketplace connecting Ethiopian businesses and skilled workers with Birr/USD payments.",
    image: gilgil,
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/kiyaab",
    live: "#",
  },
  {
    title: "ዕይታ-ET Braille Translator",
    desc: "Multi-language Braille translation platform with text, voice, and image to Braille conversion.",
    image: eyita,
    tech: ["React", "Python", "OCR", "ML"],
    github: "https://github.com/kiyaab",
    live: "#",
  },
  {
    title: "ፍትህ AI",
    desc: "Ethiopian legal AI assistant for searching laws, getting legal advice, and document analysis.",
    image: fithiai
    tech: ["React", "Django", "NLP", "AI"],
    github: "https://github.com/kiyaab",
    live: "https://feteheaiforethiopians.vercel.app/chat",
  },
  {
    title: "Hospital Management System",
    desc: "Full healthcare system with role-based dashboards, patient management, and appointment scheduling.",
    image: null,
    tech: ["Django", "PostgreSQL", "REST API", "React"],
    github: "https://github.com/kiyaab",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Created <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Digital solutions built to solve real Ethiopian and African challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40, rotateX: 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-xl overflow-hidden group hover:glow-purple transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                {p.image ? (
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">HMS</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={p.live} className="flex items-center gap-1.5 text-sm text-secondary hover:text-foreground transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
