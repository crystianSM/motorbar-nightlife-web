
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import EventsSection from '../components/EventsSection';
import MenuHighlights from '../components/MenuHighlights';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';
import BenefitsSection from '../components/BenefitsSection';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <FeaturesSection />
      <MenuHighlights />
      <TestimonialsSection />
      <EventsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
