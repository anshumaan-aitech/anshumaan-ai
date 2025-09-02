import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { CertificationsSection } from "@/components/sections/certifications";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { AvailabilitySection } from "@/components/sections/availability";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <TestimonialsSection />
        <AvailabilitySection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
