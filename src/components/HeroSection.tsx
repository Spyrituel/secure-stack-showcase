import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-28 h-28 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 animate-pulse-glow" />
            <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-primary/30">
              <img
                src={profilePhoto}
                alt="Alaeddine Hamadouche"
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-heading text-muted-foreground tracking-wider">
            {t({ fr: "Administration Systèmes & Réseaux • Cybersécurité", en: "System & Network Administration • Cybersecurity" })}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
        >
          <span className="text-primary">Hamadouche</span>
          <br />
          <span className="text-foreground">Alaeddine</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-4"
        >
          {t({
            fr: "Passionné par l'",
            en: "Passionate about ",
          })}
          <span className="text-primary font-medium">
            {t({ fr: "infrastructure IT", en: "IT infrastructure" })}
          </span>
          {t({ fr: " & la ", en: " & " })}
          <span className="text-secondary font-medium">
            {t({ fr: "cybersécurité", en: "cybersecurity" })}
          </span>
          .
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground/70 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t(translations.hero.summary)}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 cyber-glow"
          >
            {t(translations.hero.cta1)}
          </a>
          <a
            href="/cv-finance-alaeddine-hamadouche.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm glass text-foreground hover:text-primary transition-all duration-300 gradient-border"
          >
            <Download size={16} />
            {t(translations.hero.cta2)}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm glass text-foreground hover:text-accent transition-all duration-300"
          >
            <Mail size={16} />
            {t(translations.hero.cta3)}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:cyber-glow transition-shadow duration-300"
          >
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
