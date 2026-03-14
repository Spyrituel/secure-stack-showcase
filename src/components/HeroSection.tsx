import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion, useAnimation } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.png";

const roles = {
  fr: [
    "Administration Systèmes & Réseaux",
    "Cybersécurité",
    "AWS Cloud",
    "Analyse de Logs & SIEM",
  ],
  en: [
    "System & Network Administration",
    "Cybersecurity",
    "AWS Cloud",
    "Log Analysis & SIEM",
  ],
};

const useTypewriter = (words: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

const letterVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.4 + i * 0.04, duration: 0.5, ease: [0.25, 0.1, 0, 1] as [number, number, number, number] },
  }),
};

const TextReveal = ({ text, className, startDelay = 0 }: { text: string; className?: string; startDelay?: number }) => (
  <span className={className}>
    {text.split("").map((char, i) => (
      <motion.span
        key={`${char}-${i}`}
        custom={i + startDelay}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : undefined }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => {
  const { lang, t } = useLanguage();
  const typewriterText = useTypewriter(roles[lang]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center overflow-hidden pt-24 sm:pt-0">
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-5 sm:mb-8"
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
          className="inline-flex items-center gap-2 glass px-3 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 max-w-full"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-heading text-muted-foreground tracking-wider text-center leading-tight">
            {t({ fr: "Administration Systèmes & Réseaux • Cybersécurité", en: "System & Network Administration • Cybersecurity" })}
          </span>
        </motion.div>

        {/* Name with text reveal */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">
          <TextReveal text="Hamadouche" className="text-primary" />
          <br />
          <TextReveal text="Alaeddine" className="text-foreground" startDelay={10} />
        </h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="h-8 mb-6 flex items-center justify-center"
        >
          <span className="font-heading text-lg sm:text-xl text-primary font-semibold">
            {typewriterText}
          </span>
          <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 animate-pulse" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
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
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-muted-foreground/70 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t(translations.hero.summary)}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href="#lab"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-heading font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 cyber-glow w-full sm:w-auto"
          >
            {t(translations.hero.ctaLabs)}
          </a>
          <a
            href="/cv-finance-alaeddine-hamadouche.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-heading font-semibold text-sm glass text-foreground hover:text-primary transition-all duration-300 gradient-border w-full sm:w-auto"
          >
            <Download size={16} />
            {t(translations.hero.cta2)}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-heading font-semibold text-sm glass text-foreground hover:text-accent transition-all duration-300 w-full sm:w-auto"
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
        transition={{ delay: 2.2, duration: 0.8 }}
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
