import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import TechIcon from "@/components/TechIcon";

const skills = [
  { tech: "TCP/IP", label: { fr: "Réseaux & TCP/IP", en: "Networking & TCP/IP" } },
  { tech: "Linux", label: { fr: "Linux & Admin Système", en: "Linux & Sysadmin" } },
  { tech: "IDS/IPS", label: { fr: "Sécurité & Hardening", en: "Security & Hardening" } },
  { tech: "Wireshark", label: { fr: "Monitoring & Logs", en: "Monitoring & Logs" } },
  { tech: "AWS", label: { fr: "AWS Cloud", en: "AWS Cloud" } },
  { tech: "Power BI", label: { fr: "Power BI & Data", en: "Power BI & Data" } },
  { tech: "Threat Analysis", label: { fr: "Analyse des Risques", en: "Risk Analysis" } },
];

const QuickSkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -3, boxShadow: "0 0 20px hsl(var(--primary) / 0.2)" }}
              className="glass rounded-xl px-3 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 gradient-border cursor-default group"
            >
              <span className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-200">
                <TechIcon name={skill.tech} size={18} />
              </span>
              <span className="text-sm font-heading font-semibold text-foreground whitespace-nowrap">
                {t(skill.label)}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickSkillsSection;
