import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor, Server, Smartphone, Database, Cloud, Brain, Wrench,
} from "lucide-react";

const categories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "primary",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS", "Bootstrap 5", "UI/UX Design"],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "secondary",
    skills: ["Python", "Django", "Node.js", "Express.js", "REST APIs", "Auth Systems", "DB Architecture"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "accent",
    skills: ["React Native", "Flutter", "Progressive Web Apps"],
  },
  {
    title: "Database Technologies",
    icon: Database,
    color: "primary",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "secondary",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Linux", "Nginx", "AWS", "Vercel", "Netlify"],
  },
  {
    title: "AI & Advanced Tech",
    icon: Brain,
    color: "accent",
    skills: ["AI Integration", "ML Basics", "Automation", "Prompt Engineering", "Data Visualization"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    color: "primary",
    skills: ["VS Code", "Figma", "Postman", "GitHub Actions", "Chrome DevTools"],
  },
];

const colorMap: Record<string, string> = {
  primary: "from-primary/20 to-primary/5 border-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(265_90%_65%/0.15)]",
  secondary: "from-secondary/20 to-secondary/5 border-secondary/20 hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(200_90%_55%/0.15)]",
  accent: "from-accent/20 to-accent/5 border-accent/20 hover:border-accent/50 hover:shadow-[0_0_30px_hsl(185_90%_50%/0.15)]",
};

const iconColorMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const pillColor: Record<string, string> = {
  primary: "hover:border-primary/60 hover:bg-primary/10 hover:text-primary",
  secondary: "hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary",
  accent: "hover:border-accent/60 hover:bg-accent/10 hover:text-accent",
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skill <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive overview of my technical expertise across the full development stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`rounded-xl border bg-gradient-to-br p-6 transition-all duration-300 ${colorMap[cat.color]}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center`}
                >
                  <cat.icon size={22} className={iconColorMap[cat.color]} />
                </motion.div>
                <h3 className="font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.08 + si * 0.03 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-3 py-1 rounded-full text-xs font-mono bg-muted/50 text-foreground/80 border border-border/50 transition-all duration-200 cursor-default ${pillColor[cat.color]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
