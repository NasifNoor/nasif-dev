import type { MetadataRoute } from "next";
import { projects } from "@/data/site-content";
import { cv } from "@/data/cv";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = cv.personalInfo.portfolio;

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...projectRoutes,
  ];
}
