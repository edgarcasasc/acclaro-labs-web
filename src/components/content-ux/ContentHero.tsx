'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CONTENT = {
  es: {
    title_start: "¿Tu Marca es",
    blur_text: "Ruido de Fondo",
    title_end: "o una",
    highlight: "Señal Clara",
    question: "?",
    desc: "El contenido sin estrategia es solo gasto. La estética sin usabilidad es solo decoración. Diseñamos <strong>narrativas estratégicas</strong> que guían a tu usuario desde la curiosidad hasta la conversión, sin fricción.",
    cta: "Diseñar mi Estrategia de Conversión",
    link: "/servicios/estrategia-contenido#auditoria"
  },
  en: {
    title_start: "Is Your Brand",
    blur_text: "Background Noise",
    title_end: "or a",
    highlight: "Clear Signal",
    question: "?",
    desc: "Content without strategy is just expense. Aesthetics without usability is just decoration. We design <strong>strategic narratives</strong> that guide your user from curiosity to conversion, without friction.",
    cta: "Design my Conversion Strategy",
    link: "/servicios/estrategia-contenido#auditoria"
  },
  fr: {
    title_start: "Votre Marque est-elle un",
    blur_text: "Bruit de Fond",
    title_end: "ou un",
    highlight: "Signal Clair",
    question: " ?",
    desc: "Le contenu sans stratégie n'est qu'une dépense. L'esthétique sans utilisabilité n'est que de la décoration. Nous concevons des <strong>récits stratégiques</strong> qui guident votre utilisateur de la curiosité à la conversion, sans friction.",
    cta: "Concevoir ma Stratégie de Conversion",
    link: "/servicios/estrategia-contenido#auditoria"
  }
};

interface ContentHeroProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function ContentHero({ lang = 'es' }: ContentHeroProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-8 text-white">
          {t.title_start} <span className="text-gray-500 blur-[2px]">{t.blur_text}</span> {t.title_end} <br className="hidden md:block" /> <span className="text-oro-antiguo text-shadow-glow">{t.highlight}</span>{t.question}
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.desc }} />

        <Link href={t.link}>
          <button className="bg-oro-antiguo text-gris-piedra px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-all shadow-glow-blue border border-white/20">
            {t.cta}
          </button>
        </Link>
      </motion.div>
    </section>
  );
}