// types

export type CV = {
  personalInfo: {
    name: string;
    role: string;
    address: string;
    email: string;
    portfolio: string;
    linkedin: string;
    github: string;
    mobile: string;
  };

  about: {
    summary: string;
  };

  professionalDetails: {
    company: string;
    positions: {
      title: string;
      duration: string;
      current?: boolean;
    }[];
    responsibilities: string[];
  };

  skills: {
    frontend: string[];
    stateManagement: string[];
    apis: string[];
    authentication: string[];
    cms: string[];
    tools: string[];
    aiTools: string[];
  };

  projects: {
    name: string;
    overview: string;
    techStack: string[];
  }[];

  education: {
    degree: string;
    institution: string;
    result: string;
    year: string;
  }[];
};

export const cv = {
  personalInfo: {
    name: "M. Nasif Hasan Noor",
    role: "Frontend Developer",
    address: "Mirpur, Dhaka, Bangladesh",
    email: "nasif.workstation@gmail.com",
    portfolio: "https://nasifh.vercel.app",
    linkedin: "https://www.linkedin.com/in/nasifh",
    github: "https://github.com/NasifNoor",
    mobile: "+8801626858697",
  },
  about: {
    importantNote:
      "I am actively seeking new opportunities to contribute my frontend development skills and grow professionally. If you have a role that aligns with my experience and expertise, please feel free to reach out to me.",
    summary:
      "4+ years of experience crafting high-performance, scalable web applications with React, Next.js, TypeScript, and Angular. Specialist in developing reusable component architectures, optimizing performance, and integrating RESTful APIs. Focused on writing clean, maintainable code and delivering reliable solutions in agile environments, with a strong interest in continuously adopting modern web technologies.",
  },
  professionalDetails: {
    company: "Golden Harvest InfoTech Ltd.",
    positions: [
      {
        title: "Software Engineer",
        duration: "April 2024 - March 2026",
      },
      {
        title: "Assistant Software Engineer",
        duration: "April 2023 - March 2024",
      },
      {
        title: "Junior Software Engineer",
        duration: "February 2022 - March 2023",
      },
      {
        title: "Intern",
        duration: "October 2021 - January 2022",
      },
    ],
    responsibilities: [
      "Developed web applications using React.js, Next.js, and Angular, focusing on scalability and performance.",
      "Designed reusable, modular UI components following clean architecture principles.",
      "Optimized application performance by improving rendering efficiency and API interactions, resulting in faster load times.",
      "Integrated RESTful APIs and collaborated closely with backend teams to ensure seamless data flow.",
      "Implemented responsive, user-centric interfaces based on business requirements.",
      "Conducted code reviews (PR reviews) to maintain code quality and consistency.",
      "Performed unit and component testing, debugging, and maintenance to ensure stable releases.",
    ],
  },
  skills: {
    frontend: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Material UI",
    ],
    stateManagement: ["Redux", "Context API"],
    apis: [
      "REST APIs",
      "GraphQL (familiar with concepts and basic integration)",
    ],
    authentication: ["JWT", "RBAC", "ABAC"],
    cms: ["WordPress (Headless)", "Strapi"],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Swagger",
      "Browser Developer Tools",
    ],
    aiTools: ["Cursor", "Claude Code", "GitHub Copilot"],
  },
  projects: [
    {
      name: "MHS - Memorial Houston Medical",
      overview:
        "An enterprise-grade healthcare management platform built on microservices architecture. Played a primary development role in the platform's most critical modules including Auth, Electronic Health Records (EHR), Patient Information System (PIS), and User Information System (UIS), ensuring secure role-based access and efficient management of users, patient records, and hospital operations.",
      techStack: [
        "Next.js",
        "FastAPI",
        "Spring Boot",
        "PostgreSQL",
        "Material UI",
        "Tailwind CSS",
      ],
    },
    {
      name: "ECOMILLI",
      overview:
        "A multi-module web platform centered on eco-friendly, sustainable, and affordable living. Integrates a multivendor e-commerce store, a community interaction hub, a podcast platform, and a resource-sharing module into a single ecosystem, promoting environmental awareness.",
      techStack: [
        "React",
        "Next.js",
        "Spring Boot",
        "WordPress (Headless CMS)",
        "MySQL",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      name: "Curation Keying Audit Portal - Family Search",
      overview:
        "An audit and monitoring portal for FamilySearch International, managing over 8 billion historical records across 140 countries. Handles large-scale data tracking, compliance reporting, and precision monitoring.",
      techStack: [
        "Angular",
        "Spring Boot",
        "FastAPI",
        "PostgreSQL",
        "Bootstrap",
        "JasperReports",
      ],
    },
    {
      name: "Nippon Middleware",
      overview:
        "Web-based middleware application for NIPPON Express Bangladesh to manage shipment bookings and facilitate seamless communication with Inditex systems.",
      techStack: [
        "Angular",
        "Spring Boot",
        "MySQL",
        "Bootstrap",
        "Angular Material",
      ],
    },
    {
      name: "BSCL Billing System",
      overview:
        "A national-scale billing and revenue management system for Bangladesh Satellite Company Limited (BSCL), managing financial operations for all national TV channels and broadcasters.",
      techStack: [
        "Angular",
        "Spring Boot",
        "Bootstrap",
        "MySQL",
        "Angular Material",
        "JasperReports",
      ],
    },
  ],
  education: [
    {
      degree: "M.Sc. in CSE, PMSCS",
      institution: "Jahangirnagar University (JU)",
      result: "CGPA 3.23 out of 4.00",
      year: "2023",
    },
    {
      degree: "B.Sc. in CSE",
      institution: "American International University-Bangladesh (AIUB)",
      result: "CGPA 3.74 out of 4.00",
      year: "2021",
    },
  ],
};
