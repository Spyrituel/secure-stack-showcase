import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const icons = {
  education: GraduationCap,
  experience: Briefcase,
  certification: Award,
};

const TimelineSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.timeline.title)}
          </h2>
          <div className="neon-line w-20 mb-12" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-8">
            {translations.timeline.items.map((item, i) => {
              const Icon = icons[item.type];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-3 top-1 w-7 h-7 rounded-full glass gradient-border flex items-center justify-center">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <div className="glass rounded-xl p-5">
                    <span className="text-xs font-heading font-semibold text-primary mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                      {t(item.title)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(item.desc)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
