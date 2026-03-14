import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { labs } from "@/data/labs";
import TechBadge from "@/components/TechBadge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TechLabSection = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="lab" className="section-padding relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 text-foreground">
            {t(translations.lab.title)}
          </h2>
          <div className="neon-line w-16 mb-4 mx-auto" />
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            {t(translations.lab.subtitle)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, i) => {
            const Icon = lab.icon;
            return (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => navigate(`/lab/${lab.slug}`)}
                className="glass rounded-2xl cursor-pointer group flex flex-col border border-border/50 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(25_95%_53%/0.15)] transition-all duration-500"
              >
                {/* Card header with gradient */}
                <div className="h-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="relative z-10 p-4 rounded-2xl glass"
                  >
                    <Icon size={28} className="text-primary" />
                  </motion.div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-heading font-semibold text-primary uppercase tracking-widest">
                      Lab {i + 1}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      lab.progress === 100
                        ? "bg-accent/15 text-accent"
                        : "bg-primary/15 text-primary"
                    }`}>
                      {lab.progress}%
                    </span>
                  </div>

                  <h3 className="font-heading text-sm font-semibold text-foreground leading-tight mb-3">
                    {t(lab.title)}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                    {t(lab.shortDesc)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {lab.tech.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-[10px] px-2 py-0.5 border-border/50 text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {lab.tech.length > 3 && (
                      <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-border/50 text-muted-foreground">
                        +{lab.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-heading font-medium text-primary group-hover:gap-3 transition-all duration-300">
                    {t({ fr: "Voir le lab", en: "View Lab" })}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechLabSection;
