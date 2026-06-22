import React from 'react';

export default function MapsSection() {
  const points = [
    {
      title: "Otimização de Perfil",
      desc: "Auditoria e reestruturação completa do perfil no Google Maps: categorias, fotos, horários, atributos e descrições que geram relevância real nas buscas locais e por IA."
    },
    {
      title: "Estratégia de Reputação",
      desc: "Gestão de avaliações, construção de autoridade local e posicionamento consistente que transforma a opinião do cliente em ativo estratégico para o negócio."
    },
    {
      title: "Visibilidade para IA",
      desc: "Com o crescimento das buscas por inteligência artificial, garantir que o negócio seja \"compreendido\" pelas IAs é tão importante quanto aparecer no Google — e Karen conecta essas duas frentes."
    },
    {
      title: "Integração de Marca",
      desc: "A presença digital não existe isolada: ela precisa dialogar com o branding, a comunicação e os objetivos estratégicos do negócio para gerar resultados sustentáveis."
    }
  ];

  return (
    <section id="maps" className="bg-brand-light py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/50">Google Maps & Presença Digital</span>
          <div className="h-[1px] w-12 bg-brand-dark/20"></div>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark font-light mb-8 leading-tight">
            Ser encontrado <br/>
            é a nova <span className="text-brand-gold italic">estratégia.</span>
          </h2>
          
          <div className="space-y-6 text-brand-dark/70 font-light text-sm md:text-base leading-relaxed">
            <p>
              O Google Maps deixou de ser apenas um guia de rotas. Hoje, é o
              primeiro ponto de contato entre o consumidor e o negócio — e as
              buscas por IA amplificaram ainda mais esse papel. Estar presente
              não basta: é preciso estar posicionado estrategicamente.
            </p>
            <p>
              Karen Schneider oferece uma metodologia completa para que
              pequenos e grandes negócios ocupem com autoridade esse novo
              espaço de visibilidade, em parceria com especialistas em
              comunicação digital.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <div key={idx} className="bg-white/50 border border-brand-dark/5 p-8 hover:bg-white transition-colors">
              <h3 className="text-brand-dark text-base font-serif mb-4">{point.title}</h3>
              <p className="text-brand-dark/60 font-light text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
