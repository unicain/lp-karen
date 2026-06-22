import React from 'react';

export default function Services() {
  const pillars = [
    {
      num: "01",
      title: "Estratégia de Negócios",
      desc: "Diagnóstico de posicionamento, mapeamento de oportunidades e construção de planos de crescimento que integram marca, mercado e tecnologia em uma direção coerente."
    },
    {
      num: "02",
      title: "Agentes de IA para Negócios",
      desc: "Treinamento e implementação de Agentes de Inteligência Artificial customizados para comunicação estratégica, atendimento e eficiência operacional de empresas de qualquer porte."
    },
    {
      num: "03",
      title: "Presença Digital & Google Maps",
      desc: "Posicionamento estratégico de negócios no Google Maps e nas buscas por IA — a nova vitrine do consumidor moderno. Da otimização de perfil à estratégia de reputação local e global."
    },
    {
      num: "04",
      title: "Branding & Posicionamento",
      desc: "Construção e reposicionamento de marcas complexas e com profundidade estratégica: identidade, narrativa, canais e consistência de comunicação para que a marca ocupe o lugar que merece."
    },
    {
      num: "05",
      title: "Relações Institucionais",
      desc: "Articulação com stakeholders nacionais e internacionais, governos, organismos multilaterais e lideranças empresariais — com o protocolo e a sensibilidade de quem viveu esse universo."
    },
    {
      num: "06",
      title: "Marketing Internacional",
      desc: "Estratégias para mercados da América do Norte, Europa e América Latina — campanhas, influenciadores, parcerias com varejistas premium e expansão de marcas brasileiras ao exterior."
    }
  ];

  return (
    <section id="atuacao" className="bg-[#211f1c] text-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Pilares de Atuação</span>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white/90 font-light mb-20 leading-tight">
          O que Karen <br/>
          <span className="text-brand-gold italic">entrega.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="relative group p-6 border border-white/5 bg-[#252320] hover:bg-[#2a2723] transition-colors">
              <div className="absolute top-4 right-6 font-serif text-6xl text-white/5 select-none transition-colors group-hover:text-brand-gold/10">
                {pillar.num}
              </div>
              <h3 className="text-base text-white/90 font-medium mb-4 relative z-10">{pillar.title}</h3>
              <p className="text-white/50 font-light text-sm leading-relaxed relative z-10">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
