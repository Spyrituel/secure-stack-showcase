import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Upload, Loader2, Video } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { LabScreenshot } from "@/data/labs";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

interface LabScreenshotGalleryProps {
  screenshots: LabScreenshot[];
  labSlug: string;
}

type LabScreenshotRow = Tables<"lab_screenshots">;

const LabScreenshotGallery = ({ screenshots, labSlug }: LabScreenshotGalleryProps) => {
  const { lang, t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [uploadedScreenshots, setUploadedScreenshots] = useState<LabScreenshot[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sectionTitle = lang === "fr" ? "Captures d'écran du laboratoire" : "Lab Screenshots";

  const allScreenshots = useMemo(
    () => [...screenshots, ...uploadedScreenshots],
    [screenshots, uploadedScreenshots]
  );

  useEffect(() => {
    const fetchUploadedScreenshots = async () => {
      const { data, error } = await supabase
        .from("lab_screenshots")
        .select("id, image_path, caption_fr, caption_en, command_label, sort_order, created_at")
        .eq("lab_slug", labSlug)
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: true });

      if (error) {
        return;
      }

      const mapped = (data as Pick<LabScreenshotRow, "image_path" | "caption_fr" | "caption_en" | "command_label">[]).map(
        (row) => {
          const publicUrl = supabase.storage.from("lab-screenshots").getPublicUrl(row.image_path).data.publicUrl;
          return {
            src: publicUrl,
            caption: {
              fr: row.caption_fr,
              en: row.caption_en,
            },
            command: row.command_label ?? undefined,
          } as LabScreenshot;
        }
      );

      setUploadedScreenshots(mapped);
    };

    void fetchUploadedScreenshots();
  }, [labSlug]);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFilesSelected = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) return;

    setUploadMessage("");
    setIsUploading(true);

    const startOrder = allScreenshots.length;

    const results = await Promise.all(
      files.map(async (file, index) => {
        const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]/g, "-");
        const objectPath = `public/${labSlug}/${Date.now()}-${index}-${safeName}`;

        const { error: uploadError } = await supabase.storage.from("lab-screenshots").upload(objectPath, file, {
          cacheControl: "3600",
          upsert: false,
        });

        if (uploadError) return { ok: false };

        const filenameBase = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " ").trim();
        const generatedCaption =
          filenameBase.length > 0
            ? filenameBase
            : lang === "fr"
              ? "Capture du laboratoire"
              : "Lab screenshot";

        const { error: insertError } = await supabase.from("lab_screenshots").insert({
          lab_slug: labSlug,
          image_path: objectPath,
          caption_fr: generatedCaption,
          caption_en: generatedCaption,
          sort_order: startOrder + index,
          user_id: null,
        });

        return { ok: !insertError };
      })
    );

    const failedCount = results.filter((result) => !result.ok).length;

    if (failedCount > 0) {
      setUploadMessage(
        lang === "fr"
          ? `${files.length - failedCount}/${files.length} captures importées.`
          : `${files.length - failedCount}/${files.length} screenshots imported.`
      );
    } else {
      setUploadMessage(lang === "fr" ? "Captures importées avec succès." : "Screenshots imported successfully.");
    }

    const { data, error } = await supabase
      .from("lab_screenshots")
      .select("id, image_path, caption_fr, caption_en, command_label, sort_order, created_at")
      .eq("lab_slug", labSlug)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (!error) {
      const mapped = (data as Pick<LabScreenshotRow, "image_path" | "caption_fr" | "caption_en" | "command_label">[]).map((row) => {
        const publicUrl = supabase.storage.from("lab-screenshots").getPublicUrl(row.image_path).data.publicUrl;
        return {
          src: publicUrl,
          caption: { fr: row.caption_fr, en: row.caption_en },
          command: row.command_label ?? undefined,
        } as LabScreenshot;
      });
      setUploadedScreenshots(mapped);
    }

    setIsUploading(false);
    event.target.value = "";
  };

  return (
    <>
      <div className="glass rounded-2xl p-6 gradient-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Camera size={18} className="text-primary" />
            <h2 className="font-heading text-lg font-semibold text-foreground">{sectionTitle}</h2>
          </div>

          <div className="flex items-center gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFilesSelected}
            />
            <Button type="button" variant="outline" size="sm" onClick={handleImportClick} disabled={isUploading}>
              {isUploading ? <Loader2 size={14} className="mr-1 animate-spin" /> : <Upload size={14} className="mr-1" />}
              {lang === "fr" ? "Importer des captures" : "Import screenshots"}
            </Button>
          </div>
        </div>

        {uploadMessage && <p className="text-xs text-primary mb-3">{uploadMessage}</p>}

        {allScreenshots.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allScreenshots.map((shot, i) => (
              <motion.div
                key={`${shot.src}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
                <div className="relative overflow-hidden rounded-xl border border-border bg-muted/20 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:-translate-y-0.5">
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="aspect-video rounded-xl bg-muted/30 border border-border flex items-center justify-center"
              >
                <span className="text-xs text-muted-foreground">Screenshot {n}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && allScreenshots[lightboxIndex] && (
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
                src={allScreenshots[lightboxIndex].src}
                alt={t(allScreenshots[lightboxIndex].caption)}
                className="w-full max-h-[75vh] object-contain rounded-xl border border-border"
              />
              <div className="mt-3 text-center">
                <p className="text-sm text-muted-foreground">{t(allScreenshots[lightboxIndex].caption)}</p>
                {allScreenshots[lightboxIndex].command && (
                  <span className="inline-block mt-1 font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded">
                    $ {allScreenshots[lightboxIndex].command}
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
                  {lightboxIndex + 1} / {allScreenshots.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(Math.min(allScreenshots.length - 1, lightboxIndex + 1))}
                  disabled={lightboxIndex === allScreenshots.length - 1}
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
