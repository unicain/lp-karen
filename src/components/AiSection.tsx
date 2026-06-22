import React from 'react';

export default function AiSection() {
  const points = [
    "Diagnóstico da comunicação atual do negócio",
    "Definição de personalidade e tom do Agente",
    "Treinamento com base em objetivos estratégicos",
    "Integração com canais de atendimento e vendas",
    "Monitoramento e refinamento contínuo",
    "Capacitação da equipe interna para gestão do Agente"
  ];

  return (
    <section id="agentes-ia" className="bg-[#f0ece5] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/50">Inteligência Artificial</span>
          <div className="h-[1px] w-12 bg-brand-dark/20"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark font-light mb-8 leading-tight">
              Negócios que falam <br/>
              a língua da <span className="text-brand-gold italic">IA.</span>
            </h2>
            
            <div className="space-y-6 text-brand-dark/70 font-light text-sm md:text-base leading-relaxed">
              <p>
                A inteligência artificial não é mais uma tendência — é infraestrutura. 
                Karen Schneider atua no treinamento de Agentes de IA customizados 
                para que empresas se comuniquem com mais eficiência, 
                consistência e escala.
              </p>
              <p>
                Cada agente é treinado com a identidade, o tom e os objetivos 
                estratégicos do negócio, transformando a comunicação em um ativo 
                operacional real.
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t border-brand-dark/10">
            {points.map((point, idx) => (
              <div key={idx} className="py-5 border-b border-brand-dark/10 flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/80 flex-shrink-0"></div>
                <span className="text-brand-dark/80 text-sm font-light">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
