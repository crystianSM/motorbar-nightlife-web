
import React from 'react';

type Event = {
  date: string;
  title: string;
  description: string;
};

const EventCard: React.FC<Event> = ({ date, title, description }) => (
  <div className="border border-zinc-800 p-6 hover:border-gold/50 transition-colors">
    <div className="text-gold mb-2 font-medium">{date}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <button className="uppercase text-gold hover:text-white transition-colors font-medium flex items-center">
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
    <section className="bg-black text-white section-padding" id="eventos">
      <div className="container mx-auto">
        <h2 className="section-title">
          Próximos Eventos
          <div className="golden-accent"></div>
        </h2>
        
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
          <a href="#" className="btn-primary">Ver todos os eventos</a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
