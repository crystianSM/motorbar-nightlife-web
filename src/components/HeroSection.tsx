
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center justify-center" id="home">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          RIGON <span className="text-gold">MOTOR</span> BAR
        </h1>
        <div className="golden-accent mx-auto"></div>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-slide-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
          O Ponto de Encontro dos Amantes de Moto, Bons Drinks e Boa Música!
        </p>
        <a 
          href="#sobre" 
          className="btn-primary animate-slide-up opacity-0" 
          style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}
        >
          Conheça
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
