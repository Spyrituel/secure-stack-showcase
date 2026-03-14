import { useState, useRef, useEffect } from "react";
import { Download, ChevronDown, Shield, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface CVDropdownProps {
  className?: string;
  buttonClassName?: string;
}

const cvOptions = [
  {
    href: "/cv-sysnet.pdf",
    icon: Shield,
    label: { fr: "CV Systèmes, Réseaux & Sécurité", en: "Systems, Networks & Security CV" },
  },
  {
    href: "/cv-finance.pdf",
    icon: TrendingUp,
    label: { fr: "CV Finance", en: "Finance CV" },
  },
];

const CVDropdown = ({ className = "", buttonClassName = "" }: CVDropdownProps) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={buttonClassName}
      >
        <Download size={16} />
        {t({ fr: "Télécharger le CV", en: "Download CV" })}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 sm:left-auto sm:right-0 sm:w-72 mt-2 z-50 glass rounded-xl border border-border/50 overflow-hidden shadow-xl"
          >
            {cvOptions.map((cv) => (
              <a
                key={cv.href}
                href={cv.href}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
              >
                <cv.icon size={16} className="text-primary shrink-0" />
                <span className="font-heading font-medium">{t(cv.label)}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CVDropdown;
