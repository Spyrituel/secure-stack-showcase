import { Globe, Server, HardDrive, Network, ShieldCheck, Activity } from "lucide-react";
import type { LabScreenshot } from "@/data/labs";

export interface AwsService {
  name: string;
  category: { fr: string; en: string };
  desc: { fr: string; en: string };
  icon: typeof Server;
}

export interface AwsLab {
  id: string;
  slug: string;
  icon: typeof Globe;
  progress: number;
  title: { fr: string; en: string };
  shortDesc: { fr: string; en: string };
  fullDesc: { fr: string; en: string };
  objectives: { fr: string[]; en: string[] };
  environment: { fr: string[]; en: string[] };
  commands: string[];
  results: { fr: string[]; en: string[] };
  tech: string[];
  screenshots?: LabScreenshot[];
}

export const awsServices: AwsService[] = [
  {
    name: "Amazon EC2",
    category: { fr: "Calcul", en: "Compute" },
    desc: {
      fr: "Déploiement de serveurs virtuels pour héberger des applications et environnements de test sécurisés.",
      en: "Deploy virtual servers to host applications and secure test environments.",
    },
    icon: Server,
  },
  {
    name: "Amazon S3",
    category: { fr: "Stockage", en: "Storage" },
    desc: {
      fr: "Stockage d'objets pour sauvegarder logs, backups et fichiers de configuration à grande échelle.",
      en: "Object storage for saving logs, backups and configuration files at scale.",
    },
    icon: HardDrive,
  },
  {
    name: "Amazon VPC",
    category: { fr: "Réseau", en: "Networking" },
    desc: {
      fr: "Réseau virtuel isolé pour segmenter et sécuriser les ressources cloud.",
      en: "Isolated virtual network to segment and secure cloud resources.",
    },
    icon: Network,
  },
  {
    name: "Elastic Load Balancing",
    category: { fr: "Réseau", en: "Networking" },
    desc: {
      fr: "Répartition automatique du trafic pour assurer haute disponibilité et tolérance aux pannes.",
      en: "Automatic traffic distribution for high availability and fault tolerance.",
    },
    icon: Activity,
  },
  {
    name: "IAM",
    category: { fr: "Sécurité", en: "Security" },
    desc: {
      fr: "Gestion des identités et accès : utilisateurs, rôles et principe du moindre privilège.",
      en: "Identity and access management: users, roles and least privilege principle.",
    },
    icon: ShieldCheck,
  },
  {
    name: "Amazon CloudWatch",
    category: { fr: "Monitoring", en: "Monitoring" },
    desc: {
      fr: "Surveillance des ressources cloud : métriques, alarmes et analyse de logs en temps réel.",
      en: "Cloud resource monitoring: metrics, alarms and real-time log analysis.",
    },
    icon: Activity,
  },
];

export const awsLabs: AwsLab[] = [
  {
    id: "aws-lab-1",
    slug: "aws-global-infrastructure",
    icon: Globe,
    progress: 100,
    title: {
      fr: "Cartographie de l'infrastructure AWS",
      en: "AWS Infrastructure Mapping",
    },
    shortDesc: {
      fr: "Étude des Régions, Zones de Disponibilité et Edge Locations pour comprendre l'architecture globale AWS.",
      en: "Studied Regions, Availability Zones and Edge Locations to understand AWS global architecture.",
    },
    fullDesc: {
      fr: "Exploration de l'infrastructure globale AWS : Régions, Zones de Disponibilité et Edge Locations, avec analyse de leur impact sur la disponibilité et la résilience.",
      en: "Explored AWS global infrastructure: Regions, Availability Zones and Edge Locations, analyzing their impact on availability and resilience.",
    },
    objectives: {
      fr: [
        "Identifier les Régions AWS et leurs caractéristiques",
        "Comprendre le rôle des Zones de Disponibilité",
        "Analyser l'utilisation des Edge Locations pour le CDN",
        "Choisir une Région adaptée à un cas d'usage",
      ],
      en: [
        "Identify AWS Regions and their characteristics",
        "Understand the role of Availability Zones",
        "Analyze Edge Location usage for CDN",
        "Choose a suitable Region for a use case",
      ],
    },
    environment: { fr: ["Console AWS", "AWS CLI"], en: ["AWS Console", "AWS CLI"] },
    commands: [
      "aws ec2 describe-regions --output table",
      "aws ec2 describe-availability-zones --region us-east-1",
    ],
    results: {
      fr: [
        "Cartographie complète des Régions et AZ",
        "Choix justifié de Région pour un déploiement",
        "Compréhension du modèle de haute disponibilité AWS",
      ],
      en: [
        "Complete mapping of Regions and AZs",
        "Justified Region choice for deployment",
        "Understanding of AWS high availability model",
      ],
    },
    tech: ["AWS Regions", "Availability Zones", "Edge Locations", "CloudFront"],
  },
  {
    id: "aws-lab-2",
    slug: "aws-launching-ec2-instance",
    icon: Server,
    progress: 100,
    title: {
      fr: "Lancement et configuration d'un serveur EC2",
      en: "EC2 Server Launch & Configuration",
    },
    shortDesc: {
      fr: "Création d'une instance EC2, configuration des Security Groups et déploiement d'un serveur web.",
      en: "Created an EC2 instance, configured Security Groups and deployed a web server.",
    },
    fullDesc: {
      fr: "Création, configuration et gestion d'une instance EC2 : choix du type, Security Groups, connexion SSH et déploiement d'un service web.",
      en: "Created, configured and managed an EC2 instance: type selection, Security Groups, SSH connection and web service deployment.",
    },
    objectives: {
      fr: [
        "Lancer une instance EC2 avec la console AWS",
        "Configurer les groupes de sécurité",
        "Se connecter via SSH à l'instance",
        "Déployer un serveur web basique",
      ],
      en: [
        "Launch an EC2 instance using AWS Console",
        "Configure security groups",
        "Connect via SSH to the instance",
        "Deploy a basic web server",
      ],
    },
    environment: { fr: ["Console AWS", "Terminal SSH", "Amazon Linux 2"], en: ["AWS Console", "SSH Terminal", "Amazon Linux 2"] },
    commands: [
      "aws ec2 run-instances --image-id ami-0abcdef --instance-type t2.micro --key-name MyKey",
      "ssh -i MyKey.pem ec2-user@<public-ip>",
      "sudo yum install httpd -y && sudo systemctl start httpd",
    ],
    results: {
      fr: [
        "Instance EC2 opérationnelle",
        "Serveur web accessible publiquement",
        "Groupes de sécurité correctement configurés",
      ],
      en: [
        "Operational EC2 instance",
        "Publicly accessible web server",
        "Correctly configured security groups",
      ],
    },
    tech: ["Amazon EC2", "SSH", "Security Groups", "Amazon Linux"],
  },
  {
    id: "aws-lab-3",
    slug: "aws-cloud-storage-s3",
    icon: HardDrive,
    progress: 100,
    title: {
      fr: "Gestion du stockage cloud S3",
      en: "S3 Cloud Storage Management",
    },
    shortDesc: {
      fr: "Création de buckets S3, gestion des permissions, versioning et politiques de cycle de vie.",
      en: "Created S3 buckets, managed permissions, versioning and lifecycle policies.",
    },
    fullDesc: {
      fr: "Exploration d'Amazon S3 : création de buckets, gestion des permissions et politiques d'accès, versioning et lifecycle policies.",
      en: "Explored Amazon S3: bucket creation, permission and access policy management, versioning and lifecycle policies.",
    },
    objectives: {
      fr: [
        "Créer et configurer un bucket S3",
        "Uploader et gérer des objets",
        "Configurer les permissions et politiques d'accès",
        "Activer le versioning et les lifecycle policies",
      ],
      en: [
        "Create and configure an S3 bucket",
        "Upload and manage objects",
        "Configure permissions and access policies",
        "Enable versioning and lifecycle policies",
      ],
    },
    environment: { fr: ["Console AWS", "AWS CLI", "Navigateur web"], en: ["AWS Console", "AWS CLI", "Web browser"] },
    commands: [
      "aws s3 mb s3://my-lab-bucket",
      "aws s3 cp file.txt s3://my-lab-bucket/",
      "aws s3 ls s3://my-lab-bucket/",
    ],
    results: {
      fr: [
        "Bucket S3 fonctionnel avec versioning",
        "Politiques d'accès correctement appliquées",
        "Compréhension des classes de stockage",
      ],
      en: [
        "Functional S3 bucket with versioning",
        "Correctly applied access policies",
        "Understanding of storage classes",
      ],
    },
    tech: ["Amazon S3", "Bucket Policies", "IAM", "Versioning"],
  },
  {
    id: "aws-lab-4",
    slug: "aws-iam-identity-access",
    icon: ShieldCheck,
    progress: 100,
    title: {
      fr: "Gestion des identités et accès IAM",
      en: "IAM Identity & Access Management",
    },
    shortDesc: {
      fr: "Création d'utilisateurs et groupes IAM, attribution de politiques et application du moindre privilège.",
      en: "Created IAM users and groups, assigned policies and applied least privilege principle.",
    },
    fullDesc: {
      fr: "Gestion IAM complète : utilisateurs, groupes, politiques d'accès, rôles pour les services et principe du moindre privilège.",
      en: "Complete IAM management: users, groups, access policies, service roles and least privilege principle.",
    },
    objectives: {
      fr: [
        "Créer des utilisateurs et groupes IAM",
        "Attribuer des politiques d'accès",
        "Configurer des rôles IAM pour les services",
        "Appliquer le principe du moindre privilège",
      ],
      en: [
        "Create IAM users and groups",
        "Assign access policies",
        "Configure IAM roles for services",
        "Apply the principle of least privilege",
      ],
    },
    environment: { fr: ["Console AWS", "AWS CLI"], en: ["AWS Console", "AWS CLI"] },
    commands: [
      "aws iam create-user --user-name LabUser",
      "aws iam attach-user-policy --user-name LabUser --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess",
      "aws iam create-role --role-name EC2Role --assume-role-policy-document file://trust.json",
    ],
    results: {
      fr: [
        "Utilisateurs et groupes IAM créés",
        "Politiques de moindre privilège appliquées",
        "Rôles IAM fonctionnels pour les services",
      ],
      en: [
        "IAM users and groups created",
        "Least privilege policies applied",
        "Functional IAM roles for services",
      ],
    },
    tech: ["IAM", "Policies", "Roles", "MFA"],
  },
  {
    id: "aws-lab-5",
    slug: "aws-monitoring-cloudwatch",
    icon: Activity,
    progress: 100,
    title: {
      fr: "Monitoring cloud avec CloudWatch",
      en: "Cloud Monitoring with CloudWatch",
    },
    shortDesc: {
      fr: "Création de dashboards, configuration d'alarmes et analyse de logs pour la surveillance des ressources cloud.",
      en: "Created dashboards, configured alarms and analyzed logs for cloud resource monitoring.",
    },
    fullDesc: {
      fr: "Surveillance des ressources cloud avec CloudWatch : dashboards, alarmes sur métriques EC2, analyse des logs et automatisation des réponses. Lien direct avec la sécurité : monitoring des accès et détection d'anomalies.",
      en: "Cloud resource monitoring with CloudWatch: dashboards, EC2 metric alarms, log analysis and response automation. Direct security link: access monitoring and anomaly detection.",
    },
    objectives: {
      fr: [
        "Créer un dashboard CloudWatch",
        "Configurer des alarmes sur les métriques EC2",
        "Analyser les logs avec CloudWatch Logs",
        "Automatiser les réponses aux alarmes",
      ],
      en: [
        "Create a CloudWatch dashboard",
        "Configure alarms on EC2 metrics",
        "Analyze logs with CloudWatch Logs",
        "Automate alarm responses",
      ],
    },
    environment: { fr: ["Console AWS", "Instance EC2", "CloudWatch"], en: ["AWS Console", "EC2 Instance", "CloudWatch"] },
    commands: [
      "aws cloudwatch put-metric-alarm --alarm-name HighCPU --metric-name CPUUtilization --threshold 80",
      "aws logs describe-log-groups",
      "aws cloudwatch get-metric-statistics --namespace AWS/EC2 --metric-name CPUUtilization --period 300",
    ],
    results: {
      fr: [
        "Dashboard de monitoring opérationnel",
        "Alarmes configurées et fonctionnelles",
        "Analyse des métriques de performance",
      ],
      en: [
        "Operational monitoring dashboard",
        "Configured and functional alarms",
        "Performance metrics analysis",
      ],
    },
    tech: ["CloudWatch", "Alarms", "Metrics", "Logs"],
  },
];
