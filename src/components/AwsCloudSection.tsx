import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { awsServices, awsLabs } from "@/data/awsLabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Cloud, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AwsCloudSection = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  const sectionTitle = {
    fr: "AWS CLOUD — Formation & Compétences Cloud",
    en: "AWS CLOUD — Training & Cloud Skills",
  };
  const sectionSubtitle = {
    fr: "Formation AWS Cloud Practitioner · Concepts fondamentaux du Cloud AWS",
    en: "AWS Cloud Practitioner Training · Foundational AWS Cloud Concepts",
  };
  const foundationsTitle = {
    fr: "Fondamentaux AWS Cloud",
    en: "AWS Cloud Foundations",
  };
  const foundationsDesc = {
    fr: "Formation aux concepts fondamentaux du cloud computing avec Amazon Web Services, incluant les modèles de service cloud, l'architecture AWS et les bonnes pratiques de sécurité.",
    en: "Training on the fundamentals of cloud computing using Amazon Web Services, including cloud service models, AWS architecture, and security best practices.",
  };
  const foundationsTopics = {
    fr: [
      "Fondamentaux du cloud computing",
      "Infrastructure globale AWS",
      "Modèle de responsabilité partagée",
      "Concepts de tarification et facturation",
      "Principes d'architecture cloud",
    ],
    en: [
      "Cloud computing fundamentals",
      "AWS global infrastructure",
      "Shared responsibility model",
      "Pricing and billing concepts",
      "Cloud architecture principles",
    ],
  };
  const servicesTitle = {
    fr: "Services AWS Découverts",
    en: "AWS Services Discovered",
  };
  const labsTitle = {
    fr: "Labs Cloud AWS",
    en: "AWS Cloud Labs",
  };
  const viewDetails = {
    fr: "Voir les détails",
    en: "View Details",
  };
  const certTitle = {
    fr: "AWS Cloud Practitioner Training",
    en: "AWS Cloud Practitioner Training",
  };
  const certDesc = {
    fr: "Formation aux bases du cloud AWS couvrant l'architecture, la sécurité, les services principaux et les principes de gestion du cloud.",
    en: "Training covering AWS cloud fundamentals, architecture, security, core services, and cloud management principles.",
  };

  return (
    <section id="aws" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(sectionTitle)}
          </h2>
          <div className="neon-line w-20 mb-4 mx-auto" />
          <p className="text-muted-foreground text-sm">{t(sectionSubtitle)}</p>
        </motion.div>

        {/* Certification Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl gradient-border p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
            <Award size={28} />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-base font-semibold text-foreground mb-1">
              {t(certTitle)}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t(certDesc)}
            </p>
          </div>
          <Badge className="bg-accent/15 text-accent border-accent/30 text-xs shrink-0">
            {lang === "fr" ? "Formation validée" : "Training completed"}
          </Badge>
        </motion.div>

        {/* Foundations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl gradient-border p-6 mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Cloud size={22} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {t(foundationsTitle)}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {t(foundationsDesc)}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {foundationsTopics[lang].map((topic, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">▹</span>
                {topic}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <h3 className="font-heading text-xl font-semibold text-foreground mb-6 text-center">
            {t(servicesTitle)}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awsServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl p-5 gradient-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">{service.name}</h4>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        {t(service.category)}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t(service.desc)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* AWS Labs */}
        <h3 className="font-heading text-xl font-semibold text-foreground mb-6 text-center">
          {t(labsTitle)}
        </h3>
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
                      <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0.5 border-border text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
                    {t(viewDetails)}
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
