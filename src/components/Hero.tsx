import React from 'react';
import Navbar from './Navbar';

export default function Hero() {
  const tags = [
    "Comunicação Estratégica", "Agentes de IA para Negócios",
    "Google Maps & Presença Digital", "Branding Internacional",
    "Relações Institucionais", "4 Idiomas"
  ];

  return (
    <section className="relative bg-brand-darker text-white min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20">
      <Navbar />
      
      <div className="max-w-5xl">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-light text-white/90">
          Estratégia que <br />
          <span className="text-brand-gold italic">conecta</span> <br />
          <span className="text-brand-gold italic">mercados,</span> <br />
          tecnologia e <br />
          <span className="text-brand-gold italic">marcas.</span>
        </h1>
        
        <p className="text-white/60 font-light max-w-md text-sm md:text-base leading-relaxed mb-16">
          Mais de 20 anos construindo pontes entre negócios, 
          culturas e resultados — da ONU em Viena ao golfe 
          feminino no Brasil, da inteligência artificial ao 
          posicionamento de marcas no Google Maps.
        </p>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-4 py-1.5 border border-white/20 rounded-sm text-[10px] uppercase tracking-wider text-white/70 hover:border-brand-gold hover:text-brand-gold transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
