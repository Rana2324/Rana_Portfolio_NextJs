// Components
import { HeaderSection } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import SkillsSection from "@/components/skills-section";
import Portfolio from "@/components/portfolio";
import { Experience } from "@/components/experience";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="cyber-grid min-h-screen w-full absolute pointer-events-none opacity-100"></div>
      <HeaderSection />
      <Hero />
      <About />
      {/* <Services /> */}
      <SkillsSection />
      <Portfolio />
      <Experience />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
