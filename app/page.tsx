import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ProjectSection from "@/components/ProjectSection";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <HeroBanner />
        <AboutMe />
        <TechStack />
        <ProjectSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
