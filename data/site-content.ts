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
  { label: "nasifhasannoor@gmail.com", href: "mailto:nasifhasannoor@gmail.com" },
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
    slug: "mhs-medical-health-system",
    highlight: "RBAC + EHR",
    title: "MHS - Medical Health System",
    description:
      "Enterprise healthcare platform with Electronic Health Records, multi-role access control, and OTP-based auth.",
    tags: ["Next.js", "TypeScript", "Redux", "PostgreSQL"],
    overview:
      "A frontend-heavy enterprise healthcare platform focused on secure records management and role-aware workflows.",
    details: [
      "Built patient and practitioner workflows for Electronic Health Records with clear, responsive UI states.",
      "Implemented multi-role access experiences around RBAC, OTP authentication, and secure session handling.",
      "Organized complex product flows into reusable frontend architecture that supported long-term scaling.",
    ],
  },
  {
    slug: "bscl-billing-system",
    highlight: "Finance",
    title: "BSCL Billing System",
    description:
      "End-to-end billing platform with complex tariffs, automated invoicing, and financial dashboards.",
    tags: ["React", "TypeScript", "Tailwind", "Chart.js"],
    overview:
      "A financial operations interface designed to handle complex tariff logic, invoice generation, and reporting views.",
    details: [
      "Delivered dashboard and billing surfaces for high-volume finance workflows with strong information density.",
      "Translated tariff rules and invoicing complexity into maintainable frontend patterns and components.",
      "Created visual reporting experiences that made billing and financial data easier to audit and navigate.",
    ],
  },
  {
    slug: "ecomilli",
    highlight: "E-Commerce",
    title: "ECOMILLI",
    description:
      "High-performance e-commerce platform optimized for Core Web Vitals and conversion UX.",
    tags: ["Next.js", "Redux Toolkit", "Stripe"],
    overview:
      "A conversion-focused e-commerce frontend built around performance, clarity, and fast shopper flows.",
    details: [
      "Optimized storefront interactions around Core Web Vitals, faster rendering, and lightweight client behavior.",
      "Built product and checkout flows with a focus on conversion UX and dependable state management.",
      "Integrated modern e-commerce tooling to support payments, scalable catalog behavior, and polished user journeys.",
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
  { label: "nasifhasannoor@gmail.com", href: "mailto:nasifhasannoor@gmail.com" },
  { label: "LinkedIn /nasifhasannoor", href: "https://linkedin.com/in/nasifhasannoor" },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
