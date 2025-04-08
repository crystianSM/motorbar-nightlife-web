
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold tracking-tighter">
              RIGON <span className="text-[#F45F0A] relative inline-block">
                MOTOR
                <span className="absolute inset-0 bg-[#F45F0A]/20 blur-sm -z-10"></span>
              </span> BAR
            </h3>
            <p className="text-gray-400 mt-2">Uma experiência única sobre rodas!</p>
          </div>
          
          <div className="flex space-x-8">
            {['Home', 'Sobre', 'Cardápio', 'Eventos', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#F45F0A] transition-colors relative group"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#F45F0A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="h-px bg-zinc-800 my-8"></div>
        
        <div className="text-center text-gray-500 text-sm">
          &copy; {currentYear} Rigon Motor Bar. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
