'use client';
import React from 'react';
import { Table2, Target, FileWarning, AlertTriangle, XCircle, SearchX } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // 1. Importa Variants

// --- DICCIONARIO DE CONTENIDO (Copy Aprobado: "La Realidad") ---
const CONTENT = {
  es: {
    label: "LA REALIDAD",
    title_start: "El dato más caro",
    title_end: "es el que ya tienes y no puedes activar.",
    desc: "Invertiste en licencias y herramientas. Pero en la operación diaria, la historia es otra:",
    cards: [
      {
        title: "Excel como parche",
        body: "Ventas y operaciones pierden horas limpiando hojas de cálculo porque no confían en los datos del CRM.",
        icon: Table2,
        color: "group-hover:text-rose-400",
        border: "group-hover:border-rose-500/30",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.2)]"
      },
      {
        title: "Marketing sin atribución",
        body: "Inviertes en campañas, pero no puedes conectar el gasto con ingresos reales. El ROI queda incompleto.",
        icon: Target,
        color: "group-hover:text-orange-400",
        border: "group-hover:border-orange-500/30",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.2)]"
      },
      {
        title: "Reportes sin trazabilidad",
        body: "Los dashboards muestran números, pero nadie puede explicar su origen. Terminas decidiendo por intuición.",
        icon: FileWarning,
        color: "group-hover:text-amber-400",
        border: "group-hover:border-amber-500/30",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)]"
      }
    ],
    footer_start: "No tienes un problema de software.",
    footer_end: "Tienes un problema de integración, trazabilidad y gobernanza."
  },
  en: {
    label: "THE REALITY",
    title_start: "The most expensive data",
    title_end: "is the one you have but can't activate.",
    desc: "You invested in licenses. But in daily operations, the story is different:",
    cards: [
      {
        title: "Excel as a patch",
        body: "Sales and ops waste hours cleaning spreadsheets because they don't trust CRM data.",
        icon: Table2,
        color: "group-hover:text-rose-400",
        border: "group-hover:border-rose-500/30",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.2)]"
      },
      {
        title: "Marketing without attribution",
        body: "You invest in campaigns but can't connect spend to real revenue. ROI remains incomplete.",
        icon: Target,
        color: "group-hover:text-orange-400",
        border: "group-hover:border-orange-500/30",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.2)]"
      },
      {
        title: "Untraceable reporting",
        body: "Dashboards show numbers, but no one can explain their source. You end up guessing.",
        icon: FileWarning,
        color: "group-hover:text-amber-400",
        border: "group-hover:border-amber-500/30",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)]"
      }
    ],
    footer_start: "You don't have a software problem.",
    footer_end: "You have an integration, traceability, and governance problem."
  },
  fr: {
    label: "LA RÉALITÉ",
    title_start: "La donnée la plus chère",
    title_end: "est celle que vous avez mais ne pouvez activer.",
    desc: "Vous avez investi dans des licences. Mais au quotidien, l'histoire est différente :",
    cards: [
      {
        title: "Excel comme pansement",
        body: "Les ventes perdent des heures sur des tableurs car ils ne font pas confiance au CRM.",
        icon: Table2,
        color: "group-hover:text-rose-400",
        border: "group-hover:border-rose-500/30",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.2)]"
      },
      {
        title: "Marketing sans attribution",
        body: "Vous investissez, mais ne pouvez lier la dépense aux revenus. Le ROI est incomplet.",
        icon: Target,
        color: "group-hover:text-orange-400",
        border: "group-hover:border-orange-500/30",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.2)]"
      },
      {
        title: "Rapports sans traçabilité",
        body: "Les tableaux montrent des chiffres dont personne ne connaît l'origine. Vous décidez à l'intuition.",
        icon: FileWarning,
        color: "group-hover:text-amber-400",
        border: "group-hover:border-amber-500/30",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)]"
      }
    ],
    footer_start: "Vous n'avez pas un problème de logiciel.",
    footer_end: "Vous avez un problème d'intégration et de gouvernance."
  }
};

interface Props { lang?: 'es' | 'en' | 'fr'; }

export default function CrmReality({ lang = 'es' }: Props) {
  const t = CONTENT[lang];

  // Variantes de animación para Stagger (Cascada)
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

 const itemVars: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" // Ahora TS sabe que este string es válido
    }
  }
} as const; // <--- Agrega esto aquí

  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden border-y border-white/5">
      
      {/* Fondo Ruido Sutil (Noise Texture) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Luz ambiental "Danger" (Roja/Naranja muy sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <AlertTriangle size={16} className="text-rose-500" />
            <span className="text-xs font-bold tracking-[0.2em] text-rose-500/80 uppercase">
              {t.label}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight"
          >
            <span className="text-slate-500">{t.title_start}</span> <br />
            <span className="text-white">{t.title_end}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 font-light"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* --- GRID DE FRICCIÓN (Problem Cards) --- */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {t.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVars}
                className={`group relative p-8 rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${card.border} ${card.glow}`}
              >
                {/* Icono Flotante */}
                <div className={`mb-6 p-4 rounded-xl bg-slate-950 border border-white/5 w-fit transition-colors duration-300 ${card.color}`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className={`text-xl font-bold mb-4 text-slate-200 transition-colors duration-300 group-hover:text-white`}>
                  {card.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {card.body}
                </p>

                {/* Línea de advertencia en hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- FOOTER: EL DIAGNÓSTICO --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="relative p-8 rounded-lg bg-slate-900 border-l-4 border-oro-antiguo shadow-2xl">
            {/* Comillas de fondo */}
            <div className="absolute -top-6 -left-4 text-6xl text-slate-800 font-serif opacity-50">“</div>
            
            <div className="relative z-10 text-center md:text-left">
              <p className="text-slate-500 font-mono text-sm uppercase tracking-wide mb-2">
                Diagnóstico
              </p>
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
                <span className="text-slate-500 line-through decoration-slate-700 decoration-2 mr-2">
                  {t.footer_start}
                </span>
                <span className="font-bold text-white block md:inline mt-2 md:mt-0">
                  {t.footer_end}
                </span>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}