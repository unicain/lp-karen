import React from 'react';

export default function Profile() {
  return (
    <section id="sobre" className="bg-brand-light py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/50">Perfil Profissional</span>
          <div className="h-[1px] w-12 bg-brand-dark/20"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark font-light mb-8 leading-tight">
              Uma estrategista formada <br/>
              em <span className="text-brand-gold italic">múltiplos mundos.</span>
            </h2>
            
            <div className="space-y-6 text-brand-dark/70 font-light text-sm md:text-base leading-relaxed">
              <p>
                Jornalista de formação, diplomata por vocação, estrategista por 
                experiência. Karen Schneider construiu uma trajetória singular: das 
                rádios Gaúcha e CBN às conferências da ONU em Viena; das ruas de 
                Madri às arenas de inovação global do Horasis em São Paulo.
              </p>
              <p>
                Hoje, atua na interseção entre comunicação de alto nível, tecnologia 
                de inteligência artificial e as novas fronteiras de visibilidade digital — 
                ajudando empresas, marcas e líderes a ocuparem espaços 
                estratégicos no mercado com autoridade e consistência.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="font-serif text-6xl text-brand-dark font-light">20+</div>
                <div className="text-[10px] uppercase tracking-[0.1em] text-brand-dark/50 leading-relaxed">
                  anos de atuação<br/>em comunicação estratégica
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-serif text-6xl text-brand-dark font-light">10</div>
                <div className="text-[10px] uppercase tracking-[0.1em] text-brand-dark/50 leading-relaxed">
                  anos na europa<br/>espanha & áustria
                </div>
              </div>
              <div className="space-y-2 col-span-2 lg:col-span-1">
                <div className="font-serif text-6xl text-brand-dark font-light">4</div>
                <div className="text-[10px] uppercase tracking-[0.1em] text-brand-dark/50 leading-relaxed">
                  idiomas fluentes<br/>pt · es · en · de
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
