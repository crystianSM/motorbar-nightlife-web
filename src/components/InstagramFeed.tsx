
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const InstagramFeed: React.FC = () => {
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      likes: 45,
      caption: "Noite especial no Rigon Bar! ✨ #RigonBar #NightLife",
      comments: 7,
      timestamp: "2 dias atrás"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1470338950318-40320a722782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      likes: 62,
      caption: "Momentos únicos e inesquecíveis. #NightOut #LifeStyle",
      comments: 12,
      timestamp: "3 dias atrás"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      likes: 38,
      caption: "Os melhores drinks da cidade! 🍸 #Drinks #NightLife",
      comments: 5,
      timestamp: "5 dias atrás"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="instagram">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#F45F0A]/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[700px] h-[700px] rounded-full bg-[#F45F0A]/5 blur-[150px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="text-[#F45F0A] font-semibold mb-3 tracking-wider uppercase text-sm">Siga Nosso</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 tracking-tight">
            Instagram
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#F45F0A] to-transparent mb-8"></div>
          <p className="text-gray-300 max-w-2xl text-center text-lg">
            Acompanhe nosso perfil <span className="font-bold text-[#F45F0A]">@rigonbar</span> e fique por dentro de todas as novidades, eventos e momentos especiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
          {instagramPosts.map((post) => (
            <TooltipProvider key={post.id}>
              <Card className="group bg-gradient-to-br from-zinc-900/40 to-black/40 backdrop-blur-sm border border-zinc-800/30 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(244,95,10,0.1)]">
                <div className="relative">
                  <AspectRatio ratio={1/1}>
                    <img 
                      src={post.imageUrl} 
                      alt={`Instagram post ${post.id}`} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 flex gap-4">
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Heart className="h-4 w-4 text-[#F45F0A]" />
                      <span className="text-xs text-white">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <MessageCircle className="h-4 w-4 text-[#F45F0A]" />
                      <span className="text-xs text-white">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </TooltipProvider>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a 
            href="https://www.instagram.com/rigonbar/" 
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
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
