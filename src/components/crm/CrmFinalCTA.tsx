'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Opción 1: Premium + Consistente) ---
const CONTENT = {
  es: {
    title_start: "Estás a un diagnóstico de convertir tu inversión tecnológica en una",
    title_highlight: "base de medición y decisión confiable.",
    desc: "Tu competencia decide por intuición. Tú puedes decidir con evidencia.",
    cta: "Solicitar diagnóstico",
    note: "Sin compromiso. Respuesta humana y clara."
  },
  en: {
    title_start: "You are one diagnosis away from turning your tech investment into a",
    title_highlight: "reliable measurement and decision base.",
    desc: "Your competition decides on intuition. You can decide with evidence.",
    cta: "Request Diagnosis",
    note: "No strings attached. Human and clear response."
  },
  fr: {
    title_start: "Vous n'êtes qu'à un diagnostic de transformer votre investissement technologique en une",
    title_highlight: "base de mesure et de décision fiable.",
    desc: "Vos concurrents décident à l'intuition. Vous pouvez décider avec des preuves.",
    cta: "Demander un diagnostic",
    note: "Sans engagement. Réponse humaine et claire."
  }
};

interface CrmFinalCTAProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function CrmFinalCTA({ lang = 'es' }: CrmFinalCTAProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-center px-6 border-t border-white/5">
      
      {/* --- 2. FONDO CINEMÁTICO (Source of Truth Beams) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        
        {/* Luz Central Giratoria (Simula Background Beams) */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[1000px] md:h-[1000px] bg-gradient-to-r from-amber-500/10 via-oro-antiguo/5 to-transparent rounded-full blur-3xl opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Grid de Fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- 3. CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Título */}
        <motion.h2 
          className="font-serif text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t.title_start} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-oro-antiguo to-amber-200 drop-shadow-sm">
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

        {/* Botón Shimmer (Gold Premium) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col items-center gap-6">
            <Link href="/contacto">
              <button className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-full bg-oro-antiguo shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]">
                
                {/* Borde sutil */}
                <span className="absolute inset-0 rounded-full border border-white/20"></span>

                {/* Efecto Shimmer (Brillo que pasa) */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer z-20" />

                {/* Texto e Icono */}
                <div className="relative z-10 flex items-center gap-3 text-lg font-bold text-slate-950">
                  <Sparkles className="w-5 h-5 text-slate-800" />
                  <span>{t.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Link>
            
            {/* Micro-copy de Confianza */}
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              {t.note}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}