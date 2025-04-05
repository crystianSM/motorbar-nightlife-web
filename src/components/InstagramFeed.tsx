
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const InstagramFeed: React.FC = () => {
  // We'll show a few sample posts since we can't connect to Instagram API directly
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      likes: 45,
      caption: "Noite especial no Rigon Motor Bar! 🏍️ #RigonMotorBar #NightOut"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1470338950318-40320a722782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      likes: 62,
      caption: "Encontro de motociclistas hoje! Ambiente incrível. #Motos #MotorBar"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      likes: 38,
      caption: "Os melhores drinks da cidade estão aqui! 🍹 #Drinks #BarLife"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Instagram className="h-6 w-6" />
          <h2 className="text-2xl font-bold text-white">Nosso Instagram</h2>
        </div>
        <p className="text-gray-400 text-center">Siga-nos em @rigonmotorbar para ver mais momentos incríveis</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {instagramPosts.map((post) => (
          <Card key={post.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
            <AspectRatio ratio={1/1}>
              <img 
                src={post.imageUrl} 
                alt={`Instagram post ${post.id}`} 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-300 line-clamp-2">{post.caption}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-xs text-gray-400">{post.likes} curtidas</span>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <a 
          href="https://www.instagram.com/rigonmotorbar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <Button variant="outline" className="gap-2">
            Ver mais no Instagram
            <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
