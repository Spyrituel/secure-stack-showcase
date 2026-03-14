export type Lang = "fr" | "en";

export const translations = {
  nav: {
    about: { fr: "À propos", en: "About" },
    skills: { fr: "Compétences", en: "Skills" },
    projects: { fr: "Projets", en: "Projects" },
    experience: { fr: "Formation", en: "Education" },
    lab: { fr: "Labs Cyber", en: "Cyber Labs" },
    aws: { fr: "Cloud AWS", en: "AWS Cloud" },
    hybrid: { fr: "Profil Hybride", en: "Hybrid Profile" },
    certifications: { fr: "Certifications", en: "Certifications" },
    contact: { fr: "Contact", en: "Contact" },
  },
  hero: {
    name: { fr: "Alaeddine Hamadouche", en: "Alaeddine Hamadouche" },
    title: {
      fr: "Administration & Sécurité des Systèmes, Réseaux et Cloud",
      en: "System, Network & Cloud Administration & Security",
    },
    summary: {
      fr: "Labs pratiques en cybersécurité et cloud AWS, avec un socle analytique en finance et data. En recherche d'un poste junior en infrastructure, sécurité ou cloud.",
      en: "Hands-on cybersecurity and AWS cloud labs, with an analytical foundation in finance and data. Seeking a junior role in infrastructure, security or cloud.",
    },
    cta1: { fr: "Voir les projets", en: "View Projects" },
    ctaLabs: { fr: "Voir les labs", en: "View Labs" },
    cta2: { fr: "Télécharger le CV", en: "Download CV" },
    cta3: { fr: "Contact", en: "Contact" },
  },
  about: {
    title: { fr: "À propos", en: "About Me" },
    p1: {
      fr: "Parcours Finance → Data → Systèmes & Réseaux → Cybersécurité & Cloud. Je combine une pensée analytique issue de la finance avec des compétences techniques en administration système, sécurité et cloud AWS.",
      en: "Finance → Data → Systems & Networks → Cybersecurity & Cloud. I combine analytical thinking from finance with technical skills in system administration, security and AWS cloud.",
    },
    p2: {
      fr: "Mon objectif : intégrer une équipe IT en tant que junior SOC analyst, administrateur système ou support infrastructure sécurité.",
      en: "My goal: join an IT team as a junior SOC analyst, system administrator or security infrastructure support.",
    },
    ctaFull: { fr: "Voir le profil complet", en: "View full profile" },
    journey: {
      fr: ["Finance & Comptabilité", "Analyse de données", "Infrastructure IT", "Cybersécurité & Cloud"],
      en: ["Finance & Accounting", "Data Analytics", "IT Infrastructure", "Cybersecurity & Cloud"],
    },
  },
  skills: {
    title: { fr: "Compétences", en: "Skills" },
    networking: { fr: "Réseaux & TCP/IP", en: "Networking & TCP/IP" },
    sysadmin: { fr: "Linux & Administration Système", en: "Linux & System Administration" },
    security: { fr: "Sécurité & Hardening", en: "Security & Hardening" },
    cloud: { fr: "AWS Cloud", en: "AWS Cloud" },
    monitoring: { fr: "Monitoring & Logs", en: "Monitoring & Logs" },
    finance: { fr: "Data & Analyse des Risques", en: "Data & Risk Analysis" },
    tools: { fr: "Outils", en: "Tools" },
  },
  projects: {
    title: { fr: "Projets", en: "Projects" },
    intro: {
      fr: "Projets de bout en bout combinant réseaux, administration système, sécurité et cloud AWS.",
      en: "End-to-end projects combining networking, system administration, security and AWS cloud.",
    },
    viewProject: { fr: "Voir le projet", en: "View Project" },
    items: [
      {
        title: { fr: "Lab Sécurité Réseau", en: "Network Security Lab" },
        desc: {
          fr: "Simulation d'un environnement réseau d'entreprise. Mise en place d'un pare-feu pfSense, d'un IDS Snort et d'une segmentation VLAN. Résultat : détection et blocage automatiques des intrusions.",
          en: "Simulated an enterprise network environment. Deployed pfSense firewall, Snort IDS, and VLAN segmentation. Result: automatic intrusion detection and blocking.",
        },
        tech: ["pfSense", "Snort", "VLAN", "Wireshark"],
      },
      {
        title: { fr: "Audit de Vulnérabilités", en: "Vulnerability Audit" },
        desc: {
          fr: "Scan de vulnérabilités sur des VMs avec Nmap et OWASP ZAP. Identification de failles critiques et rédaction d'un rapport de remédiation structuré.",
          en: "Vulnerability scanning on VMs with Nmap and OWASP ZAP. Identified critical flaws and produced a structured remediation report.",
        },
        tech: ["Nmap", "OWASP ZAP", "Kali Linux", "Metasploit"],
      },
      {
        title: { fr: "Hardening Serveur Linux", en: "Linux Server Hardening" },
        desc: {
          fr: "Sécurisation complète d'un serveur Debian : SSH, iptables, fail2ban, audit Lynis. Résultat : serveur conforme aux bonnes pratiques de sécurité.",
          en: "Full hardening of a Debian server: SSH, iptables, fail2ban, Lynis audit. Result: server compliant with security best practices.",
        },
        tech: ["Debian", "iptables", "fail2ban", "Lynis"],
      },
      {
        title: { fr: "Infrastructure Cloud AWS", en: "AWS Cloud Infrastructure" },
        desc: {
          fr: "Déploiement d'une infrastructure basique sur AWS : instances EC2, stockage S3, réseau VPC et gestion IAM. Résultat : compréhension opérationnelle des services cloud.",
          en: "Deployed basic AWS infrastructure: EC2 instances, S3 storage, VPC networking, and IAM management. Result: operational understanding of cloud services.",
        },
        tech: ["AWS EC2", "S3", "VPC", "IAM"],
      },
    ],
  },
  timeline: {
    title: { fr: "Formation & Parcours", en: "Education & Background" },
    items: [
      {
        year: "Nov. 2025 – 2028",
        title: {
          fr: "AEC — Gestion de Systèmes et Réseaux Informatiques",
          en: "AEC — IT Systems and Network Management",
        },
        institution: {
          fr: "Cégep de Sherbrooke (Programme délocalisé à INSIM Alger)",
          en: "Cégep de Sherbrooke (Remote program at INSIM Algiers)",
        },
        desc: {
          fr: "Administration système, infrastructure réseau et gestion des services IT en environnement professionnel.",
          en: "System administration, network infrastructure and IT service management in professional environments.",
        },
        type: "education" as const,
        status: { fr: "En cours", en: "In Progress" },
      },
      {
        year: "2024 – 2026",
        title: {
          fr: "BTS Administration et Sécurité des Systèmes et Réseaux",
          en: "BTS System and Network Administration & Security",
        },
        institution: {
          fr: "INSIM Alger",
          en: "INSIM Algiers",
        },
        desc: {
          fr: "Administration réseau, gestion des systèmes et sécurité des environnements IT.",
          en: "Network administration, systems management, and IT environment security.",
        },
        type: "education" as const,
        status: { fr: "En cours", en: "In Progress" },
      },
      {
        year: "Nov. 2025 – Mars 2026",
        title: {
          fr: "Formation Cybersécurité",
          en: "Cybersecurity Training",
        },
        institution: {
          fr: "GoMyCode",
          en: "GoMyCode",
        },
        desc: {
          fr: "Menaces, vulnérabilités, architectures de sécurité et défense des infrastructures.",
          en: "Threats, vulnerabilities, security architectures and infrastructure defense.",
        },
        type: "certification" as const,
      },
      {
        year: "Nov. 2025 – Mars 2026",
        title: {
          fr: "Formation AWS Cloud Practitioner",
          en: "AWS Cloud Practitioner Training",
        },
        institution: {
          fr: "GoMyCode",
          en: "GoMyCode",
        },
        desc: {
          fr: "Cloud AWS : EC2, S3, IAM, VPC, modèle de responsabilité partagée et bonnes pratiques sécurité.",
          en: "AWS cloud: EC2, S3, IAM, VPC, shared responsibility model and security best practices.",
        },
        type: "certification" as const,
      },
      {
        year: "2025",
        title: {
          fr: "Microsoft Power BI Data Analyst (PL-300)",
          en: "Microsoft Power BI Data Analyst (PL-300)",
        },
        institution: {
          fr: "Microsoft Certified",
          en: "Microsoft Certified",
        },
        desc: {
          fr: "Analyse de données, modélisation et tableaux de bord Power BI.",
          en: "Data analysis, modeling and Power BI dashboards.",
        },
        type: "certification" as const,
      },
      {
        year: "2020 – 2023",
        title: {
          fr: "Bachelor Finance et Comptabilité",
          en: "Bachelor in Finance and Accounting",
        },
        institution: {
          fr: "PPA Business School — Partenariat HIMI Alger",
          en: "PPA Business School — Partnership with HIMI Algiers",
        },
        desc: {
          fr: "Finance, analyse financière, comptabilité et gestion d'entreprise.",
          en: "Finance, financial analysis, accounting and business management.",
        },
        type: "experience" as const,
      },
    ],
  },
  certifications: {
    title: { fr: "Certifications", en: "Certifications" },
    items: [
      {
        name: { fr: "Power BI Data Analyst (PL-300)", en: "Power BI Data Analyst (PL-300)" },
        org: "Microsoft Certified",
        year: "2025",
        desc: {
          fr: "Analyse de données, modélisation et dashboards Power BI.",
          en: "Data analysis, modeling and Power BI dashboards.",
        },
        color: "from-accent/20 to-accent/5",
        iconColor: "text-accent",
      },
      {
        name: { fr: "AWS Cloud Practitioner Training", en: "AWS Cloud Practitioner Training" },
        org: "GoMyCode",
        year: "2025 – 2026",
        desc: {
          fr: "Architecture AWS, services cloud, sécurité et modèle de responsabilité partagée.",
          en: "AWS architecture, cloud services, security and shared responsibility model.",
        },
        color: "from-primary/20 to-primary/5",
        iconColor: "text-primary",
      },
      {
        name: { fr: "Introduction à la Cybersécurité", en: "Introduction to Cybersecurity" },
        org: "GoMyCode",
        year: "2025 – 2026",
        desc: {
          fr: "Menaces, vulnérabilités, architectures de sécurité et défense des infrastructures.",
          en: "Threats, vulnerabilities, security architectures and infrastructure defense.",
        },
        color: "from-secondary/20 to-secondary/5",
        iconColor: "text-secondary",
      },
    ],
  },
  lab: {
    title: { fr: "Labs Cybersécurité", en: "Cybersecurity Labs" },
    subtitle: {
      fr: "Exercices pratiques réalisés en formation et en autonomie pour développer des compétences opérationnelles en sécurité.",
      en: "Hands-on exercises completed during training and self-study to build operational security skills.",
    },
  },
  hybrid: {
    title: { fr: "Profil Hybride : Finance × Data × Cyber", en: "Hybrid Profile: Finance × Data × Cyber" },
    subtitle: {
      fr: "Un parcours finance et data qui renforce directement les compétences en cybersécurité et infrastructure.",
      en: "A finance and data background that directly strengthens cybersecurity and infrastructure skills.",
    },
    items: [
      {
        finance: { fr: "Analyse financière", en: "Financial Analysis" },
        cyber: { fr: "Analyse des risques cyber", en: "Cyber Risk Analysis" },
        desc: {
          fr: "Évaluation de l'impact business des incidents — la méthodologie d'analyse des risques financiers s'applique directement à l'évaluation des menaces SI.",
          en: "Business impact assessment of incidents — financial risk analysis methodology directly applies to IS threat evaluation.",
        },
      },
      {
        finance: { fr: "Data Analytics (Power BI)", en: "Data Analytics (Power BI)" },
        cyber: { fr: "Analyse de logs & détection d'anomalies", en: "Log Analysis & Anomaly Detection" },
        desc: {
          fr: "Traitement de grands volumes de données → analyse de logs de sécurité, corrélation d'événements et détection de comportements suspects.",
          en: "Processing large data volumes → security log analysis, event correlation and suspicious behavior detection.",
        },
      },
      {
        finance: { fr: "Compréhension métier", en: "Business Understanding" },
        cyber: { fr: "Infrastructure fiable & sécurisée", en: "Reliable & Secure Infrastructure" },
        desc: {
          fr: "Comprendre les enjeux business permet de concevoir des infrastructures qui répondent aux besoins réels tout en assurant leur sécurité.",
          en: "Understanding business needs enables designing infrastructure that meets real requirements while ensuring security.",
        },
      },
      {
        finance: { fr: "Conformité réglementaire", en: "Regulatory Compliance" },
        cyber: { fr: "Conformité sécurité (ISO, RGPD)", en: "Security Compliance (ISO, GDPR)" },
        desc: {
          fr: "Connaissance des cadres réglementaires financiers → appropriation rapide des normes de sécurité et de protection des données.",
          en: "Financial regulatory framework knowledge → rapid adoption of security and data protection standards.",
        },
      },
    ],
  },
  contact: {
    title: { fr: "Contact", en: "Contact" },
    subtitle: {
      fr: "Disponible pour un stage, une alternance ou un poste junior en IT/sécurité.",
      en: "Available for an internship, apprenticeship or junior role in IT/security.",
    },
    name: { fr: "Nom", en: "Name" },
    email: { fr: "Email", en: "Email" },
    message: { fr: "Message", en: "Message" },
    send: { fr: "Envoyer", en: "Send" },
    downloadCV: { fr: "Télécharger le CV", en: "Download CV" },
  },
} as const;
