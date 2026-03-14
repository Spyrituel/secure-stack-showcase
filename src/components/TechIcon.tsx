import React from "react";
import {
  SiLinux, SiWindows, SiGnubash, SiWireshark, SiPython,
  SiAmazonwebservices, SiPowerbi, SiNmap,
  SiSnort, SiPfsense, SiOpenssl,
} from "react-icons/si";
import {
  DiDatabase,
} from "react-icons/di";
import {
  Shield, Network, Cloud, Lock, Eye, Activity, Server,
  Globe, HardDrive, Monitor, Terminal, Wifi, BarChart3, Key,
  ShieldCheck, Flame, Bug, Cpu, Layers, Radio, FileSearch,
} from "lucide-react";

// Map tech names (lowercase) → icon components
const techIconMap: Record<string, React.ComponentType<any>> = {
  // Systems
  "linux": SiLinux,
  "kali linux": SiLinux,
  "ubuntu": SiLinux,
  "amazon linux": SiLinux,
  "windows server": SiWindows,
  "windows": SiWindows,
  "windows 10": SiWindows,
  "bash": SiGnubash,
  
  // Networking
  "tcp/ip": Network,
  "dns": Globe,
  "dhcp": Radio,
  "vlan": Layers,
  "routing": Network,
  "nmap": SiNmap,
  "nslookup": Globe,
  
  // Cybersecurity
  "wireshark": SiWireshark,
  "snort": SiSnort,
  "siem": Eye,
  "firewall": Flame,
  "ids/ips": Shield,
  "ids": Shield,
  "ips": Shield,
  "pfsense": SiPfsense,
  "pfctl": SiPfsense,
  "log analysis": FileSearch,
  "threat analysis": Bug,
  "threat intelligence": Bug,
  "cve": Bug,
  "owasp": Bug,
  
  // Cloud & AWS
  "aws": SiAmazonwebservices,
  "amazon ec2": Server,
  "amazon s3": HardDrive,
  "amazon vpc": Network,
  "amazon cloudwatch": Activity,
  "elastic load balancing": Activity,
  "cloud fundamentals": Cloud,
  "cloud computing": Cloud,
  "iam": Lock,
  "aws regions": Globe,
  "availability zones": Server,
  "edge locations": Globe,
  "cloudfront": Globe,
  "cloudwatch": Activity,
  "security groups": ShieldCheck,
  "ssh": Terminal,
  "bucket policies": Lock,
  "versioning": Layers,
  "policies": Lock,
  "roles": ShieldCheck,
  "alarms": Activity,
  "metrics": BarChart3,
  "logs": FileSearch,
  
  // Security Architecture
  "mfa": ShieldCheck,
  "active directory": SiWindows,
  "azure ad": Cloud,
  "zero trust": Shield,
  "rbac": Lock,
  "radius server": Server,
  "pki": Key,
  
  // Crypto
  "aes": Key,
  "rsa": Key,
  "tls": Lock,
  "sha-256": Key,
  "openssl": SiOpenssl,
  
  // Data & Dev
  "power bi": SiPowerbi,
  "python": SiPython,
  "data analysis": DiDatabase,
  
  // Tools
  "grep": Terminal,
  "syslog": FileSearch,
  "journalctl": Terminal,
  "tcpdump": Network,
  "nikto": Terminal,
  "sqlmap": Terminal,
  "searchsploit": Terminal,
  "metasploitable": Bug,
  "dvwa": Bug,
  "elk stack": Eye,
  "console aws": SiAmazonwebservices,
  "aws console": SiAmazonwebservices,
  "aws cli": Terminal,
  "terminal ssh": Terminal,
  "ssh terminal": Terminal,
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const getTechIcon = (name: string): React.ComponentType<any> => {
  return techIconMap[name.toLowerCase()] || Monitor;
};

const TechIcon: React.FC<TechIconProps> = ({ name, size = 16, className = "" }) => {
  const IconComponent = getTechIcon(name);
  
  // react-icons use different props than lucide
  const isReactIcon = typeof IconComponent === "function" && 
    !("displayName" in IconComponent && (IconComponent as any).displayName?.startsWith("Lucide"));

  // Check if it's a Simple Icons / DevIcons component (react-icons)
  const isLucide = [
    Shield, Network, Cloud, Lock, Eye, Activity, Server, Globe, HardDrive,
    Monitor, Terminal, Wifi, BarChart3, Key, ShieldCheck, Flame, Bug, Cpu,
    Layers, Radio, FileSearch,
  ].includes(IconComponent as any);

  if (isLucide) {
    return <IconComponent size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default TechIcon;
