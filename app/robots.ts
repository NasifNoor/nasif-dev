import type { MetadataRoute } from "next";
import { cv } from "@/data/cv";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = cv.personalInfo.portfolio;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/M_Nasif_Hasan_Noor_Resume0.pdf",
        "/M_Nasif_Hasan_Noor_Resume1.pdf",
        "/M_Nasif_Hasan_Noor_Resume2.pdf",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
