import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Shield, Terminal, Cloud, Network, Server, TrendingUp, Activity, BarChart3 } from "lucide-react";

const skills = [
  { icon: Network, label: { fr: "Réseaux & TCP/IP", en: "Networking & TCP/IP" } },
  { icon: Terminal, label: { fr: "Linux & Admin Système", en: "Linux & Sysadmin" } },
  { icon: Shield, label: { fr: "Sécurité & Hardening", en: "Security & Hardening" } },
  { icon: Activity, label: { fr: "Monitoring & Logs", en: "Monitoring & Logs" } },
  { icon: Cloud, label: { fr: "AWS Cloud", en: "AWS Cloud" } },
  { icon: BarChart3, label: { fr: "Power BI & Data", en: "Power BI & Data" } },
  { icon: TrendingUp, label: { fr: "Analyse des Risques", en: "Risk Analysis" } },
];

const QuickSkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -3, boxShadow: "0 0 20px hsl(217 91% 60% / 0.2)" }}
                className="glass rounded-xl px-5 py-3 flex items-center gap-2.5 gradient-border cursor-default"
              >
                <Icon size={16} className="text-primary shrink-0" />
                <span className="text-sm font-heading font-semibold text-foreground whitespace-nowrap">
                  {t(skill.label)}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickSkillsSection;
