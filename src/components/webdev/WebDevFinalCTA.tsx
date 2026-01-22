'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScanSearch, ArrowRight, Gauge, Link2, Search } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Opción 1: Coherente + Defendible) ---
const CONTENT = {
  es: {
    title_start: "Deja de adivinar.",
    title_highlight: "Empieza a optimizar con evidencia.",
    desc: "No necesitas otro rediseño estético. Necesitas una arquitectura web que convierta: performance, claridad de UX y medición confiable para tomar decisiones.",
    cta: "Solicitar diagnóstico de Arquitectura Web",
    micro: "Revisamos performance, SEO técnico e integración (CRM/ERP/Analytics)."
  },
  en: {
    title_start: "Stop guessing.",
    title_highlight: "Start optimizing with evidence.",
    desc: "You don't need another aesthetic redesign. You need a web architecture that converts: performance, UX clarity, and reliable measurement for decision making.",
    cta: "Request Web Architecture Diagnosis",
    micro: "We review performance, technical SEO, and integration (CRM/ERP/Analytics)."
  },
  fr: {
    title_start: "Cessez de deviner.",
    title_highlight: "Commencez à optimiser avec des preuves.",
    desc: "Vous n'avez pas besoin d'une autre refonte esthétique. Vous avez besoin d'une architecture web qui convertit : performance, clarté UX et mesure fiable.",
    cta: "Demander un diagnostic d'Architecture Web",
    micro: "Nous révisons performance, SEO technique et intégration."
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function WebDevFinalCTA({ lang = 'es' }: Props) {
  const t = CONTENT[lang];

  return (
    <section className="relative w-full min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-center px-6 border-t border-white/5">
      
      {/* --- 2. FONDO ARQUITECTÓNICO (Perspective Grid) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none perspective-[1000px]">
        {/* Grid de suelo en movimiento */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{ transformOrigin: "bottom center", transform: "rotateX(60deg) scale(2)" }}
          animate={{ y: [0, 50] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        {/* Máscara de desvanecimiento radial */}
        <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,#000_100%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Título */}
        <motion.h2 
          className="font-serif text-4xl md:text-6xl font-bold text-slate-500 mb-8 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t.title_start} <br className="hidden md:block" />
          <span className="text-white drop-shadow-lg">
            {t.title_highlight}
          </span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p 
          className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t.desc}
        </motion.p>

        {/* Botón Tech (Indigo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col items-center gap-6">
            <Link href="/contacto">
              <button className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-full bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]">
                
                {/* Borde sutil */}
                <span className="absolute inset-0 rounded-full border border-white/20"></span>

                {/* Efecto Pulse interno */}
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>

                {/* Texto e Icono */}
                <div className="relative z-10 flex items-center gap-3 text-lg font-bold text-white">
                  <ScanSearch className="w-5 h-5" />
                  <span>{t.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Link>
            
            {/* Micro-copy Técnico (Log-style) */}
            <div className="flex flex-col md:flex-row items-center gap-2 text-xs font-mono text-slate-500">
              <span className="uppercase tracking-widest opacity-70">Scope:</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Gauge size={10} className="text-emerald-500" /> Performance</span>
                <span className="w-px h-3 bg-slate-800"></span>
                <span className="flex items-center gap-1"><Search size={10} className="text-orange-500" /> SEO Tech</span>
                <span className="w-px h-3 bg-slate-800"></span>
                <span className="flex items-center gap-1"><Link2 size={10} className="text-blue-500" /> Integración</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}