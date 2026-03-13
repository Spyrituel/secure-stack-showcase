import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield } from "lucide-react";

const HybridProfileSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hybrid" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.hybrid.title)}
          </h2>
          <div className="neon-line w-20 mb-4 mx-auto" />
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            {t(translations.hybrid.subtitle)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {translations.hybrid.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 gradient-border hover:cyber-glow transition-shadow duration-500"
            >
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 text-accent">
                  <TrendingUp size={14} />
                  <span className="text-xs font-heading font-semibold">{t(item.finance)}</span>
                </div>
                <ArrowRight size={16} className="text-muted-foreground shrink-0" />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary">
                  <Shield size={14} />
                  <span className="text-xs font-heading font-semibold">{t(item.cyber)}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(item.desc)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HybridProfileSection;
