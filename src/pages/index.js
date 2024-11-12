import React from "react";
import ExperiencesSection from "../components/experiences"
import EducationSection from "../components/education"
import {
  AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ExperiencesSection sectionId="experiences" heading="Experiences" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <EducationSection sectionId="education" heading="Education" />
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
