
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

type Event = {
  date: string;
  title: string;
  description: string;
  image?: string;
  time?: string;
};

const EventCard: React.FC<Event> = ({ date, title, description, image, time }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <motion.div 
      variants={cardVariants}
      className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/30 overflow-hidden hover:border-[#F45F0A]/30 transition-all duration-500 hover:shadow-[0_10px_30px_-15px_rgba(244,95,10,0.15)] rounded-lg"
    >
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-3 left-3 bg-[#F45F0A] text-white text-xs font-medium px-2 py-1 rounded">
            {time}
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="text-[#F45F0A] mb-2 font-medium flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {date}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#F45F0A] transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <button className="group/btn flex items-center gap-1.5 text-[#F45F0A] hover:text-white transition-colors font-medium">
          <span>Saiba mais</span>
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const EventsSection: React.FC = () => {
  const events: Event[] = [
    {
      date: "Toda Terça",
      title: "Noite do Rock",
      description: "Bandas de rock ao vivo e promoções especiais em drinks para os amantes do bom e velho rock n' roll.",
      image: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=2942&auto=format&fit=crop",
      time: "19:00 - 00:00"
    },
    {
      date: "Quintas e Sextas",
      title: "Encontros de Motociclistas",
      description: "O point dos motociclistas da região com descontos especiais e ambiente perfeito para trocar ideias.",
      image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2940&auto=format&fit=crop",
      time: "20:00 - 01:00"
    },
    {
      date: "Sábados",
      title: "DJ Night & Drinks Especiais",
      description: "Os melhores DJs da cidade comandando as pickups com drinks promocionais até meia-noite.",
      image: "https://images.unsplash.com/photo-1545128485-c400ce7b23d2?q=80&w=2940&auto=format&fit=crop",
      time: "21:00 - 03:00"
    },
    {
      date: "Domingos",
      title: "Sertanejo ao vivo",
      description: "Tarde e noite com o melhor do sertanejo universitário e tradicional para fechar o fim de semana.",
      image: "https://images.unsplash.com/photo-1551696785-927d4ac2d35b?q=80&w=2940&auto=format&fit=crop",
      time: "16:00 - 23:00"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden" id="eventos">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F45F0A]/5 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] rounded-full bg-[#F45F0A]/3 blur-[170px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#F45F0A] font-semibold mb-3 tracking-wider uppercase text-sm flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            AGENDA
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            Próximos Eventos
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 w-40 bg-gradient-to-r from-transparent via-[#F45F0A] to-transparent mb-8"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl text-center text-lg mb-8"
          >
            Confira nossa programação semanal e não perca nenhum evento especial. Música ao vivo, promoções e muito mais!
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {events.map((event, index) => (
            <EventCard 
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              image={event.image}
              time={event.time}
            />
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-[#F45F0A] hover:bg-[#d54d02] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,95,10,0.3)]"
          >
            Ver todos os eventos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
