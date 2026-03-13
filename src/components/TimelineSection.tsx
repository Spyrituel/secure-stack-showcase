import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.timeline.title)}
          </h2>
          <div className="neon-line w-20 mb-4 mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-8">
            {translations.timeline.items.map((item, i) => {
              const Icon = icons[item.type];
              const hasStatus = "status" in item && item.status;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-3 top-1 w-7 h-7 rounded-full glass gradient-border flex items-center justify-center">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <div className="glass rounded-xl p-5 hover:cyber-glow transition-shadow duration-500">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <span className="text-xs font-heading font-semibold text-primary block">
                        {item.year}
                      </span>
                      {hasStatus && (
                        <Badge className="bg-primary/15 text-primary border-primary/30 text-[10px] shrink-0">
                          {t(item.status!)}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-0.5">
                      {t(item.title)}
                    </h3>
                    <p className="text-xs text-muted-foreground/70 font-heading mb-2">
                      {t(item.institution)}
                    </p>
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
