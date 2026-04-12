export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type TechItem = {
  name: string;
  icon: string;
  iconClassName?: string;
  dotColor: string;
};

export type ProjectItem = {
  slug: string;
  highlight: string;
  title: string;
  description: string;
  tags: string[];
  overview: string;
  details: string[];
};

export type ExperienceItem = {
  period: string;
  role: string;
  description: string;
  current?: boolean;
};

export type PerformanceItem = {
  icon: string;
  metric: string;
  title: string;
  description: string;
};

export const navItems: NavItem[] = [
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/NasifNoor" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nasifh" },
  { label: "nasif.workstation@gmail.com", href: "mailto:nasif.workstation@gmail.com" },
];

export const techStack: TechItem[] = [
  { name: "React", icon: "\u269b", dotColor: "#61DAFB" },
  {
    name: "Next.js",
    icon: "N",
    iconClassName: "text-[15px] font-bold text-slate-200",
    dotColor: "#94a3b8",
  },
  {
    name: "TypeScript",
    icon: "TS",
    iconClassName: "text-[13px] font-bold text-[#3178C6]",
    dotColor: "#3178C6",
  },
  { name: "Redux", icon: "\u2699", dotColor: "#764ABC" },
  { name: "Tailwind", icon: "\u2726", dotColor: "#06B6D4" },
  {
    name: "Angular",
    icon: "\u25b2",
    iconClassName: "text-[#DD0031]",
    dotColor: "#DD0031",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "mhs-memorial-houston-medical",
    highlight: "Healthcare",
    title: "MHS - Memorial Houston Medical",
    description:
      "An enterprise-grade healthcare management platform built on microservices architecture.",
    tags: ["Next.js", "FastAPI", "Spring Boot", "PostgreSQL", "Material UI", "Tailwind CSS"],
    overview:
      "Played a primary development role in the platform's most critical modules including Auth, Electronic Health Records (EHR), Patient Information System (PIS), and User Information System (UIS), ensuring secure role-based access and efficient management of users, patient records, and hospital operations.",
    details: [
      "Built and maintained key healthcare workflows across Auth, EHR, PIS, and UIS modules.",
      "Supported secure role-based access and efficient management of users, records, and hospital operations.",
      "Worked within a microservices-based platform while delivering clean, scalable frontend implementation.",
    ],
  },
  {
    slug: "ecomilli",
    highlight: "E-Commerce",
    title: "ECOMILLI",
    description:
      "A multi-module web platform centered on eco-friendly, sustainable, and affordable living.",
    tags: ["React", "Next.js", "Spring Boot", "WordPress (Headless CMS)", "MySQL", "Bootstrap", "Material UI"],
    overview:
      "The system integrates a multivendor e-commerce store, a community interaction hub, a podcast platform, and a resource-sharing module into a single ecosystem.",
    details: [
      "Designed to connect eco-conscious users and vendors through a seamless, high-performance interface.",
      "Promoted environmental awareness with a cohesive multi-module product experience.",
      "Contributed to a modern frontend spanning storefront, community, content, and sharing experiences.",
    ],
  },
  {
    slug: "bscl-billing-system",
    highlight: "Billing",
    title: "BSCL Billing System",
    description:
      "A national-scale billing and revenue management system for Bangladesh Satellite Company Limited (BSCL).",
    tags: ["Angular", "Spring Boot", "Bootstrap", "MySQL", "Angular Material", "JasperReports"],
    overview:
      "Managed financial operations for all national TV channels and broadcasters, with a primary frontend development role for core modules including automated invoicing and financial analytics dashboards.",
    details: [
      "Built frontend experiences for automated invoicing and financial analytics dashboards.",
      "Supported a national-scale billing and revenue management system used across broadcaster operations.",
      "Focused on maintainable, high-clarity interfaces for operational finance workflows.",
    ],
  },
  {
    slug: "curation-keying-audit-portal-family-search",
    highlight: "Audit Portal",
    title: "Curation Keying Audit Portal - Family Search",
    description:
      "An audit and monitoring portal developed for FamilySearch International, the world's largest genealogy organization.",
    tags: ["Angular", "Spring Boot", "FastAPI", "PostgreSQL", "Bootstrap", "JasperReports"],
    overview:
      "The system was engineered to handle millions of genealogical records, track data changes with precision, and generate detailed compliance reports to ensure data accuracy and transparency at scale.",
    details: [
      "Supported audit and monitoring workflows for an organization managing over 8 billion historical records across 140 countries.",
      "Built interfaces for large-scale record tracking, precision change monitoring, and compliance reporting.",
      "Focused on clarity and reliability for high-volume data review experiences.",
    ],
  },
  {
    slug: "nippon-middleware",
    highlight: "Middleware",
    title: "Nippon Middleware",
    description:
      "Web-based middleware application developed for NIPPON Express Bangladesh to manage shipment bookings.",
    tags: ["Angular", "Spring Boot", "MySQL", "Bootstrap", "Angular Material"],
    overview:
      "Built to facilitate seamless communication with Inditex systems while supporting shipment booking workflows.",
    details: [
      "Developed booking-focused interfaces for logistics and middleware operations.",
      "Supported seamless communication between internal workflows and Inditex-connected systems.",
      "Contributed to stable operational tooling for shipment management use cases.",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2024 - Present",
    role: "Software Engineer",
    description:
      "Leading frontend architecture, performance optimization, and design systems for enterprise products.",
    current: true,
  },
  {
    period: "2023 - 2024",
    role: "Assistant Software Engineer",
    description:
      "Developed EHR and billing system features. Implemented auth flows and Redux state patterns.",
  },
  {
    period: "2022 - 2023",
    role: "Junior Software Engineer",
    description:
      "Built reusable UI components, integrated REST APIs, contributed to responsive design systems.",
  },
  {
    period: "2022",
    role: "Frontend Intern",
    description:
      "Delivered UI features with React and TypeScript under mentorship and code review.",
  },
];

export const performanceHighlights: PerformanceItem[] = [
  {
    icon: "\u26a1",
    metric: "95+ Lighthouse",
    title: "Performance Optimization",
    description:
      "Code splitting, lazy loading, image optimization - consistently hitting top Lighthouse scores.",
  },
  {
    icon: "\ud83d\udd10",
    metric: "OTP + JWT + RBAC",
    title: "Authentication Systems",
    description:
      "Secure OTP flows, JWT refresh strategies, and fine-grained role-based access control.",
  },
  {
    icon: "\u25c8",
    metric: "Design Systems",
    title: "Component Architecture",
    description:
      "Scalable reusable libraries that reduce UI development time across teams.",
  },
  {
    icon: "\u27c1",
    metric: "Redux Toolkit",
    title: "State Management",
    description:
      "Complex client state with real-time data, optimistic updates, and cache invalidation.",
  },
];

export const contactLinks: SocialLink[] = [
  { label: "nasif.workstation@gmail.com", href: "mailto:nasif.workstation@gmail.com" },
  { label: "LinkedIn /nasifh", href: "https://www.linkedin.com/in/nasifh" },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
