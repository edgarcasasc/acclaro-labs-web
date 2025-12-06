// src/components/LeadMagnetSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import Image from 'next/image'; // Descomentar cuando tengas la imagen real

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    title: "¿Dónde estás perdiendo dinero hoy?",
    desc: "Lee el análisis que nuestros competidores no quieren que veas. Te mostramos cómo los datos de Service Cloud pueden convertirse en tu mejor estrategia de SEO.",
    cta: "Obtén tu Auditoría Gratuita",
    subtext: "Incluye el Blueprint de Estrategia completo."
  },
  en: {
    title: "Where are you losing money today?",
    desc: "Read the analysis our competitors don't want you to see. We show you how Service Cloud data can become your best SEO strategy.",
    cta: "Get Your Free Audit",
    subtext: "Includes the full Strategy Blueprint."
  },
  fr: {
    title: "Où perdez-vous de l'argent aujourd'hui ?",
    desc: "Lisez l'analyse que nos concurrents ne veulent pas que vous voyiez. Nous vous montrons comment les données de Service Cloud peuvent devenir votre meilleure stratégie SEO.",
    cta: "Obtenez votre Audit Gratuit",
    subtext: "Inclut le Blueprint Stratégique complet."
  }
};

// --- INTERFAZ DE PROPS ---
interface LeadMagnetSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function LeadMagnetSection({ lang = 'es' }: LeadMagnetSectionProps) {
  // Seleccionamos el contenido
  const t = CONTENT[lang];

  return (
    <section className="relative z-10 w-full bg-gris-piedra py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Imagen del Lead Magnet (Visual Hook) */}
        <div className="flex justify-center items-center">
          <motion.div
            className="w-full max-w-sm h-auto p-4 rounded-lg"
            style={{ perspective: 1000 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="rounded-lg shadow-2xl shadow-oro-antiguo/10"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                rotateY: 10,
                rotateX: -5,
                boxShadow: "0px 20px 40px rgba(181, 154, 106, 0.3)",
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Placeholder para la imagen del reporte/blueprint */}
              <div className="bg-gradient-to-br from-gray-800 to-black w-full aspect-[3/4] rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-oro-antiguo font-serif text-xl">Blueprint Cover</span>
              </div>
              {/* NOTA: Cuando tengas la imagen real, descomenta esto y borra el div de arriba:
                 <Image
                   src="/blueprint_acclarolabs.webp"
                   alt="Blueprint de Acclaro Labs"
                   width={800}
                   height={1100}
                   className="rounded-lg"
                 />
              */}
            </motion.div>
          </motion.div>
        </div>

        {/* Contenido y CTA */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blanco-pergamino mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-blanco-pergamino/80 mb-8 leading-relaxed">
            {t.desc}
          </p>
          
          {/* --- CTA que lleva a la Auditoría --- */}
          <Link href="/servicios/estrategia-contenido#auditoria">
            <motion.button
              className="bg-oro-antiguo text-gris-piedra font-bold py-4 px-8 rounded-lg text-lg hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-glow-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.cta}
            </motion.button>
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            {t.subtext}
          </p>
        </div>

      </div>
    </section>
  );
}