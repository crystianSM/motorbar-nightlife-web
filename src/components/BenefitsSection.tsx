
import React from 'react';
import { Music, Coffee, Beer, Calendar, Users, Utensils } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
      <div className="h-12 w-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 text-amber-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Gastronomia Premium",
      description: "Hambúrgueres artesanais, petiscos especiais e opções para todos os gostos preparados com ingredientes selecionados."
    },
    {
      icon: <Beer className="h-6 w-6" />,
      title: "Drinks Exclusivos",
      description: "Carta de drinks assinados, cervejas artesanais geladas e uma seleção especial de destilados premium."
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Música ao Vivo",
      description: "Bandas, DJs e artistas locais garantem a melhor trilha sonora para suas noites no melhor ambiente."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Eventos Temáticos",
      description: "Encontros de motociclistas, noites temáticas e eventos especiais que acontecem regularmente."
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Ambiente Único",
      description: "Decoração temática de motorbar em uma carreta transformada, criando uma experiência incomparável."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Comunidade",
      description: "Lugar perfeito para conhecer pessoas, trocar histórias e fazer parte de uma comunidade apaixonada."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black" id="diferenciais">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <span className="text-amber-500 font-semibold mb-2">POR QUE NOS ESCOLHER</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Uma Experiência Incomparável
          </h2>
          <div className="h-1 w-40 bg-amber-500 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl text-center mt-6">
            No Rigon Motor Bar, cada detalhe foi pensado para oferecer a melhor experiência aos nossos clientes, combinando boa gastronomia, bebidas de qualidade e um ambiente único.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
