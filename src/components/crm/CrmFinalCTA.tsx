'use client';
import React from 'react';
import Link from 'next/link';

const CONTENT = {
  es: {
    title_start: "Estás a una auditoría de convertir tu mayor gasto tecnológico en tu",
    title_highlight: "mayor activo de marketing.",
    desc: "Tu competencia sigue tomando decisiones basadas en intuición. Tú puedes empezar a tomarlas basadas en evidencia.",
    cta: "Agendar mi Auditoría de Claridad",
    note: "Sin compromiso. Solo verdad."
  },
  en: {
    title_start: "You are one audit away from turning your biggest tech expense into your",
    title_highlight: "greatest marketing asset.",
    desc: "Your competition keeps making decisions based on intuition. You can start making them based on evidence.",
    cta: "Schedule my Clarity Audit",
    note: "No strings attached. Just truth."
  },
  fr: {
    title_start: "Vous n'êtes qu'à un audit de transformer votre plus grande dépense technologique en votre",
    title_highlight: "plus grand atout marketing.",
    desc: "Vos concurrents continuent de prendre des décisions basées sur l'intuition. Vous pouvez commencer à les prendre basées sur des preuves.",
    cta: "Planifier mon Audit de Clarté",
    note: "Sans engagement. Juste la vérité."
  }
};

interface CrmFinalCTAProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function CrmFinalCTA({ lang = 'es' }: CrmFinalCTAProps) {
  const t = CONTENT[lang];

  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8 text-white">
          {t.title_start} <span className="text-oro-antiguo">{t.title_highlight}</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          {t.desc}
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <Link href="/servicios/estrategia-contenido#auditoria">
            <button className="bg-oro-antiguo text-gris-piedra px-10 py-5 rounded-full text-xl font-bold hover:bg-white transition-all shadow-glow-blue transform hover:-translate-y-1">
              {t.cta}
            </button>
          </Link>
          <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">
            {t.note}
          </span>
        </div>
      </div>
    </section>
  );
}