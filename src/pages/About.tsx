import CyberBackground from "@/components/CyberBackground";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import {
  Shield, Server, Network, TrendingUp, Cloud, BarChart3,
  GraduationCap, Award, ArrowRight, Mail, Linkedin, Download, Send,
  User, BookOpen, Cpu, Lock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ─── 1. INTRODUCTION ─── */
const IntroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-32 pb-20 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Avatar placeholder */}
          <div className="flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-52 h-52 rounded-2xl glass gradient-border flex items-center justify-center overflow-hidden"
            >
              <User size={80} className="text-primary/40" />
            </motion.div>
          </div>

          <div>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
              {t({ fr: "À propos", en: "About Me" })}
            </h1>
            <div className="neon-line w-20 mb-6" />

            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                {t({
                  fr: "Mon parcours a commencé dans le domaine de la finance et de la comptabilité, où j'ai développé une solide capacité d'analyse, de rigueur et de compréhension des mécanismes de gestion des risques. Progressivement, mon intérêt pour les technologies et les infrastructures informatiques m'a conduit à me réorienter vers l'administration des systèmes et réseaux ainsi que la cybersécurité.",
                  en: "My journey started in finance and accounting, where I developed strong analytical skills, rigor, and an understanding of risk management mechanisms. Gradually, my interest in technology and IT infrastructure led me to transition toward systems and network administration as well as cybersecurity.",
                })}
              </p>
              <p>
                {t({
                  fr: "Aujourd'hui, je construis activement mes compétences techniques à travers des formations spécialisées, des projets pratiques et des laboratoires techniques en administration système, réseaux et sécurité. Cette transition me permet de combiner une approche analytique issue de la finance avec une expertise technique orientée vers la protection des systèmes et la fiabilité des infrastructures.",
                  en: "Today, I am actively building my technical skills through specialized training, hands-on projects, and technical labs in system administration, networking, and security. This transition allows me to combine an analytical approach from finance with technical expertise focused on system protection and infrastructure reliability.",
                })}
              </p>
              <p>
                {t({
                  fr: "Curieux, rigoureux et orienté résolution de problèmes, je poursuis actuellement ma formation avec l'objectif d'intégrer un environnement IT où je pourrai contribuer à la sécurisation des infrastructures, à l'optimisation des systèmes et à la gestion des risques technologiques.",
                  en: "Curious, rigorous, and problem-solving oriented, I am currently pursuing my training with the goal of joining an IT environment where I can contribute to infrastructure security, system optimization, and technology risk management.",
                })}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── 2. EDUCATION TIMELINE ─── */
const educationItems = [
  {
    year: "2024 – 2026",
    icon: GraduationCap,
    title: { fr: "AEC — Gestion de Systèmes et Réseaux Informatiques", en: "AEC — IT Systems and Network Management" },
    institution: { fr: "Cégep de Sherbrooke (Programme délocalisé à INSIM Alger)", en: "Cégep de Sherbrooke (Remote program at INSIM Algiers)" },
    desc: { fr: "Programme technique orienté vers l'administration des systèmes informatiques, l'infrastructure réseau et la gestion des services IT.", en: "Technical program focused on IT systems administration, network infrastructure and IT service management." },
    status: { fr: "En cours", en: "In Progress" },
  },
  {
    year: "2024 – 2026",
    icon: Server,
    title: { fr: "BTS Administration et Sécurité des Systèmes et Réseaux", en: "BTS System and Network Administration & Security" },
    institution: { fr: "INSIM Alger", en: "INSIM Algiers" },
    desc: { fr: "Formation de deux ans spécialisée dans l'administration des infrastructures réseau, la gestion des systèmes informatiques et la sécurité des environnements IT.", en: "Two-year program specializing in network infrastructure administration, IT systems management, and IT environment security." },
    status: { fr: "En cours", en: "In Progress" },
  },
  {
    year: "Nov. 2025 – Mars 2026",
    icon: Shield,
    title: { fr: "Formation Introduction à la Cybersécurité", en: "Introduction to Cybersecurity Training" },
    institution: { fr: "GoMyCode", en: "GoMyCode" },
    desc: { fr: "Fondamentaux de la cybersécurité, menaces informatiques, vulnérabilités, architectures de sécurité et concepts de défense.", en: "Cybersecurity fundamentals, cyber threats, vulnerabilities, security architectures and defense concepts." },
  },
  {
    year: "Nov. 2025 – Mars 2026",
    icon: Cloud,
    title: { fr: "Formation AWS Cloud Practitioner", en: "AWS Cloud Practitioner Training" },
    institution: { fr: "GoMyCode", en: "GoMyCode" },
    desc: { fr: "Concepts fondamentaux du cloud computing avec AWS : EC2, S3, IAM, VPC et bonnes pratiques de sécurité.", en: "Foundational cloud computing concepts with AWS: EC2, S3, IAM, VPC and security best practices." },
  },
  {
    year: "2025",
    icon: BarChart3,
    title: { fr: "Microsoft Power BI Data Analyst Associate (PL-300)", en: "Microsoft Power BI Data Analyst Associate (PL-300)" },
    institution: { fr: "Microsoft Certified", en: "Microsoft Certified" },
    desc: { fr: "Certification validant les compétences en analyse de données, modélisation, visualisation et création de tableaux de bord avec Power BI.", en: "Certification validating skills in data analysis, modeling, visualization and dashboard creation with Power BI." },
    badge: true,
  },
  {
    year: "2020 – 2023",
    icon: BookOpen,
    title: { fr: "Bachelor en Finance et Comptabilité", en: "Bachelor in Finance and Accounting" },
    institution: { fr: "PPA Business School — Programme en partenariat avec HIMI Alger", en: "PPA Business School — Partnership program with HIMI Algiers" },
    desc: { fr: "Formation en finance, analyse financière, comptabilité et gestion d'entreprise.", en: "Training in finance, financial analysis, accounting and business management." },
  },
];

const EducationSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-3xl">
        <motion.div {...fadeUp}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t({ fr: "Formations & Parcours Académique", en: "Education & Academic Background" })}
          </h2>
          <div className="neon-line w-20 mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-8">
            {educationItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-3 top-1 w-7 h-7 rounded-full glass gradient-border flex items-center justify-center">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <div className="glass rounded-xl p-5 hover:cyber-glow transition-shadow duration-500">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <span className="text-xs font-heading font-semibold text-primary">{item.year}</span>
                      {item.status && (
                        <Badge className="bg-primary/15 text-primary border-primary/30 text-[10px] shrink-0">
                          {t(item.status)}
                        </Badge>
                      )}
                      {item.badge && (
                        <Badge className="bg-accent/15 text-accent border-accent/30 text-[10px] shrink-0">
                          Certified
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-0.5">
                      {t(item.title)}
                    </h3>
                    <p className="text-xs text-muted-foreground/70 font-heading mb-2">
                      {t(item.institution)}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(item.desc)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 3. SKILLS ─── */
const skillCategories = [
  { title: { fr: "Réseaux", en: "Networking" }, icon: Network, skills: ["TCP/IP", "DNS", "DHCP", "VLAN", "Routing"], color: "from-primary/20 to-primary/5" },
  { title: { fr: "Administration Système", en: "System Administration" }, icon: Server, skills: ["Linux", "Windows Server", "Virtualization", "Active Directory"], color: "from-secondary/20 to-secondary/5" },
  { title: { fr: "Cybersécurité", en: "Cybersecurity" }, icon: Lock, skills: ["Vulnerability analysis", "Security monitoring", "IDS/IPS", "Network security"], color: "from-primary/15 to-secondary/10" },
  { title: { fr: "Cloud", en: "Cloud" }, icon: Cloud, skills: ["AWS fundamentals", "EC2", "S3", "IAM", "VPC"], color: "from-primary/20 to-accent/10" },
  { title: { fr: "Data & Analytics", en: "Data & Analytics" }, icon: BarChart3, skills: ["Power BI", "Data visualization", "Analytical thinking"], color: "from-accent/20 to-accent/5" },
  { title: { fr: "Finance & Risques", en: "Finance & Risk Analysis" }, icon: TrendingUp, skills: ["Financial analysis", "Risk management", "Business analysis"], color: "from-accent/15 to-primary/10" },
];

const SkillsAboutSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t({ fr: "Compétences", en: "Skills" })}
          </h2>
          <div className="neon-line w-20 mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-6 gradient-border group hover:cyber-glow transition-shadow duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${cat.color}`}>
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {t(cat.title)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r ${cat.color} text-foreground border border-border/50`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── 4. HYBRID PROFILE ─── */
const HybridAboutSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">
            {t(translations.hybrid.title)}
          </h2>
          <div className="neon-line w-20 mb-4 mx-auto" />
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            {t(translations.hybrid.subtitle)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {translations.hybrid.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 gradient-border hover:cyber-glow transition-shadow duration-500"
            >
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 text-accent">
                  <TrendingUp size={14} />
                  <span className="text-xs font-heading font-semibold">{t(item.finance)}</span>
                </div>
                <ArrowRight size={16} className="text-muted-foreground shrink-0" />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary">
                  <Shield size={14} />
                  <span className="text-xs font-heading font-semibold">{t(item.cyber)}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(item.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 5. CONTACT ─── */
const ContactAboutSection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t({ fr: "Message envoyé !", en: "Message sent!" }));
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div {...fadeUp}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2 gradient-text">Contact</h2>
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
            {[
              { label: t(translations.contact.name), type: "text", key: "name" as const },
              { label: t(translations.contact.email), type: "email", key: "email" as const },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-sm font-heading text-foreground mb-1 block">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            ))}
            <div>
              <label className="text-sm font-heading text-foreground mb-1 block">{t(translations.contact.message)}</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm py-3 rounded-lg hover:opacity-90 transition-all cyber-glow">
              {t(translations.contact.send)} <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-center gap-5"
          >
            <a href="mailto:mus@hmdouche.com" className="glass rounded-xl p-4 flex items-center gap-4 group hover:cyber-glow transition-all duration-300">
              <Mail size={22} className="text-primary" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">mus@hmdouche.com</span>
            </a>
            <a href="https://linkedin.com/in/alaeddine-hamadouche-7681511b9" target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-4 flex items-center gap-4 group hover:cyber-glow transition-all duration-300">
              <Linkedin size={22} className="text-primary" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn — Alaeddine Hamadouche</span>
            </a>
            <a href="/cv-finance-alaeddine-hamadouche.pdf" download className="glass rounded-xl p-4 flex items-center gap-4 group gradient-border hover:cyber-glow transition-all duration-300">
              <Download size={22} className="text-accent" />
              <span className="text-sm font-heading font-medium text-foreground">{t(translations.contact.downloadCV)}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── PAGE ─── */
const About = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <CyberBackground />
    <Navbar />
    <IntroSection />
    <EducationSection />
    <SkillsAboutSection />
    <HybridAboutSection />
    <ContactAboutSection />
    <footer className="relative z-10 py-8 text-center text-xs text-muted-foreground border-t border-border">
      © 2025 Alaeddine Hamadouche — Portfolio
    </footer>
  </div>
);

export default About;
