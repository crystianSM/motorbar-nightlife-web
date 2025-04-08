
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
import InstagramFeed from '../components/InstagramFeed';

const Index = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center w-full">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <FeaturesSection />
     
        <InstagramFeed />
        <TestimonialsSection />
        <EventsSection />
        <ContactSection />
      </div>
      <div className="w-full">
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
