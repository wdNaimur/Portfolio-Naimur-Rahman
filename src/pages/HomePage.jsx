import React from "react";
import BannerSecondary from "../components/Home/HomeSecondary/BannerSecondary";
import SkillsSection from "../components/Home/SkillsSection/SkillsSection";
import ProjectSection from "../components/Home/ProjectSection/ProjectSection";
import AboutSection from "../components/Home/AboutSection/AboutSection";
import ContactSection from "../components/Home/ContactSection/ContactSection";
import Footer from "../components/Home/Footer/Footer";
import ScrollFadeIn from "../UI/ScrollFadeIn";

const HomePage = () => {
  return (
    <>
      <main id="home" className="pt-10 bg-base-100">
        <ScrollFadeIn>
          <BannerSecondary />
        </ScrollFadeIn>
      </main>
      <section
        id="skills"
        className="bg-gradient-to-tl from-base-100 to-primary/10 md:py-16 py-10"
      >
        <ScrollFadeIn>
          <SkillsSection />
        </ScrollFadeIn>
      </section>
      <section id="projects" className="md:py-16 py-10">
        <ScrollFadeIn>
          <ProjectSection />
        </ScrollFadeIn>
      </section>
      <section
        id="about"
        className="bg-gradient-to-tl from-base-100 to-primary/10 md:py-16 py-10"
      >
        <div className="container mx-auto">
          <ScrollFadeIn>
            <AboutSection />
          </ScrollFadeIn>
        </div>
      </section>
      <section
        id="contact"
        className="bg-gradient-to-tl from-base-100 to-primary/10"
      >
        <div className="container mx-auto ">
          <ScrollFadeIn>
            <ContactSection />
          </ScrollFadeIn>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
