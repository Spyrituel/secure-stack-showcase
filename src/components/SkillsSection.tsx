import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { 
  Monitor, Network, Shield, Cloud, BarChart3, Activity,
  Terminal, Server, Lock, Database, Wifi, Eye
} from "lucide-react";

const skillCategories = [
  {
    key: "sysadmin" as const,
    icon: Terminal,
    skills: [
      { name: "Linux", icon: Monitor },
      { name: "Windows Server", icon: Server },
    ],
  },
  {
    key: "networking" as const,
    icon: Network,
    skills: [
      { name: "TCP/IP", icon: Wifi },
      { name: "DNS", icon: Network },
      { name: "DHCP", icon: Network },
      { name: "Routing", icon: Network },
      { name: "VLAN", icon: Network },
    ],
  },
  {
    key: "security" as const,
    icon: Shield,
    skills: [
      { name: "SIEM", icon: Eye },
      { name: "IDS/IPS", icon: Shield },
      { name: "Log Analysis", icon: Activity },
      { name: "Threat Analysis", icon: Lock },
    ],
  },
  {
    key: "cloud" as const,
    icon: Cloud,
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Cloud Fundamentals", icon: Cloud },
      { name: "IAM", icon: Lock },
    ],
  },
  {
    key: "monitoring" as const,
    icon: Activity,
    skills: [
      { name: "Wireshark", icon: Eye },
      { name: "Nmap", icon: Network },
      { name: "Bash", icon: Terminal },
    ],
  },
  {
    key: "finance" as const,
    icon: BarChart3,
    skills: [
      { name: "Power BI", icon: BarChart3 },
      { name: "Data Analysis", icon: Database },
    ],
  },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 text-foreground">
            {t(translations.skills.title)}
          </h2>
          <div className="neon-line w-16 mb-4 mx-auto" />
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            {t({ fr: "Technologies et compétences développées à travers labs et formations.", en: "Technologies and skills developed through labs and training." })}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 border border-border/50 group hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <CatIcon size={20} />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {t(translations.skills[cat.key])}
                  </h3>
                </div>
                <div className="space-y-3">
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <SkillIcon size={14} className="text-primary/70 shrink-0" />
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
