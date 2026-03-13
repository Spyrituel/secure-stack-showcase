import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/", label: t({ fr: "Accueil", en: "Home" }), isRoute: true },
    { href: "/about", label: t(translations.nav.about), isRoute: true },
    { href: "#lab", label: t(translations.nav.lab) },
    { href: "#projects", label: t(translations.nav.projects) },
    { href: "#contact", label: t(translations.nav.contact) },
  ];

  const linkClass = "text-sm text-muted-foreground hover:text-primary transition-colors duration-300";

  const renderLink = (l: typeof links[0], onClick?: () => void) => {
    if (l.isRoute) {
      return (
        <Link key={l.href} to={l.href} onClick={onClick} className={linkClass}>
          {l.label}
        </Link>
      );
    }
    // For hash links, if we're not on home, navigate to home first
    const target = location.pathname === "/" ? l.href : `/${l.href}`;
    return (
      <a key={l.href} href={target} onClick={onClick} className={linkClass}>
        {l.label}
      </a>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-bold gradient-text">
          AH
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          {links.map((l) => renderLink(l))}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="glass px-3 py-1.5 rounded-md text-xs font-heading font-semibold text-primary hover:cyber-glow transition-all duration-300"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => renderLink(l, () => setOpen(false)))}
              <button
                onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setOpen(false); }}
                className="glass px-3 py-1.5 rounded-md text-xs font-heading font-semibold text-primary self-start"
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
