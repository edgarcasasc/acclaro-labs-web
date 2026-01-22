// src/components/informes/InformesSolution.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Zap, Settings, CheckCircle2, Layers } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Actualizado: Outcome-First) ---
const CONTENT = {
  es: {
    title: "De datos dispersos a decisiones accionables",
    desc: "No construimos dashboards por estética. Construimos una base de medición y activación para que tu operación y tu canal digital tomen mejores decisiones. Integramos tus sistemas y, cuando aporta valor, aplicamos automatización/IA para escalar.",
    objs: [
      { 
        title: "Objetivo 1: Reducir costo operativo", 
        text: "Convertimos gastos, nómina y logística en señales claras para detectar fugas y priorizar acciones.", 
        points: ["Control de OPEX (por área/proyecto)", "Cadena de suministro y variabilidad", "Optimización de recursos"] 
      },
      { 
        title: "Objetivo 2: Acelerar el embudo comercial", 
        text: "Conectamos CRM, marketing y analítica para entender qué genera pipeline real y qué frena el cierre.", 
        points: ["Velocidad del funnel (lead → cierre)", "Atribución y eficiencia (CAC, ROI)", "Automatización comercial (scoring, cross-sell)"] 
      },
      { 
        title: "Objetivo 3: Mejorar eficiencia operativa", 
        text: "Visibilidad para identificar cuellos de botella y reducir fricción en procesos críticos.", 
        points: ["Tiempos de ciclo y cumplimiento (SLA)", "Cuellos de botella y capacidad", "Alertas predictivas con IA"] 
      }
    ],
    footer: "Trabajamos con tu stack actual (BI, CRM y ERP). La herramienta es secundaria; el objetivo es medir y mejorar."
  },
  en: {
    title: "From scattered data to actionable decisions",
    desc: "We don't build dashboards for aesthetics. We build a measurement and activation foundation so your operation and digital channel make better decisions. We integrate your systems and, when valuable, apply automation/AI to scale.",
    objs: [
      { 
        title: "Objective 1: Reduce Operating Costs", 
        text: "We turn expenses, payroll, and logistics into clear signals to detect leaks and prioritize actions.", 
        points: ["OPEX Control (by area/project)", "Supply Chain & Variability", "Resource Optimization"] 
      },
      { 
        title: "Objective 2: Accelerate Commercial Funnel", 
        text: "We connect CRM, marketing, and analytics to understand what generates real pipeline and what stalls closing.", 
        points: ["Funnel Velocity (lead → close)", "Attribution & Efficiency (CAC, ROI)", "Commercial Automation (scoring, cross-sell)"] 
      },
      { 
        title: "Objective 3: Improve Operational Efficiency", 
        text: "Visibility to identify bottlenecks and reduce friction in critical processes.", 
        points: ["Cycle Times & Compliance (SLA)", "Bottlenecks & Capacity", "Predictive Alerts with AI"] 
      }
    ],
    footer: "We work with your current stack (BI, CRM, ERP). The tool is secondary; the goal is to measure and improve."
  },
  fr: {
    title: "De données dispersées à des décisions actionnables",
    desc: "Nous ne construisons pas de tableaux de bord pour l'esthétique. Nous construisons une base de mesure et d'activation. Nous intégrons vos systèmes et appliquons l'automatisation/IA pour passer à l'échelle.",
    objs: [
      { 
        title: "Objectif 1 : Réduire les coûts opérationnels", 
        text: "Nous transformons les dépenses et la logistique en signaux clairs pour détecter les fuites.", 
        points: ["Contrôle OPEX (par zone/projet)", "Chaîne d'approvisionnement", "Optimisation des ressources"] 
      },
      { 
        title: "Objectif 2 : Accélérer l'entonnoir commercial", 
        text: "Nous connectons CRM et marketing pour comprendre ce qui génère un vrai pipeline.", 
        points: ["Vitesse du funnel (lead → clôture)", "Attribution et efficacité (CAC, ROI)", "Automatisation commerciale"] 
      },
      { 
        title: "Objectif 3 : Améliorer l'efficacité opérationnelle", 
        text: "Visibilité pour identifier les goulots d'étranglement et réduire les frictions.", 
        points: ["Temps de cycle et conformité (SLA)", "Goulots d'étranglement", "Alertes prédictives avec IA"] 
      }
    ],
    footer: "Nous travaillons avec votre stack actuel. L'outil est secondaire ; l'objectif est de mesurer et d'améliorer."
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function InformesSolution({ lang = 'es' }: Props) {
  const t = CONTENT[lang];
  
  const icons = [
    <Wallet key="1" className="w-8 h-8 text-emerald-400" />,
    <Zap key="2" className="w-8 h-8 text-oro-antiguo" />,
    <Settings key="3" className="w-8 h-8 text-blue-400" />
  ];

  const glowColors = [
    "group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)] group-hover:border-emerald-500/50", // Emerald
    "group-hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)] group-hover:border-oro-antiguo/50",   // Gold
    "group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)] group-hover:border-blue-500/50"      // Blue
  ];

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden">
      
      {/* Fondo de rejilla técnica */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* HEADER */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold md:text-5xl text-white mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* GRID DE OBJETIVOS */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {t.objs.map((obj, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.15) }}
              className={`group relative rounded-2xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-500 ${glowColors[i]}`}
            >
              {/* Icono Header */}
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-slate-950 border border-white/5 shadow-inner">
                  {icons[i]}
                </div>
                <h3 className="font-bold text-xl text-white leading-tight">
                  {obj.title}
                </h3>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6" />

              <p className="mb-6 text-slate-400 text-sm leading-relaxed min-h-[60px]">
                {obj.text}
              </p>

              {/* Lista de Puntos */}
              <ul className="space-y-3">
                {obj.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-slate-500 mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FOOTER MICROCOPY */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900 border border-white/10 text-sm text-slate-400">
            <Layers size={16} className="text-oro-antiguo" />
            <span>{t.footer}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}