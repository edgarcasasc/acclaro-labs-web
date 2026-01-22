'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    title: "Deja de adivinar. Empieza a optimizar con evidencia.",
    desc: "En 15 minutos identificamos fricción y oportunidades en tu funnel y definimos el siguiente paso: Snapshot, Sprint o implementación.",
    cta: "Solicitar diagnóstico",
    micro: "Sin compromiso. Si no hay fit, te lo decimos."
  },
  en: {
    title: "Stop guessing. Start optimizing with evidence.",
    desc: "In 15 minutes, we identify friction and opportunities in your funnel and define the next step: Snapshot, Sprint, or implementation.",
    cta: "Request Diagnosis",
    micro: "No strings attached. If there's no fit, we'll tell you."
  },
  fr: {
    title: "Cessez de deviner. Optimisez avec des preuves.",
    desc: "En 15 minutes, nous identifions les frictions et opportunités de votre funnel et définissons l'étape suivante : Snapshot, Sprint ou mise en œuvre.",
    cta: "Demander un diagnostic",
    micro: "Sans engagement. S'il n'y a pas de fit, nous vous le dirons."
  }
};

// --- INTERFAZ DE PROPS ---
interface CallToActionSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function CallToActionSection({ lang = 'es' }: CallToActionSectionProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative z-10 w-full bg-slate-950 py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
      
      {/* --- FONDO TECH (Grid & Beams) --- */}
      <div className="absolute inset-0 w-full h-full">
        {/* 1. Grid Pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        />
        
        {/* 2. Haces de Luz Convergentes (Central Glow) */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-azul-zafiro/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Título Masivo */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            {t.title}
          </h2>
          
          {/* Subtítulo */}
          <p className="mt-6 text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.desc}
          </p>
          
          {/* Botón CTA "Shimmer" (Premium) */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <Link href="/contacto">
              <motion.button 
                className="group relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Borde Animado (Gradiente giratorio) */}
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                
                {/* Contenido del Botón */}
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-lg font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 gap-2">
                  {t.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            {/* Microcopy de Confianza */}
            <p className="text-sm text-slate-500 font-medium">
              {t.micro}
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}