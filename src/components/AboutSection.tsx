
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-white section-padding" id="sobre">
      <div className="container mx-auto">
        <h2 className="section-title">
          Uma Experiência Única
          <div className="golden-accent"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            <a href="#cardapio" className="btn-primary mt-4">Ver Cardápio</a>
          </div>
          <div className="h-80 md:h-96 bg-[url('/lovable-uploads/1ff1e660-6c3d-45b3-8422-7e86ab956a67.png')] bg-cover bg-center rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
