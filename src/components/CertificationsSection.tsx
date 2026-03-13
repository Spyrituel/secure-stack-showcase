import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { Award, BarChart3, Cloud, Shield } from "lucide-react";

const certIcons = [BarChart3, Cloud, Shield];

const CertificationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.certifications.title)}
          </h2>
          <div className="neon-line w-20 mb-4 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {translations.certifications.items.map((cert, i) => {
            const Icon = certIcons[i] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: "0 0 30px hsl(217 91% 60% / 0.15)" }}
                className="glass rounded-2xl p-6 gradient-border group flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cert.color} shrink-0`}>
                    <Icon size={22} className={cert.iconColor} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-sm font-semibold text-foreground leading-tight">
                      {t(cert.name)}
                    </h3>
                    <span className="text-xs text-muted-foreground">{cert.org}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {t(cert.desc)}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-heading font-semibold text-primary uppercase tracking-wider">
                    {cert.year}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-heading font-semibold text-accent">
                    <Award size={12} />
                    {cert.org === "Microsoft Certified" ? "Certified" : "Completed"}
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

export default CertificationsSection;
