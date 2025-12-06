'use client';
import React from 'react';
import Link from 'next/link';

const CONTENT = {
  es: {
    title_start: "Deja de adivinar.",
    title_highlight: "Empieza a unificar.",
    desc: "No necesitas otro rediseño estético. Necesitas una reingeniería de conversión. Convierte tu tráfico en ingresos y tus visitas en datos accionables.",
    cta: "Auditar mi Arquitectura Web",
    subtext: "Analizaremos velocidad, SEO y conectividad."
  },
  en: {
    title_start: "Stop guessing.",
    title_highlight: "Start unifying.",
    desc: "You don't need another aesthetic redesign. You need a conversion reengineering. Turn traffic into revenue and visits into actionable data.",
    cta: "Audit my Web Architecture",
    subtext: "We will analyze speed, SEO, and connectivity."
  },
  fr: {
    title_start: "Cessez de deviner.",
    title_highlight: "Commencez à unifier.",
    desc: "Vous n'avez pas besoin d'une autre refonte esthétique. Vous avez besoin d'une réingénierie de conversion. Convertissez votre trafic en revenus et vos visites en données exploitables.",
    cta: "Auditer mon Architecture Web",
    subtext: "Nous analyserons la vitesse, le SEO et la connectivité."
  }
};

interface WebDevFinalCTAProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function WebDevFinalCTA({ lang = 'es' }: WebDevFinalCTAProps) {
  const t = CONTENT[lang];

  return (
    <section className="py-24 px-6 text-center bg-gris-piedra">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8 text-white">
          {t.title_start} <span className="text-azul-zafiro">{t.title_highlight}</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          {t.desc}
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <Link href="/servicios/estrategia-contenido#auditoria">
            <button className="bg-azul-zafiro text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-glow-blue hover:-translate-y-1">
              {t.cta}
            </button>
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            {t.subtext}
          </span>
        </div>
      </div>
    </section>
  );
}