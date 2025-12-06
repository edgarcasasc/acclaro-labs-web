import React from 'react';

const CONTENT = {
  es: {
    quote_start: '"Desarrolladores Full-Stack y Expertos en UX trabajando juntos. Construimos',
    highlight: "Aplicaciones Web Progresivas (PWA)",
    quote_end: "que se sienten como apps nativas, pero viven en la web.\""
  },
  en: {
    quote_start: '"Full-Stack Developers and UX Experts working together. We build',
    highlight: "Progressive Web Apps (PWA)",
    quote_end: "that feel like native apps, but live on the web.\""
  },
  fr: {
    quote_start: '"Développeurs Full-Stack et Experts UX travaillant ensemble. Nous construisons des',
    highlight: "Progressive Web Apps (PWA)",
    quote_end: "qui ressemblent à des apps natives, mais vivent sur le web.\""
  }
};

interface WebDevAuthorityProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function WebDevAuthority({ lang = 'es' }: WebDevAuthorityProps) {
  const t = CONTENT[lang];
  return (
    <section className="py-16 px-6 bg-azul-zafiro/10 border-y border-azul-zafiro/20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl font-serif text-white">
          {t.quote_start} <span className="text-oro-antiguo font-bold">{t.highlight}</span> {t.quote_end}
        </p>
      </div>
    </section>
  );
}