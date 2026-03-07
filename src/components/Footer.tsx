import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Created by <span className="gradient-text font-semibold">Endegena Abebe (Kiya)</span> © 2026 All Rights Reserved
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/kiyaab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
          <a href="https://t.me/melos_30k" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Telegram
          </a>
          <a href="https://tiktok.com/@urfavkiya1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
