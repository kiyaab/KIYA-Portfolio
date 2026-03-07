import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full glass text-sm text-accent font-mono"
            >
              🚀 Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4"
            >
              Endegena Abebe{" "}
              <span className="gradient-text text-glow-purple">(Kiya)</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary font-mono mb-4"
            >
              Full-Stack Developer | AI Innovator | System Architect
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg"
            >
              A passionate Ethiopian developer building intelligent digital platforms, AI tools, and scalable systems that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-purple flex items-center gap-2"
              >
                View Projects <ArrowDown size={16} />
              </a>
              <a
                href="/endegena_abebe_resume.pdf"
                download
                className="px-6 py-3 rounded-lg glass gradient-border font-semibold hover:bg-muted/50 transition-all flex items-center gap-2"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg glass gradient-border font-semibold hover:bg-muted/50 transition-all flex items-center gap-2"
              >
                <Mail size={16} /> Contact Me
              </a>
            </motion.div>
          </div>

          {/* Profile Image - object-top to show hair */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-30 blur-2xl animate-spin-slow" />
              <div className="relative w-full h-full rounded-full overflow-hidden gradient-border glass p-1">
                <img
                  src={profileImg}
                  alt="Endegena Abebe (Kiya)"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
