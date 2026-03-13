import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block glass px-4 py-2 rounded-full mb-6">
            <span className="text-xs font-heading text-primary tracking-wider uppercase">
              Portfolio 2025
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {t(translations.hero.name)}
          </h1>
          <p className="text-lg sm:text-xl gradient-text font-heading font-medium mb-4">
            {t(translations.hero.title)}
          </p>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            {t(translations.hero.tagline)}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 cyber-glow"
            >
              {t(translations.hero.cta1)}
              <ArrowDown size={16} />
            </a>
            <a
              href="#lab"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-sm glass text-foreground hover:text-primary transition-all duration-300 gradient-border"
            >
              {t(translations.hero.ctaLabs)}
              <ArrowDown size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-heading font-semibold text-sm glass text-foreground hover:text-accent transition-all duration-300"
            >
              {t(translations.hero.cta2)}
              <Download size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse-glow" />
            <div className="absolute inset-4 rounded-full glass gradient-border flex items-center justify-center">
              <div className="text-6xl font-heading font-bold gradient-text">AH</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
