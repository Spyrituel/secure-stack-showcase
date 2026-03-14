import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { awsLabs } from "@/data/awsLabs";
import { Badge } from "@/components/ui/badge";
import TechBadge from "@/components/TechBadge";
import { ArrowRight, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AwsCloudSection = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const sectionTitle = { fr: "Cloud AWS", en: "AWS Cloud" };
  const sectionSubtitle = {
    fr: "Labs réalisés dans le cadre de la préparation à la certification AWS Cloud Practitioner.",
    en: "Labs completed as part of AWS Cloud Practitioner certification preparation.",
  };

  return (
    <section id="aws" className="section-padding relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 text-foreground">
            {t(sectionTitle)}
          </h2>
          <div className="neon-line w-16 mb-4 mx-auto" />
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">{t(sectionSubtitle)}</p>
        </motion.div>

        {/* Certification Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center gap-4 border border-primary/20"
        >
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Award size={28} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-heading text-base font-semibold text-foreground mb-1">
              AWS Cloud Practitioner Training
            </h3>
            <p className="text-xs text-muted-foreground">
              {t({ fr: "Architecture cloud, services principaux, sécurité et modèle de responsabilité partagée.", en: "Cloud architecture, core services, security and shared responsibility model." })}
            </p>
          </div>
          <Badge className="bg-accent/15 text-accent border-accent/30 text-xs shrink-0">
            {lang === "fr" ? "Validée" : "Completed"}
          </Badge>
        </motion.div>

        {/* AWS Labs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awsLabs.map((lab, i) => {
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
                <div className="h-28 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                  <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="relative z-10 p-3 rounded-2xl glass">
                    <Icon size={24} className="text-primary" />
                  </motion.div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-sm font-semibold text-foreground leading-tight mb-3">
                    {t(lab.title)}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                    {t(lab.shortDesc)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {lab.tech.slice(0, 3).map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
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

export default AwsCloudSection;
