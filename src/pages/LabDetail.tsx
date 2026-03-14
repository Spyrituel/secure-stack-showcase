import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { labs } from "@/data/labs";
import { awsLabs } from "@/data/awsLabs";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Target, MonitorCog, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import CyberBackground from "@/components/CyberBackground";
import LabScreenshotGallery from "@/components/LabScreenshotGallery";

const LabDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const lab = labs.find((l) => l.slug === slug) || awsLabs.find((l) => l.slug === slug);

  if (!lab) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-foreground mb-4">Lab not found</h1>
          <button onClick={() => navigate("/#lab")} className="text-primary hover:underline">
            ← {lang === "fr" ? "Retour" : "Back"}
          </button>
        </div>
      </div>
    );
  }

  const Icon = lab.icon;
  const screenshots = (lab as any).screenshots || [];

  const sectionLabel = (icon: React.ReactNode, label: string) => (
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h2 className="font-heading text-lg font-semibold text-foreground">{label}</h2>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CyberBackground />
      <div className="relative z-10">
        {/* Header */}
        <div className="glass border-b border-border">
          <div className="container mx-auto max-w-4xl px-6 py-4">
            <button
              onClick={() => navigate("/#lab")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              {lang === "fr" ? "Retour aux labs" : "Back to labs"}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Title block */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Icon size={28} />
              </div>
              <div>
                <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  {t(lab.title)}
                </h1>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-semibold ${lab.progress === 100 ? "text-accent" : "text-primary"}`}>
                    {lab.progress}%
                  </span>
                  <Progress value={lab.progress} className="h-1.5 w-32 bg-muted" />
                </div>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {lab.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs border-border text-muted-foreground">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="space-y-10">
              {/* Full description */}
              <div className="glass rounded-2xl p-6 gradient-border">
                {sectionLabel(
                  <Target size={18} className="text-primary" />,
                  lang === "fr" ? "Description" : "Description"
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(lab.fullDesc)}
                </p>
              </div>

              {/* Objectives */}
              <div className="glass rounded-2xl p-6 gradient-border">
                {sectionLabel(
                  <Target size={18} className="text-primary" />,
                  lang === "fr" ? "Objectifs" : "Objectives"
                )}
                <ul className="space-y-2">
                  {lab.objectives[lang].map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Environment */}
              <div className="glass rounded-2xl p-6 gradient-border">
                {sectionLabel(
                  <MonitorCog size={18} className="text-primary" />,
                  lang === "fr" ? "Environnement" : "Environment"
                )}
                <div className="flex flex-wrap gap-2">
                  {lab.environment[lang].map((env) => (
                    <Badge key={env} className="bg-muted text-muted-foreground border-0 text-xs">
                      {env}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Commands */}
              <div className="glass rounded-2xl p-6 gradient-border">
                {sectionLabel(
                  <Terminal size={18} className="text-primary" />,
                  lang === "fr" ? "Commandes utilisées" : "Commands Used"
                )}
                <div className="space-y-2">
                  {lab.commands.map((cmd, i) => (
                    <div
                      key={i}
                      className="bg-muted/50 rounded-lg px-4 py-2.5 font-mono text-xs text-foreground border border-border"
                    >
                      <span className="text-primary mr-2">$</span>
                      {cmd}
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshots - Reusable Component */}
              <LabScreenshotGallery screenshots={screenshots} labSlug={slug ?? lab.slug} videoUrl={(lab as any).videoUrl} />

              {/* Results */}
              <div className="glass rounded-2xl p-6 gradient-border">
                {sectionLabel(
                  <Trophy size={18} className="text-primary" />,
                  lang === "fr" ? "Résultats & Apprentissages" : "Results & Learnings"
                )}
                <ul className="space-y-2">
                  {lab.results[lang].map((res, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">✓</span>
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LabDetail;
