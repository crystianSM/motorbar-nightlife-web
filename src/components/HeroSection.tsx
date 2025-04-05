
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative" 
      id="home"
      style={{ backgroundImage: "url('/lovable-uploads/1ff1e660-6c3d-45b3-8422-7e86ab956a67.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          RIGON <span className="text-gold">MOTOR</span> BAR
        </h1>
        <div className="h-1 w-40 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-slide-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
          O Ponto de Encontro dos Amantes de Moto, Bons Drinks e Boa Música!
        </p>
        <Button 
          asChild
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold animate-slide-up opacity-0" 
          style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}
          size="lg"
        >
          <a href="#sobre">Conheça</a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
