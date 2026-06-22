import React from 'react';

export default function Experience() {
  const experiences = [
    {
      year: "2023–2027",
      role: "Embaixadora para a Alemanha",
      company: "IBREI – INSTITUTO BRASILEIRO DE RELAÇÕES EMPRESARIAIS INTERNACIONAIS",
      desc: "Representação institucional do Brasil junto à Alemanha. Organização do primeiro evento IBREI em Frankfurt com o Secretário de Estado de Hessen. Atuação nas celebrações do Bicentenário da Imigração Alemã no RS."
    },
    {
      year: "Abr–Nov\n2023",
      role: "Coordenadora Executiva & Relações Institucionais",
      company: "HORASIS GLOBAL SUMMIT – SÃO PAULO",
      desc: "Colaboração direta com Dr. Frank-Jürgen Richter (ex-diretor do Fórum Econômico Mundial) na organização do Summit com CEOs, diplomatas e líderes globais."
    },
    {
      year: "2022–2026",
      role: "Co-fundadora & Diretora de Comunicação Estratégica",
      company: "MULHERES & GOLFE – INSTITUTO CHAVES",
      desc: "Construiu o maior grupo de mulheres golfistas iniciantes do Brasil em 2 anos. O programa foi adotado como modelo de referência pela Confederação Brasileira de Golfe."
    },
    {
      year: "2019–2020",
      role: "Diretora de Marketing Internacional",
      company: "SURYA BRASIL (EUA, EUROPA, AMÉRICA DO SUL)",
      desc: "Estratégias de marketing para Whole Foods Market, Natural Grocers e Sprouts. Gestão de influenciadoras americanas e campanhas patrocinadas no varejo premium dos EUA."
    },
    {
      year: "2007–2010",
      role: "Consultora de Comunicação Estratégica",
      company: "BWIN ENTERTAINMENT AG – VIENA, ÁUSTRIA",
      desc: "Atuação em uma das maiores empresas de entretenimento online da Europa. Participação no processo de aquisição da PokerRoom e desenvolvimento de novos produtos."
    },
    {
      year: "2005–2006",
      role: "Supervisora – Reuniões e Conferências Internacionais",
      company: "ONU – AGÊNCIA INTERNACIONAL DE ENERGIA ATÔMICA (AIEA) – VIENA",
      desc: "Supervisão de conferências multilaterais, protocolos diplomáticos e gestão de documentação em um dos mais relevantes organismos internacionais do mundo."
    }
  ];

  return (
    <section id="trajetoria" className="bg-[#f0ece5] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/50">Trajetória</span>
          <div className="h-[1px] w-12 bg-brand-dark/20"></div>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark font-light mb-20 leading-tight">
          Uma carreira construída <br/>
          <span className="text-brand-gold italic">em movimento.</span>
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[120px_1fr] lg:grid-cols-[160px_1fr] gap-4 md:gap-12">
              <div className="text-brand-dark/40 font-mono text-xs whitespace-pre-line pt-1">
                {exp.year}
              </div>
              <div className="border-t border-brand-dark/10 pt-4 md:border-0 md:pt-0">
                <h3 className="text-brand-dark font-serif text-xl mb-1">{exp.role}</h3>
                <div className="text-[10px] text-brand-dark/50 tracking-wider uppercase mb-4">
                  {exp.company}
                </div>
                <p className="text-brand-dark/70 font-light text-sm leading-relaxed max-w-3xl">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
