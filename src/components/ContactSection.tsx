import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, Send, ArrowUpRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) return;

    // Client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error(t({ fr: "Veuillez remplir tous les champs.", en: "Please fill in all fields." }));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error(t({ fr: "Adresse email invalide.", en: "Invalid email address." }));
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() },
      });

      if (error) throw error;

      toast.success(t({ fr: "Votre message a été envoyé avec succès.", en: "Your message has been sent successfully." }));
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error(t({ fr: "Une erreur est survenue. Veuillez réessayer plus tard.", en: "An error occurred. Please try again later." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const links = [
    { icon: Mail, label: "mus@hmdouche.com", href: "mailto:mus@hmdouche.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/alaeddine-hamadouche-7681511b9" },
    { icon: Github, label: "GitHub", href: "https://github.com/alaeddine-hamadouche" },
  ];

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 text-foreground">
            {t(translations.contact.title)}
          </h2>
          <div className="neon-line w-16 mb-4 mx-auto" />
          <p className="text-muted-foreground text-sm">{t(translations.contact.subtitle)}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-5 border border-border/50"
          >
            {/* Honeypot - hidden from users */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="absolute opacity-0 pointer-events-none h-0 w-0"
              tabIndex={-1}
              autoComplete="off"
            />
            <div>
              <label className="text-sm font-heading text-foreground mb-1.5 block">{t(translations.contact.name)}</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-heading text-foreground mb-1.5 block">{t(translations.contact.email)}</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-heading text-foreground mb-1.5 block">{t(translations.contact.message)}</label>
              <textarea
                required
                rows={4}
                maxLength={5000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm py-3.5 rounded-xl hover:opacity-90 transition-all cyber-glow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {t({ fr: "Envoi en cours...", en: "Sending..." })}
                </>
              ) : (
                <>
                  {t(translations.contact.send)}
                  <Send size={16} />
                </>
              )}
            </button>
          </motion.form>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-center gap-4"
          >
            {links.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="glass rounded-xl p-5 flex items-center gap-4 group border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon size={20} />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">
                  {item.label}
                </span>
                <ArrowUpRight size={16} className="text-muted-foreground/50 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}

            <motion.a
              href="/cv-finance-alaeddine-hamadouche.pdf"
              download
              whileHover={{ x: 6 }}
              className="glass rounded-xl p-5 flex items-center gap-4 group border border-primary/30 hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Download size={20} />
              </div>
              <span className="text-sm font-heading font-medium text-foreground">
                {t(translations.contact.downloadCV)}
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
