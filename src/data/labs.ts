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
      fr: "Analyse de journaux système sous Linux",
      en: "Linux System Log Analysis",
    },
    shortDesc: {
      fr: "Analyse des logs système pour détecter des comportements suspects et configurer le monitoring automatisé.",
      en: "Analyzed system logs to detect suspicious behavior and configured automated monitoring.",
    },
    fullDesc: {
      fr: "Analyse approfondie des journaux système Linux : maîtrise des outils de gestion des logs, détection de comportements anormaux et mise en place de scripts de monitoring.",
      en: "In-depth Linux system log analysis: mastering log management tools, detecting abnormal behavior and setting up monitoring scripts.",
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
    tech: ["Linux", "Kali Linux", "grep", "syslog", "journalctl"],
  },
  {
    id: "lab-2",
    slug: "lab-network-reconnaissance-sniffing",
    icon: Network,
    progress: 93,
    title: {
      fr: "Cartographie et sniffing réseau",
      en: "Network Mapping & Sniffing",
    },
    shortDesc: {
      fr: "Cartographie d'un réseau virtuel et capture de trafic pour identifier services actifs et données sensibles en transit.",
      en: "Mapped a virtual network and captured traffic to identify active services and sensitive data in transit.",
    },
    fullDesc: {
      fr: "Reconnaissance réseau complète : cartographie d'infrastructure, identification des services actifs et interception du trafic pour analyse de sécurité.",
      en: "Complete network reconnaissance: infrastructure mapping, active service identification, and traffic interception for security analysis.",
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
    tech: ["Nmap", "Wireshark", "tcpdump", "nslookup"],
  },
  {
    id: "lab-3",
    slug: "lab-active-defense-ids-firewall",
    icon: Flame,
    progress: 67,
    title: {
      fr: "Déploiement pare-feu et IDS/IPS",
      en: "Firewall & IDS/IPS Deployment",
    },
    shortDesc: {
      fr: "Configuration d'un pare-feu pfSense, déploiement de Snort IDS et intégration SIEM pour la corrélation d'événements.",
      en: "Configured pfSense firewall, deployed Snort IDS and integrated SIEM for event correlation.",
    },
    fullDesc: {
      fr: "Infrastructure de défense réseau complète : pare-feu, IDS Snort et intégration avec un SIEM pour la détection et la corrélation d'événements de sécurité.",
      en: "Complete network defense infrastructure: firewall, Snort IDS and SIEM integration for security event detection and correlation.",
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
    tech: ["Snort", "pfSense", "IDS/IPS", "SIEM"],
  },
  {
    id: "lab-4",
    slug: "lab-threats-attacks-vulnerabilities",
    icon: Bug,
    progress: 100,
    title: {
      fr: "Étude des menaces et vulnérabilités",
      en: "Threat & Vulnerability Study",
    },
    shortDesc: {
      fr: "Analyse de CVE, exploitation de failles OWASP Top 10 et rédaction d'un rapport de threat intelligence.",
      en: "Analyzed CVEs, exploited OWASP Top 10 flaws and wrote a threat intelligence report.",
    },
    fullDesc: {
      fr: "Étude complète du paysage des menaces : analyse de vulnérabilités CVE, exploitation de failles OWASP Top 10 et rédaction de rapports de threat intelligence.",
      en: "Complete threat landscape study: CVE vulnerability analysis, OWASP Top 10 exploitation and threat intelligence reporting.",
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
      fr: "Conception d'architecture de sécurité",
      en: "Security Architecture Design",
    },
    shortDesc: {
      fr: "Conception Zero Trust, déploiement MFA et mise en place de contrôles d'accès RBAC en environnement Active Directory.",
      en: "Zero Trust design, MFA deployment and RBAC access controls in Active Directory environment.",
    },
    fullDesc: {
      fr: "Conception d'architecture de sécurité d'entreprise : authentification multi-facteurs, contrôles d'accès RBAC et politiques de sécurité Zero Trust.",
      en: "Enterprise security architecture design: multi-factor authentication, RBAC access controls and Zero Trust security policies.",
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
    tech: ["MFA", "Active Directory", "Zero Trust", "RBAC"],
  },
  {
    id: "lab-6",
    slug: "lab-cryptography-secure-solutions",
    icon: Key,
    progress: 100,
    title: {
      fr: "Implémentation de mécanismes de chiffrement",
      en: "Encryption Mechanism Implementation",
    },
    shortDesc: {
      fr: "Chiffrement AES/RSA en Python, analyse de fonctions de hachage et sécurisation de communications TLS.",
      en: "AES/RSA encryption in Python, hash function analysis and TLS communication security.",
    },
    fullDesc: {
      fr: "Cryptographie appliquée : algorithmes symétriques et asymétriques (AES, RSA), fonctions de hachage (SHA-256) et sécurisation de communications avec TLS.",
      en: "Applied cryptography: symmetric and asymmetric algorithms (AES, RSA), hash functions (SHA-256) and communication security with TLS.",
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
    tech: ["AES", "RSA", "Python", "TLS", "SHA-256"],
  },
];
