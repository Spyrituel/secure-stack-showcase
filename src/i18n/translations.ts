export type Lang = "fr" | "en";

export const translations = {
  nav: {
    about: { fr: "À propos", en: "About" },
    skills: { fr: "Compétences", en: "Skills" },
    projects: { fr: "Projets", en: "Projects" },
    experience: { fr: "Parcours", en: "Experience" },
    lab: { fr: "Lab", en: "Lab" },
    contact: { fr: "Contact", en: "Contact" },
  },
  hero: {
    name: { fr: "Alexandre Martin", en: "Alexandre Martin" },
    title: {
      fr: "Étudiant en Administration et Sécurité des Systèmes et Réseaux",
      en: "Student in System & Network Administration and Security",
    },
    tagline: {
      fr: "Passionné par la cybersécurité, l'infrastructure réseau et la protection des systèmes d'information.",
      en: "Passionate about cybersecurity, network infrastructure, and information systems protection.",
    },
    cta1: { fr: "Voir les projets", en: "View Projects" },
    cta2: { fr: "Télécharger le CV", en: "Download CV" },
  },
  about: {
    title: { fr: "À propos", en: "About Me" },
    p1: {
      fr: "Étudiant en administration et sécurité des systèmes et réseaux, je suis passionné par la cybersécurité et l'infrastructure IT. Mon objectif est de contribuer à sécuriser les systèmes d'information des entreprises face aux menaces croissantes.",
      en: "As a student in system and network administration and security, I'm passionate about cybersecurity and IT infrastructure. My goal is to contribute to securing enterprise information systems against growing threats.",
    },
    p2: {
      fr: "J'ai développé mes compétences à travers des projets pratiques en lab, des certifications, et une veille technologique constante. Je cherche à rejoindre une équipe où je pourrai mettre en pratique mes connaissances et continuer à apprendre.",
      en: "I've developed my skills through hands-on lab projects, certifications, and constant technology monitoring. I'm looking to join a team where I can apply my knowledge and continue learning.",
    },
  },
  skills: {
    title: { fr: "Compétences", en: "Skills" },
    networking: { fr: "Réseaux", en: "Networking" },
    sysadmin: { fr: "Administration Système", en: "System Administration" },
    security: { fr: "Cybersécurité", en: "Cybersecurity" },
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
        title: { fr: "Monitoring Réseau", en: "Network Monitoring Setup" },
        desc: {
          fr: "Déploiement d'une stack de monitoring avec Zabbix et Grafana pour surveiller l'infrastructure réseau et détecter les anomalies.",
          en: "Deployed a monitoring stack with Zabbix and Grafana to monitor network infrastructure and detect anomalies.",
        },
        tech: ["Zabbix", "Grafana", "SNMP", "Docker"],
      },
    ],
  },
  timeline: {
    title: { fr: "Formation & Expérience", en: "Education & Experience" },
    items: [
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
        year: "2024",
        title: {
          fr: "Stage - Administration Réseau",
          en: "Internship - Network Administration",
        },
        desc: {
          fr: "Stage en entreprise : maintenance réseau, support utilisateur, déploiement de postes et gestion Active Directory.",
          en: "Corporate internship: network maintenance, user support, workstation deployment, and Active Directory management.",
        },
        type: "experience" as const,
      },
      {
        year: "2023",
        title: {
          fr: "Certification Cisco CCNA - Introduction aux Réseaux",
          en: "Cisco CCNA - Introduction to Networks",
        },
        desc: {
          fr: "Certification couvrant les fondamentaux des réseaux : modèle OSI, TCP/IP, switching et routing de base.",
          en: "Certification covering networking fundamentals: OSI model, TCP/IP, basic switching and routing.",
        },
        type: "certification" as const,
      },
    ],
  },
  lab: {
    title: { fr: "Lab Technique", en: "Tech Lab" },
    subtitle: {
      fr: "Mon environnement de travail et d'expérimentation",
      en: "My working and experimentation environment",
    },
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
