import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import cert1 from "@/assets/cert-stem-achievement.jpg";
import cert2 from "@/assets/cert-national-science-1.jpg";
import cert3 from "@/assets/cert-national-science-2.jpg";
import cert4 from "@/assets/cert-oromia-vocational.jpg";

const certificates = [
  {
    title: "Certificate of Achievement – Software Development",
    org: "STEM Power Ethiopia & Case Western Reserve University",
    year: "2025",
    image: cert1,
  },
  {
    title: "National Science Fair – 1st Place Digital Technology",
    org: "Ministry of Education, Ethiopia",
    year: "2024",
    image: cert2,
  },
  {
    title: "National Science Fair – STEM Center Winner",
    org: "Ministry of Education, UNESCO, JICA",
    year: "2024",
    image: cert3,
  },
  {
    title: "2nd Place – Skill Technology Competition",
    org: "Oromia Job Creation & Vocational Bureau",
    year: "2025",
    image: cert4,
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % certificates.length);
  const prev = () => setActive((p) => (p - 1 + certificates.length) % certificates.length);

  return (
    <section id="certificates" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Recognized achievements in technology, science fairs, and software development.
          </p>
        </motion.div>

        {/* Featured certificate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative glass rounded-2xl overflow-hidden group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <motion.img
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={certificates[active].image}
                alt={certificates[active].title}
                className="w-full h-full object-contain bg-muted/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Award size={18} className="text-accent" />
                <span className="text-xs font-mono text-accent">{certificates[active].year}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">{certificates[active].title}</h3>
              <p className="text-sm text-muted-foreground">{certificates[active].org}</p>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:glow-purple"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:glow-purple"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 flex-wrap">
          {certificates.map((cert, i) => (
            <motion.button
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              onClick={() => setActive(i)}
              className={`relative w-28 h-20 sm:w-36 sm:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                active === i
                  ? "border-primary glow-purple scale-105"
                  : "border-border/50 opacity-60 hover:opacity-100"
              }`}
            >
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
