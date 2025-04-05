
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
  rating: number;
  imgSrc?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, name, role, rating, imgSrc }) => {
  return (
    <Card className="bg-zinc-900 border-zinc-800 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-700'}`} 
            />
          ))}
        </div>
        <p className="text-gray-300 mb-6 flex-grow">{text}</p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={imgSrc} alt={name} />
            <AvatarFallback className="bg-amber-600 text-black font-medium">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-white">{name}</div>
            <div className="text-sm text-zinc-400">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "Melhor lugar para quem ama motos! Os hambúrgueres são incríveis e o ambiente é perfeito para encontrar a galera. Recomendo demais!",
      name: "Ricardo Silva",
      role: "Cliente Frequente",
      rating: 5
    },
    {
      text: "Os drinks são excepcionais e o atendimento é de primeira. Venho todo fim de semana com meus amigos para os eventos ao vivo.",
      name: "Camila Pereira",
      role: "Motociclista",
      rating: 5
    },
    {
      text: "Um ambiente único em São José dos Pinhais. A decoração temática e a energia do lugar são incríveis. Vale muito a visita!",
      name: "Marcelo Costa",
      role: "Visitante",
      rating: 4
    }
  ];

  return (
    <section className="bg-zinc-950 py-16 md:py-24" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <span className="text-amber-500 font-semibold mb-2">O QUE DIZEM SOBRE NÓS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Experiências dos Nossos Clientes
          </h2>
          <div className="h-1 w-40 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
