
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const highlights = [
    "Ambiente sofisticado com decoração única",
    "Gastronomia premium e drinks exclusivos",
    "Bar completo com carta de vinhos selecionados",
    "Programação musical diversificada e eventos especiais",
    "Espaço amplo com área VIP e lounge"
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section className="relative bg-gradient-to-b from-black via-black to-black/95 text-white py-24 md:py-32 overflow-hidden" id="sobre">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#F45F0A]/10 blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-[700px] h-[700px] rounded-full bg-[#F45F0A]/5 blur-[150px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#F45F0A] font-semibold mb-3 tracking-wider uppercase text-sm"
          >
            Bem-vindo ao
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 text-center tracking-tight"
          >
            Seu Novo Destino
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#F45F0A] to-transparent"
          ></motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            className="space-y-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3 
              className="text-2xl md:text-4xl font-bold leading-tight"
              variants={staggerItem}
            >
              Um espaço único onde cada noite é uma
              <span className="text-[#F45F0A] relative inline-block ml-3">
                nova experiência
                <span className="absolute inset-0 bg-[#F45F0A]/20 blur-sm -z-10"></span>
              </span>
            </motion.h3>
            
            <div className="space-y-6">
              <motion.p 
                className="text-gray-300 leading-relaxed text-lg"
                variants={staggerItem}
              >
                O Rigon Motor Bar é mais que um estabelecimento, é um ponto de encontro 
                onde momentos extraordinários acontecem. Um lugar onde a música, a gastronomia 
                e o entretenimento se encontram para criar experiências inesquecíveis.
              </motion.p>
              <motion.p 
                className="text-gray-300 leading-relaxed text-lg"
                variants={staggerItem}
              >
                Com uma programação diversificada, cardápio sofisticado e ambiente acolhedor, 
                oferecemos o cenário perfeito para suas noites especiais, encontros com amigos 
                ou comemorações memoráveis.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 gap-2"
              variants={staggerItem}
            >
              {highlights.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-[#F45F0A]/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-[#F45F0A] flex-shrink-0" />
                  <span className="text-base font-light">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 pt-6"
              variants={staggerItem}
            >
              <Button 
                asChild 
                className="bg-[#F45F0A] hover:bg-[#d54d02] text-white font-medium px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(244,95,10,0.2)]"
              >
                <a href="#cardapio">Explorar Cardápio</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-2 border-[#F45F0A]/30 text-[#F45F0A] hover:bg-[#F45F0A]/10 hover:border-[#F45F0A] px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                <a href="#contato">Fazer Reserva</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F45F0A] to-[#d54d02] rounded-xl opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-30"></div>
              <motion.img 
                src="/assets/imagens/car2.jpeg"
                alt="Rigon Bar ambiente" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute bottom-8 left-8 z-20">
                <motion.div 
                  className="bg-[#F45F0A] py-3 px-8 rounded-lg shadow-xl"
                  animate={{ rotate: [-2, 1, -2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="font-bold text-black text-xl">Desde 2010</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
