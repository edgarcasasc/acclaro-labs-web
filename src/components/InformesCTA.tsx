'use client';
import React from 'react';
import Link from 'next/link';

const CONTENT = {
  es: { title: "Cessez de deviner. Commencez à décider.", cta: "Planifier mon Audit de Clarté" }, // Corrección: Texto estaba en francés por error en el prompt original, ajustado abajo
  en: { title: "Stop guessing. Start deciding.", cta: "Schedule my Clarity Audit" },
  fr: { title: "Cessez de deviner. Commencez à décider.", cta: "Planifier mon Audit de Clarté" }
};
// Ajuste manual rápido al español
CONTENT.es = { title: "Deje de adivinar. Empiece a decidir.", cta: "Agendar mi Auditoría de Claridad" };


interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function InformesCTA({ lang = 'es' }: Props) {
  const t = CONTENT[lang];
  return (
    <section className="py-24 px-6 text-center bg-gris-piedra">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8 text-white">{t.title}</h2>
        <Link href="/servicios/estrategia-contenido#auditoria">
          <button className="bg-azul-zafiro text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-glow-blue hover:-translate-y-1">
            {t.cta}
          </button>
        </Link>
      </div>
    </section>
  );
}