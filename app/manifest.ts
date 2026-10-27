import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M. Nasif Hasan Noor | Software Engineer",
    short_name: "Nasif Noor",
    description:
      "Portfolio of M. Nasif Hasan Noor, a software engineer building scalable web applications with React, Next.js, NestJS, and PostgreSQL.",
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#020817",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
