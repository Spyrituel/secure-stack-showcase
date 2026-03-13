import { Globe, Server, HardDrive, Network, ShieldCheck, Activity } from "lucide-react";

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
}

export const awsServices: AwsService[] = [
  {
    name: "Amazon EC2",
    category: { fr: "Calcul", en: "Compute" },
    desc: {
      fr: "Serveurs virtuels pour déployer et gérer une infrastructure cloud évolutive.",
      en: "Virtual servers used to deploy and manage scalable cloud infrastructure.",
    },
    icon: Server,
  },
  {
    name: "Amazon S3",
    category: { fr: "Stockage", en: "Storage" },
    desc: {
      fr: "Service de stockage d'objets pour stocker et récupérer des données à grande échelle.",
      en: "Object storage service to store and retrieve data at any scale.",
    },
    icon: HardDrive,
  },
  {
    name: "Amazon VPC",
    category: { fr: "Réseau", en: "Networking" },
    desc: {
      fr: "Réseau virtuel isolé pour lancer des ressources AWS dans un environnement défini.",
      en: "Isolated virtual network to launch AWS resources in a defined environment.",
    },
    icon: Network,
  },
  {
    name: "Elastic Load Balancing",
    category: { fr: "Réseau", en: "Networking" },
    desc: {
      fr: "Distribution automatique du trafic entrant sur plusieurs cibles.",
      en: "Automatically distribute incoming traffic across multiple targets.",
    },
    icon: Activity,
  },
  {
    name: "IAM",
    category: { fr: "Sécurité", en: "Security" },
    desc: {
      fr: "Gestion des identités et des accès pour contrôler l'accès aux ressources AWS.",
      en: "Identity and Access Management to control access to AWS resources.",
    },
    icon: ShieldCheck,
  },
  {
    name: "Amazon CloudWatch",
    category: { fr: "Monitoring", en: "Monitoring" },
    desc: {
      fr: "Surveillance des ressources et applications cloud en temps réel.",
      en: "Monitor cloud resources and applications in real time.",
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
      fr: "Infrastructure Globale AWS",
      en: "AWS Global Infrastructure",
    },
    shortDesc: {
      fr: "Comprendre les Régions AWS, les Zones de Disponibilité et les Edge Locations.",
      en: "Understanding AWS Regions, Availability Zones, and Edge Locations.",
    },
    fullDesc: {
      fr: "Ce lab explore l'infrastructure globale d'Amazon Web Services. Il couvre la compréhension des Régions, des Zones de Disponibilité et des Edge Locations, ainsi que leur impact sur la disponibilité, la latence et la résilience des applications.",
      en: "This lab explores the global infrastructure of Amazon Web Services. It covers understanding Regions, Availability Zones, and Edge Locations, and their impact on application availability, latency, and resilience.",
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
      fr: "Lancement d'un Serveur Virtuel",
      en: "Launching a Virtual Server",
    },
    shortDesc: {
      fr: "Création et configuration d'une instance EC2 dans le cloud AWS.",
      en: "Creating and configuring an EC2 instance in the AWS cloud.",
    },
    fullDesc: {
      fr: "Ce lab couvre la création, la configuration et la gestion d'une instance EC2. Il inclut le choix du type d'instance, la configuration des groupes de sécurité, la connexion SSH et le déploiement d'un service web basique.",
      en: "This lab covers creating, configuring, and managing an EC2 instance. It includes choosing instance types, configuring security groups, SSH connection, and deploying a basic web service.",
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
      fr: "Stockage Cloud avec Amazon S3",
      en: "Cloud Storage with Amazon S3",
    },
    shortDesc: {
      fr: "Upload et gestion d'objets dans des buckets S3.",
      en: "Uploading and managing objects in S3 buckets.",
    },
    fullDesc: {
      fr: "Ce lab explore le service de stockage Amazon S3. Il couvre la création de buckets, l'upload d'objets, la gestion des permissions, le versioning et les politiques de cycle de vie.",
      en: "This lab explores the Amazon S3 storage service. It covers bucket creation, object uploads, permission management, versioning, and lifecycle policies.",
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
      fr: "Identity & Access Management",
      en: "Identity & Access Management",
    },
    shortDesc: {
      fr: "Création d'utilisateurs, rôles et permissions IAM.",
      en: "Creating IAM users, roles, and permissions.",
    },
    fullDesc: {
      fr: "Ce lab couvre la gestion des identités et des accès avec AWS IAM. Il inclut la création d'utilisateurs et de groupes, l'attribution de politiques, la configuration de rôles et l'application du principe du moindre privilège.",
      en: "This lab covers identity and access management with AWS IAM. It includes creating users and groups, assigning policies, configuring roles, and applying the principle of least privilege.",
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
      fr: "Monitoring des Ressources Cloud",
      en: "Monitoring Cloud Resources",
    },
    shortDesc: {
      fr: "Utilisation de CloudWatch pour surveiller les métriques et logs système.",
      en: "Using CloudWatch to monitor system metrics and logs.",
    },
    fullDesc: {
      fr: "Ce lab explore Amazon CloudWatch pour la surveillance des ressources cloud. Il couvre la création de dashboards, la configuration d'alarmes, l'analyse des métriques et la gestion des logs.",
      en: "This lab explores Amazon CloudWatch for cloud resource monitoring. It covers creating dashboards, configuring alarms, analyzing metrics, and managing logs.",
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
