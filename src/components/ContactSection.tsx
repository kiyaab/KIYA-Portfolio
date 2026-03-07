import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "0913962738", href: "tel:0913962738" },
  { icon: Mail, label: "Email", value: "bogemamo124@gmail.com", href: "mailto:bogemamo124@gmail.com" },
  { icon: MapPin, label: "Location", value: "Bale Robe, Ethiopia", href: "#" },
];

const socials = [
  { label: "Telegram", handle: "@melos_30k", href: "https://t.me/melos_30k" },
  { label: "TikTok", handle: "@urfavkiya1", href: "https://tiktok.com/@urfavkiya1" },
  { label: "GitHub", handle: "kiyaab", href: "https://github.com/kiyaab" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:bogemamo124@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground">Let's build something amazing together.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 glass rounded-xl p-4 hover:glow-purple transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <c.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <MessageCircle size={18} className="text-accent" /> Social Media
              </h3>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>{s.label}</span>
                    <span className="font-mono text-secondary">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-xl p-6 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all text-foreground"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all text-foreground"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all text-foreground resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-purple flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
