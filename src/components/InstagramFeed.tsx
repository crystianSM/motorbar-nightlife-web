
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, Heart, MessageCircle, BookmarkPlus, Share2 } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from 'framer-motion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const InstagramFeed: React.FC = () => {
  const { toast } = useToast();
  
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      likes: 45,
      caption: "Noite especial no Rigon Bar! ✨ #RigonBar #NightLife",
      comments: 7,
      timestamp: "2 dias atrás",
      location: "Quatro Barras, PR"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1470338950318-40320a722782?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      likes: 62,
      caption: "Momentos únicos e inesquecíveis. #NightOut #LifeStyle",
      comments: 12,
      timestamp: "3 dias atrás",
      location: "Rigon Motor Bar"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      likes: 38,
      caption: "Os melhores drinks da cidade! 🍸 #Drinks #NightLife",
      comments: 5,
      timestamp: "5 dias atrás",
      location: "Rigon Motor Bar"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      likes: 87,
      caption: "Encontro de motociclistas toda quinta-feira! 🏍️ #Motos #BikerNight",
      comments: 23,
      timestamp: "1 semana atrás",
      location: "Rigon Motor Bar"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const sharePost = (id: number) => {
    toast({
      title: "Link copiado!",
      description: "O link do post foi copiado para a área de transferência.",
      duration: 3000,
    });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="instagram">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#F45F0A]/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[700px] h-[700px] rounded-full bg-[#F45F0A]/5 blur-[150px] animate-pulse" style={{animationDelay: '1s'}}></div>
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
            Siga Nosso
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white text-center mb-8 tracking-tight"
          >
            Instagram
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#F45F0A] to-transparent mb-8"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl text-center text-lg"
          >
            Acompanhe nosso perfil <span className="font-bold text-[#F45F0A]">@rigonmotorbar</span> e fique por dentro de todas as novidades, eventos e momentos especiais.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {instagramPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Card className="group bg-gradient-to-br from-zinc-900/40 to-black/40 backdrop-blur-sm border border-zinc-800/30 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(244,95,10,0.15)]">
                <div className="p-3 flex items-center justify-between border-b border-zinc-800/30">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7 border border-[#F45F0A]/20">
                      <div className="bg-gradient-to-br from-[#F45F0A] to-[#d54d02] w-full h-full flex items-center justify-center text-white font-semibold">R</div>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">rigonmotorbar</p>
                      <p className="text-xs text-gray-400">{post.location}</p>
                    </div>
                  </div>
                  <Instagram className="h-4 w-4 text-[#F45F0A]" />
                </div>
                
                <div className="relative group">
                  <AspectRatio ratio={1/1}>
                    <img 
                      src={post.imageUrl} 
                      alt={`Instagram post ${post.id}`} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  </AspectRatio>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                    <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                  </div>
                </div>
                
                <div className="p-3">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-3">
                      <button className="group flex items-center gap-1.5 text-gray-400 hover:text-[#F45F0A] transition-colors">
                        <Heart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">{post.likes}</span>
                      </button>
                      <button className="group flex items-center gap-1.5 text-gray-400 hover:text-[#F45F0A] transition-colors">
                        <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">{post.comments}</span>
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => sharePost(post.id)} 
                        className="text-gray-400 hover:text-[#F45F0A] transition-colors"
                      >
                        <Share2 className="h-5 w-5 hover:scale-110 transition-transform" />
                      </button>
                      <button className="text-gray-400 hover:text-[#F45F0A] transition-colors">
                        <BookmarkPlus className="h-5 w-5 hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{post.timestamp}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <a 
                href="https://www.instagram.com/rigonmotorbar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#F45F0A] to-[#d54d02] rounded-xl opacity-20 blur transition-all duration-500 group-hover:opacity-30"></div>
                <Button 
                  variant="outline" 
                  className="relative bg-gradient-to-br from-zinc-900 to-black border-zinc-800/50 hover:border-[#F45F0A]/50 px-8 py-6 text-lg rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(244,95,10,0.2)] text-gray-300 hover:text-white"
                >
                  <Instagram className="h-6 w-6 mr-3 text-[#F45F0A] group-hover:scale-110 transition-transform duration-300" />
                  Seguir no Instagram
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-zinc-900 border border-zinc-800 text-white p-0">
              <div className="p-4 border-b border-zinc-800">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-10 w-10 border-2 border-[#F45F0A]/20">
                    <div className="bg-gradient-to-br from-[#F45F0A] to-[#d54d02] w-full h-full flex items-center justify-center text-white font-semibold">R</div>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Rigon Motor Bar</p>
                    <p className="text-xs text-gray-400">@rigonmotorbar</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">O point perfeito para os amantes de motos e boa gastronomia! 🏍️🍔🍻</p>
              </div>
              <div className="grid grid-cols-3 gap-0.5">
                {instagramPosts.slice(0, 3).map(post => (
                  <img 
                    key={`mini-${post.id}`} 
                    src={post.imageUrl} 
                    alt="Instagram thumbnail" 
                    className="aspect-square object-cover w-full"
                  />
                ))}
              </div>
              <div className="p-3 text-xs text-center text-gray-400">
                Siga-nos para mais conteúdo exclusivo
              </div>
            </HoverCardContent>
          </HoverCard>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
