
import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowRight } from 'lucide-react';

const ImagesGallery: React.FC = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074&auto=format&fit=crop",
      title: "Nossas Bebidas",
      description: "Drinks exclusivos preparados com ingredientes selecionados"
    },
    {
      url: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?q=80&w=2070&auto=format&fit=crop",
      title: "Eventos Musicais",
      description: "Música ao vivo com os melhores artistas locais"
    },
    {
      url: "https://images.unsplash.com/photo-1606218174049-484e91b5dc4f?q=80&w=2071&auto=format&fit=crop",
      title: "Gastronomia Premium",
      description: "Pratos preparados com ingredientes de alta qualidade"
    },
    {
      url: "https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?q=80&w=2070&auto=format&fit=crop",
      title: "Encontro de Motociclistas",
      description: "O point preferido dos amantes de motos"
    },
    {
      url: "https://images.unsplash.com/photo-1613600088545-5fa13611bcee?q=80&w=2070&auto=format&fit=crop",
      title: "Momentos Especiais",
      description: "Crie memórias inesquecíveis com seus amigos"
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      title: "Ambiente Acolhedor",
      description: "Um espaço projetado para seu conforto"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative bg-gradient-to-b from-black/95 to-black py-24" id="galeria">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[800px] h-[800px] rounded-full bg-[#F45F0A]/10 blur-[150px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className="text-[#F45F0A] font-semibold mb-3 tracking-wider uppercase text-sm"
          >
            Veja um pouco do nosso ambiente
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Galeria de Imagens
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-[#F45F0A] to-transparent"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center text-gray-300 mt-6"
          >
            Confira momentos especiais e o clima único do Rigon Motor Bar. 
            Um ambiente descontraído e acolhedor para você curtir bons momentos.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-lg"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <AspectRatio ratio={16/9} className="bg-zinc-900">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                ></motion.div>
                <motion.img 
                  src={image.url} 
                  alt={image.title}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute bottom-0 left-0 p-5 z-20 w-full">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F45F0A] transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#F45F0A]/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contato"
            className="inline-flex items-center gap-2 text-[#F45F0A] font-medium hover:text-white transition-colors duration-300 text-lg"
          >
            Ver todas as fotos
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ImagesGallery;
