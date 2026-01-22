'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Search, LineChart, Cpu, CheckCircle2 } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Metodología Científica) ---
const CONTENT = {
  es: {
    label: "NUESTRA METODOLOGÍA",
    title_start: "Psicología aplicada al pixel",
    title_end: "(con evidencia).",
    desc: "No operamos como una agencia creativa tradicional. Diseñamos y optimizamos experiencias digitales con investigación, analítica y experimentación para reducir fricción y aumentar claridad en la decisión.",
    grid: [
      {
        title: "1) UX/UI orientado a conversión",
        body: "Diseñamos flujos y pantallas que minimizan duda y esfuerzo: jerarquía, mensajes, CTAs y arquitectura de información. Medimos comportamiento y ajustamos con iteraciones.",
        color: "text-blue-400"
      },
      {
        title: "2) Contenido con intención",
        body: "No publicamos por volumen. Creamos piezas que responden preguntas reales y resuelven objeciones, alineadas al funnel. SEO como distribución; claridad como conversión.",
        color: "text-purple-400"
      },
      {
        title: "3) Analítica e instrumentación",
        body: "Sin medición confiable, todo es opinión. Definimos eventos, tracking y señales críticas para atribuir, priorizar y demostrar impacto (conversiones, velocidad del funnel).",
        color: "text-emerald-400"
      },
      {
        title: "4) IA y automatización",
        body: "Usamos IA para acelerar análisis, detectar patrones y automatizar tareas cuando aporta valor. La dirección estratégica y el criterio de negocio siguen siendo humanos.",
        color: "text-amber-400"
      }
    ],
    footer: "Estrategias validadas por datos, no por opiniones. Convertimos visitas en decisiones medibles."
  },
  en: {
    label: "OUR METHODOLOGY",
    title_start: "Psychology applied to the pixel",
    title_end: "(with evidence).",
    desc: "We don't operate like a traditional creative agency. We design and optimize digital experiences with research, analytics, and experimentation to reduce friction and increase decision clarity.",
    grid: [
      {
        title: "1) Conversion-Oriented UX/UI",
        body: "We design flows and screens that minimize doubt and effort: hierarchy, messaging, CTAs, and information architecture. We measure behavior and adjust with iterations.",
        color: "text-blue-400"
      },
      {
        title: "2) Content with Intent",
        body: "We don't publish for volume. We create pieces that answer real questions and resolve objections, aligned to the funnel. SEO as distribution; clarity as conversion.",
        color: "text-purple-400"
      },
      {
        title: "3) Analytics & Instrumentation",
        body: "Without reliable measurement, everything is opinion. We define events, tracking, and critical signals to attribute, prioritize, and demonstrate impact.",
        color: "text-emerald-400"
      },
      {
        title: "4) AI & Automation",
        body: "We use AI to accelerate analysis, detect patterns, and automate tasks when it adds value. Strategic direction and business criteria remain human.",
        color: "text-amber-400"
      }
    ],
    footer: "Strategies validated by data, not opinions. We turn visits into measurable decisions."
  },
  fr: {
    label: "NOTRE MÉTHODOLOGIE",
    title_start: "La psychologie appliquée au pixel",
    title_end: "(avec des preuves).",
    desc: "Nous ne fonctionnons pas comme une agence créative traditionnelle. Nous concevons et optimisons des expériences numériques avec recherche, analytique et expérimentation pour réduire les frictions.",
    grid: [
      {
        title: "1) UX/UI orientée conversion",
        body: "Nous concevons des flux et des écrans qui minimisent le doute et l'effort : hiérarchie, messages, CTA et architecture de l'information.",
        color: "text-blue-400"
      },
      {
        title: "2) Contenu avec intention",
        body: "Nous ne publions pas pour le volume. Nous créons des pièces qui répondent à de vraies questions et résolvent les objections, alignées sur l'entonnoir.",
        color: "text-purple-400"
      },
      {
        title: "3) Analytique et instrumentation",
        body: "Sans mesure fiable, tout n'est qu'opinion. Nous définissons les événements, le suivi et les signaux critiques pour attribuer, prioriser et démontrer l'impact.",
        color: "text-emerald-400"
      },
      {
        title: "4) IA et automatisation",
        body: "Nous utilisons l'IA pour accélérer l'analyse, détecter des modèles et automatiser les tâches lorsqu'elle apporte de la valeur.",
        color: "text-amber-400"
      }
    ],
    footer: "Stratégies validées par des données, pas des opinions. Nous transformons les visites en décisions mesurables."
  }
};

interface ContentSolutionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function ContentSolution({ lang = 'es' }: ContentSolutionProps) {
  const t = CONTENT[lang];
  
  // Iconos por cuadrante
  const icons = [
    <MousePointerClick key={1} className="w-6 h-6" />,
    <Search key={2} className="w-6 h-6" />,
    <LineChart key={3} className="w-6 h-6" />,
    <Cpu key={4} className="w-6 h-6" />
  ];

  return (
    <section className="relative py-24 px-6 bg-slate-950 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <span className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">
            {t.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">
            {t.title_start} <br />
            <span className="text-emerald-400 italic font-sans font-light">
              {t.title_end}
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* --- GRID 2x2 TIPO MATRIZ --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-800 rounded-lg overflow-hidden bg-slate-900/20 backdrop-blur-sm">
          {t.grid.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group relative p-8 border-slate-800 hover:bg-slate-900/60 transition-colors duration-300
                ${index === 0 ? 'border-b md:border-r' : ''}
                ${index === 1 ? 'border-b' : ''}
                ${index === 2 ? 'md:border-r' : ''}
                ${index === 3 ? '' : ''}
                ${/* Borde inferior en móvil para todos menos el último */ ''}
                ${index < 3 ? 'max-md:border-b' : ''}
              `}
            >
              <div className={`mb-4 inline-flex p-3 rounded-lg bg-slate-950 border border-slate-800 ${item.color}`}>
                {icons[index]}
              </div>
              <h3 className={`text-xl font-bold mb-3 text-slate-200 group-hover:text-white transition-colors`}>
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER INTEGRACIÓN --- */}
        <div className="mt-8 flex items-center justify-center p-4 rounded-lg bg-emerald-900/10 border border-emerald-500/20 text-center">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
          <p className="text-sm font-medium text-emerald-100/80">
            {t.footer}
          </p>
        </div>

      </div>
    </section>
  );
}