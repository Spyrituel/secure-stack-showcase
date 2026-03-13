import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";

const skillCategories = [
  {
    key: "networking" as const,
    skills: ["TCP/IP", "DNS", "DHCP", "VLAN", "Routing", "Network Troubleshooting"],
    color: "from-primary/20 to-primary/5",
  },
  {
    key: "sysadmin" as const,
    skills: ["Linux", "Windows Server", "Active Directory", "Virtualization"],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    key: "security" as const,
    skills: ["Vulnerability Scanning", "Security Hardening", "Monitoring", "Incident Detection"],
    color: "from-accent/20 to-accent/5",
  },
  {
    key: "tools" as const,
    skills: ["Wireshark", "Nmap", "OWASP ZAP", "Git", "Bash / PowerShell"],
    color: "from-primary/10 to-secondary/10",
  },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.skills.title)}
          </h2>
          <div className="neon-line w-20 mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 gradient-border group hover:cyber-glow transition-shadow duration-500"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                {t(translations.skills[cat.key])}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r ${cat.color} text-foreground border border-border/50`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
