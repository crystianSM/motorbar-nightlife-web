
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const InstagramFeed: React.FC = () => {
  // We'll show a few sample posts since we can't connect to Instagram API directly
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      likes: 45,
      caption: "Noite especial no Rigon Motor Bar! 🏍️ #RigonMotorBar #NightOut",
      comments: 7,
      timestamp: "2 dias atrás"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1470338950318-40320a722782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      likes: 62,
      caption: "Encontro de motociclistas hoje! Ambiente incrível. #Motos #MotorBar",
      comments: 12,
      timestamp: "3 dias atrás"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      likes: 38,
      caption: "Os melhores drinks da cidade estão aqui! 🍹 #Drinks #BarLife",
      comments: 5,
      timestamp: "5 dias atrás"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-16">
      {/* Header with gradient background */}
      <div className="flex flex-col items-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-amber-900/20 rounded-xl -z-10 blur-xl opacity-50"></div>
        <div className="bg-zinc-900/60 backdrop-blur-sm p-8 rounded-xl border border-zinc-800 w-full max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1 rounded-full">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Nosso Instagram</h2>
          </div>
          <p className="text-gray-300 text-center text-lg">
            Siga-nos <span className="font-bold text-amber-400">@rigonmotorbar</span> para ver mais momentos incríveis
          </p>
          <div className="flex justify-center mt-5">
            <div className="bg-gradient-to-r from-amber-500 to-pink-500 h-1 w-20 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Instagram posts with enhanced styling */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {instagramPosts.map((post) => (
          <TooltipProvider key={post.id}>
            <Card className="bg-zinc-900 border border-zinc-800/50 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-900/20">
              {/* Image Container with hover effect */}
              <div className="relative group">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={post.imageUrl} 
                    alt={`Instagram post ${post.id}`} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <div className="flex gap-6">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center text-white">
                          <Heart className="h-8 w-8 fill-white" />
                          <span className="text-sm">{post.likes}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{post.likes} curtidas</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center text-white">
                          <MessageCircle className="h-8 w-8" />
                          <span className="text-sm">{post.comments}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{post.comments} comentários</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                
                {/* Instagram overlay icon */}
                <div className="absolute top-3 right-3">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </div>
              
              {/* Post content with gradient background */}
              <CardContent className="pt-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-500 to-pink-600"></div>
                    <span className="text-sm font-medium text-white">rigonmotorbar</span>
                  </div>
                  <span className="text-xs text-gray-400">{post.timestamp}</span>
                </div>
                <p className="text-sm text-gray-300 line-clamp-2">{post.caption}</p>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center pt-0 pb-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-pink-500" />
                    <span className="text-xs text-gray-300">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-blue-500" />
                    <span className="text-xs text-gray-300">{post.comments}</span>
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Share2 className="h-4 w-4 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Compartilhar</p>
                  </TooltipContent>
                </Tooltip>
              </CardFooter>
            </Card>
          </TooltipProvider>
        ))}
      </div>
      
      {/* Instagram link button with enhanced styling */}
      <div className="flex justify-center mt-10">
        <a 
          href="https://www.instagram.com/rigonmotorbar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <Button variant="outline" className="gap-2 bg-gradient-to-r from-zinc-900 to-zinc-800 border-zinc-700 hover:border-amber-500 hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 px-6 py-6 text-base group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Instagram className="h-5 w-5 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
            <span>Ver mais no Instagram</span>
            <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
