import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { labs } from "@/data/labs";
import { awsLabs } from "@/data/awsLabs";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Terminal, Target, MonitorCog, Camera, Trophy, ZoomIn, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import CyberBackground from "@/components/CyberBackground";
import { useState } from "react";

const LabDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

              {/* Screenshots */}
              <div className="glass rounded-2xl p-6 gradient-border">
                {sectionLabel(
                  <Camera size={18} className="text-primary" />,
                  lang === "fr" ? "Captures d'écran du laboratoire" : "Lab Screenshots"
                )}
                {screenshots.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {screenshots.map((shot: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                        onClick={() => setLightboxIndex(i)}
                      >
                        <div className="relative overflow-hidden rounded-xl border border-border bg-muted/20 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/5">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={shot.src}
                              alt={t(shot.caption)}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          {/* Zoom overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ZoomIn size={28} className="text-primary" />
                          </div>
                        </div>
                        <div className="mt-2 px-1">
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {t(shot.caption)}
                          </p>
                          {shot.command && (
                            <span className="inline-block mt-1 font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">
                              $ {shot.command}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2].map((n) => (
                      <div
                        key={n}
                        className="aspect-video rounded-xl bg-muted/30 border border-border flex items-center justify-center"
                      >
                        <span className="text-xs text-muted-foreground">
                          Screenshot {n}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && screenshots[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-10 right-0 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={screenshots[lightboxIndex].src}
                alt={t(screenshots[lightboxIndex].caption)}
                className="w-full max-h-[75vh] object-contain rounded-xl border border-border"
              />
              <div className="mt-3 text-center">
                <p className="text-sm text-muted-foreground">
                  {t(screenshots[lightboxIndex].caption)}
                </p>
                {screenshots[lightboxIndex].command && (
                  <span className="inline-block mt-1 font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded">
                    $ {screenshots[lightboxIndex].command}
                  </span>
                )}
              </div>
              {/* Navigation arrows */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setLightboxIndex(Math.max(0, lightboxIndex - 1))}
                  disabled={lightboxIndex === 0}
                  className="text-sm text-muted-foreground hover:text-primary disabled:opacity-30 transition-colors"
                >
                  ← {lang === "fr" ? "Précédent" : "Previous"}
                </button>
                <span className="text-xs text-muted-foreground">
                  {lightboxIndex + 1} / {screenshots.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(Math.min(screenshots.length - 1, lightboxIndex + 1))}
                  disabled={lightboxIndex === screenshots.length - 1}
                  className="text-sm text-muted-foreground hover:text-primary disabled:opacity-30 transition-colors"
                >
                  {lang === "fr" ? "Suivant" : "Next"} →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LabDetail;
