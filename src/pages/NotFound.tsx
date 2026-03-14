import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CyberBackground from "@/components/CyberBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background">
      <CyberBackground />
      <div className="relative z-10 text-center">
        <h1 className="mb-2 text-7xl font-heading font-bold text-primary">404</h1>
        <p className="mb-6 text-lg text-muted-foreground font-heading">Page introuvable / Page not found</p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all cyber-glow">
          ← Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
