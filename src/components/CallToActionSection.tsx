'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    title: "Deja de adivinar. Empieza a optimizar.",
    desc: "En 15 minutos identificamos fricción y oportunidades en tu funnel. Sin humo. Solo ingeniería de crecimiento.",
    cta: "Solicitar Diagnóstico",
    email_btn: "Hablemos por Email",
    micro: "Sin compromiso. Si no hay fit, te lo decimos honestamente.",
    footer_rights: "Acclaro Labs. Inteligencia Artificial Aplicada.",
  },
  en: {
    title: "Stop guessing. Start optimizing.",
    desc: "In 15 minutes, we identify friction and opportunities in your funnel. No fluff. Just growth engineering.",
    cta: "Request Diagnosis",
    email_btn: "Chat via Email",
    micro: "No strings attached. If there's no fit, we'll tell you.",
    footer_rights: "Acclaro Labs. Applied Artificial Intelligence.",
  },
  fr: {
    title: "Cessez de deviner. Optimisez.",
    desc: "En 15 minutes, nous identifions les frictions et opportunités. Pas de blabla. Juste de l'ingénierie de croissance.",
    cta: "Demander un diagnostic",
    email_btn: "Parler par Email",
    micro: "Sans engagement. S'il n'y a pas de fit, nous vous le dirons.",
    footer_rights: "Acclaro Labs. Intelligence Artificielle Appliquée.",
  }
};

interface CallToActionSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function CallToActionSection({ lang = 'es' }: CallToActionSectionProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative z-10 w-full bg-slate-950 py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      
      {/* --- FONDO TECH --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]"
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

      <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Título Masivo */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight mb-8 leading-tight">
             {t.title.split('.')[0]}.<br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                {t.title.split('.')[1]}
             </span>
          </h2>
          
          {/* Subtítulo */}
          <p className="mt-6 text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.desc}
          </p>
          
          {/* GRUPO DE BOTONES (CTA + Email) */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* 1. Botón CTA Principal */}
            <Link href="/contacto">
              <motion.button 
                className="group relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-lg font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 gap-2">
                  {t.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            {/* 2. Botón Secundario (Email) - Corregido a hello@ */}
            <a href="mailto:hello@acclaroflow.com">
                <button className="flex items-center gap-3 text-slate-400 hover:text-white px-6 py-4 rounded-full font-medium transition-colors border border-transparent hover:border-slate-800 hover:bg-slate-900/50">
                    <Mail className="w-5 h-5" />
                    <span>{t.email_btn}</span>
                </button>
            </a>

          </div>

          {/* Microcopy */}
          <p className="mt-6 text-sm text-slate-500 font-medium opacity-80">
            {t.micro}
          </p>

        </motion.div>

        {/* --- FOOTER INTEGRADO --- */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-32 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600"
        >
            <div className="mb-4 md:mb-0 font-mono">
                &copy; {new Date().getFullYear()} {t.footer_rights}
            </div>
            {/* Redes Sociales - Corregido a <a> externos */}
            <div className="flex gap-8 font-mono uppercase tracking-wider text-xs">
                <a href="https://www.linkedin.com/company/acclarolabs/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="https://x.com/Acclarolabs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Twitter</a>
                <a href="https://github.com/acclarolabs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Github</a>
            </div>
        </motion.div>

      </div>
    </section>
  );
}