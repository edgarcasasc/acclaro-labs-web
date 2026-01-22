'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Unplug, RefreshCw, AlertOctagon } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Versión Recomendada: Premium/Medible) ---
const CONTENT = {
  es: {
    title_start: "La estética sin estrategia",
    title_highlight: "no convierte.",
    desc: "El mercado está lleno de sitios 'bonitos' que no mueven negocio. Tu web no debería ser una isla: debe ser una experiencia rápida, medible y conectada a tu operación.",
    cards: [
      {
        title: "Performance",
        body: "Si tu web carga lento, pierdes antes de explicar valor. Cada segundo extra incrementa el abandono y reduce conversiones. Optimizamos velocidad y estabilidad.",
        icon: Gauge,
        color: "text-emerald-400",
        border: "group-hover:border-emerald-500/50",
        bgIcon: "bg-emerald-500/10",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]"
      },
      {
        title: "Integración",
        body: "Si tus leads no llegan al CRM con contexto, pierdes oportunidades. Conectamos formularios y eventos con tu CRM/ERP para atribuir, segmentar y accionar.",
        icon: Unplug, // Usamos Unplug para denotar la "conexión" necesaria (o Network)
        color: "text-blue-400",
        border: "group-hover:border-blue-500/50",
        bgIcon: "bg-blue-500/10",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
      },
      {
        title: "Agilidad",
        body: "Si cada cambio requiere semanas, tu marketing pierde ritmo. Diseñamos un delivery que permite iterar rápido: componentes, contenido gobernable y flujo ágil.",
        icon: RefreshCw,
        color: "text-amber-400",
        border: "group-hover:border-amber-500/50",
        bgIcon: "bg-amber-500/10",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]"
      }
    ],
    footer: "En Delivery Web & Product entregamos performance, medición e integración para que cada iteración se traduzca en impacto."
  },
  en: {
    title_start: "Aesthetics without strategy",
    title_highlight: "don't convert.",
    desc: "The market is full of 'pretty' sites that don't drive business. Your web shouldn't be an island: it must be fast, measurable, and connected to your operation.",
    cards: [
      {
        title: "Performance",
        body: "If your site loads slow, you lose before explaining value. Every extra second increases drop-off. We optimize speed and stability.",
        icon: Gauge,
        color: "text-emerald-400",
        border: "group-hover:border-emerald-500/50",
        bgIcon: "bg-emerald-500/10",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]"
      },
      {
        title: "Integration",
        body: "If leads don't hit your CRM with context, you lose opportunities. We connect forms and events to your CRM/ERP to attribute and segment.",
        icon: Unplug,
        color: "text-blue-400",
        border: "group-hover:border-blue-500/50",
        bgIcon: "bg-blue-500/10",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
      },
      {
        title: "Agility",
        body: "If every change takes weeks, marketing loses rhythm. We design a delivery model that allows fast iteration: components and governable content.",
        icon: RefreshCw,
        color: "text-amber-400",
        border: "group-hover:border-amber-500/50",
        bgIcon: "bg-amber-500/10",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]"
      }
    ],
    footer: "In Web & Product Delivery, we provide performance, measurement, and integration so every iteration translates into impact."
  },
  fr: {
    title_start: "L'esthétique sans stratégie",
    title_highlight: "ne convertit pas.",
    desc: "Le marché est plein de 'jolis' sites qui ne vendent pas. Votre web ne doit pas être une île : il doit être rapide, mesurable et connecté.",
    cards: [
      {
        title: "Performance",
        body: "Si ça charge lentement, vous perdez. Chaque seconde augmente l'abandon. Nous optimisons vitesse et stabilité.",
        icon: Gauge,
        color: "text-emerald-400",
        border: "group-hover:border-emerald-500/50",
        bgIcon: "bg-emerald-500/10",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]"
      },
      {
        title: "Intégration",
        body: "Si les leads n'arrivent pas au CRM avec le contexte, vous perdez des opportunités. Nous connectons formulaires et événements pour attribuer.",
        icon: Unplug,
        color: "text-blue-400",
        border: "group-hover:border-blue-500/50",
        bgIcon: "bg-blue-500/10",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
      },
      {
        title: "Agilité",
        body: "Si chaque changement prend des semaines, le marketing ralentit. Nous concevons un delivery modulaire pour itérer rapidement.",
        icon: RefreshCw,
        color: "text-amber-400",
        border: "group-hover:border-amber-500/50",
        bgIcon: "bg-amber-500/10",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]"
      }
    ],
    footer: "Dans le Delivery Web & Produit, nous livrons performance, mesure et intégration pour que chaque itération ait un impact."
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function WebDevProblem({ lang = 'es' }: Props) {
  const t = CONTENT[lang];

  return (
    <section className="relative py-24 px-6 bg-slate-950 border-y border-white/5 overflow-hidden">
      
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <AlertOctagon size={16} className="text-rose-500" />
            <span className="text-xs font-bold tracking-[0.2em] text-rose-500/80 uppercase">
              Diagnóstico
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight"
          >
            {t.title_start} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 underline decoration-rose-500/30 decoration-4 underline-offset-4">
              {t.title_highlight}
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed font-light"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* --- GRID DE 3 PILARES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className={`
                  group relative p-8 bg-slate-900/40 border border-slate-800 rounded-xl hover:bg-slate-900 transition-all duration-500
                  ${card.border} ${card.glow} hover:-translate-y-1
                `}
              >
                {/* Header de Tarjeta */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-lg border border-white/5 transition-colors duration-300 ${card.bgIcon}`}>
                    <Icon className={`w-8 h-8 ${card.color}`} strokeWidth={1.5} />
                  </div>
                  {/* Visual Cue (Score simulado) */}
                  <div className="text-[10px] font-mono text-slate-600 bg-slate-950 border border-slate-800 px-2 py-1 rounded">
                    {index === 0 ? 'Score: 98' : (index === 1 ? 'API: OK' : 'Sprints: 2w')}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors mb-3">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* --- FOOTER PUENTE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center italic text-slate-500 text-sm max-w-2xl mx-auto"
        >
          "{t.footer}"
        </motion.div>

      </div>
    </section>
  );
}