
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-black text-white section-padding" id="contato">
      <div className="container mx-auto">
        <h2 className="section-title">
          Contato
          <div className="golden-accent"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Horário de Funcionamento</h3>
            <div className="space-y-3 mb-8">
              <p className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="font-medium">Terça a Sábado:</span>
                <span className="text-gray-400">9h00 – 22h00</span>
              </p>
              <p className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="font-medium">Domingo:</span>
                <span className="text-gray-400">9h00 – 22h00</span>
              </p>
              <p className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="font-medium">Segunda:</span>
                <span className="text-gray-400">Fechado</span>
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3" />
                <span>(41) 3157-0187</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3" />
                <span>(41) 9678-1439 (WhatsApp)</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3" />
                <span>contato@rigonmotorbar.com.br</span>
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 text-gold mr-3" />
                <span>São José dos Pinhais - PR</span>
              </p>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="https://instagram.com/rigonmotorbar" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a href="https://facebook.com/RigonMotorBar" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Envie uma mensagem</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-zinc-800 border-zinc-700 rounded-none p-3 focus:outline-none focus:ring-1 focus:ring-gold" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-zinc-800 border-zinc-700 rounded-none p-3 focus:outline-none focus:ring-1 focus:ring-gold" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-zinc-800 border-zinc-700 rounded-none p-3 focus:outline-none focus:ring-1 focus:ring-gold" 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
