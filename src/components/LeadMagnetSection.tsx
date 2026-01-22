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
    <section className="relative w-full py-24 px-6 overflow-hidden bg-gray-900 border-t border-gray-800">
      
      {/* Fondo Sutil (Grid Pattern) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* COLUMNA IZQUIERDA: Copywriting Persuasivo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/50 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/>
            {t.badge}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {t.title_line1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {t.title_highlight}
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-md">
            {t.desc}
          </p>

          {/* Social Proof micro */}
          <div className="flex items-center gap-4 pt-4 opacity-70">
            <div className="flex -space-x-3">
               {/* Simulación de avatares con div */}
               <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-[10px] text-white">A</div>
               <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-900 flex items-center justify-center text-[10px] text-white">B</div>
               <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-900 flex items-center justify-center text-[10px] text-white">C</div>
            </div>
            <p className="text-sm text-gray-500">{t.social}</p>
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
            {/* Efecto de 'Glow' detrás del chat */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 animate-pulse transition duration-1000"></div>
            
            {/* Componente del Chat */}
            <ConversationalForm />
            
        </motion.div>

      </div>
    </section>
  );
}