import { Shield, Network, Flame, Bug, Lock, Key } from "lucide-react";

export interface Lab {
  id: string;
  slug: string;
  icon: typeof Shield;
  progress: number;
  title: { fr: string; en: string };
  shortDesc: { fr: string; en: string };
  fullDesc: { fr: string; en: string };
  objectives: { fr: string[]; en: string[] };
  environment: { fr: string[]; en: string[] };
  commands: string[];
  results: { fr: string[]; en: string[] };
  tech: string[];
}

export const labs: Lab[] = [
  {
    id: "lab-1",
    slug: "lab-linux-system-administration",
    icon: Shield,
    progress: 73,
    title: {
      fr: "Linux & Administration Système",
      en: "Linux & System Administration",
    },
    shortDesc: {
      fr: "Analyse et gestion de journaux système sous Linux afin de détecter des comportements suspects et comprendre le fonctionnement des logs système.",
      en: "Analysis and management of Linux system logs to detect suspicious behavior and understand system log operations.",
    },
    fullDesc: {
      fr: "Ce lab porte sur l'analyse approfondie des journaux système sous Linux. L'objectif est de maîtriser les outils de gestion des logs pour détecter des comportements anormaux et comprendre le fonctionnement interne du système d'exploitation.",
      en: "This lab focuses on in-depth analysis of Linux system logs. The goal is to master log management tools to detect abnormal behavior and understand the internal workings of the operating system.",
    },
    objectives: {
      fr: [
        "Comprendre la structure des journaux système Linux",
        "Utiliser les commandes de filtrage et d'analyse de logs",
        "Détecter des comportements suspects dans les logs",
        "Configurer la rotation et l'archivage des logs",
      ],
      en: [
        "Understand Linux system log structure",
        "Use log filtering and analysis commands",
        "Detect suspicious behavior in logs",
        "Configure log rotation and archiving",
      ],
    },
    environment: {
      fr: ["Kali Linux (VM)", "Serveur Ubuntu 22.04", "Syslog centralisé"],
      en: ["Kali Linux (VM)", "Ubuntu 22.04 Server", "Centralized Syslog"],
    },
    commands: [
      "grep -i 'failed' /var/log/auth.log",
      "journalctl -u ssh --since '1 hour ago'",
      "tail -f /var/log/syslog",
      "cat /var/log/kern.log | head -50",
    ],
    results: {
      fr: [
        "Identification de tentatives de brute-force SSH",
        "Mise en place d'alertes automatiques sur événements critiques",
        "Création d'un script de monitoring de logs",
      ],
      en: [
        "Identified SSH brute-force attempts",
        "Set up automatic alerts for critical events",
        "Created a log monitoring script",
      ],
    },
    tech: ["Linux", "Kali Linux", "grep", "cat", "head", "tail", "syslog", "journalctl"],
  },
  {
    id: "lab-2",
    slug: "lab-network-reconnaissance-sniffing",
    icon: Network,
    progress: 93,
    title: {
      fr: "Reconnaissance Réseau & Sniffing",
      en: "Network Reconnaissance & Sniffing",
    },
    shortDesc: {
      fr: "Cartographie d'une infrastructure réseau virtuelle et analyse du trafic réseau afin d'identifier les services actifs et les données transmises sur le réseau.",
      en: "Mapping a virtual network infrastructure and analyzing network traffic to identify active services and transmitted data.",
    },
    fullDesc: {
      fr: "Ce lab explore les techniques de reconnaissance réseau et d'analyse de trafic. Il couvre la cartographie complète d'une infrastructure réseau virtuelle, l'identification des services actifs et l'interception du trafic pour analyse.",
      en: "This lab explores network reconnaissance and traffic analysis techniques. It covers complete mapping of a virtual network infrastructure, identification of active services, and traffic interception for analysis.",
    },
    objectives: {
      fr: [
        "Scanner et cartographier un réseau virtuel",
        "Identifier les services et ports ouverts",
        "Capturer et analyser le trafic réseau",
        "Détecter les données sensibles en transit",
      ],
      en: [
        "Scan and map a virtual network",
        "Identify open services and ports",
        "Capture and analyze network traffic",
        "Detect sensitive data in transit",
      ],
    },
    environment: {
      fr: ["Réseau virtuel (3 VMs)", "Kali Linux", "Ubuntu Server", "Windows 10"],
      en: ["Virtual network (3 VMs)", "Kali Linux", "Ubuntu Server", "Windows 10"],
    },
    commands: [
      "nmap -sV -sC 192.168.1.0/24",
      "wireshark -i eth0 -k",
      "tcpdump -i eth0 port 80 -w capture.pcap",
      "nslookup target.local",
    ],
    results: {
      fr: [
        "Cartographie complète du réseau avec services identifiés",
        "Capture de credentials en clair sur HTTP",
        "Rapport de vulnérabilités réseau",
      ],
      en: [
        "Complete network map with identified services",
        "Captured cleartext credentials over HTTP",
        "Network vulnerability report",
      ],
    },
    tech: ["Nmap", "Wireshark", "tcpdump", "nslookup", "dig", "curl"],
  },
  {
    id: "lab-3",
    slug: "lab-active-defense-ids-firewall",
    icon: Flame,
    progress: 67,
    title: {
      fr: "Défense Active : Firewall / IDS / SIEM",
      en: "Active Defense: Firewall / IDS / SIEM",
    },
    shortDesc: {
      fr: "Mise en place de mécanismes de défense réseau incluant un pare-feu et un système de détection d'intrusion afin d'identifier les activités suspectes.",
      en: "Implementation of network defense mechanisms including a firewall and intrusion detection system to identify suspicious activities.",
    },
    fullDesc: {
      fr: "Ce lab couvre la mise en place d'une infrastructure de défense réseau complète. Il inclut la configuration d'un pare-feu, le déploiement d'un IDS Snort et l'intégration avec un SIEM pour la corrélation d'événements.",
      en: "This lab covers the setup of a complete network defense infrastructure. It includes firewall configuration, Snort IDS deployment, and integration with a SIEM for event correlation.",
    },
    objectives: {
      fr: [
        "Configurer des règles de pare-feu avancées",
        "Déployer et configurer Snort comme IDS",
        "Analyser les alertes de sécurité",
        "Corréler les événements avec un SIEM",
      ],
      en: [
        "Configure advanced firewall rules",
        "Deploy and configure Snort as IDS",
        "Analyze security alerts",
        "Correlate events with a SIEM",
      ],
    },
    environment: {
      fr: ["pfSense (VM)", "Snort IDS", "ELK Stack", "Réseau segmenté"],
      en: ["pfSense (VM)", "Snort IDS", "ELK Stack", "Segmented network"],
    },
    commands: [
      "snort -A console -q -c /etc/snort/snort.conf -i eth0",
      "iptables -A INPUT -p tcp --dport 22 -j DROP",
      "pfctl -sr",
    ],
    results: {
      fr: [
        "Détection automatique de scans de ports",
        "Blocage de tentatives d'intrusion en temps réel",
        "Dashboard SIEM opérationnel",
      ],
      en: [
        "Automatic port scan detection",
        "Real-time intrusion attempt blocking",
        "Operational SIEM dashboard",
      ],
    },
    tech: ["Snort", "Firewall rules", "IDS/IPS", "SIEM"],
  },
  {
    id: "lab-4",
    slug: "lab-threats-attacks-vulnerabilities",
    icon: Bug,
    progress: 100,
    title: {
      fr: "Menaces, Attaques & Vulnérabilités",
      en: "Threats, Attacks & Vulnerabilities",
    },
    shortDesc: {
      fr: "Étude des menaces informatiques, des vulnérabilités et des techniques d'attaque afin de comprendre les méthodes utilisées par les cybercriminels.",
      en: "Study of cyber threats, vulnerabilities, and attack techniques to understand methods used by cybercriminals.",
    },
    fullDesc: {
      fr: "Ce lab propose une étude complète du paysage des menaces informatiques. Il couvre l'analyse des vulnérabilités connues (CVE), les méthodologies d'attaque et les frameworks de threat intelligence.",
      en: "This lab provides a comprehensive study of the cyber threat landscape. It covers analysis of known vulnerabilities (CVE), attack methodologies, and threat intelligence frameworks.",
    },
    objectives: {
      fr: [
        "Analyser les vulnérabilités CVE",
        "Comprendre les techniques d'attaque OWASP Top 10",
        "Effectuer une analyse de menaces",
        "Rédiger un rapport de threat intelligence",
      ],
      en: [
        "Analyze CVE vulnerabilities",
        "Understand OWASP Top 10 attack techniques",
        "Perform threat analysis",
        "Write a threat intelligence report",
      ],
    },
    environment: {
      fr: ["DVWA (Damn Vulnerable Web App)", "Metasploitable", "Kali Linux"],
      en: ["DVWA (Damn Vulnerable Web App)", "Metasploitable", "Kali Linux"],
    },
    commands: [
      "searchsploit apache 2.4",
      "nikto -h http://target",
      "sqlmap -u 'http://target/page?id=1' --dbs",
    ],
    results: {
      fr: [
        "Identification de 15+ vulnérabilités critiques",
        "Exploitation réussie de SQL injection et XSS",
        "Rapport de threat intelligence complet",
      ],
      en: [
        "Identified 15+ critical vulnerabilities",
        "Successfully exploited SQL injection and XSS",
        "Complete threat intelligence report",
      ],
    },
    tech: ["CVE", "OWASP", "Threat Intelligence"],
  },
  {
    id: "lab-5",
    slug: "lab-security-architecture-access-control",
    icon: Lock,
    progress: 100,
    title: {
      fr: "Architecture de Sécurité & Contrôles d'Accès",
      en: "Security Architecture & Access Controls",
    },
    shortDesc: {
      fr: "Conception d'une architecture de sécurité robuste avec des mécanismes d'authentification avancés et des contrôles d'accès adaptés aux environnements professionnels.",
      en: "Designing a robust security architecture with advanced authentication mechanisms and access controls suited for professional environments.",
    },
    fullDesc: {
      fr: "Ce lab aborde la conception d'architectures de sécurité d'entreprise. Il couvre les mécanismes d'authentification multi-facteurs, les contrôles d'accès basés sur les rôles et la mise en place de politiques de sécurité.",
      en: "This lab covers enterprise security architecture design. It includes multi-factor authentication mechanisms, role-based access controls, and security policy implementation.",
    },
    objectives: {
      fr: [
        "Concevoir une architecture de sécurité Zero Trust",
        "Implémenter l'authentification multi-facteurs",
        "Configurer les contrôles d'accès RBAC",
        "Documenter les politiques de sécurité",
      ],
      en: [
        "Design a Zero Trust security architecture",
        "Implement multi-factor authentication",
        "Configure RBAC access controls",
        "Document security policies",
      ],
    },
    environment: {
      fr: ["Active Directory", "Azure AD", "Serveur RADIUS", "PKI"],
      en: ["Active Directory", "Azure AD", "RADIUS Server", "PKI"],
    },
    commands: [
      "New-ADUser -Name 'SecUser' -Enabled $true",
      "Set-MsolUser -UserPrincipalName user@domain.com -StrongAuthenticationRequirements @()",
    ],
    results: {
      fr: [
        "Architecture Zero Trust documentée",
        "MFA déployé pour tous les utilisateurs",
        "Matrice RBAC complète",
      ],
      en: [
        "Documented Zero Trust architecture",
        "MFA deployed for all users",
        "Complete RBAC matrix",
      ],
    },
    tech: ["MFA", "Authentication systems", "Security architecture"],
  },
  {
    id: "lab-6",
    slug: "lab-cryptography-secure-solutions",
    icon: Key,
    progress: 100,
    title: {
      fr: "Cryptographie & Solutions Sécurisées",
      en: "Cryptography & Secure Solutions",
    },
    shortDesc: {
      fr: "Étude et implémentation des mécanismes de chiffrement et de hachage afin de sécuriser les communications et protéger les données.",
      en: "Study and implementation of encryption and hashing mechanisms to secure communications and protect data.",
    },
    fullDesc: {
      fr: "Ce lab explore les fondamentaux de la cryptographie appliquée. Il couvre les algorithmes de chiffrement symétrique et asymétrique, les fonctions de hachage et leur implémentation pratique en Python.",
      en: "This lab explores the fundamentals of applied cryptography. It covers symmetric and asymmetric encryption algorithms, hash functions, and their practical implementation in Python.",
    },
    objectives: {
      fr: [
        "Comprendre les algorithmes de chiffrement AES, DES, RSA",
        "Implémenter le chiffrement en Python",
        "Analyser les fonctions de hachage MD5, SHA-256",
        "Sécuriser les communications avec TLS",
      ],
      en: [
        "Understand AES, DES, RSA encryption algorithms",
        "Implement encryption in Python",
        "Analyze MD5, SHA-256 hash functions",
        "Secure communications with TLS",
      ],
    },
    environment: {
      fr: ["Python 3.x", "OpenSSL", "Wireshark", "Kali Linux"],
      en: ["Python 3.x", "OpenSSL", "Wireshark", "Kali Linux"],
    },
    commands: [
      "openssl enc -aes-256-cbc -in file.txt -out encrypted.bin",
      "echo -n 'password' | md5sum",
      "python3 -c \"from Crypto.Cipher import AES\"",
      "openssl genrsa -out private.pem 2048",
    ],
    results: {
      fr: [
        "Chiffrement AES-256 fonctionnel",
        "Comparaison des performances des algorithmes",
        "Communication TLS sécurisée établie",
      ],
      en: [
        "Functional AES-256 encryption",
        "Algorithm performance comparison",
        "Established secure TLS communication",
      ],
    },
    tech: ["AES", "DES", "RSA", "Python", "MD5", "Cryptography"],
  },
];
