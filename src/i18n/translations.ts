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
      fr: "Étudiant en Administration & Sécurité des Systèmes, Réseaux et Cloud",
      en: "System, Network and Cloud Administration & Security Student",
    },
    tagline: {
      fr: "Profil hybride combinant cybersécurité, infrastructures réseau et analyse financière.",
      en: "Hybrid profile combining cybersecurity, infrastructure engineering and financial analysis.",
    },
    summary: {
      fr: "Étudiant en administration et sécurité des systèmes, réseaux et cloud avec une formation initiale en finance et analyse de données. Profil hybride combinant pensée analytique, gestion du risque et compétences techniques en infrastructures informatiques et cybersécurité.",
      en: "System, network and cloud administration and security student with an initial background in finance and data analytics. Hybrid profile combining analytical thinking, risk management and technical skills in IT infrastructure and cybersecurity.",
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
      fr: ["Finance & Comptabilité", "Analyse de données", "Infrastructure IT", "Cybersécurité & Cloud"],
      en: ["Finance & Accounting", "Data Analytics", "IT Infrastructure", "Cybersecurity & Cloud"],
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
    title: { fr: "Formation & Parcours Académique", en: "Education & Academic Background" },
    items: [
      {
        year: "2024 – 2026",
        title: {
          fr: "AEC — Gestion de Systèmes et Réseaux Informatiques",
          en: "AEC — IT Systems and Network Management",
        },
        institution: {
          fr: "Cégep de Sherbrooke (Programme délocalisé à INSIM Alger)",
          en: "Cégep de Sherbrooke (Remote program at INSIM Algiers)",
        },
        desc: {
          fr: "Programme technique orienté vers l'administration des systèmes informatiques, l'infrastructure réseau et la gestion des services IT dans les environnements professionnels.",
          en: "Technical program focused on IT systems administration, network infrastructure and IT service management in professional environments.",
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
          fr: "Formation de deux ans spécialisée dans l'administration des infrastructures réseau, la gestion des systèmes informatiques et la sécurité des environnements IT.",
          en: "Two-year program specializing in network infrastructure administration, IT systems management, and IT environment security.",
        },
        type: "education" as const,
        status: { fr: "En cours", en: "In Progress" },
      },
      {
        year: "Nov. 2025 – Mars 2026",
        title: {
          fr: "Formation Introduction à la Cybersécurité",
          en: "Introduction to Cybersecurity Training",
        },
        institution: {
          fr: "GoMyCode",
          en: "GoMyCode",
        },
        desc: {
          fr: "Formation couvrant les fondamentaux de la cybersécurité, les menaces informatiques, les vulnérabilités, les architectures de sécurité et les concepts de défense des infrastructures.",
          en: "Training covering cybersecurity fundamentals, cyber threats, vulnerabilities, security architectures and infrastructure defense concepts.",
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
          fr: "Formation portant sur les concepts fondamentaux du cloud computing avec AWS, incluant l'infrastructure cloud, les services principaux (EC2, S3, IAM, VPC) et les bonnes pratiques de sécurité.",
          en: "Training on foundational cloud computing concepts with AWS, including cloud infrastructure, core services (EC2, S3, IAM, VPC) and security best practices.",
        },
        type: "certification" as const,
      },
      {
        year: "2025",
        title: {
          fr: "Microsoft Power BI Data Analyst Associate (PL-300)",
          en: "Microsoft Power BI Data Analyst Associate (PL-300)",
        },
        institution: {
          fr: "Microsoft Certified",
          en: "Microsoft Certified",
        },
        desc: {
          fr: "Certification professionnelle Microsoft validant les compétences en analyse de données, modélisation de données, visualisation et création de tableaux de bord avec Power BI.",
          en: "Microsoft professional certification validating skills in data analysis, data modeling, visualization and dashboard creation with Power BI.",
        },
        type: "certification" as const,
      },
      {
        year: "2020 – 2023",
        title: {
          fr: "Bachelor en Finance et Comptabilité",
          en: "Bachelor in Finance and Accounting",
        },
        institution: {
          fr: "PPA Business School — Programme en partenariat avec HIMI Alger",
          en: "PPA Business School — Partnership program with HIMI Algiers",
        },
        desc: {
          fr: "Formation en finance, analyse financière, comptabilité et gestion d'entreprise.",
          en: "Training in finance, financial analysis, accounting and business management.",
        },
        type: "experience" as const,
      },
    ],
  },
  certifications: {
    title: { fr: "Certifications", en: "Certifications" },
    items: [
      {
        name: { fr: "Power BI Data Analyst Associate (PL-300)", en: "Power BI Data Analyst Associate (PL-300)" },
        org: "Microsoft Certified",
        year: "2025",
        desc: {
          fr: "Compétences en analyse de données, modélisation, visualisation et création de tableaux de bord avec Power BI.",
          en: "Skills in data analysis, modeling, visualization and dashboard creation with Power BI.",
        },
        color: "from-accent/20 to-accent/5",
        iconColor: "text-accent",
      },
      {
        name: { fr: "AWS Cloud Practitioner Training", en: "AWS Cloud Practitioner Training" },
        org: "GoMyCode",
        year: "2025 – 2026",
        desc: {
          fr: "Fondamentaux du cloud AWS : architecture, services principaux, sécurité et bonnes pratiques.",
          en: "AWS cloud fundamentals: architecture, core services, security and best practices.",
        },
        color: "from-primary/20 to-primary/5",
        iconColor: "text-primary",
      },
      {
        name: { fr: "Introduction à la Cybersécurité", en: "Introduction to Cybersecurity" },
        org: "GoMyCode",
        year: "2025 – 2026",
        desc: {
          fr: "Fondamentaux de la cybersécurité, menaces, vulnérabilités, architectures de sécurité et défense des infrastructures.",
          en: "Cybersecurity fundamentals, threats, vulnerabilities, security architectures and infrastructure defense.",
        },
        color: "from-secondary/20 to-secondary/5",
        iconColor: "text-secondary",
      },
    ],
  },
  lab: {
    title: { fr: "Labs pratiques en Cybersécurité", en: "Cybersecurity Practical Labs" },
    subtitle: {
      fr: "Labs de sécurité pratiques réalisés pendant la formation et la pratique personnelle.",
      en: "Hands-on security labs completed during training and personal practice.",
    },
  },
  hybrid: {
    title: { fr: "Profil Hybride : Finance × Data × Cybersecurity", en: "Hybrid Profile: Finance × Data × Cybersecurity" },
    subtitle: {
      fr: "Comment mon parcours en finance et analyse de données renforce mon profil technique",
      en: "How my finance and data analytics background strengthens my technical profile",
    },
    items: [
      {
        finance: { fr: "Analyse financière", en: "Financial Analysis" },
        cyber: { fr: "Analyse des risques cybersécurité", en: "Cybersecurity Risk Analysis" },
        desc: {
          fr: "La méthodologie d'analyse des risques financiers se transpose directement à l'évaluation des menaces et vulnérabilités des systèmes d'information.",
          en: "Financial risk analysis methodology directly translates to evaluating threats and vulnerabilities in information systems.",
        },
      },
      {
        finance: { fr: "Data Analytics (Power BI)", en: "Data Analytics (Power BI)" },
        cyber: { fr: "Analyse de logs & monitoring", en: "Log Analysis & Monitoring" },
        desc: {
          fr: "L'habitude de traiter et interpréter de grands volumes de données facilite l'analyse des logs de sécurité et la détection d'anomalies.",
          en: "Experience processing and interpreting large data volumes facilitates security log analysis and anomaly detection.",
        },
      },
      {
        finance: { fr: "Compréhension métier", en: "Business Understanding" },
        cyber: { fr: "Infrastructure fiable & sécurisée", en: "Reliable & Secure Infrastructure" },
        desc: {
          fr: "La compréhension des enjeux business permet de concevoir des infrastructures qui répondent aux besoins réels des organisations tout en assurant leur sécurité.",
          en: "Understanding business needs enables designing infrastructure that meets organizational requirements while ensuring security.",
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
