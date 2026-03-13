import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { Monitor, Server, Shield, Wifi, Terminal, Database } from "lucide-react";

const labItems = [
  { icon: Terminal, label: "Linux" },
  { icon: Monitor, label: "Windows Server" },
  { icon: Server, label: "VMs / Proxmox" },
  { icon: Wifi, label: "Cisco / pfSense" },
  { icon: Shield, label: "Kali Linux" },
  { icon: Database, label: "Docker" },
];

const TechLabSection = () => {
  const { t } = useLanguage();

  return (
    <section id="lab" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.lab.title)}
          </h2>
          <div className="neon-line w-20 mb-4 mx-auto" />
          <p className="text-muted-foreground mb-12">{t(translations.lab.subtitle)}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {labItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass rounded-2xl p-6 gradient-border cursor-default group"
            >
              <item.icon
                size={36}
                className="mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300"
              />
              <span className="font-heading text-sm font-medium text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechLabSection;
