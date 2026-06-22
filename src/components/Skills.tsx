import React from 'react';

export default function Skills() {
  const languages = [
    { name: "Português", level: "NATIVO" },
    { name: "Español", level: "FLUENTE" },
    { name: "English", level: "FLUENTE" },
    { name: "Deutsch", level: "FLUENTE – FALA E ESCRITA" }
  ];

  const tags = [
    "RELAÇÕES INSTITUCIONAIS", "DIPLOMACIA DE NEGÓCIOS", "COMUNICAÇÃO ESTRATÉGICA", 
    "GESTÃO DE EVENTOS INTERNACIONAIS", "BRANDING & POSICIONAMENTO", 
    "MARKETING INTERNACIONAL", "AGENTES DE IA", "GOOGLE MAPS STRATEGY", 
    "CAPTAÇÃO DE PATROCÍNIOS", "LIDERANÇA MULTICULTURAL", "CURADORIA INSTITUCIONAL", 
    "STAKEHOLDER MANAGEMENT"
  ];

  return (
    <section className="bg-brand-darker text-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Idiomas & Competências</span>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white/90 font-light mb-20 leading-tight">
          Fluente em <br/>
          <span className="text-brand-gold italic">quatro línguas.</span> <br/>
          Estratégica em todas.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {languages.map((lang, idx) => (
            <div key={idx} className="border-t border-white/10 pt-6">
              <h3 className="font-serif text-xl text-white/90 mb-2">{lang.name}</h3>
              <div className="text-[10px] text-white/40 tracking-widest uppercase">
                {lang.level}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-4 py-2 border border-white/10 rounded-sm text-[9px] md:text-[10px] uppercase tracking-wider text-white/50 hover:border-brand-gold hover:text-brand-gold transition-colors cursor-default bg-[#211f1c]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
