
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative" 
      id="home"
      style={{ backgroundImage: "url('/lovable-uploads/1ff1e660-6c3d-45b3-8422-7e86ab956a67.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="inline-block mb-3 border border-amber-500/50 px-4 py-1 rounded-full animate-fade-in">
          <span className="text-amber-400 font-medium">NOVO EM SÃO JOSÉ DOS PINHAIS</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          RIGON <span className="text-amber-500">MOTOR</span> BAR
        </h1>
        <div className="h-1 w-40 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-slide-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
          O Ponto de Encontro dos Amantes de Moto, Bons Drinks e Boa Música!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
          <Button 
            asChild
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold" 
            size="lg"
          >
            <a href="#sobre">Conheça</a>
          </Button>
          
          <Button 
            asChild
            className="bg-transparent hover:bg-white/10 text-white border border-white" 
            size="lg"
            variant="outline"
          >
            <a href="#eventos">Próximos Eventos</a>
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#sobre" className="text-white flex flex-col items-center">
            <span className="text-sm mb-1 opacity-80">Rolar para baixo</span>
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
