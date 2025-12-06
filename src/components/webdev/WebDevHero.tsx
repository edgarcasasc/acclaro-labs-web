// src/components/webdev/WebDevHero.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    title_start: "¿Tu Sitio Web es un",
    highlight: "Vendedor de Élite",
    middle: "o Solo un",
    strike: "Folleto Digital Caro",
    end: "?",
    desc: "Dejamos de construir \"páginas informativas\". Desarrollamos ecosistemas de conversión ultrarrápidos con Next.js. Conectamos tu web directamente al corazón de tu negocio (CRM y ERP) para que cada clic cuente.",
    cta: "Quiero una Web que Venda",
    link: "/contacto"
  },
  en: {
    title_start: "Is Your Website an",
    highlight: "Elite Sales Engine",
    middle: "or Just an",
    strike: "Expensive Digital Brochure",
    end: "?",
    desc: "We don't build \"informational pages\" anymore. We develop ultra-fast conversion ecosystems with Next.js. We connect your web directly to the heart of your business (CRM and ERP) so every click counts.",
    cta: "I Want a Website That Sells",
    link: "/contacto"
  },
  fr: {
    title_start: "Votre Site Web est-il un",
    highlight: "Vendeur d'Élite",
    middle: "ou Juste une",
    strike: "Brochure Numérique Coûteuse",
    end: " ?",
    desc: "Nous ne construisons plus de « pages informatives ». Nous développons des écosystèmes de conversion ultra-rapides avec Next.js. Nous connectons votre web directement au cœur de votre entreprise (CRM et ERP) pour que chaque clic compte.",
    cta: "Je Veux un Site qui Vend",
    link: "/contacto"
  }
};

interface WebDevHeroProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function WebDevHero({ lang = 'es' }: WebDevHeroProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center pt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-8 text-white">
          {t.title_start} <span className="text-azul-zafiro text-shadow-glow">{t.highlight}</span> <br className="hidden md:block"/>
          {t.middle} <span className="text-gray-500 line-through decoration-rojo-lacre decoration-4">{t.strike}</span>{t.end}
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.desc}
        </p>

        <Link href={t.link} className="inline-block">
          <button className="bg-azul-zafiro text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-900 transition-all shadow-glow-blue transform hover:scale-105 border border-white/10">
            {t.cta}
          </button>
        </Link>
      </motion.div>
    </section>
  );
}