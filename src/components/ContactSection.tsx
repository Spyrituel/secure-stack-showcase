import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t({ fr: "Message envoyé !", en: "Message sent!" }));
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.contact.title)}
          </h2>
          <div className="neon-line w-20 mb-4" />
          <p className="text-muted-foreground mb-12">{t(translations.contact.subtitle)}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div>
              <label className="text-sm font-heading text-foreground mb-1 block">
                {t(translations.contact.name)}
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-heading text-foreground mb-1 block">
                {t(translations.contact.email)}
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-heading text-foreground mb-1 block">
                {t(translations.contact.message)}
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm py-3 rounded-lg hover:opacity-90 transition-all cyber-glow"
            >
              {t(translations.contact.send)}
              <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-center gap-5"
          >
            {[
              { icon: Mail, label: "alexandre.martin@email.com", href: "mailto:alexandre.martin@email.com" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Github, label: "GitHub", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="glass rounded-xl p-4 flex items-center gap-4 group hover:cyber-glow transition-all duration-300"
              >
                <item.icon size={22} className="text-primary" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
            <a
              href="#"
              className="glass rounded-xl p-4 flex items-center gap-4 group gradient-border hover:cyber-glow transition-all duration-300"
            >
              <Download size={22} className="text-accent" />
              <span className="text-sm font-heading font-medium text-foreground">
                {t(translations.contact.downloadCV)}
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
