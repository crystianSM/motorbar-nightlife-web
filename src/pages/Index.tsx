
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import EventsSection from '../components/EventsSection';
import MenuHighlights from '../components/MenuHighlights';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MenuHighlights />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
