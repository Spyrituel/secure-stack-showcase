import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/", label: t({ fr: "Accueil", en: "Home" }), isRoute: true, id: "home" },
    { href: "#about", label: t(translations.nav.about), id: "about" },
    { href: "#skills", label: t(translations.nav.skills), id: "skills" },
    { href: "#lab", label: t(translations.nav.lab), id: "lab" },
    { href: "#aws", label: t(translations.nav.aws), id: "aws" },
    { href: "#experience", label: t(translations.nav.experience), id: "experience" },
    { href: "#contact", label: t(translations.nav.contact), id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ["contact", "experience", "aws", "lab", "skills", "about"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `text-sm font-heading transition-colors duration-300 ${
      activeSection === id
        ? "text-primary font-semibold"
        : "text-muted-foreground hover:text-foreground"
    }`;

  const renderLink = (l: typeof links[0], onClick?: () => void) => {
    if (l.isRoute) {
      return (
        <Link key={l.href} to={l.href} onClick={onClick} className={linkClass(l.id)}>
          {l.label}
        </Link>
      );
    }
    const target = location.pathname === "/" ? l.href : `/${l.href}`;
    return (
      <a key={l.href} href={target} onClick={onClick} className={linkClass(l.id)}>
        {l.label}
      </a>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-bold text-primary">
          Alae Portfolio
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => renderLink(l))}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="glass px-3 py-1.5 rounded-lg text-xs font-heading font-semibold text-primary hover:cyber-glow transition-all duration-300"
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
                className="glass px-3 py-1.5 rounded-lg text-xs font-heading font-semibold text-primary self-start"
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
