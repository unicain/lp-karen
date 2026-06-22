import React from 'react';

export default function Footer() {
  return (
    <footer id="contato" className="flex flex-col">
      <div className="bg-[#bda06f] text-[#2c261e] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Vamos conversar sobre
          </h2>
          
          <div className="text-right flex flex-col items-start md:items-end space-y-2">
            <a href="tel:+5511993225108" className="text-sm md:text-base hover:opacity-70 transition-opacity">
              (11) 99322-5108
            </a>
            <a href="mailto:karenpadma@hotmail.com" className="text-sm md:text-base hover:opacity-70 transition-opacity">
              karenpadma@hotmail.com
            </a>
            <a href="#" className="text-sm md:text-base hover:opacity-70 transition-opacity">
              LinkedIn
            </a>
            <span className="text-[10px] uppercase tracking-widest opacity-60 pt-4">
              SÃO PAULO — SP
            </span>
          </div>
        </div>
      </div>
      
      <div className="bg-[#151413] text-white/40 py-6 px-6 md:px-12 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© 2026 Karen Schneider · Business Strategist</div>
        <div className="flex gap-4">
          <span>IA · BRANDING</span>
          <span>GOOGLE MAPS</span>
          <span>RELAÇÕES INTERNACIONAIS</span>
        </div>
      </div>
    </footer>
  );
}
