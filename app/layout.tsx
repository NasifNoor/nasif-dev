import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Mono, DM_Sans } from "next/font/google";
import { ChatWidget } from "@/components/ChatWidget";
import { JsonLd } from "@/components/JsonLd";
import { cv } from "@/data/cv";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteName = "M. Nasif Hasan Noor";
const siteDescription =
  "M. Nasif Hasan Noor is a software engineer in Dhaka, Bangladesh with 5+ years building scalable web applications with React, Next.js, TypeScript, Angular, NestJS, and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(cv.personalInfo.portfolio),
  title: {
    default: `${siteName} | Software Engineer`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    siteName,
    "Nasif Noor",
    "software engineer",
    "full-stack developer",
    ...cv.skills.frontend,
    ...cv.skills.backend,
    ...cv.skills.databases,
  ],
  authors: [{ name: siteName, url: cv.personalInfo.portfolio }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: `${siteName} | Software Engineer`,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Software Engineer`,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmMono.variable} bg-slate-950 py-6 font-[var(--font-dm-sans)] text-slate-200`}
      >
        <JsonLd />
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
