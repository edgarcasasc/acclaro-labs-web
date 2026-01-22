'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Target, Zap } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Copy Estratégico) ---
const CONTENT = {
  es: {
    title_start: "No solo integramos.",
    title_end: "Activamos.",
    desc: "No vendemos licencias de software. Diseñamos e implementamos soluciones para mejorar conversión, eficiencia y toma de decisiones.",
    cards: [
      {
        title: "Agnósticos de plataforma",
        body: "Trabajamos sobre tu stack actual. Integramos CRM, ERP, soporte y analytics sin obligarte a migrar herramientas."
      },
      {
        title: "IA aplicada y accionable",
        body: "No nos quedamos en el “qué pasó”. Aplicamos IA y automatización para anticipar riesgos, priorizar acciones y acelerar decisiones."
      },
      {
        title: "Enfoque en negocio",
        body: "No necesitas “un dashboard”. Necesitas reducir fricción o bajar costos. Partimos del objetivo y definimos qué medir y qué cambiar."
      },
      {
        title: "Entrega por etapas",
        body: "Demostramos valor rápido con un Sprint: diagnóstico, instrumentación mínima y una primera entrega funcional (2–4 semanas)."
      }
    ]
  },
  en: {
    title_start: "We don't just integrate.",
    title_end: "We activate.",
    desc: "We don't sell software licenses. We design and implement solutions to improve conversion, efficiency, and decision-making.",
    cards: [
      {
        title: "Platform Agnostic",
        body: "We work on your current stack. We integrate CRM, ERP, support, and analytics without forcing you to migrate tools."
      },
      {
        title: "Applied & Actionable AI",
        body: "We don't stop at 'what happened.' We apply AI and automation to anticipate risks, prioritize actions, and accelerate decisions."
      },
      {
        title: "Business Focus",
        body: "You don't need 'a dashboard.' You need to reduce friction or cut costs. We start with the goal and define what to measure."
      },
      {
        title: "Phased Delivery",
        body: "We demonstrate value fast with a Sprint: diagnosis, minimal instrumentation, and a first functional delivery (2–4 weeks)."
      }
    ]
  },
  fr: {
    title_start: "Nous n'intégrons pas seulement.",
    title_end: "Nous activons.",
    desc: "Nous ne vendons pas de licences. Nous concevons des solutions pour améliorer la conversion, l'efficacité et la prise de décision.",
    cards: [
      {
        title: "Agnostiques de plateforme",
        body: "Nous travaillons sur votre stack actuel. Nous intégrons CRM, ERP et analytics sans vous obliger à migrer."
      },
      {
        title: "IA appliquée et actionnable",
        body: "Nous appliquons l'IA et l'automatisation pour anticiper les risques, prioriser les actions et accélérer les décisions."
      },
      {
        title: "Focus Business",
        body: "Vous n'avez pas besoin d'un « tableau de bord », mais de résultats. Nous partons de l'objectif pour définir quoi mesurer."
      },
      {
        title: "Livraison par étapes",
        body: "Valeur rapide avec un Sprint : diagnostic, instrumentation minimale et une première livraison fonctionnelle (2–4 semaines)."
      }
    ]
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function InformesMethodology({ lang = 'es' }: Props) {
  const t = CONTENT[lang];

  // Configuración visual de cada tarjeta (Icono + Colores)
  const cardStyles = [
    { 
      icon: Layers, 
      color: "text-sky-400", 
      border: "group-hover:border-sky-500/50", 
      bgIcon: "bg-sky-500/10",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)]"
    },
    { 
      icon: Sparkles, 
      color: "text-purple-400", 
      border: "group-hover:border-purple-500/50", 
      bgIcon: "bg-purple-500/10",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
    },
    { 
      icon: Target, 
      color: "text-emerald-400", 
      border: "group-hover:border-emerald-500/50", 
      bgIcon: "bg-emerald-500/10",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]"
    },
    { 
      icon: Zap, 
      color: "text-amber-400", 
      border: "group-hover:border-amber-500/50", 
      bgIcon: "bg-amber-500/10",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]"
    }
  ];

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden">
      
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif text-white mb-6"
          >
            {t.title_start} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-oro-antiguo to-amber-300 drop-shadow-sm">
              {t.title_end}
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed font-light"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* GRID 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.cards.map((card, i) => {
            const Style = cardStyles[i];
            const Icon = Style.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className={`group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all duration-500 ${Style.border} ${Style.glow} hover:-translate-y-1`}
              >
                <div className="flex items-start gap-5">
                  {/* Icono con fondo coloreado */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 ${Style.bgIcon} ${Style.color}`}>
                    <Icon strokeWidth={1.5} size={24} />
                  </div>
                  
                  <div>
                    <h3 className={`text-xl font-bold mb-3 text-white group-hover:text-white transition-colors`}>
                      {card.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {card.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}