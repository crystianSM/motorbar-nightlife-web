
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24" id="sobre">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Uma Experiência Única
          <div className="h-1 w-40 bg-amber-500 mx-auto mt-3"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold">
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
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-bold mt-6">
              <a href="#cardapio">Ver Cardápio</a>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl h-80 md:h-96">
            <img 
              src="/lovable-uploads/1ff1e660-6c3d-45b3-8422-7e86ab956a67.png" 
              alt="Rigon Motor Bar ambiente" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
