import React from "react";
import {
  SiLinux, SiGnubash, SiWireshark, SiPython,
  SiSnort, SiPfsense, SiOpenssl,
} from "react-icons/si";
import { FaWindows, FaAws } from "react-icons/fa";
import {
  Shield, Network, Cloud, Lock, Eye, Activity, Server,
  Globe, HardDrive, Monitor, Terminal, BarChart3, Key,
  ShieldCheck, Flame, Bug, Layers, Radio, FileSearch,
} from "lucide-react";

const techIconMap: Record<string, React.ComponentType<any>> = {
  // Systems
  "linux": SiLinux,
  "kali linux": SiLinux,
  "ubuntu": SiLinux,
  "amazon linux": SiLinux,
  "windows server": FaWindows,
  "windows": FaWindows,
  "windows 10": FaWindows,
  "bash": SiGnubash,

  // Networking
  "tcp/ip": Network,
  "dns": Globe,
  "dhcp": Radio,
  "vlan": Layers,
  "routing": Network,
  "nmap": Network,
  "nslookup": Globe,

  // Cybersecurity
  "wireshark": SiWireshark,
  "snort": SiSnort,
  "siem": Eye,
  "firewall": Flame,
  "ids/ips": Shield,
  "pfsense": SiPfsense,
  "log analysis": FileSearch,
  "threat analysis": Bug,
  "threat intelligence": Bug,
  "cve": Bug,
  "owasp": Bug,

  // Cloud & AWS
  "aws": FaAws,
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
  "active directory": FaWindows,
  "azure ad": Cloud,
  "zero trust": Shield,
  "rbac": Lock,

  // Crypto
  "aes": Key,
  "rsa": Key,
  "tls": Lock,
  "sha-256": Key,
  "openssl": SiOpenssl,

  // Data
  "power bi": BarChart3,
  "python": SiPython,
  "data analysis": BarChart3,

  // Tools
  "grep": Terminal,
  "syslog": FileSearch,
  "journalctl": Terminal,
  "tcpdump": Network,
  "elk stack": Eye,
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
  return <IconComponent size={size} className={className} />;
};

export default TechIcon;
