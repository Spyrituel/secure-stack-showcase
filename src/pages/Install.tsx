import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import CyberBackground from "@/components/CyberBackground";
import Navbar from "@/components/Navbar";
import { Download, Smartphone, CheckCircle, Share } from "lucide-react";
import { motion } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const { t } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const ua = navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua));

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setIsInstalled(true);
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CyberBackground />
      <Navbar />
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 max-w-md w-full text-center space-y-6"
        >
          <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img src="/pwa-icon-512.png" alt="App Icon" className="w-full h-full object-cover" />
          </div>

          <h1 className="font-heading text-2xl font-bold text-foreground">
            {t({ fr: "Installer l'application", en: "Install the App" })}
          </h1>

          <p className="text-muted-foreground text-sm">
            {t({
              fr: "Accédez à mon portfolio directement depuis votre écran d'accueil, avec un chargement rapide et un mode hors-ligne.",
              en: "Access my portfolio directly from your home screen, with fast loading and offline mode.",
            })}
          </p>

          {isInstalled ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <CheckCircle size={20} />
              <span className="font-heading font-semibold text-sm">
                {t({ fr: "Déjà installée !", en: "Already installed!" })}
              </span>
            </div>
          ) : isIOS ? (
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">
                {t({ fr: "Sur iPhone / iPad :", en: "On iPhone / iPad:" })}
              </p>
              <div className="flex items-center gap-3 text-left">
                <Share size={18} className="text-primary shrink-0" />
                <span>
                  {t({
                    fr: "Appuyez sur le bouton Partager, puis « Sur l'écran d'accueil »",
                    en: "Tap the Share button, then 'Add to Home Screen'",
                  })}
                </span>
              </div>
            </div>
          ) : deferredPrompt ? (
            <button
              onClick={handleInstall}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-3 font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Download size={18} />
              {t({ fr: "Installer", en: "Install" })}
            </button>
          ) : (
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Smartphone size={18} />
              <span>
                {t({
                  fr: "Ouvrez cette page sur mobile pour installer l'app",
                  en: "Open this page on mobile to install the app",
                })}
              </span>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            {[
              { icon: "⚡", label: t({ fr: "Rapide", en: "Fast" }) },
              { icon: "📱", label: t({ fr: "Hors-ligne", en: "Offline" }) },
              { icon: "🔒", label: t({ fr: "Sécurisé", en: "Secure" }) },
            ].map((f) => (
              <div key={f.label} className="text-center">
                <div className="text-2xl mb-1">{f.icon}</div>
                <div className="text-xs text-muted-foreground">{f.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Install;
