import React from 'react';

const CONTENT = {
  es: {
    text: "Somos el equipo híbrido que faltaba:",
    highlight: "Arquitectos Técnicos de Salesforce + Estrategas de Negocio",
    subtext: ". Entendemos el código, pero hablamos en ROI."
  },
  en: {
    text: "We are the missing hybrid team:",
    highlight: "Salesforce Technical Architects + Business Strategists",
    subtext: ". We understand the code, but we speak in ROI."
  },
  fr: {
    text: "Nous sommes l'équipe hybride qui manquait :",
    highlight: "Architectes Techniques Salesforce + Stratèges d'Affaires",
    subtext: ". Nous comprenons le code, mais nous parlons ROI."
  }
};

interface CrmAuthorityProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function CrmAuthority({ lang = 'es' }: CrmAuthorityProps) {
  const t = CONTENT[lang];
  
  return (
    <section className="py-16 px-6 border-b border-white/5 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-300 leading-relaxed">
          "{t.text} <span className="text-white font-normal">{t.highlight}</span>{t.subtext}"
        </blockquote>
      </div>
    </section>
  );
}