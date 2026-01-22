'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Workflow, Network, Layers, ArrowRight } from 'lucide-react';

// --- 1. DICCIONARIO DE CONTENIDO (Con clases de Glow Específicas) ---
const CONTENT = {
  es: {
    title_start: "Dejar de adivinar.",
    title_highlight: "Empezar a decidir.",
    desc: "En Acclaro Labs no hacemos parches. Diseñamos la base de medición e integración para que tu CRM, tu web y tus operaciones trabajen con la misma fuente de verdad: datos confiables, trazables y accionables.",
    cards: [
      {
        title: "1) Health Check (Diagnóstico)",
        body: "No suponemos dónde está el problema. Revisamos tu configuración y operación para identificar causas típicas de fuga: duplicados, campos incompletos y automatizaciones rotas.",
        icon: Activity,
        color: "text-rose-400",
        border: "border-t-rose-500",
        bgIcon: "bg-rose-500/10",
        // Glow rojo específico al hacer hover
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(244,63,94,0.3)] group-hover:border-t-rose-400"
      },
      {
        title: "2) Calidad de datos (Higiene)",
        body: "Limpiamos, estandarizamos y deduplicamos lo que realmente importa. Definimos reglas mínimas de captura para que los datos se mantengan útiles en el tiempo.",
        icon: Database,
        color: "text-blue-400",
        border: "border-t-blue-500",
        bgIcon: "bg-blue-500/10",
        // Glow azul
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] group-hover:border-t-blue-400"
      },
      {
        title: "3) Automatización (Flujos)",
        body: "Reducimos trabajo manual y errores con automatizaciones orientadas al proceso: routing, seguimiento y alertas. La prioridad es liberar tiempo y mejorar consistencia.",
        icon: Workflow,
        color: "text-emerald-400",
        border: "border-t-emerald-500",
        bgIcon: "bg-emerald-500/10",
        // Glow esmeralda
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] group-hover:border-t-emerald-400"
      },
      {
        title: "4) Integración del ecosistema",
        body: "Conectamos señales entre sistemas: CRM ↔ Web ↔ Marketing ↔ Soporte. Menos silos, más trazabilidad. Ventas y marketing operan con el mismo contexto.",
        icon: Network,
        color: "text-violet-400",
        border: "border-t-violet-500",
        bgIcon: "bg-violet-500/10",
        // Glow violeta
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] group-hover:border-t-violet-400"
      }
    ],
    footer: "Trabajamos sobre tu stack actual (Salesforce, HubSpot, ERP). La herramienta es secundaria; la medición y la ejecución son la prioridad."
  },
  en: {
    title_start: "Stop guessing.",
    title_highlight: "Start deciding.",
    desc: "At Acclaro Labs, we don't apply patches. We design the measurement and integration foundation so your CRM, web, and operations work with the same source of truth.",
    cards: [
      {
        title: "1) Health Check (Diagnosis)",
        body: "We don't guess the problem. We review your config and ops to identify leak causes: duplicates, incomplete fields, and broken automations.",
        icon: Activity,
        color: "text-rose-400",
        border: "border-t-rose-500",
        bgIcon: "bg-rose-500/10",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(244,63,94,0.3)] group-hover:border-t-rose-400"
      },
      {
        title: "2) Data Quality (Hygiene)",
        body: "We clean, standardize, and deduplicate what matters. We define minimal capture rules so data stays useful over time.",
        icon: Database,
        color: "text-blue-400",
        border: "border-t-blue-500",
        bgIcon: "bg-blue-500/10",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] group-hover:border-t-blue-400"
      },
      {
        title: "3) Automation (Flows)",
        body: "We reduce manual work and errors with process-oriented automation: routing, tracking, and alerts. Priority is freeing time and consistency.",
        icon: Workflow,
        color: "text-emerald-400",
        border: "border-t-emerald-500",
        bgIcon: "bg-emerald-500/10",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] group-hover:border-t-emerald-400"
      },
      {
        title: "4) Ecosystem Integration",
        body: "We connect signals between systems: CRM ↔ Web ↔ Marketing ↔ Support. Fewer silos, more traceability. Sales and marketing operate with the same context.",
        icon: Network,
        color: "text-violet-400",
        border: "border-t-violet-500",
        bgIcon: "bg-violet-500/10",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] group-hover:border-t-violet-400"
      }
    ],
    footer: "We work on your current stack (Salesforce, HubSpot, ERP). The tool is secondary; measurement and execution are the priority."
  },
  fr: {
    title_start: "Cessez de deviner.",
    title_highlight: "Commencez à décider.",
    desc: "Chez Acclaro Labs, pas de pansements. Nous concevons la base de mesure et d'intégration pour que votre CRM et vos opérations travaillent avec la même source de vérité.",
    cards: [
      {
        title: "1) Health Check (Diagnostic)",
        body: "Nous ne devinons pas. Nous révisons votre config pour identifier les fuites : doublons, champs incomplets et automatisations brisées.",
        icon: Activity,
        color: "text-rose-400",
        border: "border-t-rose-500",
        bgIcon: "bg-rose-500/10",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(244,63,94,0.3)] group-hover:border-t-rose-400"
      },
      {
        title: "2) Qualité des données (Hygiène)",
        body: "Nous nettoyons, standardisons et dédoublonnons. Nous définissons des règles de capture pour que les données restent utiles.",
        icon: Database,
        color: "text-blue-400",
        border: "border-t-blue-500",
        bgIcon: "bg-blue-500/10",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] group-hover:border-t-blue-400"
      },
      {
        title: "3) Automatisation (Flux)",
        body: "Nous réduisons le travail manuel avec des automatisations orientées processus : routage, suivi et alertes.",
        icon: Workflow,
        color: "text-emerald-400",
        border: "border-t-emerald-500",
        bgIcon: "bg-emerald-500/10",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] group-hover:border-t-emerald-400"
      },
      {
        title: "4) Intégration de l'écosystème",
        body: "Nous connectons les signaux : CRM ↔ Web ↔ Marketing. Moins de silos, plus de traçabilité.",
        icon: Network,
        color: "text-violet-400",
        border: "border-t-violet-500",
        bgIcon: "bg-violet-500/10",
        glow: "group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)] group-hover:border-t-violet-400"
      }
    ],
    footer: "Nous travaillons sur votre stack actuel. L'outil est secondaire ; la mesure et l'exécution sont la priorité."
  }
};

interface CrmSolutionProps {
  lang?: 'es' | 'en' | 'fr';
}

export default function CrmSolution({ lang = 'es' }: CrmSolutionProps) {
  const t = CONTENT[lang];

  return (
    <section className="relative py-24 px-6 bg-slate-950 border-b border-white/5 overflow-hidden">
      
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight"
          >
            {t.title_start} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-oro-antiguo italic">
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

        {/* --- GRID DE ARQUITECTURA (4 Pasos) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }} // Stagger Effect
                className={`
                  group relative p-8 bg-slate-900/40 border border-slate-800 rounded-xl hover:bg-slate-900 transition-all duration-500
                  border-t-4 ${card.border} ${card.glow}
                `}
              >
                {/* Header de Tarjeta */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg border border-white/5 transition-colors duration-300 ${card.bgIcon}`}>
                    <Icon className={`w-6 h-6 ${card.color}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                </div>
                
                {/* Cuerpo */}
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {card.body}
                </p>

                {/* Flecha sutil indicando flujo (solo en Desktop y no en la última) */}
                {index < 3 && (
                   <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-800 md:hidden">
                     <ArrowRight className="w-5 h-5 rotate-90" />
                   </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* --- FOOTER: AGNOSTIC PROMISE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-white/10 shadow-inner hover:border-white/20 transition-colors cursor-default">
            <Layers size={18} className="text-slate-500" />
            <span className="text-sm font-medium text-slate-400 text-center">
              {t.footer}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}