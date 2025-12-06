// src/components/crm/CrmHero.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 1. DICCIONARIO DE TRADUCCIÓN
const CONTENT = {
  es: {
    title_start: "¿Tu Salesforce es un",
    title_highlight: "Motor de Ingresos",
    title_end: "o un Costoso Cementerio de Datos?",
    desc: "De nada sirve tener el mejor CRM del mundo si tus datos están sucios, desconectados y en silencio. Transformamos tu Salesforce de una agenda glorificada a la base de operaciones de tu rentabilidad.",
    cta: "Detener la Fuga de Dinero",
    link: "/servicios/estrategia-contenido#auditoria"
  },
  en: {
    title_start: "Is Your Salesforce a",
    title_highlight: "Revenue Engine",
    title_end: "or a Costly Data Graveyard?",
    desc: "It is useless to have the best CRM in the world if your data is dirty, disconnected, and silent. We transform your Salesforce from a glorified agenda into the command center of your profitability.",
    cta: "Stop the Cash Leak",
    link: "/servicios/estrategia-contenido#auditoria" // Puedes cambiar a ruta /en/ si existe
  },
  fr: {
    title_start: "Votre Salesforce est-il un",
    title_highlight: "Moteur de Revenus",
    title_end: "ou un Coûteux Cimetière de Données ?",
    desc: "Avoir le meilleur CRM au monde ne sert à rien si vos données sont sales, déconnectées et silencieuses. Nous transformons votre Salesforce d'un agenda glorifié en base d'opérations de votre rentabilité.",
    cta: "Arrêtez la Fuite de Capitaux",
    link: "/servicios/estrategia-contenido#auditoria" // Puedes cambiar a ruta /fr/ si existe
  }
};

interface CrmHeroProps {
  lang?: 'es' | 'en' | 'fr';
}

// 2. RECIBIR LA PROP 'lang'
export default function CrmHero({ lang = 'es' }: CrmHeroProps) {
  // 3. SELECCIONAR EL TEXTO
  const t = CONTENT[lang];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-8 text-white">
          {/* USAR LAS VARIABLES 't' */}
          {t.title_start} <span className="text-oro-antiguo">{t.title_highlight}</span> <br/>
          <span className="text-rojo-lacre text-shadow-glow">{t.title_end}</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.desc}
        </p>

        <Link href={t.link} className="inline-block">
          <button className="bg-rojo-lacre text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all shadow-glow-red transform hover:scale-105">
            {t.cta}
          </button>
        </Link>
      </motion.div>
    </section>
  );
}