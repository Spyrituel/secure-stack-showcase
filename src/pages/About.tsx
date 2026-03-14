import { useEffect, useState } from "react";
import CyberBackground from "@/components/CyberBackground";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { motion } from "framer-motion";
import {
  Shield, Server, Network, TrendingUp, Cloud, BarChart3,
  GraduationCap, Award, ArrowRight, Mail, Linkedin, Download, Send,
  User, BookOpen, Lock, Activity, MapPin, Calendar, ChevronRight,
  CheckCircle2, Briefcase, ExternalLink, Github
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] as [number, number, number, number] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0, 1] as [number, number, number, number] } },
};

/* ═══════════════════════════════════════════
   1. PROFILE CARD + SUMMARY
   ═══════════════════════════════════════════ */
const ProfileSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "2", label: { fr: "Formations en cours", en: "Ongoing Programs" } },
    { value: "6+", label: { fr: "Labs techniques", en: "Technical Labs" } },
    { value: "3", label: { fr: "Certifications", en: "Certifications" } },
    { value: "1", label: { fr: "Profil hybride", en: "Hybrid Profile" } },
  ];

  return (
    <section className="pt-32 pb-16 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h1 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold mb-3">
            <span className="gradient-text">{t({ fr: "À propos", en: "About Me" })}</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="neon-line w-20 mx-auto mb-4" />
          <motion.p variants={fadeUp} className="text-muted-foreground text-sm max-w-lg mx-auto">
            {t({ fr: "Découvrez mon parcours, ma formation et mes compétences", en: "Discover my background, education and skills" })}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-6 border border-border/50 sticky top-28"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-primary/20 mb-5 shadow-lg shadow-primary/10"
              >
                <img
                  src={profilePhoto}
                  alt="Alaeddine Hamadouche"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              <h2 className="font-heading text-lg font-bold text-foreground mb-0.5">
                Alaeddine Hamadouche
              </h2>
              <p className="text-xs text-primary font-heading font-medium mb-3">
                {t({ fr: "Étudiant Admin Systèmes & Réseaux", en: "System & Network Admin Student" })}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                <MapPin size={12} />
                <span>Alger, Algérie</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 w-full mb-5">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="bg-muted/40 rounded-xl p-3 text-center"
                  >
                    <span className="block text-xl font-heading font-bold text-primary">{s.value}</span>
                    <span className="text-[10px] text-muted-foreground leading-tight">{t(s.label)}</span>
                  </motion.div>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 w-full text-left">
                <a href="mailto:mus@hmdouche.com" className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/30">
                  <Mail size={14} className="text-primary shrink-0" />
                  mus@hmdouche.com
                </a>
                <a href="https://github.com/alaeddine-hamadouche" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/30">
                  <Github size={14} className="text-primary shrink-0" />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/alaeddine-hamadouche-7681511b9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted/30">
                  <Linkedin size={14} className="text-primary shrink-0" />
                  LinkedIn
                </a>
              </div>

              <a
                href="/cv-finance-alaeddine-hamadouche.pdf"
                download
                className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm py-3 rounded-xl hover:opacity-90 transition-all cyber-glow"
              >
                <Download size={15} />
                {t({ fr: "Télécharger le CV", en: "Download CV" })}
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="space-y-16">
            {/* Profile Summary */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <User size={20} className="text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {t({ fr: "Qui suis-je ?", en: "Who am I?" })}
                </h2>
              </motion.div>

              <div className="space-y-4">
                <motion.p variants={fadeUp} className="text-muted-foreground text-[15px] leading-relaxed">
                  {t({
                    fr: "Mon parcours a commencé dans le domaine de la finance et de la comptabilité, où j'ai développé une solide capacité d'analyse, de rigueur et de compréhension des mécanismes de gestion des risques. Progressivement, mon intérêt pour les technologies et les infrastructures informatiques m'a conduit à me réorienter vers l'administration des systèmes et réseaux ainsi que la cybersécurité.",
                    en: "My journey began in finance and accounting, where I developed strong analytical skills, rigor, and an understanding of risk management. Gradually, my interest in technology and IT infrastructure led me to transition toward system and network administration and cybersecurity.",
                  })}
                </motion.p>
                <motion.p variants={fadeUp} className="text-muted-foreground text-[15px] leading-relaxed">
                  {t({
                    fr: "Aujourd'hui, je construis activement mes compétences techniques à travers des formations spécialisées, des projets pratiques et des laboratoires techniques en administration système, réseaux et sécurité. Cette transition me permet de combiner une approche analytique issue de la finance avec une expertise technique orientée vers la protection des systèmes et la fiabilité des infrastructures.",
                    en: "Today, I actively build my technical skills through specialized training, hands-on projects, and technical labs in system administration, networking, and security. This transition allows me to combine an analytical approach from finance with technical expertise focused on system protection and infrastructure reliability.",
                  })}
                </motion.p>
                <motion.p variants={fadeUp} className="text-muted-foreground text-[15px] leading-relaxed">
                  {t({
                    fr: "Curieux, rigoureux et orienté résolution de problèmes, je poursuis actuellement ma formation avec l'objectif d'intégrer un environnement IT où je pourrai contribuer à la sécurisation des infrastructures, à l'optimisation des systèmes et à la gestion des risques technologiques.",
                    en: "Curious, rigorous, and problem-solving oriented, I am currently pursuing my education with the goal of joining an IT environment where I can contribute to infrastructure security, system optimization, and technology risk management.",
                  })}
                </motion.p>
              </div>

              {/* Traits */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mt-6">
                {[
                  { fr: "Rigueur analytique", en: "Analytical rigor" },
                  { fr: "Résolution de problèmes", en: "Problem solving" },
                  { fr: "Autonomie", en: "Autonomy" },
                  { fr: "Curiosité technique", en: "Technical curiosity" },
                ].map((trait, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-full glass text-xs font-heading font-medium text-foreground border border-primary/20">
                    {t(trait)}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ═══ ACADEMIC EDUCATION ═══ */}
            <AcademicSection />

            {/* ═══ CERTIFICATIONS ═══ */}
            <CertificationsSection />

            {/* ═══ SKILLS ═══ */}
            <SkillsAboutSection />

            {/* ═══ HYBRID PROFILE ═══ */}
            <HybridAboutSection />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   2. ACADEMIC EDUCATION
   ═══════════════════════════════════════════ */
const academicItems = [
  {
    year: "Nov. 2025 – 2028",
    icon: GraduationCap,
    title: { fr: "AEC – Gestion des systèmes et réseaux informatiques", en: "AEC – IT Systems and Network Management" },
    institution: { fr: "Cégep de Sherbrooke (Programme délocalisé à INSIM Alger)", en: "Cégep de Sherbrooke (Remote program at INSIM Algiers)" },
    desc: {
      fr: "Programme technique orienté administration des infrastructures informatiques. Formation couvrant les systèmes Windows et Linux, les réseaux TCP/IP, les services réseau (DNS, DHCP), la virtualisation, l'administration de serveurs et les bases de la cybersécurité.",
      en: "Technical program focused on IT infrastructure administration. Covers Windows and Linux systems, TCP/IP networking, network services (DNS, DHCP), virtualization, server administration and cybersecurity fundamentals.",
    },
    focus: [
      { fr: "Administration systèmes Windows & Linux", en: "Windows & Linux system administration" },
      { fr: "Réseaux informatiques et protocoles TCP/IP", en: "Computer networking and TCP/IP protocols" },
      { fr: "Services réseau (DNS, DHCP)", en: "Network services (DNS, DHCP)" },
      { fr: "Virtualisation et infrastructure IT", en: "Virtualization and IT infrastructure" },
      { fr: "Sécurité des systèmes et des réseaux", en: "System and network security" },
    ],
    status: { fr: "En cours", en: "In Progress" },
  },
  {
    year: "Nov. 2025 – 2028",
    icon: Server,
    title: { fr: "BTS – Administration et Sécurité des Systèmes et Réseaux", en: "BTS – System and Network Administration & Security" },
    institution: { fr: "INSIM Alger", en: "INSIM Algiers" },
    desc: {
      fr: "Formation spécialisée dans l'administration d'infrastructures systèmes et réseaux avec un accent sur la cybersécurité, la gestion des réseaux d'entreprise et la sécurisation des services informatiques.",
      en: "Specialized training in system and network infrastructure administration with emphasis on cybersecurity, enterprise network management and IT service security.",
    },
    focus: [
      { fr: "Administration systèmes", en: "System administration" },
      { fr: "Architecture réseau", en: "Network architecture" },
      { fr: "Cybersécurité et protection des infrastructures", en: "Cybersecurity and infrastructure protection" },
      { fr: "Gestion des serveurs et services réseau", en: "Server and network service management" },
      { fr: "Supervision et maintenance IT", en: "IT monitoring and maintenance" },
    ],
    status: { fr: "En cours", en: "In Progress" },
  },
  {
    year: "2021 – 2023",
    icon: BookOpen,
    title: { fr: "Bachelor Finance et Comptabilité", en: "Bachelor in Finance and Accounting" },
    institution: { fr: "PPA Business School — Partenariat HIMI Alger", en: "PPA Business School — Partnership with HIMI Algiers" },
    desc: {
      fr: "Finance, analyse financière, comptabilité et gestion d'entreprise. Ce parcours a forgé une pensée analytique et une rigueur méthodologique directement transférables au domaine IT.",
      en: "Finance, financial analysis, accounting and business management. This background built analytical thinking and methodological rigor directly transferable to IT.",
    },
    focus: [
      { fr: "Analyse financière", en: "Financial analysis" },
      { fr: "Comptabilité et audit", en: "Accounting and audit" },
      { fr: "Gestion des risques", en: "Risk management" },
      { fr: "Analyse de données", en: "Data analysis" },
    ],
  },
];

const AcademicSection = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-secondary/10">
          <GraduationCap size={20} className="text-secondary" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          {t({ fr: "Parcours Académique", en: "Academic Education" })}
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-secondary/50 via-primary/30 to-accent/20" />

        <div className="space-y-6">
          {academicItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeLeft}
                className="relative pl-14 group"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-1.5 top-2 w-9 h-9 rounded-xl glass border border-secondary/30 flex items-center justify-center z-10 group-hover:border-primary/50 transition-colors"
                >
                  <Icon size={16} className="text-secondary group-hover:text-primary transition-colors" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={12} className="text-primary" />
                      <span className="font-heading font-semibold text-primary">{item.year}</span>
                    </div>
                    {item.status && (
                      <Badge className="bg-primary/15 text-primary border-primary/30 text-[10px] shrink-0">
                        {t(item.status)}
                      </Badge>
                    )}
                  </div>

                  <h3 className="font-heading text-base font-bold text-foreground mb-1">
                    {t(item.title)}
                  </h3>
                  <p className="text-xs text-muted-foreground/70 font-heading mb-3">
                    {t(item.institution)}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(item.desc)}
                  </p>

                  {/* Focus areas */}
                  <div className="space-y-1.5">
                    {item.focus.map((f, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-accent mt-0.5 shrink-0" />
                        <span className="text-xs text-muted-foreground">{t(f)}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════
   3. CERTIFICATIONS & SHORT TRAINING
   ═══════════════════════════════════════════ */
const certItems = [
  {
    icon: Cloud,
    title: { fr: "AWS Cloud Practitioner Training", en: "AWS Cloud Practitioner Training" },
    institution: "GoMyCode",
    period: { fr: "Nov. 2025 – Mars 2026", en: "Nov 2025 – Mar 2026" },
    desc: {
      fr: "Introduction aux fondamentaux du cloud computing avec Amazon Web Services : architecture cloud, modèles de services (IaaS, PaaS, SaaS), gestion des coûts cloud et sécurité de base.",
      en: "Introduction to cloud computing fundamentals with Amazon Web Services: cloud architecture, service models (IaaS, PaaS, SaaS), cloud cost management and basic security.",
    },
    skills: ["AWS Cloud fundamentals", "AWS pricing & cost estimation", "Cloud architecture basics", "IAM & cloud security"],
    accent: "primary",
  },
  {
    icon: Shield,
    title: { fr: "Introduction à la Cybersécurité", en: "Introduction to Cybersecurity" },
    institution: "GoMyCode",
    period: { fr: "Nov. 2025 – Mars 2026", en: "Nov 2025 – Mar 2026" },
    desc: {
      fr: "Formation pratique couvrant les bases de la cybersécurité : analyse des menaces, architecture de sécurité, cryptographie, reconnaissance réseau et défense des systèmes.",
      en: "Hands-on training covering cybersecurity fundamentals: threat analysis, security architecture, cryptography, network reconnaissance and system defense.",
    },
    skills: ["Threat analysis", "Network reconnaissance", "IDS / firewall basics", "Cryptography fundamentals"],
    accent: "secondary",
  },
  {
    icon: BarChart3,
    title: { fr: "Microsoft Power BI Data Analyst – PL-300", en: "Microsoft Power BI Data Analyst – PL-300" },
    institution: "Microsoft Certified",
    period: { fr: "2025", en: "2025" },
    desc: {
      fr: "Certification démontrant la capacité à analyser, transformer et visualiser les données avec Microsoft Power BI.",
      en: "Certification demonstrating the ability to analyze, transform and visualize data with Microsoft Power BI.",
    },
    skills: ["Data modeling", "Data visualization", "Business intelligence", "Analytics dashboards"],
    accent: "accent",
  },
];

const CertificationsSection = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-accent/10">
          <Award size={20} className="text-accent" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          {t({ fr: "Certifications & Formations", en: "Certifications & Training" })}
        </h2>
      </motion.div>

      <div className="space-y-5">
        {certItems.map((item, i) => {
          const Icon = item.icon;
          const accentMap: Record<string, string> = {
            primary: "border-primary/20 hover:border-primary/40",
            secondary: "border-secondary/20 hover:border-secondary/40",
            accent: "border-accent/20 hover:border-accent/40",
          };
          const iconBgMap: Record<string, string> = {
            primary: "bg-primary/10 text-primary",
            secondary: "bg-secondary/10 text-secondary",
            accent: "bg-accent/10 text-accent",
          };

          return (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className={`glass rounded-2xl p-6 border transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${accentMap[item.accent]}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl shrink-0 ${iconBgMap[item.accent]}`}>
                  <Icon size={22} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-heading text-base font-bold text-foreground">
                      {t(item.title)}
                    </h3>
                    <Badge className="bg-muted text-muted-foreground border-border text-[10px] shrink-0">
                      {t(item.period)}
                    </Badge>
                  </div>

                  <p className="text-xs text-primary/80 font-heading font-medium mb-3">
                    {item.institution}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(item.desc)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-muted/60 text-foreground/80 border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════
   4. SKILLS
   ═══════════════════════════════════════════ */
const skillCategories = [
  { title: { fr: "Réseaux & TCP/IP", en: "Networking & TCP/IP" }, icon: Network, skills: ["TCP/IP", "DNS", "DHCP", "VLAN", "Routing"], color: "primary" },
  { title: { fr: "Linux & Admin Système", en: "Linux & Sysadmin" }, icon: Server, skills: ["Linux", "Windows Server", "Virtualisation", "Active Directory"], color: "secondary" },
  { title: { fr: "Sécurité & Hardening", en: "Security & Hardening" }, icon: Lock, skills: ["Hardening", "IDS/IPS", "Vulnérabilités", "Pare-feu"], color: "primary" },
  { title: { fr: "AWS Cloud", en: "AWS Cloud" }, icon: Cloud, skills: ["EC2", "S3", "IAM", "VPC", "CloudWatch"], color: "accent" },
  { title: { fr: "Monitoring & Logs", en: "Monitoring & Logs" }, icon: Activity, skills: ["Syslog", "Wireshark", "Nmap", "SIEM", "Bash"], color: "secondary" },
  { title: { fr: "Data & Risques", en: "Data & Risk" }, icon: TrendingUp, skills: ["Power BI", "Analyse financière", "Gestion des risques"], color: "accent" },
];

const SkillsAboutSection = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-primary/10">
          <Briefcase size={20} className="text-primary" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          {t({ fr: "Compétences Techniques", en: "Technical Skills" })}
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          const colorMap: Record<string, string> = {
            primary: "bg-primary/10 text-primary",
            secondary: "bg-secondary/10 text-secondary",
            accent: "bg-accent/10 text-accent",
          };
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-5 border border-border/50 hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`p-1.5 rounded-lg ${colorMap[cat.color]}`}>
                  <Icon size={16} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {t(cat.title)}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-muted/50 text-muted-foreground border border-border/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════
   5. HYBRID PROFILE
   ═══════════════════════════════════════════ */
const HybridAboutSection = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
        <div className="p-2.5 rounded-xl bg-accent/10">
          <TrendingUp size={20} className="text-accent" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          {t(translations.hybrid.title)}
        </h2>
      </motion.div>
      <motion.p variants={fadeUp} className="text-muted-foreground text-sm mb-8 ml-[52px]">
        {t(translations.hybrid.subtitle)}
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-4">
        {translations.hybrid.items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            className="glass rounded-xl p-5 border border-border/50 hover:border-accent/20 transition-all duration-500"
          >
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-heading font-semibold bg-accent/10 text-accent border border-accent/20">
                {t(item.finance)}
              </span>
              <ArrowRight size={13} className="text-muted-foreground" />
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-heading font-semibold bg-primary/10 text-primary border border-primary/20">
                {t(item.cyber)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{t(item.desc)}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════
   6. CONTACT
   ═══════════════════════════════════════════ */
const ContactAboutSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="lg:pl-[calc(320px+2.5rem)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="glass rounded-2xl p-8 border border-border/50"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Mail size={20} className="text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Contact</h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-muted-foreground text-sm mb-8">
              {t(translations.contact.subtitle)}
            </motion.p>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4">
              <a href="mailto:mus@hmdouche.com" className="glass rounded-xl p-4 flex items-center gap-3 group hover:border-primary/30 border border-border/50 transition-all">
                <Mail size={18} className="text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground/70 block">Email</span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">mus@hmdouche.com</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/alaeddine-hamadouche-7681511b9" target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-4 flex items-center gap-3 group hover:border-primary/30 border border-border/50 transition-all">
                <Linkedin size={18} className="text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground/70 block">LinkedIn</span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">Alaeddine H.</span>
                </div>
              </a>
              <a href="https://github.com/alaeddine-hamadouche" target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-4 flex items-center gap-3 group hover:border-primary/30 border border-border/50 transition-all">
                <Github size={18} className="text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground/70 block">GitHub</span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">GitHub</span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
const About = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <CyberBackground />
    <Navbar />
    <ProfileSection />
    <ContactAboutSection />
    <footer className="relative z-10 py-8 text-center text-xs text-muted-foreground border-t border-border/50">
      © {new Date().getFullYear()} Alaeddine Hamadouche — Portfolio
    </footer>
  </div>
);

export default About;
