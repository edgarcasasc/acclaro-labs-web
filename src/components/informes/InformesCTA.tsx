// src/components/informes/InformesCTA.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Alineado a Optimización/Evidencia) ---
const CONTENT = {
  es: {
    title_start: "Deje de adivinar.",
    title_end: "Empiece a optimizar con evidencia.",
    cta: "Solicitar diagnóstico"
  },
  en: {
    title_start: "Stop guessing.",
    title_end: "Start optimizing with evidence.",
    cta: "Request Diagnosis"
  },
  fr: {
    title_start: "Cessez de deviner.",
    title_end: "Optimisez avec des preuves.",
    cta: "Demander un diagnostic"
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function InformesCTA({ lang = 'es' }: Props) {
  const t = CONTENT[lang];

  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-center px-6">
      
      {/* --- 2. FONDO CINEMÁTICO (Spotlight & Beams) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        
        {/* Luz Central Giratoria */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-slate-900/0 rounded-full blur-3xl opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Haz de Luz Vertical (Clarity Beam) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        
        {/* Grid de Fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- 3. CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Título */}
        <motion.h2 
          className="font-serif text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t.title_start} <br />
          {/* Efecto Glow en la palabra clave */}
          <span className="relative inline-block">
            <span className="absolute -inset-1 blur-xl bg-blue-600/30 rounded-lg"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              {t.title_end}
            </span>
          </span>
        </motion.h2>

        {/* Botón Shimmer (Deep Blue) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/contacto">
            <button className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden rounded-full bg-slate-950 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)]">
              
              {/* Borde Brillante Animado */}
              <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 opacity-70 group-hover:opacity-100 transition-opacity"></span>
              
              {/* Fondo Interno */}
              <span className="absolute inset-[2px] rounded-full bg-slate-900"></span>

              {/* Efecto Shimmer (Brillo que pasa) */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></span>

              {/* Texto e Icono */}
              <div className="relative flex items-center gap-3 text-xl font-bold text-white">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>{t.cta}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}