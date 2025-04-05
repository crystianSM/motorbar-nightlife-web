
import React from 'react';

type MenuItemProps = {
  name: string;
  description: string;
  price: string;
  category: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, category }) => (
  <div className="border-b border-zinc-800 py-4 last:border-b-0">
    <div className="flex justify-between items-baseline">
      <h4 className="text-lg font-semibold">{name}</h4>
      <span className="text-gold font-medium">{price}</span>
    </div>
    <p className="text-gray-400 text-sm mt-1">{description}</p>
  </div>
);

const MenuHighlights: React.FC = () => {
  const menuItems = [
    {
      name: "Road Burger",
      description: "Hambúrguer artesanal, queijo cheddar, bacon crocante, cebola caramelizada e molho especial da casa",
      price: "R$ 39,90",
      category: "Hambúrgueres"
    },
    {
      name: "Porção Asfalto Quente",
      description: "Mix de carnes com linguiça defumada, tulipa de frango e costela suína com molhos especiais",
      price: "R$ 65,90",
      category: "Porções"
    },
    {
      name: "Vintage Bourbon",
      description: "Drink especial com bourbon envelhecido, xarope de maple, bitter artesanal e defumação na hora",
      price: "R$ 38,00",
      category: "Drinks"
    },
    {
      name: "Chopp Motora",
      description: "Chopp exclusivo do Rigon Motor Bar, produzido artesanalmente com sabor marcante",
      price: "R$ 15,90",
      category: "Bebidas"
    }
  ];

  return (
    <section className="bg-zinc-900 section-padding" id="cardapio">
      <div className="container mx-auto">
        <h2 className="section-title text-white">
          Destaques do Cardápio
          <div className="golden-accent"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="h-full rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm p-8">
              {menuItems.slice(0, 2).map((item, index) => (
                <MenuItem
                  key={index}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="h-full rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm p-8">
              {menuItems.slice(2, 4).map((item, index) => (
                <MenuItem
                  key={index}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="/cardapio" className="btn-primary">Ver cardápio completo</a>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
