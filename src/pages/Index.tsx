
import React from 'react';
import UpdatedHeroSection from '../components/UpdatedHeroSection';
import AboutSection from '../components/AboutSection';
import NewSkillsSection from '../components/NewSkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import SimpleFooter from '../components/SimpleFooter';
import Navbar from '../components/Navbar';
import FeaturesSection from '../components/FeaturesSection';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Index = () => {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      <main>
        <UpdatedHeroSection />
        <AboutSection />
        <NewSkillsSection />
        <FeaturesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SimpleFooter />
    </div>
  );
};

export default Index;
