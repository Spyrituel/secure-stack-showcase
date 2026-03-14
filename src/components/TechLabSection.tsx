import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { labs } from "@/data/labs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TechLabSection = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const viewLab = { fr: "Voir le lab", en: "View Lab" };

  return (
    <section id="lab" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.lab.title)}
          </h2>
          <div className="neon-line w-20 mb-4 mx-auto" />
          <p className="text-muted-foreground text-sm">{t(translations.lab.subtitle)}</p>
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
                whileHover={{ y: -6, boxShadow: "0 0 30px hsl(190 100% 50% / 0.15)" }}
                onClick={() => navigate(`/lab/${lab.slug}`)}
                className="glass rounded-2xl gradient-border cursor-pointer group flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-sm font-semibold text-foreground leading-tight">
                        {t(lab.title)}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        Lab {i + 1}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs text-muted-foreground">
                        {lang === "fr" ? "Progression" : "Progress"}
                      </span>
                      <span className={`text-xs font-semibold ${lab.progress === 100 ? "text-accent" : "text-primary"}`}>
                        {lab.progress}%
                      </span>
                    </div>
                    <Progress value={lab.progress} className="h-1.5 bg-muted" />
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                    {t(lab.shortDesc)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {lab.tech.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-[10px] px-2 py-0.5 border-border text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {lab.tech.length > 4 && (
                      <Badge
                        variant="outline"
                        className="text-[10px] px-2 py-0.5 border-border text-muted-foreground"
                      >
                        +{lab.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
                    {t(viewLab)}
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
