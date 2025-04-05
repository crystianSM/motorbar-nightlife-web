
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type MenuCategory = {
  title: string;
  items: {
    name: string;
    description: string;
    price: string;
  }[];
};

const MenuPage: React.FC = () => {
  const menuCategories: MenuCategory[] = [
    {
      title: "Hambúrgueres",
      items: [
        {
          name: "Road Burger",
          description: "Hambúrguer artesanal, queijo cheddar, bacon crocante, cebola caramelizada e molho especial da casa",
          price: "R$ 39,90"
        },
        {
          name: "Highway Cheese",
          description: "Hambúrguer artesanal duplo, queijo duplo, picles, alface, tomate e molho da casa",
          price: "R$ 42,90"
        },
        {
          name: "Moto Burger",
          description: "Hambúrguer artesanal, queijo provolone, rúcula, tomate seco e maionese de alho",
          price: "R$ 44,90"
        }
      ]
    },
    {
      title: "Porções",
      items: [
        {
          name: "Porção Asfalto Quente",
          description: "Mix de carnes com linguiça defumada, tulipa de frango e costela suína com molhos especiais",
          price: "R$ 65,90"
        },
        {
          name: "Batata Frita Rigon",
          description: "Batata frita crocante com cheddar cremoso, bacon e cebolinha",
          price: "R$ 39,90"
        },
        {
          name: "Anéis de Cebola",
          description: "Anéis de cebola empanados e fritos, acompanha molho especial",
          price: "R$ 32,90"
        }
      ]
    },
    {
      title: "Drinks",
      items: [
        {
          name: "Vintage Bourbon",
          description: "Drink especial com bourbon envelhecido, xarope de maple, bitter artesanal e defumação na hora",
          price: "R$ 38,00"
        },
        {
          name: "Motor Oil",
          description: "Whisky, licor de café, xarope de baunilha e expresso",
          price: "R$ 35,00"
        },
        {
          name: "Road King",
          description: "Gin, tônica, limão siciliano, alecrim e pimenta rosa",
          price: "R$ 32,00"
        }
      ]
    },
    {
      title: "Cervejas",
      items: [
        {
          name: "Chopp Motora",
          description: "Chopp exclusivo do Rigon Motor Bar, produzido artesanalmente com sabor marcante",
          price: "R$ 15,90"
        },
        {
          name: "IPA Estradeira",
          description: "Cerveja artesanal IPA com notas cítricas e amargor equilibrado",
          price: "R$ 25,90"
        },
        {
          name: "Stout Aventura",
          description: "Cerveja escura com notas de café e chocolate",
          price: "R$ 27,90"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4">Cardápio</h1>
          <div className="golden-accent"></div>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-16">
            Conheça nossos pratos e bebidas especialmente selecionados para os amantes de motos, boa gastronomia e momentos únicos.
          </p>
          
          <div className="space-y-16">
            {menuCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="bg-gold h-8 w-1 mr-4"></span>
                  {category.title}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-zinc-800 pb-6">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <span className="text-gold font-medium">{item.price}</span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MenuPage;
