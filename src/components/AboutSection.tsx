import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { Shield, Server, Network, TrendingUp, GraduationCap, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutSection = () => {
  const { lang, t } = useLanguage();

  const cards = [
    {
      icon: GraduationCap,
      title: { fr: "Formation", en: "Education" },
      desc: { fr: "AEC Gestion Systèmes & Réseaux — Cégep de Sherbrooke + BTS Admin & Sécurité — INSIM", en: "AEC IT Systems & Networks — Cégep de Sherbrooke + BTS Admin & Security — INSIM" },
    },
    {
      icon: Shield,
      title: { fr: "Compétences Clés", en: "Core Skills" },
      desc: { fr: "Administration système, sécurité réseau, analyse de logs, AWS Cloud, monitoring", en: "System admin, network security, log analysis, AWS Cloud, monitoring" },
    },
    {
      icon: Award,
      title: { fr: "Certifications", en: "Certifications" },
      desc: { fr: "Microsoft PL-300, AWS Cloud Practitioner Training, Formation Cybersécurité", en: "Microsoft PL-300, AWS Cloud Practitioner Training, Cybersecurity Training" },
    },
  ];

  const journey = translations.about.journey[lang];

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Photo side */}
          <motion.div custom={0} variants={fadeUp} className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 rotate-6" />
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border">
                <img
                  src={profilePhoto}
                  alt="Alaeddine Hamadouche"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <div>
            <motion.div custom={1} variants={fadeUp}>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 text-foreground">
                {t(translations.about.title)}
              </h2>
              <div className="neon-line w-16 mb-8" />
            </motion.div>

            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
              {t(translations.about.p1)}
            </motion.p>
            <motion.p custom={3} variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
              {t(translations.about.p2)}
            </motion.p>

            {/* Journey pills */}
            <motion.div custom={4} variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-8">
              {journey.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full glass text-xs font-heading font-medium text-foreground border border-border/50">
                    {step}
                  </span>
                  {i < journey.length - 1 && (
                    <span className="text-primary text-xs">→</span>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div custom={5} variants={fadeUp}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all"
              >
                {t(translations.about.ctaFull)}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 border border-border/50 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon size={24} />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{t(card.title)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(card.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
