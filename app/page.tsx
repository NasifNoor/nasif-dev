import { About } from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Performance } from "@/components/Performance";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="portfolio-shell">
          <Navbar />
          <Hero />
          <div className="section-divider" />
          <TechStack />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <ExperienceTimeline />
          <div className="section-divider" />
          <Education />
          <div className="section-divider" />
          <Performance />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Contact />
          <Footer />
        </div>
      </div>
      <BackToTop />
    </main>
  );
}
