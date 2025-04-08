
import React from 'react';

type Event = {
  date: string;
  title: string;
  description: string;
};

const EventCard: React.FC<Event> = ({ date, title, description }) => (
  <div className="border border-zinc-800 p-6 hover:border-[#F45F0A]/50 transition-colors">
    <div className="text-[#F45F0A] mb-2 font-medium">{date}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <button className="uppercase text-[#F45F0A] hover:text-white transition-colors font-medium flex items-center">
      Saiba mais 
      <span className="ml-2">→</span>
    </button>
  </div>
);

const EventsSection: React.FC = () => {
  const events: Event[] = [
    {
      date: "Toda Terça",
      title: "Noite do Rock",
      description: "Bandas de rock ao vivo e promoções especiais em drinks para os amantes do bom e velho rock n' roll."
    },
    {
      date: "Quintas e Sextas",
      title: "Encontros de Motociclistas",
      description: "O point dos motociclistas da região com descontos especiais e ambiente perfeito para trocar ideias."
    },
    {
      date: "Sábados",
      title: "DJ Night & Drinks Especiais",
      description: "Os melhores DJs da cidade comandando as pickups com drinks promocionais até meia-noite."
    },
    {
      date: "Domingos",
      title: "Sertanejo ao vivo",
      description: "Tarde e noite com o melhor do sertanejo universitário e tradicional para fechar o fim de semana."
    }
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24" id="eventos">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <span className="text-[#F45F0A] font-semibold mb-2">AGENDA</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Próximos Eventos
          </h2>
          <div className="h-1 w-40 bg-[#F45F0A] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <EventCard 
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-block px-8 py-3 bg-[#F45F0A] hover:bg-[#d54d02] text-white font-bold rounded-md transition-all duration-300 hover:scale-105">
            Ver todos os eventos
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
