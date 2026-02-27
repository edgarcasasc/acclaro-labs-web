// src/components/LeadMagnetSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ConversationalForm from './ConversationalForm';

// --- 1. DICCIONARIO DE CONTENIDO ---
const CONTENT = {
  es: {
    badge: "Lead Magnet v2.0",
    title_line1: "No llenes formularios.",
    title_highlight: "Inicia una Auditoría.",
    desc: "Nuestra IA analizará la arquitectura de tu sitio web en tiempo real. Danos tu URL y recibe un pre-diagnóstico de UX y conversión instantáneo.",
    social: "Más de 50 startups auditadas este mes."
  },
  en: {
    badge: "Lead Magnet v2.0",
    title_line1: "Stop filling forms.",
    title_highlight: "Start an Audit.",
    desc: "Our AI will analyze your website architecture in real-time. Give us your URL and get an instant UX and conversion pre-diagnosis.",
    social: "Over 50 startups audited this month."
  },
  fr: {
    badge: "Lead Magnet v2.0",
    title_line1: "Ne remplissez plus de formulaires.",
    title_highlight: "Lancez un Audit.",
    desc: "Notre IA analysera l'architecture de votre site web en temps réel. Donnez-nous votre URL et recevez un pré-diagnostic UX et conversion instantané.",
    social: "Plus de 50 startups auditées ce mois-ci."
  }
};

// --- 2. DEFINIR LA INTERFAZ DE PROPS ---
interface LeadMagnetSectionProps {
  lang?: string;
}

export default function LeadMagnetSection({ lang = 'es' }: LeadMagnetSectionProps) {
  // Seleccionamos el idioma (si no existe, usa español por defecto)
  const t = CONTENT[lang as keyof typeof CONTENT] || CONTENT.es;

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-slate-950 border-t border-white/5">

      {/* Fondo Sutil (Grid Pattern) */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" style={{ backgroundSize: '40px 40px' }} />

      {/* Decorative Glows */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-azul-zafiro/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-rojo-lacre/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* COLUMNA IZQUIERDA: Copywriting Persuasivo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-left relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azul-zafiro/10 border border-azul-zafiro/30 text-blue-300 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            {t.badge}
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white leading-tight tracking-tight drop-shadow-lg">
            {t.title_line1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
              {t.title_highlight}
            </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-md font-light leading-relaxed">
            {t.desc}
          </p>

          {/* Social Proof micro */}
          <div className="flex items-center gap-4 pt-4 opacity-80">
            <div className="flex -space-x-3">
              {/* Simulación de avatares con div */}
              <div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] text-white backdrop-blur-sm relative z-30">A</div>
              <div className="w-9 h-9 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center text-[10px] text-white backdrop-blur-sm relative z-20">B</div>
              <div className="w-9 h-9 rounded-full bg-slate-600 border-2 border-slate-950 flex items-center justify-center text-[10px] text-white backdrop-blur-sm relative z-10">C</div>
            </div>
            <p className="text-sm font-medium text-slate-400">{t.social}</p>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: El Chatbot (La Ejecución) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          {/* Contenedor Glassmorphism para el chat */}
          <div className="relative rounded-3xl border border-white/10 bg-slate-900/40 p-1 backdrop-blur-xl shadow-2xl overflow-hidden group">
            {/* Efecto de 'Glow' detrás del chat */}
            <div className="absolute -inset-1 bg-gradient-to-br from-azul-zafiro/30 via-transparent to-rojo-lacre/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition duration-1000"></div>

            {/* Componente del Chat */}
            <div className="relative z-10 bg-slate-950/80 rounded-[22px] overflow-hidden border border-white/5 h-full">
              <ConversationalForm />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}