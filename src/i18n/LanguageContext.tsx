import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (obj: Record<string, string> | { fr: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-lang";

const getInitialLang = (): Lang => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") return stored;
  } catch {}
  return "fr";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  const t = (obj: Record<string, string> | { fr: string; en: string }) => obj[lang] || obj["fr"] || "";

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try { localStorage.setItem(STORAGE_KEY, newLang); } catch {}
  };

  // Update HTML lang attribute and document title
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "fr"
      ? "Alae Portfolio – Cybersécurité"
      : "Alae Portfolio – Cybersecurity";

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", lang === "fr"
        ? "Portfolio d'Alaeddine Hamadouche, étudiant en administration et sécurité des systèmes, réseaux et cloud. Profil hybride cybersécurité et finance."
        : "Portfolio of Alaeddine Hamadouche, student in system, network & cloud administration and security. Hybrid cybersecurity and finance profile."
      );
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", lang === "fr"
        ? "Alaeddine Hamadouche — Portfolio Cybersécurité & Cloud"
        : "Alaeddine Hamadouche — Cybersecurity & Cloud Portfolio"
      );
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", lang === "fr"
        ? "Profil hybride combinant cybersécurité, infrastructure réseau, cloud et analyse financière."
        : "Hybrid profile combining cybersecurity, network infrastructure, cloud and financial analysis."
      );
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
