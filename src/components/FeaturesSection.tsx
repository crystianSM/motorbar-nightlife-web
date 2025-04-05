
import React from 'react';
import { Music, Beer, Utensils, User, Calendar } from 'lucide-react';

type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <div className="feature-card">
    <div className="flex justify-center mb-4">
      <div className="bg-gold/20 p-3 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
    <p className="text-gray-400 text-center">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Beer className="w-6 h-6 text-gold" />,
      title: "Drinks Exclusivos",
      description: "Seleção única de drinks temáticos e cervejas artesanais para todos os gostos."
    },
    {
      icon: <Utensils className="w-6 h-6 text-gold" />,
      title: "Gastronomia Marcante",
      description: "Hambúrgueres artesanais e porções saborosas preparados com ingredientes selecionados."
    },
    {
      icon: <Music className="w-6 h-6 text-gold" />,
      title: "Música ao Vivo",
      description: "Bandas e DJs garantem uma trilha sonora envolvente para sua noite."
    },
    {
      icon: <User className="w-6 h-6 text-gold" />,
      title: "Para Motociclistas",
      description: "Ambiente temático que celebra a cultura das motos e a liberdade da estrada."
    },
    {
      icon: <Calendar className="w-6 h-6 text-gold" />,
      title: "Eventos Especiais",
      description: "Encontros de motos, carros, noites temáticas e muito mais durante todo o ano."
    },
  ];

  return (
    <section className="bg-zinc-900 section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-white">
          Por que nos escolher
          <div className="golden-accent"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
