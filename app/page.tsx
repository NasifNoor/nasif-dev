import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Performance } from "@/components/Performance";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="portfolio-shell">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <ExperienceTimeline />
      <div className="section-divider" />
      <Performance />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
