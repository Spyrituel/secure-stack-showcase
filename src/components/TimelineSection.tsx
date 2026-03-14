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
    <section id="experience" className="section-padding relative z-10">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 text-foreground">
            {t(translations.timeline.title)}
          </h2>
          <div className="neon-line w-16 mb-4 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-accent/20" />

          <div className="space-y-8">
            {translations.timeline.items.map((item, i) => {
              const Icon = icons[item.type];
              const hasStatus = "status" in item && item.status;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-16"
                >
                  {/* Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-3 top-1 w-7 h-7 rounded-full glass border border-primary/30 flex items-center justify-center"
                  >
                    <Icon size={14} className="text-primary" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="glass rounded-xl p-5 border border-border/50 hover:border-primary/20 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <span className="text-xs font-heading font-semibold text-primary">
                        {item.year}
                      </span>
                      {hasStatus && (
                        <Badge className="bg-primary/15 text-primary border-primary/30 text-[10px] shrink-0">
                          {t(item.status!)}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-foreground mb-0.5">
                      {t(item.title)}
                    </h3>
                    <p className="text-xs text-muted-foreground/70 font-heading mb-2">
                      {t(item.institution)}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(item.desc)}
                    </p>
                  </motion.div>
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
