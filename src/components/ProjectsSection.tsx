import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.projects.title)}
          </h2>
          <div className="neon-line w-20 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {translations.projects.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl overflow-hidden group gradient-border hover:cyber-glow transition-all duration-500"
            >
              {/* Screenshot placeholder */}
              <div className="h-40 bg-gradient-to-br from-muted to-card flex items-center justify-center">
                <div className="font-heading text-2xl font-bold text-muted-foreground/30 group-hover:text-primary/40 transition-colors duration-500">
                  {"</>"}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t(project.title)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {t(project.desc)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-heading font-medium text-primary hover:underline"
                  >
                    {t(translations.projects.viewDetails)}
                    <ExternalLink size={14} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
