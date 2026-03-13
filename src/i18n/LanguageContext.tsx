import { createContext, useContext, useState, ReactNode } from "react";
import { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (obj: Record<string, string> | { fr: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");
  const t = (obj: Record<string, string> | { fr: string; en: string }) => obj[lang] || obj["fr"] || "";

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
