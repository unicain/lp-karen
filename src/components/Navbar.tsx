import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 text-white/80 py-6 px-6 md:px-12 flex justify-between items-center text-xs tracking-[0.15em] uppercase">
      <div className="font-serif tracking-widest text-white text-base">
        Karen Schneider
      </div>
      <div className="hidden md:flex gap-8">
        <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a>
        <a href="#atuacao" className="hover:text-brand-gold transition-colors">Atuação</a>
        <a href="#agentes-ia" className="hover:text-brand-gold transition-colors">Agentes IA</a>
        <a href="#maps" className="hover:text-brand-gold transition-colors">Maps & Presença</a>
        <a href="#trajetoria" className="hover:text-brand-gold transition-colors">Trajetória</a>
        <a href="#contato" className="hover:text-brand-gold transition-colors">Contato</a>
      </div>
    </nav>
  );
}
