
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
import EventCalendar from '../components/EventCalendar';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center w-full">
      <div className="w-full sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="w-full">
        <HeroSection />
      </div>
      <div className="w-full">
        <AboutSection />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MenuHighlights />
        <BenefitsSection />
        <FeaturesSection />
        <TestimonialsSection />
      </div>
      <div className="w-full">
        <EventsSection />
        <EventCalendar />
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstagramFeed />
        <ContactSection />
      </div>
      <div className="w-full">
        <Footer />
      </div>
      <WhatsAppButton />
      <Toaster position="top-right" />
    </div>
  );
};

export default Index;
