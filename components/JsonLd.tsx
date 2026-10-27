import { cv } from "@/data/cv";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: cv.personalInfo.name,
    jobTitle: cv.personalInfo.role,
    url: cv.personalInfo.portfolio,
    email: `mailto:${cv.personalInfo.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [cv.personalInfo.linkedin, cv.personalInfo.github],
    knowsAbout: cv.skills.frontend.concat(cv.skills.backend, cv.skills.databases),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
