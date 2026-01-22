'use client'

import { motion } from 'framer-motion';
import { Cpu, Check, Palette } from 'lucide-react';
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
// --- 1. DICCIONARIO DE CONTENIDO (i18n) ---
const CONTENT = {
  es: {
    heading: "Un Ecosistema Híbrido Requiere un Equipo Híbrido",
    edgar: {
      name: "Edgar Ovidio Casas",
      title: "Estratega Creativo (UX & Contenido de Conversión)",
      desc: "Edgar traduce la voz del cliente en decisiones claras: estructura, narrativa y UX writing orientados a conversión. Convierte datos y hallazgos en mensajes, pantallas y flujos que reducen fricción y aceleran la decisión.",
      points: [
        "Dirección creativa y diseño con estándar internacional.",
        "Experiencia en marca y ejecución para organizaciones globales.",
        "UX, storytelling y sistemas de contenido orientados a performance."
      ]
    },
    abdiel: {
      name: "Abdiel Enrique Casas",
      title: "Arquitecto Técnico (Datos, Integración & IA Aplicada)",
      desc: "Abdiel diseña la base técnica para medir y escalar: instrumentación, integraciones y arquitectura entre CRM/ERP/soporte y el canal digital. Implementa automatización e IA aplicada cuando mejora métricas y eficiencia operativa.",
      points: [
        "Formación y enfoque técnico de alto nivel (MIT).",
        "Arquitectura CRM + desarrollo (React) e integración vía APIs.",
        "IA generativa aplicada a procesos y experiencias, con gobernanza."
      ]
    },
    footer: "Estrategia + ejecución. De diagnóstico a implementación, con medición y accountability."
  },
  en: {
    heading: "A Hybrid Ecosystem Requires a Hybrid Team",
    edgar: {
      name: "Edgar Ovidio Casas",
      title: "Creative Strategist (UX & Conversion Content)",
      desc: "Edgar translates the customer's voice into clear decisions: structure, narrative, and conversion-oriented UX writing. He turns data and findings into messages, screens, and flows that reduce friction and accelerate decisions.",
      points: [
        "International-standard creative direction and design.",
        "Brand and execution experience for global organizations.",
        "UX, storytelling, and performance-oriented content systems."
      ]
    },
    abdiel: {
      name: "Abdiel Enrique Casas",
      title: "Technical Architect (Data, Integration & Applied AI)",
      desc: "Abdiel designs the technical foundation to measure and scale: instrumentation, integrations, and architecture between CRM/ERP/support and the digital channel. He implements automation and applied AI when it improves metrics and operational efficiency.",
      points: [
        "High-level technical training and approach (MIT).",
        "CRM architecture + development (React) and API integration.",
        "Generative AI applied to processes and experiences, with governance."
      ]
    },
    footer: "Strategy + Execution. From diagnosis to implementation, with measurement and accountability."
  },
  fr: {
    heading: "Un Écosystème Hybride Exige une Équipe Hybride",
    edgar: {
      name: "Edgar Ovidio Casas",
      title: "Stratège Créatif (UX & Contenu de Conversion)",
      desc: "Edgar traduit la voix du client en décisions claires : structure, narration et UX writing orientés conversion. Il transforme les données en messages et flux qui réduisent les frictions et accélèrent la décision.",
      points: [
        "Direction créative et design de standard international.",
        "Expérience de marque et d'exécution pour des organisations mondiales.",
        "UX, storytelling et systèmes de contenu orientés performance."
      ]
    },
    abdiel: {
      name: "Abdiel Enrique Casas",
      title: "Architecte Technique (Données, Intégration & IA Appliquée)",
      desc: "Abdiel conçoit la base technique pour mesurer et passer à l'échelle : instrumentation, intégrations et architecture entre CRM/ERP et le canal numérique. Il met en œuvre l'automatisation et l'IA appliquée pour améliorer l'efficacité opérationnelle.",
      points: [
        "Formation et approche technique de haut niveau (MIT).",
        "Architecture CRM + développement (React) et intégration API.",
        "IA générative appliquée aux processus, avec gouvernance."
      ]
    },
    footer: "Stratégie + Exécution. Du diagnostic à la mise en œuvre, avec mesure et responsabilité."
  }
};

// --- INTERFAZ DE PROPS ---
interface TeamSectionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function TeamSection({ lang = 'es' }: TeamSectionProps) {
  const t = CONTENT[lang];
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative z-10 w-full bg-slate-950 py-24 md:py-32 overflow-hidden">
      
      {/* Fondo Ambiental (Glows separados) */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-purple-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        
        {/* Encabezado */}
        <motion.h2 
          className="mb-20 text-center text-3xl md:text-5xl font-serif font-bold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.heading}
        </motion.h2>

        {/* Grid de Fundadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">

          {/* --- EDGAR (Creativo) --- */}
          <FounderCard 
            id="edgar"
            name={t.edgar.name}
            title={t.edgar.title}
            desc={t.edgar.desc}
            points={t.edgar.points}
            theme="purple"
            icon={<Palette className="w-8 h-8 text-purple-400" />}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />

          {/* --- ABDIEL (Técnico) --- */}
          <FounderCard 
            id="abdiel"
            name={t.abdiel.name}
            title={t.abdiel.title}
            desc={t.abdiel.desc}
            points={t.abdiel.points}
            theme="cyan"
            icon={<Cpu className="w-8 h-8 text-cyan-400" />}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />

        </div>

        {/* --- MICROCOPY FOOTER --- */}
        <motion.div 
          className="mt-16 text-center border-t border-white/5 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-sm md:text-base text-slate-400 font-medium tracking-wide">
            {t.footer}
          </p>
        </motion.div>

      </div>
    </section>
  );
}

// --- SUBCOMPONENTE DE TARJETA ---
interface FounderCardProps {
  id: string;
  name: string;
  title: string;
  desc: string;
  points: string[];
  theme: 'purple' | 'cyan';
  icon: LucideIcon; // <--- Cambia ReactNode por LucideIcon
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
}

function FounderCard({ id, name, title, desc, points, theme, icon, hoveredCard, setHoveredCard }: FounderCardProps) {
  const isHovered = hoveredCard === id;
  const isDimmed = hoveredCard !== null && hoveredCard !== id;

  const borderColor = theme === 'purple' ? 'group-hover:border-purple-500/50' : 'group-hover:border-cyan-500/50';
  const glowColor = theme === 'purple' ? 'group-hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]' : 'group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]';
  const iconBg = theme === 'purple' ? 'bg-purple-500/10 text-purple-400' : 'bg-cyan-500/10 text-cyan-400';

  return (
    <motion.div 
      className={`group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 transition-all duration-500 ease-out ${borderColor} ${glowColor}`}
      initial={{ opacity: 0, x: id === 'edgar' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        opacity: isDimmed ? 0.4 : 1,
        scale: isDimmed ? 0.98 : 1,
        filter: isDimmed ? 'blur(2px)' : 'none',
        transform: isHovered ? 'translateY(-5px)' : 'none'
      }}
    >
      {/* Icono Flotante */}
      <div className={`mb-8 w-16 h-16 rounded-xl flex items-center justify-center ${iconBg} border border-white/5`}>
        {icon}
      </div>

      {/* Títulos */}
      <div className="mb-6">
        <h3 className="text-3xl font-serif font-bold text-white mb-2">
          {name}
        </h3>
        <p className={`text-sm font-bold uppercase tracking-widest ${theme === 'purple' ? 'text-purple-400' : 'text-cyan-400'}`}>
          {title}
        </p>
      </div>

      {/* Descripción */}
      <p className="text-gray-400 leading-relaxed mb-8 text-lg">
        {desc}
      </p>

      {/* Puntos Clave */}
      <ul className="space-y-4 mt-auto">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`mt-1 p-1 rounded-full ${theme === 'purple' ? 'bg-purple-500/20' : 'bg-cyan-500/20'}`}>
              <Check className={`w-3 h-3 ${theme === 'purple' ? 'text-purple-400' : 'text-cyan-400'}`} />
            </div>
            <span className="text-gray-300 text-sm font-medium">
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* Gradiente de fondo sutil al hover */}
      <div 
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${theme === 'purple' ? 'bg-gradient-to-br from-purple-600 to-transparent' : 'bg-gradient-to-bl from-cyan-600 to-transparent'}`} 
      />

    </motion.div>
  );
}