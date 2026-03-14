import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { LabScreenshot } from "@/data/labs";

interface LabScreenshotGalleryProps {
  screenshots: LabScreenshot[];
}

const LabScreenshotGallery = ({ screenshots }: LabScreenshotGalleryProps) => {
  const { lang, t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const sectionTitle = lang === "fr" ? "Captures d'écran du laboratoire" : "Lab Screenshots";

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="glass rounded-2xl p-6 gradient-border">
        <div className="flex items-center gap-2 mb-4">
          <Camera size={18} className="text-primary" />
          <h2 className="font-heading text-lg font-semibold text-foreground">{sectionTitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="aspect-video rounded-xl bg-muted/30 border border-border flex items-center justify-center"
            >
              <span className="text-xs text-muted-foreground">Screenshot {n}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="glass rounded-2xl p-6 gradient-border">
        <div className="flex items-center gap-2 mb-4">
          <Camera size={18} className="text-primary" />
          <h2 className="font-heading text-lg font-semibold text-foreground">{sectionTitle}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {screenshots.map((shot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
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
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={28} className="text-primary" />
                </div>
              </div>
              <div className="mt-2 px-1">
                <p className="text-xs text-muted-foreground leading-relaxed">{t(shot.caption)}</p>
                {shot.command && (
                  <span className="inline-block mt-1 font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">
                    $ {shot.command}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
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
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setLightboxIndex(Math.max(0, lightboxIndex - 1))}
                  disabled={lightboxIndex === 0}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft size={16} />
                  {lang === "fr" ? "Précédent" : "Previous"}
                </button>
                <span className="text-xs text-muted-foreground">
                  {lightboxIndex + 1} / {screenshots.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(Math.min(screenshots.length - 1, lightboxIndex + 1))}
                  disabled={lightboxIndex === screenshots.length - 1}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary disabled:opacity-30 transition-colors"
                >
                  {lang === "fr" ? "Suivant" : "Next"} 
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LabScreenshotGallery;
