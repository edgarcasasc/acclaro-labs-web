// src/components/LeadMagnetSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; 

// --- 1. DICCIONARIO DE CONTENIDO (i18n + Assets Reales) ---
const CONTENT = {
  es: {
    title: "¿Dónde estás perdiendo dinero hoy?",
    desc: "Lee el análisis que nuestros competidores no quieren que veas. Te mostramos cómo tus registros de soporte al cliente y notas de venta pueden convertirse en tu mejor estrategia de SEO.",
    cta: "Obtén tu Auditoría Gratuita",
    subtext: "Incluye el Blueprint de Estrategia completo.",
    // Rutas de Archivos en Español
    imageSrc: "/downloads/blueprint_acclarolabs.webp", 
    pdfHref: "/downloads/blueprint_acclarolabs.pdf"
  },
  en: {
    title: "Where are you losing money today?",
    desc: "Read the analysis our competitors don't want you to see. We show you how your customer support logs and sales notes can become your best SEO strategy.",
    cta: "Get Your Free Audit",
    subtext: "Includes the full Strategy Blueprint.",
    // Rutas de Archivos en Inglés
    imageSrc: "/downloads/blueprint_acclarolabs_en.webp",
    pdfHref: "/downloads/blueprint_acclarolabs_en.pdf"
  },
  fr: {
    title: "Où perdez-vous de l'argent aujourd'hui ?",
    desc: "Lisez l'analyse que nos concurrents ne veulent pas que vous voyiez. Nous vous montrons comment vos journaux de support client et vos notes de vente peuvent devenir votre meilleure stratégie SEO.",
    cta: "Obtenez votre Audit Gratuit",
    subtext: "Inclut le Blueprint Stratégique complet.",
    // Rutas de Archivos en Francés
    imageSrc: "/downloads/blueprint_acclarolabs_fr.webp",
    pdfHref: "/downloads/blueprint_acclarolabs_fr.pdf"
  }
};

interface LeadMagnetSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function LeadMagnetSection({ lang = 'es' }: LeadMagnetSectionProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative z-10 w-full bg-gris-piedra py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Imagen del Lead Magnet */}
        <div className="flex justify-center items-center">
          <motion.div
            className="relative w-full max-w-sm h-auto rounded-lg"
            style={{ perspective: 1000 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="rounded-lg shadow-2xl shadow-oro-antiguo/10 relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                boxShadow: "0px 20px 40px rgba(181, 154, 106, 0.3)",
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* --- IMAGEN DINÁMICA (Carga la portada del idioma correcto) --- */}
              <Image
                src={t.imageSrc}
                alt="Blueprint Acclaro Labs Cover"
                width={600} 
                height={800}
                className="w-full h-auto rounded-lg object-cover border border-white/10"
                priority // Carga prioritaria para mejor rendimiento visual
              />
              
              {/* Brillo superpuesto para efecto premium */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none rounded-lg"></div>
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
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* OPCIÓN A: El botón principal lleva a la Auditoría (Estrategia recomendada) */}
            <Link href="/servicios/estrategia-contenido#auditoria">
              <motion.button
                className="bg-oro-antiguo text-gris-piedra font-bold py-4 px-8 rounded-lg text-lg hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-glow-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.cta}
              </motion.button>
            </Link>

            {/* OPCIÓN B: Botón secundario para descargar el PDF directo (Opcional, descomentar si lo quieres) */}
            {/* <a href={t.pdfHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
               <button className="text-oro-antiguo font-semibold py-4 px-6 hover:text-white transition-colors border border-oro-antiguo/30 rounded-lg hover:bg-white/5">
                 Descargar Preview
               </button>
            </a> 
            */}
          </div>

          <p className="mt-4 text-sm text-gray-500">
            {t.subtext}
          </p>
        </div>

      </div>
    </section>
  );
}