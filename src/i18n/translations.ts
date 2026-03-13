export type Lang = "fr" | "en";

export const translations = {
  nav: {
    about: { fr: "À propos", en: "About" },
    skills: { fr: "Compétences", en: "Skills" },
    projects: { fr: "Projets", en: "Projects" },
    experience: { fr: "Parcours", en: "Experience" },
    lab: { fr: "Lab", en: "Lab" },
    hybrid: { fr: "Profil Hybride", en: "Hybrid Profile" },
    contact: { fr: "Contact", en: "Contact" },
  },
  hero: {
    name: { fr: "Alaeddine Hamadouche", en: "Alaeddine Hamadouche" },
    title: {
      fr: "Étudiant en Administration & Sécurité des Systèmes, Réseaux et Cloud",
      en: "System, Network and Cloud Administration & Security Student",
    },
    tagline: {
      fr: "Profil hybride combinant cybersécurité, infrastructures réseau et analyse financière.",
      en: "Hybrid profile combining cybersecurity, infrastructure engineering and financial analysis.",
    },
    cta1: { fr: "Voir les projets", en: "View Projects" },
    ctaLabs: { fr: "Voir les labs techniques", en: "View Technical Labs" },
    cta2: { fr: "Télécharger le CV", en: "Download CV" },
    cta3: { fr: "Contact", en: "Contact" },
  },
  about: {
    title: { fr: "À propos", en: "About Me" },
    p1: {
      fr: "Formation initiale en finance et comptabilité, puis reconversion vers l'administration système, réseau et la cybersécurité. Cette double compétence permet d'apporter une approche analytique forte aux problématiques techniques, notamment dans la gestion des risques, la sécurité des infrastructures et la compréhension des systèmes complexes.",
      en: "Initial background in finance and accounting, followed by a career transition to system administration, networking, and cybersecurity. This dual expertise brings a strong analytical approach to technical challenges, particularly in risk management, infrastructure security, and complex systems understanding.",
    },
    p2: {
      fr: "Actuellement en formation en administration et sécurité des systèmes et réseaux, je développe mes compétences à travers des projets pratiques, des labs techniques et une veille technologique constante. Mon objectif est d'intégrer une équipe IT où je pourrai contribuer à la sécurisation des infrastructures.",
      en: "Currently training in system and network administration and security, I develop my skills through hands-on projects, technical labs, and constant technology monitoring. My goal is to join an IT team where I can contribute to infrastructure security.",
    },
    journey: {
      fr: ["Finance & Comptabilité", "Intérêt pour la technologie", "Formation Cybersécurité", "Administration Système & Cloud"],
      en: ["Finance & Accounting", "Interest in Technology", "Cybersecurity Training", "System & Cloud Administration"],
    },
  },
  skills: {
    title: { fr: "Compétences", en: "Skills" },
    networking: { fr: "Réseaux", en: "Networking" },
    sysadmin: { fr: "Administration Système", en: "System Administration" },
    security: { fr: "Cybersécurité", en: "Cybersecurity" },
    cloud: { fr: "Cloud", en: "Cloud" },
    finance: { fr: "Finance & Analyse", en: "Finance & Analytics" },
    tools: { fr: "Outils", en: "Tools" },
  },
  projects: {
    title: { fr: "Projets", en: "Projects" },
    viewDetails: { fr: "Voir les détails", en: "View Details" },
    items: [
      {
        title: { fr: "Lab Sécurité Réseau Domestique", en: "Home Network Security Lab" },
        desc: {
          fr: "Mise en place d'un laboratoire de sécurité réseau avec pare-feu, IDS/IPS et segmentation VLAN pour simuler des environnements d'entreprise.",
          en: "Set up a network security lab with firewall, IDS/IPS, and VLAN segmentation to simulate enterprise environments.",
        },
        tech: ["pfSense", "Snort", "VLAN", "Wireshark"],
      },
      {
        title: { fr: "Rapport de Scan de Vulnérabilités", en: "Vulnerability Scan Report" },
        desc: {
          fr: "Réalisation d'audits de vulnérabilités sur des machines virtuelles avec Nmap et OWASP ZAP, incluant un rapport détaillé de remédiation.",
          en: "Conducted vulnerability audits on virtual machines with Nmap and OWASP ZAP, including a detailed remediation report.",
        },
        tech: ["Nmap", "OWASP ZAP", "Kali Linux", "Metasploit"],
      },
      {
        title: { fr: "Hardening Serveur Linux", en: "Linux Server Hardening" },
        desc: {
          fr: "Sécurisation d'un serveur Debian : configuration SSH, pare-feu iptables, fail2ban, audit de sécurité et monitoring.",
          en: "Secured a Debian server: SSH configuration, iptables firewall, fail2ban, security audit, and monitoring.",
        },
        tech: ["Debian", "iptables", "fail2ban", "Lynis"],
      },
      {
        title: { fr: "Infrastructure Cloud AWS", en: "AWS Cloud Infrastructure Basics" },
        desc: {
          fr: "Déploiement d'une infrastructure cloud basique sur AWS avec EC2, S3, VPC et IAM pour comprendre les fondamentaux du cloud.",
          en: "Deployed a basic cloud infrastructure on AWS with EC2, S3, VPC, and IAM to understand cloud fundamentals.",
        },
        tech: ["AWS EC2", "S3", "VPC", "IAM"],
      },
    ],
  },
  timeline: {
    title: { fr: "Formation & Parcours", en: "Education & Training" },
    items: [
      {
        year: "2025 - 2026",
        title: {
          fr: "Labs Cybersécurité — GoMyCode",
          en: "Cybersecurity Labs — GoMyCode",
        },
        desc: {
          fr: "6 checkpoints pratiques couvrant l'administration Linux, la reconnaissance réseau, la défense active, les menaces, l'architecture de sécurité et la cryptographie.",
          en: "6 practical checkpoints covering Linux administration, network reconnaissance, active defense, threats, security architecture, and cryptography.",
        },
        type: "education" as const,
      },
      {
        year: "2025",
        title: {
          fr: "Formation AWS Cloud Practitioner",
          en: "AWS Cloud Practitioner Training",
        },
        desc: {
          fr: "Formation aux fondamentaux du cloud AWS : architecture, services principaux, sécurité et bonnes pratiques.",
          en: "Training on AWS cloud fundamentals: architecture, core services, security, and best practices.",
        },
        type: "certification" as const,
      },
      {
        year: "2024 - 2026",
        title: {
          fr: "BTS SIO - Option SISR",
          en: "BTS SIO - SISR Option",
        },
        desc: {
          fr: "Solutions d'infrastructure, systèmes et réseaux. Formation approfondie en administration système, réseau et sécurité.",
          en: "Infrastructure solutions, systems, and networks. In-depth training in system administration, networking, and security.",
        },
        type: "education" as const,
      },
      {
        year: "2020 - 2023",
        title: {
          fr: "Formation en Finance & Comptabilité",
          en: "Finance & Accounting Degree",
        },
        desc: {
          fr: "Diplôme en finance et comptabilité. Développement de compétences analytiques, gestion des risques et interprétation des données.",
          en: "Finance and accounting degree. Developed analytical skills, risk management, and data interpretation.",
        },
        type: "experience" as const,
      },
    ],
  },
  lab: {
    title: { fr: "PROJETS PRATIQUES & LABS — Cybersécurité · GoMyCode", en: "PRACTICAL PROJECTS & LABS — Cybersecurity · GoMyCode" },
    subtitle: {
      fr: "Déc. 2025 – Mars 2026 · 6 checkpoints validés · 100% progression",
      en: "Dec. 2025 – Mar. 2026 · 6 checkpoints validated · 100% progression",
    },
  },
  hybrid: {
    title: { fr: "Cybersécurité × Finance", en: "Cybersecurity × Finance Mindset" },
    subtitle: {
      fr: "Comment mon parcours en finance renforce mon profil cybersécurité",
      en: "How my finance background strengthens my cybersecurity profile",
    },
    items: [
      {
        finance: { fr: "Analyse des risques financiers", en: "Financial Risk Analysis" },
        cyber: { fr: "Évaluation des risques de sécurité", en: "Security Risk Assessment" },
        desc: {
          fr: "La méthodologie d'analyse des risques financiers se transpose directement à l'évaluation des menaces et vulnérabilités des systèmes d'information.",
          en: "Financial risk analysis methodology directly translates to evaluating threats and vulnerabilities in information systems.",
        },
      },
      {
        finance: { fr: "Analyse de données", en: "Data Analysis" },
        cyber: { fr: "Analyse de logs & SIEM", en: "Log Analysis & SIEM" },
        desc: {
          fr: "L'habitude de traiter et interpréter de grands volumes de données financières facilite l'analyse des logs de sécurité et la détection d'anomalies.",
          en: "Experience processing and interpreting large volumes of financial data facilitates security log analysis and anomaly detection.",
        },
      },
      {
        finance: { fr: "Rigueur & discipline", en: "Rigor & Discipline" },
        cyber: { fr: "Investigation structurée d'incidents", en: "Structured Incident Investigation" },
        desc: {
          fr: "La rigueur acquise en comptabilité et audit s'applique naturellement à l'investigation méthodique d'incidents de sécurité.",
          en: "The rigor acquired in accounting and auditing naturally applies to methodical security incident investigation.",
        },
      },
      {
        finance: { fr: "Conformité réglementaire", en: "Regulatory Compliance" },
        cyber: { fr: "Conformité sécurité (ISO, RGPD)", en: "Security Compliance (ISO, GDPR)" },
        desc: {
          fr: "La compréhension des cadres réglementaires financiers facilite l'appropriation des normes de sécurité et de protection des données.",
          en: "Understanding financial regulatory frameworks facilitates adoption of security standards and data protection norms.",
        },
      },
    ],
  },
  contact: {
    title: { fr: "Contact", en: "Contact" },
    subtitle: {
      fr: "N'hésitez pas à me contacter pour discuter d'opportunités ou de projets.",
      en: "Feel free to reach out to discuss opportunities or projects.",
    },
    name: { fr: "Nom", en: "Name" },
    email: { fr: "Email", en: "Email" },
    message: { fr: "Message", en: "Message" },
    send: { fr: "Envoyer", en: "Send" },
    downloadCV: { fr: "Télécharger le CV", en: "Download CV" },
  },
} as const;
