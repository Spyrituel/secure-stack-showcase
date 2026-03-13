import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { Shield, Server, Network } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Network, label: { fr: "Réseaux", en: "Networking" } },
    { icon: Server, label: { fr: "Systèmes", en: "Systems" } },
    { icon: Shield, label: { fr: "Sécurité", en: "Security" } },
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.about.title)}
          </h2>
          <div className="neon-line w-20 mb-8" />
          <div className="glass rounded-2xl p-8 sm:p-10">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(translations.about.p1)}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t(translations.about.p2)}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="glass rounded-xl p-4 text-center gradient-border"
                >
                  <h.icon className="mx-auto mb-2 text-primary" size={28} />
                  <span className="text-sm font-heading font-medium text-foreground">
                    {t(h.label)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
