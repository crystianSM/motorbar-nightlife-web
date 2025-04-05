
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    "Ambiente temático de motor bar",
    "Cardápio exclusivo de hambúrgueres",
    "Drinks especiais e cervejas artesanais",
    "Música ao vivo e eventos semanais",
    "Espaço amplo e confortável"
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24" id="sobre">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <span className="text-amber-500 font-semibold mb-2">SOBRE NÓS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Uma Experiência Única
          </h2>
          <div className="h-1 w-40 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-amber-400">
              Uma mega carreta transformada em um motorbar temático espetacular!
            </h3>
            <p className="text-gray-300 leading-relaxed">
              No Rigon Motor Bar, a estrada é só o começo da aventura! Aqui, motociclistas, 
              amigos e amantes da vida noturna se encontram para celebrar a liberdade, 
              compartilhar histórias e curtir momentos inesquecíveis.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Com um cardápio recheado de sabores marcantes, drinks exclusivos e um ambiente 
              descontraído, somos o lugar perfeito para recarregar as energias depois da estrada 
              ou começar a noite com tudo.
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
                <a href="#cardapio">Ver Cardápio</a>
              </Button>
              <Button asChild variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
                <a href="#contato">Reservar Mesa</a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl h-80 md:h-96 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
            <img 
              src="/lovable-uploads/1ff1e660-6c3d-45b3-8422-7e86ab956a67.png" 
              alt="Rigon Motor Bar ambiente" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 z-20 bg-amber-500/90 py-2 px-4 rounded-md">
              <span className="font-bold text-black">Desde 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
